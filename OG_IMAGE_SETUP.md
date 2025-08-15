# Open Graph (OG) Image Setup for Smartbrief

## Step 1: Create the OG Image

I've created an HTML template (`og-image-template.html`) that you can use to generate your OG image. Here are your options:

### Option A: Screenshot the HTML template
1. Open `og-image-template.html` in your browser
2. Take a screenshot at exactly 1200x630 pixels
3. Save as `og-image.jpg` or `og-image.png`

### Option B: Use online conversion tools
1. Copy the HTML content
2. Use tools like:
   - htmlcsstoimage.com
   - urlbox.io
   - bannerbear.com

### Option C: Use Figma/Canva (Recommended)
Create a 1200x630px design with:
- Your gradient background (blue to purple)
- Logo and "Smartbrief" text
- Main headline: "Stay informed, not overwhelmed"
- Subtitle: "Your AI-powered news companion"
- Description: "Get the top 10 stories that matter to you, delivered every Monday morning"
- Feature icons: 🎯 Zero Fluff, 🤖 AI-Powered, ⏰ Perfect Timing

## Step 2: Add the image to your project

1. Place your generated OG image in the `public` folder as `og-image.jpg`
2. Add the following meta tags to your `public/index.html`

## Step 3: Meta tags to add

Add these to the `<head>` section of your `public/index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourwebsite.com/" />
<meta property="og:title" content="Smartbrief - Stay informed, not overwhelmed" />
<meta property="og:description" content="Your AI-powered news companion. Get the top 10 stories that matter to you, delivered every Monday morning. No fluff, just clarity." />
<meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yourwebsite.com/" />
<meta property="twitter:title" content="Smartbrief - Stay informed, not overwhelmed" />
<meta property="twitter:description" content="Your AI-powered news companion. Get the top 10 stories that matter to you, delivered every Monday morning. No fluff, just clarity." />
<meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />

<!-- Additional Meta Tags -->
<meta name="description" content="Your AI-powered news companion. Get the top 10 stories that matter to you, delivered every Monday morning. No fluff, just clarity." />
<meta name="keywords" content="news, AI, newsletter, smartbrief, personalized news, weekly digest" />
<meta name="author" content="NewsIQ" />
```

## Step 4: Test your OG image

Use these tools to test your OG tags:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Quick Design Specifications

- **Size**: 1200x630 pixels (Facebook recommended)
- **Format**: JPG or PNG
- **File size**: Under 5MB (preferably under 1MB)
- **Safe area**: Keep important text within 1200x600 pixels
- **Colors**: Your brand gradient (blue to purple)
- **Text**: Large, readable fonts with good contrast

## Alternative: Use your existing AI image

You can also use your existing AI image (`/ai2.png`) as the OG image if it's properly sized and contains your branding.
