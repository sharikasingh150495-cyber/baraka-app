const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'marketplace', 'page.tsx');

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('tiktok-blender-01')) {
        const tiktokItems = `
    {
      id: "tiktok-blender-01",
      title: "Portable USB Mini Fruit Blender (TikTok Viral)",
      category: "Home Appliances",
      origin: "🇨🇳 China",
      country: "China",
      price: 4.50,
      unit: "pcs",
      moq: "100 pcs",
      supplier: "Yiwu Trend Electronics",
      rating: 4.9,
      reviews: 1250,
      inStock: true,
      tag: "🔥 TikTok Viral #1",
      verified: true
    },
    {
      id: "tiktok-bottle-02",
      title: "Smart LED Temperature Display Water Bottle",
      category: "Lifestyle",
      origin: "🇨🇳 China",
      country: "China",
      price: 3.20,
      unit: "pcs",
      moq: "200 pcs",
      supplier: "Shenzhen SmartLiving",
      rating: 4.8,
      reviews: 890,
      inStock: true,
      tag: "⚡ TikTok Trending",
      verified: true
    },
    {
      id: "tiktok-led-03",
      title: "RGB Music Sync LED Strip Lights (5m/10m)",
      category: "Smart Lighting",
      origin: "🇨🇳 China",
      country: "China",
      price: 2.10,
      unit: "roll",
      moq: "150 rolls",
      supplier: "Zhongshan Lighting Co.",
      rating: 4.7,
      reviews: 2300,
      inStock: true,
      tag: "🔥 TikTok Best Seller",
      verified: true
    },`;

        if (content.includes('const products = [')) {
            content = content.replace('const products = [', 'const products = [' + tiktokItems);
        } else if (content.includes('export const products = [')) {
            content = content.replace('export const products = [', 'export const products = [' + tiktokItems);
        } else {
            content = content.replace('[', '[' + tiktokItems);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('SUCCESS: TikTok products added safely without deleting anything!');
    } else {
        console.log('Products already exist.');
    }
} else {
    console.log('Error: marketplace page.tsx not found!');
}
