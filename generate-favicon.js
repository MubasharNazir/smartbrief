const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgPath = path.join(__dirname, 'public', 'muba.today.svg');
  const publicDir = path.join(__dirname, 'public');
  
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate different sizes for favicon
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    
    // Generate apple touch icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    
    // Generate Android icons
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
    
    console.log('Favicons generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
