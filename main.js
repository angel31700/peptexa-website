// ===========================
// Peptexa - Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ===========================
    // Smooth Scrolling
    // ===========================
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '#disclaimer') {
                if (href === '#disclaimer') {
                    e.preventDefault();
                    alert('Medical Disclaimer: The information provided on this website is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional before starting any peptide protocol or making changes to your health regimen.');
                }
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===========================
    // Free Guide Form Handling
    // ===========================
    const freeGuideForm = document.getElementById('free-guide-form');
    
    if (freeGuideForm) {
        freeGuideForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            
            // Basic validation
            if (!name || !email) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // TODO: Replace this with ConvertKit integration
            console.log('Form submitted:', { name, email });
            
            // Show success message
            alert(`Thank you ${name}! Check your email (${email}) for your free guide.`);
            
            // Reset form
            this.reset();
            
            // NOTE TO ANGELA: 
            // Replace this entire form handling with your ConvertKit embed code.
            // ConvertKit will handle the form submission and email delivery automatically.
        });
    }
    
    // ===========================
    // Premium Guide Buttons - Gumroad Integration
    // ===========================
    const guideButtons = document.querySelectorAll('[data-guide]');
    
    // Gumroad product links - UPDATE THESE WITH YOUR ACTUAL GUMROAD LINKS
    const gumroadLinks = {
        'weight-loss': 'https://gumroad.com/l/peptexa-weight-loss',
        'cognitive': 'https://gumroad.com/l/peptexa-cognitive',
        'longevity': 'https://gumroad.com/l/peptexa-longevity',
        'performance': 'https://gumroad.com/l/peptexa-performance',
        'immune': 'https://gumroad.com/l/peptexa-immune'
    };
    
    guideButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const guideType = this.getAttribute('data-guide');
            const gumroadUrl = gumroadLinks[guideType];
            
            if (gumroadUrl) {
                // Open Gumroad overlay or redirect
                window.open(gumroadUrl, '_blank');
            } else {
                alert('This guide is coming soon! Sign up for our email list to be notified when it launches.');
            }
        });
    });
    
    // ===========================
    // Header Scroll Effect
    // ===========================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow on scroll
        if (scrollTop > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and guide cards
    const animatedElements = document.querySelectorAll('.feature-card, .guide-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===========================
    // Email Validation Helper
    // ===========================
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // ===========================
    // Analytics Event Tracking (Optional)
    // ===========================
    function trackEvent(category, action, label) {
        // TODO: Add Google Analytics or other tracking
        console.log('Event:', category, action, label);
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
    }
    
    // Track guide button clicks
    guideButtons.forEach(button => {
        button.addEventListener('click', function() {
            const guideType = this.getAttribute('data-guide');
            trackEvent('Guides', 'Click', guideType);
        });
    });
    
    // Track free guide form submissions
    if (freeGuideForm) {
        freeGuideForm.addEventListener('submit', function() {
            trackEvent('Lead Generation', 'Submit', 'Free Guide Form');
        });
    }
    
    // ===========================
    // Console Message
    // ===========================
    console.log('%c🧬 Peptexa - Built for Performance', 'color: #2C7A7B; font-size: 16px; font-weight: bold;');
    console.log('%cWebsite built with ❤️ for Angela Spain', 'color: #F59E0B; font-size: 14px;');
    
});

// ===========================
// INTEGRATION INSTRUCTIONS FOR ANGELA
// ===========================

/*

📋 CONVERTKIT INTEGRATION:
1. Go to ConvertKit → Forms → Create New Form
2. Choose "Inline" form type
3. Customize the form fields (Name + Email)
4. Get the embed code
5. Replace the div with id="convertkit-form-container" with your ConvertKit embed code

📋 GUMROAD INTEGRATION:
1. Create products in Gumroad for each guide:
   - Weight Loss Peptides ($29)
   - Cognitive Enhancement ($34)
   - Health & Longevity ($29)
   - Performance & Energy ($29)
   - Immune Support ($24)
2. Copy the product URLs from Gumroad
3. Update the gumroadLinks object above (lines 88-94) with your actual URLs

📋 GOOGLE ANALYTICS (OPTIONAL):
1. Create Google Analytics 4 property
2. Add tracking code to <head> of index.html
3. Uncomment the gtag code in the trackEvent function (lines 193-197)

*/