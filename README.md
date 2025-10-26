# Tech Point Phones & Electronics FZE

![Tech Point FZE](https://img.shields.io/badge/Status-Live-success)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/License-Proprietary-red)

## 🚀 Overview

Tech Point Phones & Electronics FZE is a premier wholesale distributor based in Ajman Free Zone, specializing in high-quality mobile phones from top brands including iPhone, Samsung, Xiaomi, and Honor. We offer competitive pricing, bulk orders, and reliable delivery for businesses worldwide.

**Live Website:** [https://techpointfze.com](https://techpointfze.com)

## ✨ Features

- **Modern & Responsive Design**: Built with Tailwind CSS for a professional, mobile-first experience
- **Product Showcase**: Dynamic product filtering by brand with 16+ featured products
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data (JSON-LD)
- **Fast Loading**: CDN-based resources, lazy loading, and optimized images
- **Interactive UI**: Smooth scrolling, modals, animations, and form validation
- **Accessible**: ARIA attributes, keyboard navigation, and screen reader support
- **Professional Pages**: Privacy Policy, Terms of Service, and custom 404 page

## 📁 Project Structure

```
techpoint/
├── index.html                 # Main landing page
├── privacy-policy.html        # Privacy policy page
├── terms.html                 # Terms of service page
├── 404.html                   # Custom 404 error page
├── assets/
│   ├── css/
│   │   └── custom.css        # Custom styles and animations
│   ├── js/
│   │   └── main.js           # JavaScript interactivity
│   └── images/
│       ├── favicon.ico       # Site favicon
│       └── placeholder.txt   # Placeholder for product images
├── docs/
│   ├── source_of_truth.md   # Project specifications
│   └── improvements.md       # Enhancement suggestions
├── CNAME                      # Custom domain configuration
├── robots.txt                 # Search engine directives
├── sitemap.xml                # Site structure for SEO
└── README.md                  # This file
```

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with proper structure
- **CSS**: Tailwind CSS (via CDN) + custom CSS
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Fonts**: Inter & Poppins (Google Fonts)
- **Icons**: Font Awesome 6

### Hosting
- **Platform**: GitHub Pages
- **Domain**: techpointfze.com (custom domain via CNAME)
- **SSL**: Automatic HTTPS via GitHub Pages

### CDN Resources
- Tailwind CSS: `https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css`
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;800`
- Font Awesome: Custom kit loaded via script

## 🚀 Deployment to GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Tech Point FZE website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/techpoint.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be published at: `https://YOUR_USERNAME.github.io/techpoint/`

### Step 3: Configure Custom Domain (Optional)

1. Add your domain to the **Custom domain** field (e.g., `techpointfze.com`)
2. Click **Save**
3. Wait for DNS check to complete
4. Enable **Enforce HTTPS** (recommended)

### Step 4: DNS Configuration

Add the following DNS records with your domain registrar:

#### For apex domain (techpointfze.com):

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### For www subdomain:

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Note**: DNS propagation may take 24-48 hours.

## 🔧 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Optional: Local web server (Live Server extension, Python SimpleHTTPServer, etc.)

### Running Locally

#### Option 1: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Site will open at `http://localhost:5500`

#### Option 2: Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

#### Option 3: Double-Click

Simply double-click `index.html` to open in your default browser (some features may be limited).

## 📝 Customization Guide

### Updating Products

Edit the product cards in `index.html` (search for `<!-- Products Grid -->`):

```html
<div class="product-card" data-brand="iphone">
    <div class="bg-white rounded-lg shadow-lg...">
        <img src="YOUR_IMAGE_URL" alt="Product Name">
        <h3>Product Name</h3>
        <p>Product Description</p>
        <button class="inquire-btn" data-product="Product Name">Inquire Now</button>
    </div>
</div>
```

### Changing Colors

Update colors in `assets/css/custom.css`:

```css
/* Primary Blue: #1E3A8A */
/* Accent Green: #10B981 */
/* Light Gray: #F3F4F6 */
```

Or use Tailwind utility classes directly in HTML.

### Updating Contact Information

1. **Email**: Search for `info@techpointfze.com` and replace globally
2. **Address**: Update in `index.html`, `privacy-policy.html`, and `terms.html`
3. **Phone**: Add phone number in contact section if needed

### Configuring Formspree

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. Replace `https://formspree.io/f/your-form-id` in:
   - Contact form (`index.html` line ~750)
   - Modal form (`index.html` line ~850)

## 🔍 SEO Optimization

The site includes:

- ✅ Semantic HTML5 structure
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (WholesaleStore)
- ✅ `sitemap.xml` for search engines
- ✅ `robots.txt` configuration
- ✅ Alt text for all images
- ✅ Fast loading times (CDN resources)
- ✅ Mobile-responsive design

### Submitting to Search Engines

1. **Google Search Console**: [https://search.google.com/search-console](https://search.google.com/search-console)
2. **Bing Webmaster Tools**: [https://www.bing.com/webmasters](https://www.bing.com/webmasters)

Submit your sitemap: `https://techpointfze.com/sitemap.xml`

## 🎨 Design Philosophy

### Color Palette

- **Primary Blue** (#1E3A8A): Trust, professionalism, technology
- **Accent Green** (#10B981): Call-to-action, growth, success
- **Neutral Gray** (#F3F4F6): Backgrounds, subtle accents
- **Dark Text** (#111827): High contrast, readability

### Typography

- **Headings**: Poppins (700/800) - Bold, modern, corporate
- **Body**: Inter (400/500/600/700) - Clean, readable, professional

### UI/UX Principles

- Mobile-first responsive design
- Smooth scrolling and animations
- High contrast for accessibility
- Clear call-to-action buttons
- Intuitive navigation
- Fast loading performance

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛡️ Security

- HTTPS enforced via GitHub Pages
- No server-side code (static site)
- Form submissions via Formspree (secure)
- No cookies or tracking by default
- Privacy-focused design

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+
- **Mobile Friendly**: Yes
- **Page Size**: < 500KB (initial load)

## 🆘 Support & Maintenance

### Common Issues

**Q: Images not loading?**
A: Check image URLs and ensure they're accessible. Replace Lorem Picsum placeholders with actual product images.

**Q: Forms not working?**
A: Configure Formspree endpoint in both contact form and modal form.

**Q: Custom domain not working?**
A: Check DNS settings and wait for propagation (24-48 hours).

**Q: Site not updating?**
A: Clear browser cache or try incognito mode. GitHub Pages may take 5-10 minutes to update.

### Updating the Site

1. Make changes to local files
2. Test locally
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

4. Wait 5-10 minutes for GitHub Pages to rebuild

## 📞 Contact

**Tech Point Phones & Electronics FZE**

- 📍 Building C1, B.C 1307021, Ajman Free Zone, UAE
- 📧 info@techpointfze.com
- 🌐 https://techpointfze.com

## 📄 License

© 2025 Tech Point Phones & Electronics FZE. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

---

**Built with ❤️ by Tech Point FZE**

*Last Updated: October 26, 2025*
