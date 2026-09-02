#!/usr/bin/env node
/**
 * Auto-generate sitemap.xml for peptexa.com
 *
 * Scans the site's HTML files and regenerates sitemap.xml so new content
 * (new blog posts, new compound/category pages) is included automatically.
 *
 * Usage:  node generate-sitemap.js
 * Runs automatically on every Vercel deploy via the "build" step (see vercel.json).
 *
 * Rules:
 *   - Base URL is the canonical non-www domain (https://peptexa.com)
 *   - Priority / changefreq assigned per section
 *   - lastmod comes from each file's git-tracked mtime (falls back to file mtime)
 *   - Internal/utility pages are excluded (see EXCLUDE)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const BASE = 'https://peptexa.com';

// Files/dirs never included in the sitemap (internal builders, dev docs)
const EXCLUDE = new Set([
  'build_pets_pdf.html',
  'peptexa-email-map.html',
  '404.html',
  'generate-sitemap.js',
]);
const EXCLUDE_DIRS = new Set(['node_modules', '.git', '.vercel', 'images', 'assets']);

// Per-section config. First match wins (checked in order).
const RULES = [
  { test: (u) => u === '/',                       priority: '1.0', changefreq: 'weekly'  },
  { test: (u) => u === '/blog/',                  priority: '0.7', changefreq: 'weekly'  },
  { test: (u) => u === '/categories/',            priority: '0.7', changefreq: 'monthly' },
  { test: (u) => u.startsWith('/peptides/'),      priority: '0.9', changefreq: 'monthly' },
  { test: (u) => u.startsWith('/categories/'),    priority: '0.8', changefreq: 'monthly' },
  { test: (u) => u.startsWith('/blog/'),          priority: '0.7', changefreq: 'monthly' },
  { test: (u) => u === '/peptide-quiz.html',      priority: '0.8', changefreq: 'monthly' },
  // legal / static
  { test: (u) => /(disclaimer|privacy|terms|about|contact)\.html$/.test(u), priority: '0.2', changefreq: 'yearly' },
  // default
  { test: () => true,                             priority: '0.5', changefreq: 'monthly' },
];

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), acc);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      acc.push(path.join(dir, entry.name));
    }
  }
  return acc;
}

// Map a file path to its public URL path (index.html -> dir/)
function toUrlPath(absFile) {
  let rel = path.relative(ROOT, absFile).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -('index.html'.length));
  return '/' + rel;
}

function lastmod(absFile) {
  try {
    const iso = execSync(`git log -1 --format=%cs -- "${absFile}"`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim();
    if (iso) return iso;
  } catch (_) { /* not tracked yet */ }
  return fs.statSync(absFile).mtime.toISOString().slice(0, 10);
}

function ruleFor(urlPath) {
  return RULES.find((r) => r.test(urlPath));
}

function build() {
  const files = walk(ROOT).filter((f) => {
    const rel = path.relative(ROOT, f).split(path.sep).join('/');
    const baseName = path.basename(rel);
    if (EXCLUDE.has(baseName) || EXCLUDE.has(rel)) return false;
    return true;
  });

  const entries = files.map((f) => {
    const urlPath = toUrlPath(f);
    const r = ruleFor(urlPath);
    return {
      loc: BASE + urlPath,
      lastmod: lastmod(f),
      changefreq: r.changefreq,
      priority: r.priority,
      urlPath,
    };
  });

  // Sort: homepage first, then by descending priority, then alpha
  entries.sort((a, b) => {
    if (a.urlPath === '/') return -1;
    if (b.urlPath === '/') return 1;
    if (b.priority !== a.priority) return parseFloat(b.priority) - parseFloat(a.priority);
    return a.loc.localeCompare(b.loc);
  });

  const body = entries.map((e) =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log(`sitemap.xml generated: ${entries.length} URLs`);
}

build();
