# Favicon Setup Instructions

## Current Setup

I've added a basic SVG favicon that will work automatically. The favicon is configured in `app/layout.tsx`.

## Files Created

1. **`app/icon.svg`** - SVG favicon (works in modern browsers)
2. **`app/apple-icon.png`** - Apple touch icon (for iOS devices)

## To Add a Custom Favicon

### Option 1: Use an Online Favicon Generator (Recommended)

1. Go to [https://realfavicongenerator.net](https://realfavicongenerator.net) or [https://favicon.io](https://favicon.io)
2. Upload your logo/image (recommended: 512x512px or larger, square)
3. Download the generated favicon package
4. Replace the files:
   - `app/icon.svg` with your SVG favicon
   - `app/apple-icon.png` with your Apple icon (180x180px)
   - `public/favicon.ico` with the generated .ico file

### Option 2: Create Your Own

1. **Create a 32x32px or 64x64px icon** in your design tool
2. **Export as:**
   - SVG for `app/icon.svg` (scalable, best quality)
   - PNG 180x180px for `app/apple-icon.png` (iOS devices)
   - ICO format for `public/favicon.ico` (legacy browsers)

### Option 3: Use Your Initials/Logo

You can create a simple favicon with:

- Your initials "MS" in a circle/square
- A code symbol (</>)
- A simple logo representing your brand

## Quick SVG Favicon Template

Replace `app/icon.svg` with your design:

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#6366F1"/>
  <text x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="white" text-anchor="middle">MS</text>
</svg>
```

## Testing

After adding your favicon:

1. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
2. Check the browser tab - you should see your favicon
3. Test on mobile devices to see the Apple icon

## Notes

- Next.js automatically serves files from `/app` directory as favicons
- The `icon.svg` file will be used as the default favicon
- Modern browsers prefer SVG favicons (scalable and crisp)
- Legacy browsers will fall back to `favicon.ico`
