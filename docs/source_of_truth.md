Source of Truth: Tech Point FZE Landing Page
Overview
This document is the definitive source of truth for generating a professional, responsive, static landing page for TECH POINT PHONES & ELECTRONICS FZE, a wholesale business based in Ajman Free Zone specializing in mobile phones (iPhone, Samsung, Xiaomi, Honor). The AI (e.g., in Cursor) must follow this prompt exactly to create a codebase deployable on GitHub Pages for free hosting, with the eventual custom domain techpointfze.com. The site must be fully static (HTML, CSS, JavaScript only), with no server-side technologies, build tools, or dependencies requiring npm or similar.
Key Goals:

Create a modern, professional landing page emphasizing wholesale mobile phone sales.
Ensure mobile-responsiveness across all devices.
Optimize for SEO, accessibility, and performance.
Use Tailwind CSS via CDN for styling, ensuring GitHub Pages compatibility.
Structure the codebase for maintainability and future updates.

Project Structure
Organize the GitHub repository as follows for GitHub Pages deployment:

index.html: Main landing page (entry point).
privacy-policy.html: Static page with placeholder content (basic heading: "Privacy Policy").
terms.html: Static page with placeholder content (basic heading: "Terms of Service").
assets/:

assets/images/: For product images, logo, favicon, and static map image.
assets/js/: For JavaScript (e.g., main.js for interactivity).
assets/css/: For custom CSS if needed (Tailwind handles most styling).


CNAME: File containing techpointfze.com (for custom domain setup).
README.md: Brief guide on deploying to GitHub Pages (e.g., "Push to main branch, enable GitHub Pages in settings").
.gitignore: Ignore node_modules (for local testing), .DS_Store, etc.

The site must work by pushing to GitHub and enabling Pages without any build step.
Technology Stack

HTML5: Semantic elements (<header>, <nav>, <section>, <footer>).
Tailwind CSS: Use the latest stable CDN (e.g., <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet">). Apply Tailwind utility classes for all styling. Add minimal custom CSS in <style> tag or assets/css/custom.css if needed.
JavaScript: Vanilla ES6+ for interactivity (e.g., filters, modals). No frameworks (e.g., React).
Fonts: Use Google Fonts CDN with Inter font (<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">).
Icons: Use Font Awesome CDN (<script src="https://kit.fontawesome.com/4b9ba14b0c.js" crossorigin="anonymous"></script>) for icons (e.g., phone, email, location).
Images: Use placeholder images from Lorem Picsum (e.g., https://picsum.photos/300/300 for product thumbnails, https://picsum.photos/1200/600 for hero background). Ensure images are compressed, approximately 300x300px for product thumbnails and 1200x600px for hero (aspect ratio 2:1). In production, replace with actual product photos.
Favicon: Include a placeholder favicon (assets/images/favicon.ico) and link in <head>: <link rel="icon" href="assets/images/favicon.ico">.

Design Guidelines

Theme: Modern, clean, professional. Colors:

Primary: Blue (#1E3A8A) for trust/tech.
Backgrounds: White (#FFFFFF) or Light Gray (#F3F4F6).
Accents: Green (#10B981) for CTAs (e.g., "Contact Us", "Inquire Now").


Layout: Single-page with vertical scrolling sections. Use smooth scrolling (scroll-behavior: smooth in CSS or JS).
Responsiveness: Use Tailwind’s responsive utilities (e.g., sm:, md:, lg:) for mobile, tablet, desktop.
Accessibility: Include ARIA attributes, alt text for images, keyboard-navigable links/buttons.
SEO:

Title: "Tech Point Phones & Electronics FZE - Wholesale Mobile Phones in Ajman Free Zone".
Meta description: "Leading wholesaler of iPhones, Samsung, Xiaomi, and Honor phones in Ajman Free Zone. Bulk deals on latest models."
Open Graph tags for social sharing (e.g., title, description, image).


Performance: Lazy-load images (loading="lazy"). Minify JS/CSS if included separately. Use compressed images.

Page Sections
1. Header/Hero Section

Full-width hero with background image (Lorem Picsum, 1200x600px, tech/phones theme, subtle overlay for text readability).
Content:

Company name: TECH POINT PHONES & ELECTRONICS FZE.
Tagline: "Your Trusted Wholesale Partner for Premium Mobile Phones and Electronics in Ajman Free Zone".
CTA button: "Contact Us" (links to contact section or mailto:info@techpointfze.com).


Navigation: Fixed/sticky top nav with links to sections (Home, Products, About, Contact). Use Tailwind classes (e.g., fixed top-0 w-full bg-white shadow-md).
Mobile nav: Hamburger menu toggling a dropdown (JS for toggle).

2. About Us Section

Description: "Tech Point Phones & Electronics FZE is a premier wholesale distributor based in Ajman Free Zone, specializing in high-quality mobile phones from top brands. We offer competitive pricing, bulk orders, and reliable delivery for businesses worldwide."
Address: BUILDING C1, B.C 1307021, Ajman Free Zone.
Map: Use a static image (e.g., screenshot from Google Maps) linking to Google Maps URL (https://maps.google.com/?q=BUILDING+C1,+Ajman+Free+Zone). Ensure no API key or dynamic loading.
Layout: Text on left, map image on right (Tailwind: flex flex-col md:flex-row).

3. Products Section

Smart Display Strategy:

Categorize by brand: iPhone, Samsung, Xiaomi, Honor.
Feature 4-6 models per brand (e.g., iPhone 17 Pro Max, Samsung Galaxy S25 Ultra, Xiaomi 14, Honor Magic 6). Initially display only featured models (e.g., 16 total).
Each product card: Image (300x300px), name, brief specs (e.g., "iPhone 17 Pro Max - 6.9" Display, 128GB/256GB/1TB"), "Inquire Now" button (links to contact form/modal).
Grid layout: Tailwind grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.
Filters: JS-powered tabs/buttons for brands (e.g., show only iPhone products).
"Show More" button: Reveals additional placeholders (e.g., older models like iPhone 11 or Samsung A-series). Use CSS hidden class toggled by JS.
Note: "All models available including iPhone 11 to 17 series (Pro, Pro Max, all sizes/storage), Samsung Galaxy series, Xiaomi Redmi/Mi lines, Honor Magic series, and more. Contact for full catalog."


Placeholder data: Hardcode ~20-30 products (e.g., 5-8 per brand).

4. Why Choose Us Section

Cards or bullet points (Tailwind: flex flex-col md:flex-row gap-4):

Competitive wholesale pricing.
Wide range of models and brands.
Fast shipping from Ajman Free Zone.
Quality assurance and warranties.
Dedicated customer support.



5. Contact Section

Email: info@techpointfze.com (clickable mailto: link).
Phone: Placeholder (+971-XXX-XXXXXX; omit if not provided).
Contact Form: Use Formspree.io for static form submission. Form action: https://formspree.io/f/your-form-id (replace with actual Formspree endpoint). Fields: Name, Email, Message, Wholesale Inquiry Details. Ensure client-side submission only.
Social Links: Placeholder icons for WhatsApp, LinkedIn (link to # if no real URLs).
Layout: Form on left, contact details on right (Tailwind: flex flex-col md:flex-row).

6. Footer

Copyright: "© 2025 Tech Point Phones & Electronics FZE. All rights reserved."
Links: Home, Products, About, Contact, Privacy Policy (privacy-policy.html), Terms (terms.html).
Address and email repeated.
Social icons repeated.

Interactivity and Features

JS Features (in assets/js/main.js):

Smooth scrolling for nav links (scroll-behavior: smooth or JS scrollIntoView).
Product filter: Show/hide products by brand using event listeners.
"Show More" button: Toggle visibility of additional products.
Modal: On "Inquire Now" click, open a modal with the Formspree contact form.
Form validation: Client-side checks (e.g., valid email format, non-empty fields).


No Dynamic Data: All content hardcoded. Updates via HTML edits.
Cross-Browser Compatibility: Ensure functionality in Chrome, Firefox, Safari.

Development Steps for AI

Generate index.html, privacy-policy.html, terms.html with semantic HTML and Tailwind classes.
Hardcode ~20-30 product placeholders in index.html (e.g., 5-8 per brand, with images from Lorem Picsum).
Create assets/js/main.js for interactivity (filters, modal, form validation).
Add assets/images/favicon.ico and placeholder images.
Include static map image in About Us section.
Test mentally for responsiveness, accessibility, and GitHub Pages compatibility.
Provide README.md with deployment instructions: "Push to main branch, enable GitHub Pages in repository settings, set custom domain in CNAME if needed."