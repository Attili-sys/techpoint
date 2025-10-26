# CNAME Configuration

## ⚠️ Important Note

The CNAME file has been temporarily removed because the custom domain (techpointfze.com) has not been purchased yet.

## When You're Ready to Add Custom Domain

### Step 1: Purchase Domain
Purchase `techpointfze.com` from a domain registrar like:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### Step 2: Recreate CNAME File
Create a file named `CNAME` (no extension) in the root directory with this content:
```
techpointfze.com
```

### Step 3: Configure DNS
Add these records at your domain registrar:

**A Records (for apex domain):**
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**CNAME Record (for www):**
```
Type: CNAME    Name: www    Value: attili-sys.github.io
```

### Step 4: Push Changes
```bash
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### Step 5: Enable in GitHub
1. Go to Settings → Pages
2. Add custom domain: `techpointfze.com`
3. Enable "Enforce HTTPS" (after DNS verification)

## Current Site URL

**Without custom domain, your site is live at:**
https://attili-sys.github.io/techpoint/

---

**Note**: You can use the GitHub Pages URL for as long as you want. The custom domain is optional!

