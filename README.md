# 🧬 Peptexa - Science-Backed Peptide Education Platform

![Peptexa Logo](images/peptexa-logo.png)

**Live Website:** peptexa.com *(coming soon)*

A modern, conversion-optimized website for selling peptide education guides and building an email list of health optimization enthusiasts.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment Guide](#deployment-guide)
- [Integration Checklist](#integration-checklist)
- [Customization Guide](#customization-guide)
- [SEO & Analytics](#seo--analytics)
- [Support](#support)

---

## 🎯 Project Overview

Peptexa is a premium peptide education platform offering:
- **Free Lead Magnet:** "Top 5 Peptides for Beginners" guide
- **Premium Guides:** $24-$34 comprehensive deep-dive guides
- **Email Marketing:** ConvertKit integration for nurture sequences
- **E-commerce:** Gumroad integration for instant digital product sales

**Target Audience:** Health-conscious individuals interested in peptides for weight loss, cognitive enhancement, longevity, and performance optimization.

---

## ✨ Features

### 🏠 Homepage
- **Hero Section:** Compelling headline with dual CTA (free guide + premium guides)
- **Trust Indicators:** Research-backed, safety-first, community insights
- **Why Peptexa:** 4 value propositions with icons
- **Free Guide Section:** Email capture form for lead generation
- **Premium Guides:** 5 category-specific guides with pricing and Gumroad checkout
- **Professional Footer:** Legal pages, medical disclaimer, copyright

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all devices (mobile, tablet, desktop)
- Touch-friendly navigation and CTAs

### 🎨 Brand Identity
- **Colors:** 
  - Primary Teal: `#2C7A7B`
  - Accent Orange: `#F59E0B`
  - Neutral Grays for text
- **Typography:** Inter font family (modern, readable)
- **Custom Logo:** Molecular structure theme

### 🔒 Legal Compliance
- Privacy Policy page
- Terms of Service page
- Medical disclaimers throughout
- GDPR/privacy-conscious design

### 📊 Conversion Optimization
- Strategic CTA placement
- Social proof and trust signals
- Clear value propositions
- Urgency indicators ("MOST POPULAR" badge)
- Friction-free checkout process

---

## 🛠 Tech Stack

- **HTML5:** Semantic, accessible markup
- **CSS3:** Modern flexbox/grid layouts, animations
- **JavaScript (Vanilla):** No framework dependencies
- **Font Awesome:** Icons
- **Google Fonts:** Inter typography
- **ConvertKit:** Email marketing (to be integrated)
- **Gumroad:** Payment processing and product delivery
- **Vercel:** Hosting and deployment (recommended)

---

## 📁 Project Structure

```
peptexa/
├── index.html              # Homepage
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Service
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   └── peptexa-logo.png    # Brand logo
└── README.md               # This file
```

---

## 🚀 Setup Instructions

### Prerequisites
- Domain registered at GoDaddy (peptexa.com)
- ConvertKit account (or alternative email service)
- Gumroad account
- Git installed on your computer
- Vercel account (free)

### Local Development

1. **Download/Clone the project:**
   ```bash
   # If using git
   git clone <repository-url>
   cd peptexa
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser to preview locally.

3. **Test all pages:**
   - Homepage: `index.html`
   - Privacy Policy: `privacy.html`
   - Terms of Service: `terms.html`
   - Contact: `contact.html`

---

## 🌐 Deployment Guide

### Step 1: Deploy to Vercel (Recommended - FREE)

**Why Vercel?**
- Free hosting for static sites
- Lightning-fast CDN
- Automatic HTTPS
- Git integration
- Zero configuration

**Deployment Steps:**

1. **Create Vercel Account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy Project:**
   
   **Option A: Using Vercel CLI**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Navigate to project folder
   cd peptexa
   
   # Deploy
   vercel
   
   # Follow prompts (use default settings)
   ```

   **Option B: Using Vercel Dashboard**
   - Click "New Project"
   - Import your project folder or Git repository
   - Click "Deploy"
   - Done! 🎉

3. **Get Deployment URL:**
   - Vercel will give you a URL like: `peptexa.vercel.app`
   - Use this for testing before connecting your domain

### Step 2: Connect Domain (peptexa.com)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter `peptexa.com`
   - Vercel will show you DNS records to add

2. **In GoDaddy Dashboard:**
   - Go to DNS Management for peptexa.com
   - Add the DNS records provided by Vercel:
     - **A Record:** Point to Vercel IP
     - **CNAME Record:** Point to Vercel server
   
   **Example Records:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for Propagation:**
   - DNS changes take 15 minutes to 48 hours
   - Usually works within 1-2 hours
   - Test at [whatsmydns.net](https://www.whatsmydns.net)

4. **Verify:**
   - Visit `peptexa.com` and `www.peptexa.com`
   - Should show your live website with HTTPS 🔒

---

## ✅ Integration Checklist

### 1. ConvertKit Email Capture (REQUIRED)

**Current Status:** Placeholder form in place

**Action Items:**
- [ ] Create ConvertKit account at [convertkit.com](https://convertkit.com)
- [ ] Create a new form in ConvertKit
- [ ] Customize form fields (Name + Email)
- [ ] Get embed code from ConvertKit
- [ ] Replace placeholder in `index.html` (line ~122):
  ```html
  <!-- Replace this entire div -->
  <div id="convertkit-form-container">
    <!-- PASTE CONVERTKIT EMBED CODE HERE -->
  </div>
  ```
- [ ] Create automated email sequence to deliver free guide
- [ ] Test form submission

**Alternative Services:**
- Mailchimp
- Beehiiv
- EmailOctopus

---

### 2. Gumroad Product Setup (REQUIRED)

**Current Status:** Placeholder links in JavaScript

**Action Items:**
- [ ] Create Gumroad account at [gumroad.com](https://gumroad.com)
- [ ] Create 5 products:
  1. **Weight Loss Peptides** - $29
  2. **Cognitive Enhancement** - $34
  3. **Health & Longevity** - $29
  4. **Performance & Energy** - $29
  5. **Immune Support** - $24
- [ ] Upload guide PDFs to each product
- [ ] Write compelling product descriptions
- [ ] Copy product URLs from Gumroad
- [ ] Update `js/main.js` (lines 88-94):
  ```javascript
  const gumroadLinks = {
    'weight-loss': 'YOUR_ACTUAL_GUMROAD_URL_HERE',
    'cognitive': 'YOUR_ACTUAL_GUMROAD_URL_HERE',
    'longevity': 'YOUR_ACTUAL_GUMROAD_URL_HERE',
    'performance': 'YOUR_ACTUAL_GUMROAD_URL_HERE',
    'immune': 'YOUR_ACTUAL_GUMROAD_URL_HERE'
  };
  ```
- [ ] Test checkout process for each guide

---

### 3. Contact Form Integration (OPTIONAL)

**Current Status:** Frontend form only (no backend)

**Action Items:**
- [ ] Choose email service:
  - **Formspree:** Easiest (free tier available)
  - **EmailJS:** Client-side only
  - **Custom backend:** Most flexible
- [ ] Update `contact.html` form submission handler
- [ ] Test form submissions

**Formspree Example:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your form fields -->
</form>
```

---

### 4. Google Analytics (OPTIONAL)

**Action Items:**
- [ ] Create Google Analytics 4 property
- [ ] Get tracking code
- [ ] Add to `<head>` of all HTML files:
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```
- [ ] Uncomment tracking code in `js/main.js` (lines 193-197)

---

### 5. Social Media & SEO (RECOMMENDED)

**Action Items:**
- [ ] Add Open Graph meta tags for social sharing
- [ ] Create favicon (16x16, 32x32, 180x180 PNG)
- [ ] Add `robots.txt` file
- [ ] Add `sitemap.xml` file
- [ ] Submit to Google Search Console
- [ ] Create social media profiles (Instagram, Twitter/X, YouTube)

---

## 🎨 Customization Guide

### Change Brand Colors

Edit `css/style.css` (lines 8-11):
```css
:root {
    --primary-teal: #2C7A7B;        /* Main brand color */
    --accent-orange: #F59E0B;        /* CTA buttons */
    /* Update these hex codes to your colors */
}
```

### Update Logo

Replace `images/peptexa-logo.png` with your logo file. Recommended dimensions:
- Width: 200-300px
- Format: PNG with transparent background
- Height: Proportional (typically 50-80px displayed)

### Modify Guide Pricing

Edit `index.html` guide cards:
1. Find the guide card (search for guide name)
2. Update the price in the `<span class="price">` tag
3. Update Gumroad product pricing to match

### Add New Guides

1. Copy existing guide card HTML in `index.html`
2. Modify icon, title, description, features, price
3. Add new Gumroad link to `js/main.js`
4. Test functionality

---

## 📈 SEO & Analytics

### Current SEO Implementation

✅ Semantic HTML structure  
✅ Meta descriptions  
✅ Mobile-responsive  
✅ Fast loading speed  
✅ HTTPS (via Vercel)  
✅ Clean URLs  
✅ Alt text for images  

### Recommended Next Steps

- [ ] Add schema.org markup for products
- [ ] Create blog section for content marketing
- [ ] Build backlinks from health/peptide communities
- [ ] YouTube content strategy
- [ ] Reddit/forum engagement
- [ ] Guest posts on health optimization sites

### Conversion Tracking

Once Google Analytics is integrated, track:
- Free guide downloads (goal/event)
- Premium guide purchases (e-commerce)
- Email signups
- Bounce rate and time on page
- Traffic sources

---

## 📊 Current Website Status

### ✅ Completed Features
- [x] Full responsive design
- [x] Homepage with all sections
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Contact page
- [x] Mobile menu functionality
- [x] Smooth scrolling navigation
- [x] Form validation
- [x] Professional branding
- [x] Legal compliance

### 🔄 Pending Integrations
- [ ] ConvertKit email capture
- [ ] Gumroad product links
- [ ] Contact form backend
- [ ] Google Analytics
- [ ] Domain DNS connection

### 🚀 Recommended Next Steps
1. **TODAY:** Deploy to Vercel and connect domain
2. **TODAY:** Setup ConvertKit and integrate form
3. **TODAY:** Create Gumroad products and update links
4. **THIS WEEK:** Add Google Analytics
5. **THIS WEEK:** Setup contact form backend
6. **ONGOING:** Create premium guide content
7. **ONGOING:** Build email marketing sequences

---

## 🛟 Support & Resources

### Technical Support
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **ConvertKit Help:** [help.convertkit.com](https://help.convertkit.com)
- **Gumroad Support:** [help.gumroad.com](https://help.gumroad.com)

### Website Files
All files are included in this project folder. No external dependencies beyond CDN links for fonts and icons.

### Questions?
If you need help with setup or customization, check the integration instructions in the code comments or reach out for support.

---

## 📝 Final Notes

**This website is production-ready and built for conversion.** All you need to do is:
1. Deploy to Vercel (10 minutes)
2. Connect your domain (15 minutes)
3. Integrate ConvertKit (30 minutes)
4. Setup Gumroad products (1 hour)

**Total time to launch: ~2-3 hours** 🚀

Your peptide education empire starts now. Let's go! 💪

---

**Built with ❤️ for Angela Spain**  
**Last Updated:** February 1, 2026

---

## 🎯 Quick Start Commands

```bash
# Local preview (if using Python)
python -m http.server 8000
# Then visit: http://localhost:8000

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

**Live Site:** peptexa.com *(once DNS is connected)*  
**Staging Site:** peptexa.vercel.app *(Vercel preview)*

---

**🔥 YOU'VE GOT THIS, ANGELA. TIME TO DISRUPT THE STATUS QUO. 🔥**