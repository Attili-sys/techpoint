# Tech Point FZE - Scripts

This folder contains automation scripts for the Tech Point FZE website.

## 📥 Product Image Downloader

Automatically downloads product images for all phones listed on the website using DuckDuckGo image search.

### Prerequisites

1. **Python 3.7+** installed on your system
2. **Virtual environment** (recommended)

### Setup

1. Create and activate a virtual environment:

```bash
# Create venv
python -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on macOS/Linux
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

### Usage

Run the script from the project root or scripts directory:

```bash
# From project root
python scripts/download_product_images.py

# Or from scripts directory
cd scripts
python download_product_images.py
```

### What It Does

1. **Searches** for each product using DuckDuckGo image search
2. **Downloads** the first high-quality image found
3. **Saves** images to `assets/images/` with proper naming:
   - Format: `product-name.jpg`
   - Example: `iphone-17-pro-max.jpg`
4. **Skips** products that already have images
5. **Reports** success/failure for each product

### Features

- ✅ Fully automated - no manual intervention needed
- ✅ Smart naming - converts product names to lowercase with hyphens
- ✅ Skip existing - won't re-download if image already exists
- ✅ Error handling - retries with multiple image sources
- ✅ Progress tracking - shows detailed progress for each product
- ✅ Summary report - displays statistics at the end

### Output

Images are saved to: `assets/images/`

Example filenames:
- `iphone-17-pro-max.jpg`
- `samsung-galaxy-s25-ultra.jpg`
- `xiaomi-14-ultra.jpg`
- `honor-magic-6-pro.jpg`

### Products Covered

The script downloads images for **35 products**:
- 9 iPhone models
- 9 Samsung models
- 7 Xiaomi/Redmi/POCO models
- 6 Honor models

### Troubleshooting

**Issue: "No results found"**
- Some products might be very new or not widely available
- The script will try multiple sources automatically
- You can manually add images for failed products

**Issue: "Failed to download"**
- Could be due to network issues or rate limiting
- Simply run the script again - it will skip successful downloads

**Issue: "Module not found"**
- Make sure you activated the virtual environment
- Run `pip install -r requirements.txt` again

### Notes

- Images are committed to git (needed for GitHub Pages)
- First run takes ~2-3 minutes (1 second delay between downloads)
- Subsequent runs are faster (skips existing images)
- Average file size: 50-200 KB per image

### Customization

To add more products, edit the `PRODUCTS` list in `download_product_images.py`:

```python
PRODUCTS = [
    "Your Product Name",
    # ... more products
]
```

## Future Scripts

This folder can contain additional automation scripts:
- SEO meta tag generator
- Sitemap updater
- Image optimizer
- Link checker
- etc.

