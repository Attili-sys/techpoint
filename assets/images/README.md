# Image Assets

This folder contains all image assets for the Tech Point FZE website.

## Current Structure

- `favicon.ico` - Site favicon (placeholder - replace with actual favicon)
- Product images will be added here as needed

## Adding Product Images

### Recommended Specifications

**Product Thumbnails:**
- Size: 300x300px (1:1 aspect ratio)
- Format: JPG or WebP
- Quality: 80-85%
- File size: < 50KB per image
- Naming: `product-name-brand.jpg` (e.g., `iphone-17-pro-max.jpg`)

**Hero Images:**
- Size: 1920x1080px (16:9 aspect ratio)
- Format: JPG or WebP
- Quality: 85-90%
- File size: < 200KB
- Naming: `hero-background.jpg`

**Map Image:**
- Size: 600x400px
- Format: JPG or PNG
- Quality: 80%
- File size: < 100KB
- Naming: `ajman-free-zone-map.jpg`

### Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG images
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

## Replacing Placeholder Images

Once you have actual product images:

1. Add images to this folder
2. Update image URLs in `index.html`:
   - Search for `https://picsum.photos/`
   - Replace with `assets/images/YOUR_IMAGE_NAME.jpg`

Example:
```html
<!-- Before -->
<img src="https://picsum.photos/300/300?random=iphone17pro" alt="iPhone 17 Pro Max">

<!-- After -->
<img src="assets/images/iphone-17-pro-max.jpg" alt="iPhone 17 Pro Max">
```

## Favicon

To create a proper favicon set:

1. Visit [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo (512x512px PNG recommended)
3. Generate favicon package
4. Replace `favicon.ico` and add additional files
5. Update `<head>` section in all HTML files with generated code

## Brand Assets

For professional branding:
- Logo (SVG preferred, or high-res PNG)
- Brand colors: #1E3A8A (blue), #10B981 (green)
- Typography: Inter, Poppins

## Notes

- Always optimize images before uploading
- Use WebP format for better compression (with JPG fallback)
- Add descriptive alt text for accessibility
- Consider lazy loading for better performance (already implemented)

