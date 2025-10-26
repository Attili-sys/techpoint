# 🚀 Quick Start Guide - Tech Point FZE Website

## ⚡ Get Your Site Live in 5 Minutes

### Prerequisites
✅ GitHub account
✅ This codebase on your computer

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `techpoint` (or any name you prefer)
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click **Create repository**

---

## Step 2: Push Your Code (2 minutes)

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Tech Point FZE website"

# Link to GitHub (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/techpoint.git

# Push to GitHub
git push -u origin main
```

**Note**: If you get an error about `master` vs `main`, try:
```bash
git branch -M main
git push -u origin main
```

---

## Step 3: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

🎉 Your site is now live at: `https://YOUR_USERNAME.github.io/techpoint/`

---

## 🌐 Optional: Add Custom Domain (techpointfze.com)

### On GitHub:
1. In Pages settings, add custom domain: `techpointfze.com`
2. Check "Enforce HTTPS" (after DNS verification)

### At Your Domain Registrar:

Add these DNS records:

**A Records** (for apex domain):
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME    Name: www    Value: YOUR_USERNAME.github.io
```

⏰ **Wait 24-48 hours** for DNS to propagate globally.

---

## ✏️ Before Going Live - Critical Updates

### 1. Form Configuration (5 minutes)

**Set up Formspree**:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)

**Update form actions**:

Open `index.html` and search for `your-form-id` (appears twice):
- Line ~750: Contact form
- Line ~850: Inquiry modal form

Replace:
```html
<!-- Change this -->
<form action="https://formspree.io/f/your-form-id" method="POST">

<!-- To this (with your actual endpoint) -->
<form action="https://formspree.io/f/xyzabc123" method="POST">
```

### 2. Contact Information (5 minutes)

**Update phone numbers**:

Search for `+971-XXX-XXXXXX` and replace with your actual number.

Search for `wa.me/971XXXXXXXXX` and replace with your WhatsApp number.

**Update social media**:

Search for `href="#"` in footer and contact sections, replace with:
- LinkedIn: `https://www.linkedin.com/company/yourcompany`
- Instagram: `https://www.instagram.com/yourcompany`
- WhatsApp: `https://wa.me/971XXXXXXXXX`

### 3. Product Images (Optional, but recommended)

Replace placeholder images with actual product photos:

1. Add your images to `assets/images/` folder
2. Name them descriptively (e.g., `iphone-17-pro-max.jpg`)
3. In `index.html`, find `https://picsum.photos/...`
4. Replace with `assets/images/your-image-name.jpg`

**Image requirements**:
- Size: 300x300px
- Format: JPG or WebP
- Optimize: < 50KB each (use [TinyPNG](https://tinypng.com))

---

## 🧪 Testing Your Live Site

After deployment, test:

- ✅ Site loads on desktop and mobile
- ✅ All navigation links work
- ✅ Product filters function properly
- ✅ Contact form submits successfully
- ✅ Images load correctly
- ✅ WhatsApp button works
- ✅ All pages accessible (Home, Privacy, Terms, 404)

---

## 🔄 Making Updates

### To update your live site:

1. Make changes to files locally
2. Test in browser
3. Commit and push:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

4. Wait 2-5 minutes for GitHub Pages to update

---

## 🆘 Common Issues

### "Site not showing changes"
- Wait 5-10 minutes
- Clear browser cache (Ctrl+F5)
- Try incognito mode

### "Forms not working"
- Check Formspree endpoint URL
- Verify you're using POST method
- Check browser console for errors

### "Images not loading"
- Verify file paths are correct
- Check images exist in `assets/images/`
- Check file extensions match (jpg vs jpeg)

### "Custom domain not working"
- Verify DNS settings
- Wait 24-48 hours for propagation
- Check CNAME file contains only: `techpointfze.com`

---

## 📞 Need Help?

### Documentation:
- **README.md** - Complete guide
- **DEPLOYMENT_CHECKLIST.md** - Full verification checklist
- **CONTRIBUTING.md** - How to make updates
- **PROJECT_SUMMARY.md** - What's included

### Test Locally:
```bash
# Python 3
python -m http.server 8000

# Visit: http://localhost:8000
```

### Resources:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Formspree Docs](https://help.formspree.io/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🎯 What's Next?

After deploying:

1. ✅ Submit sitemap to Google Search Console
2. ✅ Set up Google Analytics (optional)
3. ✅ Share on social media
4. ✅ Add to email signatures
5. ✅ Update business cards and materials

---

## 🎊 Congratulations!

Your professional website is now live! 🚀

**Remember**: This is a static site with zero maintenance costs. GitHub Pages handles everything - hosting, SSL, CDN - all for free!

---

**Questions?** Check the documentation or contact: info@techpointfze.com

**Last Updated**: October 26, 2025

