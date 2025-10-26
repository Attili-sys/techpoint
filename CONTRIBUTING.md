# Contributing to Tech Point FZE Website

Thank you for your interest in maintaining and improving the Tech Point FZE website. This guide will help you make updates safely and effectively.

## 🎯 Quick Start

### For Non-Technical Users

If you need to update content but aren't familiar with code:

1. Contact your web developer or IT team
2. Provide specific details about what needs to change
3. Include screenshots if helpful
4. Specify which page needs updating

### For Technical Users

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/techpoint.git
cd techpoint

# Create a new branch for your changes
git checkout -b feature/your-update-name

# Make your changes
# Test locally

# Commit and push
git add .
git commit -m "Description of changes"
git push origin feature/your-update-name

# Create Pull Request on GitHub
```

## 📝 Common Update Tasks

### 1. Adding New Products

**Location**: `index.html` (Products Section)

**Steps**:
1. Find the Products Grid section (around line 310)
2. Copy an existing product card
3. Update the following:
   - Image source (`src` attribute)
   - Product name
   - Specifications
   - Brand (`data-brand` attribute)
   - Inquiry button (`data-product` attribute)

**Example**:
```html
<div class="product-card" data-brand="iphone">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
        <div class="relative">
            <img src="assets/images/iphone-17-pro.jpg" alt="iPhone 17 Pro" class="w-full h-64 object-cover" loading="lazy">
            <span class="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">New</span>
        </div>
        <div class="p-6">
            <h3 class="font-bold text-xl text-gray-900 mb-2">iPhone 17 Pro</h3>
            <p class="text-gray-600 mb-4">6.7" Display, A19 Pro, 256GB/512GB/1TB</p>
            <button class="inquire-btn w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300" data-product="iPhone 17 Pro">
                <i class="fas fa-paper-plane mr-2"></i>Inquire Now
            </button>
        </div>
    </div>
</div>
```

### 2. Updating Contact Information

**Locations to update**:
- `index.html` (Contact Section, Footer)
- `privacy-policy.html` (Contact Info)
- `terms.html` (Contact Info)
- `404.html` (Quick Links)

**Search and replace**:
- Email: Search for `info@techpointfze.com`
- Address: Search for `Building C1, B.C 1307021`
- Phone: Search for `+971-XXX-XXXXXX` or `wa.me/971XXXXXXXXX`

### 3. Changing Colors

**Option A: Using Tailwind Classes** (Recommended)
- Find class names like `bg-blue-900`, `text-green-500`
- Replace with your desired Tailwind color class
- [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors)

**Option B: Custom CSS**
Edit `assets/css/custom.css`:
```css
/* Update these values */
:root {
    --primary-blue: #1E3A8A;
    --accent-green: #10B981;
    --light-gray: #F3F4F6;
}
```

### 4. Updating Social Media Links

**Locations**:
- Footer section in `index.html` (around line 880)
- Contact section in `index.html` (around line 790)

**Replace**:
```html
<!-- Change from -->
<a href="#" class="...">

<!-- To -->
<a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" class="...">
```

### 5. Modifying Text Content

**Best Practices**:
- Always proofread before committing
- Maintain consistent tone (professional, B2B)
- Keep SEO keywords (wholesale, mobile phones, Ajman Free Zone)
- Don't change HTML structure unless necessary

### 6. Updating Images

**Steps**:
1. Optimize images first (use TinyPNG or Squoosh)
2. Add images to `assets/images/` folder
3. Update image paths in HTML
4. Always include descriptive alt text

**Example**:
```html
<img src="assets/images/product-name.jpg" 
     alt="Descriptive text for accessibility" 
     class="w-full h-64 object-cover" 
     loading="lazy">
```

## 🧪 Testing Your Changes

### Local Testing

**Option 1: VS Code Live Server**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option 2: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Testing Checklist

- [ ] Desktop view (1920px, 1280px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px, 320px)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] No console errors (F12 in browser)
- [ ] Images load properly
- [ ] Animations work smoothly

## 🚫 What NOT to Change

### Critical Files (Avoid Editing Unless You Know What You're Doing)

- `CNAME` - Domain configuration
- `robots.txt` - Search engine rules
- `sitemap.xml` - Site structure for SEO
- `.gitignore` - Git configuration
- File structure (adding/moving files)

### Sensitive Code Sections

- Navigation HTML structure
- Form validation JavaScript
- CSS animation keyframes
- Meta tags in `<head>`
- Structured data (JSON-LD)

## 🐛 Troubleshooting

### "My changes aren't showing up"

1. **Hard refresh**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Clear cache**: Browser settings → Clear browsing data
3. **Incognito mode**: Test in private/incognito window
4. **GitHub Pages delay**: Wait 5-10 minutes after pushing

### "I broke something"

1. **Don't panic!** Git has your back
2. **Revert changes**:
   ```bash
   git checkout -- filename.html
   ```
3. **Or restore from last commit**:
   ```bash
   git reset --hard HEAD
   ```

### "Form submissions aren't working"

1. Check Formspree endpoint URL
2. Verify form `action` attribute
3. Check browser console for errors
4. Test with different email addresses

## 📋 Code Style Guidelines

### HTML
- Use semantic elements (`<section>`, `<article>`, `<nav>`)
- Indent with 4 spaces
- Add comments for major sections
- Keep lines under 120 characters when possible

### CSS
- Follow existing naming conventions
- Group related styles together
- Add comments for complex rules
- Use Tailwind classes when possible

### JavaScript
- Use ES6+ syntax
- Add JSDoc comments for functions
- Keep functions small and focused
- Use meaningful variable names

## 🔒 Security Best Practices

- Never commit sensitive data (API keys, passwords)
- Use HTTPS for all external resources
- Validate and sanitize user inputs
- Keep dependencies updated

## 📞 Getting Help

### Issues or Questions?

1. **Check documentation first**:
   - README.md
   - DEPLOYMENT_CHECKLIST.md
   - This file (CONTRIBUTING.md)

2. **Common resources**:
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)
   - [MDN Web Docs](https://developer.mozilla.org/)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)

3. **Contact**:
   - Email: info@techpointfze.com
   - Internal team communication channels

## 🎨 Design Principles

### Brand Consistency
- **Primary Color**: Blue (#1E3A8A) - Trust, technology
- **Accent Color**: Green (#10B981) - Success, call-to-action
- **Typography**: Inter (body), Poppins (headings)
- **Tone**: Professional, trustworthy, B2B-focused

### User Experience
- Mobile-first approach
- Fast loading times (< 3 seconds)
- Clear call-to-action buttons
- Accessible to all users
- Intuitive navigation

## ✅ Pre-Commit Checklist

Before committing changes:

- [ ] Tested locally on multiple screen sizes
- [ ] No console errors
- [ ] All links work
- [ ] Images optimized
- [ ] Code formatted properly
- [ ] Commit message is descriptive
- [ ] No sensitive data in commit

## 📊 Performance Guidelines

### Image Optimization
- Product images: 300x300px, < 50KB
- Hero images: 1920x1080px, < 200KB
- Use WebP format with JPG fallback
- Always use lazy loading

### Code Optimization
- Minimize inline styles
- Use CDN for libraries
- Avoid duplicate code
- Remove commented-out code before committing

## 🔄 Version Control Best Practices

### Branch Naming
- Features: `feature/add-new-product`
- Fixes: `fix/contact-form-validation`
- Updates: `update/company-address`

### Commit Messages
```
Good:
✅ "Add iPhone 17 Pro Max to product catalog"
✅ "Fix mobile menu toggle on iOS devices"
✅ "Update company address in footer"

Bad:
❌ "changes"
❌ "fix stuff"
❌ "update"
```

## 📝 Change Log

Keep track of major changes:

### Format
```
## [Date] - [Version/Description]
### Added
- New features or content

### Changed
- Modifications to existing features

### Fixed
- Bug fixes
```

---

**Questions?** Contact the development team or refer to the main README.md

**Last Updated**: October 26, 2025

