#!/usr/bin/env python3
"""
Tech Point FZE - Automated Product Image Downloader
Uses DuckDuckGo to search and download product images automatically
"""

import os
import sys
import time
from pathlib import Path
try:
    from ddgs import DDGS
except ImportError:
    from duckduckgo_search import DDGS
import requests
from urllib.parse import urlparse
import random

# Configuration
IMAGES_DIR = Path(__file__).parent.parent / "assets" / "images"
SEARCH_SUFFIX = "official product image"
MAX_RETRIES = 5  # Increased retries
TIMEOUT = 10
MIN_DELAY = 8  # Increased minimum delay
MAX_DELAY = 15  # Increased maximum delay

# All products from the Tech Point FZE website
PRODUCTS = [
    # iPhone Products
    "iPhone 17 Pro Max",
    "iPhone 17",
    "iPhone 16 Pro Max",
    "iPhone 15",
    "iPhone 16 Pro",
    "iPhone 16 Plus",
    "iPhone 17 Air",
    "iPhone SE 4",
    "iPhone SE 4 Plus",
    
    # Samsung Products
    "Samsung Galaxy S25 Ultra",
    "Samsung Galaxy S25",
    "Samsung Galaxy Z Fold 6",
    "Samsung Galaxy A55",
    "Samsung Galaxy S25 Edge",
    "Samsung Galaxy Z Fold 7",
    "Samsung Galaxy Z Flip 7",
    "Samsung Galaxy S25 Slim",
    "Samsung Galaxy Z Flip FE",
    
    # Xiaomi Products
    "Xiaomi 17 Pro Max",
    "Xiaomi 14 Ultra",
    "Xiaomi 14",
    "Redmi Note 13 Pro",
    "Xiaomi 15 Ultra",
    "Redmi Note 14 Pro",
    "POCO F6 Pro",
    
    # Honor Products
    "Honor Magic 6 Pro",
    "Honor Magic 6",
    "Honor 90",
    "Honor X9b",
    "Honor 200 Pro",
    "Honor X7b",
]


def sanitize_filename(product_name):
    """Convert product name to lowercase filename with hyphens"""
    # Remove special characters and convert to lowercase
    filename = product_name.lower()
    # Replace spaces with hyphens
    filename = filename.replace(" ", "-")
    # Remove any other special characters
    filename = "".join(c for c in filename if c.isalnum() or c == "-")
    return f"{filename}.jpg"


def download_image(url, filepath, timeout=TIMEOUT):
    """Download image from URL to filepath"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=timeout, stream=True)
        response.raise_for_status()
        
        # Save image
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        # Verify file size
        file_size = os.path.getsize(filepath)
        if file_size < 1024:  # Less than 1KB is probably an error
            os.remove(filepath)
            return False
        
        return True
    except Exception as e:
        if os.path.exists(filepath):
            os.remove(filepath)
        return False


def search_and_download_image(product_name, output_path, retry_count=0):
    """Search for product image using DuckDuckGo and download the first result"""
    
    # Skip if image already exists
    if output_path.exists():
        print(f"  ✓ Already exists: {output_path.name}")
        return True
    
    # Prepare search query
    search_query = f"{product_name} {SEARCH_SUFFIX}"
    
    print(f"  🔍 Searching: {search_query}")
    
    try:
        # Search for images using DuckDuckGo
        with DDGS() as ddgs:
            results = list(ddgs.images(
                query=search_query,
                max_results=5,
                safesearch='off'
            ))
        
        if not results:
            print(f"  ❌ No results found for {product_name}")
            return False
        
        # Try downloading from the first few results
        for i, result in enumerate(results[:3], 1):
            image_url = result.get('image')
            if not image_url:
                continue
            
            print(f"  📥 Downloading (attempt {i}/3): {urlparse(image_url).netloc}")
            
            if download_image(image_url, output_path):
                file_size = os.path.getsize(output_path) / 1024  # KB
                print(f"  ✅ Success! Saved {output_path.name} ({file_size:.1f} KB)")
                return True
        
        print(f"  ❌ Failed to download any images for {product_name}")
        return False
        
    except Exception as e:
        error_msg = str(e)
        
        # Check if it's a rate limit error
        if 'ratelimit' in error_msg.lower() or '403' in error_msg or '202' in error_msg:
            if retry_count < MAX_RETRIES:
                wait_time = (retry_count + 1) * 20  # 20, 40, 60, 80, 100 seconds
                print(f"  ⏳ Rate limited! Waiting {wait_time} seconds before retry {retry_count + 1}/{MAX_RETRIES}...")
                time.sleep(wait_time)
                return search_and_download_image(product_name, output_path, retry_count + 1)
            else:
                print(f"  ❌ Rate limit exceeded after {MAX_RETRIES} retries. Skipping {product_name}")
                return False
        
        print(f"  ❌ Error: {error_msg}")
        return False


def main():
    """Main function to download all product images"""
    
    print("=" * 70)
    print("🚀 TECH POINT FZE - Product Image Downloader")
    print("=" * 70)
    print(f"\n📁 Output directory: {IMAGES_DIR}")
    print(f"📦 Total products: {len(PRODUCTS)}")
    print(f"🔍 Search strategy: Product name + '{SEARCH_SUFFIX}'")
    print(f"⏱️  Delay between requests: {MIN_DELAY}-{MAX_DELAY} seconds")
    print(f"⏳ Estimated time: ~{(len(PRODUCTS) * 11.5) / 60:.1f} minutes")
    print(f"⚠️  This will be slow to avoid rate limiting!")
    print("\n" + "=" * 70 + "\n")
    
    # Create images directory if it doesn't exist
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    
    # Statistics
    success_count = 0
    failed_products = []
    
    # Download images for each product
    for idx, product in enumerate(PRODUCTS, 1):
        print(f"[{idx}/{len(PRODUCTS)}] {product}")
        
        filename = sanitize_filename(product)
        output_path = IMAGES_DIR / filename
        
        success = search_and_download_image(product, output_path)
        
        if success:
            success_count += 1
        else:
            failed_products.append(product)
        
        # Random delay to avoid rate limiting (3-6 seconds)
        if idx < len(PRODUCTS):
            delay = random.uniform(MIN_DELAY, MAX_DELAY)
            print(f"  💤 Waiting {delay:.1f}s before next search...")
            time.sleep(delay)
        
        print()  # Empty line for readability
    
    # Print summary
    print("=" * 70)
    print("📊 DOWNLOAD SUMMARY")
    print("=" * 70)
    print(f"✅ Successful: {success_count}/{len(PRODUCTS)}")
    print(f"❌ Failed: {len(failed_products)}/{len(PRODUCTS)}")
    
    if failed_products:
        print("\n⚠️  Failed products:")
        for product in failed_products:
            print(f"   - {product}")
        print("\n💡 Tip: You can run the script again to retry failed downloads.")
    else:
        print("\n🎉 All product images downloaded successfully!")
    
    print("\n📍 Images saved to: " + str(IMAGES_DIR.absolute()))
    print("=" * 70)
    
    return 0 if not failed_products else 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n⚠️  Download interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Unexpected error: {str(e)}")
        sys.exit(1)

