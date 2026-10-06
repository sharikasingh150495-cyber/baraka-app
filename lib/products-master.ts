export interface B2BProduct {
  id: string;
  title: string;
  modelNo: string;
  category: string;
  subCategory: string;
  origin: { country: string; flag: string; port: string };
  images: string[];
  pricing: {
    sample: { qty: string; price: number; label: string };
    smallLot: { qty: string; price: number; label: string };
    bulkWholesale: { qty: string; price: number; label: string };
  };
  moq: number;
  leadTime: string;
  tags: string[];
  supplier: {
    name: string;
    isGold: boolean;
    yearsVerified: number;
    responseRate: string;
    annualVolume: string;
    certifications: string[];
    location: string;
  };
  specs: Record<string, string>;
}

export const MASTER_B2B_CATALOG: B2BProduct[] = [
  // 1. Luxury Horology Japan
  {
    id: "prod-jp-horology-01",
    title: "Osaka Precision Automatic Sapphire Skeleton Chronograph (Export Lot)",
    modelNo: "OSK-SKL-2026-X",
    category: "Luxury & Horology",
    subCategory: "Mechanical Timepieces",
    origin: { country: "Japan", flag: "🇯🇵", port: "Kansai Airport / Osaka Port" },
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-71dfabb190ed?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 9 Pcs", price: 42.00, label: "Sample Testing Rate" },
      smallLot: { qty: "10 - 49 Pcs", price: 32.00, label: "Boutique Reseller Slab" },
      bulkWholesale: { qty: "50+ Pcs", price: 26.50, label: "Factory Floor MOQ" }
    },
    moq: 10,
    leadTime: "3 - 7 Days Express Air",
    tags: ["Japan Direct", "Luxury Timepiece", "High Margin"],
    supplier: {
      name: "Osaka Precision Horology Bay Co., Ltd.",
      isGold: true,
      yearsVerified: 9,
      responseRate: "99.2%",
      annualVolume: "$4.5M+",
      certifications: ["ISO 9001", "Japan Horology Guild"],
      location: "Osaka Industrial Export Zone, Japan"
    },
    specs: {
      "Movement": "Miyota 8N24 Skeleton Automatic",
      "Glass": "Double-Curved Anti-Scratch Sapphire",
      "Water Resistance": "5 ATM / 50M Pressure"
    }
  },
  // 2. Hardware Japan
  {
    id: "prod-jp-drill-04",
    title: "Makita-Grade 21V Cordless Brushless Impact Drill Set (Industrial Lot)",
    modelNo: "JP-PRO-DRILL-21V",
    category: "Hardware & Industrial",
    subCategory: "Power Tools",
    origin: { country: "Japan", flag: "🇯🇵", port: "Yokohama Port Freight" },
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 5 Sets", price: 38.00, label: "Trade Evaluation" },
      smallLot: { qty: "6 - 29 Sets", price: 29.50, label: "Hardware Mart Rate" },
      bulkWholesale: { qty: "30+ Sets", price: 22.80, label: "Container Floor Price" }
    },
    moq: 10,
    leadTime: "4 - 8 Days Overland / Sea",
    tags: ["Industrial", "Heavy Duty"],
    supplier: {
      name: "Nippon Mecha-Tech Industries",
      isGold: true,
      yearsVerified: 11,
      responseRate: "98.9%",
      annualVolume: "$18.2M+",
      certifications: ["JIS Industrial", "CE", "UL"],
      location: "Aichi Industrial Corridor, Japan"
    },
    specs: { "Battery": "Dual 4.0Ah Li-Ion", "Max Torque": "65 N.m Brushless", "Chuck": "13mm All-Metal" }
  },
  // 3. K-Beauty Sunscreen
  {
    id: "prod-kr-sunscreen-02",
    title: "Round Lab Birch Juice Moisturizing Sun Cream SPF50+ (Carton 50 Pcs)",
    modelNo: "KR-BIRCH-SUN-50",
    category: "Girls & Cosmetics",
    subCategory: "K-Beauty Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Air Cargo Express" },
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 9 Tubes", price: 6.20, label: "Sample Testing Pack" },
      smallLot: { qty: "10 - 49 Tubes", price: 4.80, label: "Beauty Reseller Slab" },
      bulkWholesale: { qty: "50+ Tubes", price: 3.90, label: "Master Case Export" }
    },
    moq: 50,
    leadTime: "2 - 4 Days Express Air to Phnom Penh",
    tags: ["TikTok Viral", "K-Beauty No.1"],
    supplier: {
      name: "Gangnam Dermo-Cosmetics Export Hub",
      isGold: true,
      yearsVerified: 7,
      responseRate: "99.7%",
      annualVolume: "$8.4M+",
      certifications: ["KFDA Certified", "ISO 22716"],
      location: "Seoul Bio-Hub, South Korea"
    },
    specs: { "Protection": "SPF 50+ PA++++", "Active": "Inje Birch Tree Sap", "Shelf Life": "36 Months" }
  },
  // 4. Thai Balm
  {
    id: "prod-th-balm-04",
    title: "Siam Herbal Green Relief Aromatic Balm Lot (Carton 48 Jars)",
    modelNo: "TH-HERBAL-BALM-50G",
    category: "Supermarket & FMCG",
    subCategory: "Pharmacy & Herbal",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Direct Truck (24h)" },
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
      "https://images.unsplash.com/photo-1608248597359-bb4439c368d1?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 5 Jars", price: 2.80, label: "Counter Display" },
      smallLot: { qty: "6 - 47 Jars", price: 1.95, label: "Pharmacy Slab" },
      bulkWholesale: { qty: "48+ Jars", price: 1.45, label: "Master Carton Price" }
    },
    moq: 48,
    leadTime: "24 - 48 Hours Overland Trucking",
    tags: ["Thai Traditional", "Fast Moving"],
    supplier: {
      name: "Bangkok Thai Herbal Dispensary Co.",
      isGold: true,
      yearsVerified: 12,
      responseRate: "99.4%",
      annualVolume: "$9.6M+",
      certifications: ["Thai FDA", "GMP Herbal"],
      location: "Nonthaburi Botanical Center, Thailand"
    },
    specs: { "Size": "50g Glass Jar", "Formula": "Clinacanthus Nutans, Menthol", "Pack": "48 Jars/Carton" }
  },
  // 5. Japan Air Compressor Pump
  {
    id: "prod-jp-pump-03",
    title: "Osaka Industrial Ultra-Quiet Cordless High-Pressure Pump & Compressor",
    modelNo: "OSK-AIR-PRO-150",
    category: "Hardware & Industrial",
    subCategory: "Pneumatics & Tools",
    origin: { country: "Japan", flag: "🇯🇵", port: "Kobe Port / Express Air" },
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 3 Units", price: 34.00, label: "Testing Unit" },
      smallLot: { qty: "4 - 19 Units", price: 26.50, label: "Workshop Slab" },
      bulkWholesale: { qty: "20+ Units", price: 21.00, label: "Factory Bulk Floor" }
    },
    moq: 10,
    leadTime: "3 - 6 Days Air Cargo",
    tags: ["Japan Quality", "Workshop Equipment"],
    supplier: {
      name: "Kansai Heavy Pneumatics Ltd.",
      isGold: true,
      yearsVerified: 10,
      responseRate: "99.0%",
      annualVolume: "$15.4M+",
      certifications: ["JIS Approved", "CE"],
      location: "Kobe Machinery Park, Japan"
    },
    specs: { "Max Pressure": "150 PSI Auto Shutoff", "Battery": "12V 6000mAh", "Noise": "< 65dB" }
  },
  // 6. Thailand Sport Sneakers
  {
    id: "prod-th-sneakers-03",
    title: "Bangkok Air-Cushion Breathable Sport Sneakers (Master Carton 24 Pairs)",
    modelNo: "BKK-AIR-SPORT-V3",
    category: "Fashion & Footwear",
    subCategory: "Athletic Shoes",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet / Aranyaprathet Border" },
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 5 Pairs", price: 16.50, label: "Quality Inspection" },
      smallLot: { qty: "6 - 23 Pairs", price: 13.00, label: "Market Wholesaler" },
      bulkWholesale: { qty: "24+ Pairs", price: 11.50, label: "Direct Factory Floor" }
    },
    moq: 24,
    leadTime: "24 - 48 Hours Overland Trucking",
    tags: ["Fast Moving", "Borders Trade"],
    supplier: {
      name: "Siam Footwear Precision Co., Ltd.",
      isGold: true,
      yearsVerified: 14,
      responseRate: "99.1%",
      annualVolume: "$12.0M+",
      certifications: ["Thai Green Label", "ISO 9001"],
      location: "Samut Prakan Manufacturing District, Thailand"
    },
    specs: { "Sole": "Nitrogen Air Cushion TPU", "Upper": "Flyknit Mesh", "Sizes": "EU 39 - 44 Assorted" }
  },
  // 7. Tokyo Retro Gaming Console
  {
    id: "prod-jp-console-02",
    title: "Tokyo Retro 15,000-Game Linux Handheld IPS Console (Retail Ready)",
    modelNo: "TYO-RETRO-LINUX-35",
    category: "Consumer Electronics",
    subCategory: "Gaming Gear",
    origin: { country: "Japan", flag: "🇯🇵", port: "Tokyo Narita Air Cargo" },
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 4 Units", price: 27.00, label: "Store Sample Unit" },
      smallLot: { qty: "5 - 19 Units", price: 22.50, label: "Tech Shop Rate" },
      bulkWholesale: { qty: "20+ Units", price: 20.50, label: "Factory Master Crate" }
    },
    moq: 20,
    leadTime: "3 - 5 Days Priority Air",
    tags: ["Trending Tech", "Aeon Mall Impulse"],
    supplier: {
      name: "Akihabara Micro-Hardware Syndicate",
      isGold: true,
      yearsVerified: 8,
      responseRate: "98.5%",
      annualVolume: "$6.1M+",
      certifications: ["CE", "FCC", "RoHS"],
      location: "Chiyoda Tech Park, Tokyo, Japan"
    },
    specs: { "Screen": "3.5-inch IPS 640x480 OCA", "OS": "Linux 64-bit Quad-Core", "Card": "64GB Included" }
  },
  // 8. K-Beauty Pimple Patch
  {
    id: "prod-viral-pimple-patch",
    title: "Hydrocolloid Blemish Pimple Patches (Aesthetic Shapes Lot)",
    modelNo: "K-BEAUTY-PATCH-36",
    category: "Girls & Cosmetics",
    subCategory: "Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Air Cargo (2 Days)" },
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 9 Packs", price: 0.60, label: "Test Sample Pack" },
      smallLot: { qty: "10 - 99 Packs", price: 0.38, label: "Beauty Reseller Slab" },
      bulkWholesale: { qty: "100+ Packs", price: 0.22, label: "Master Carton Factory MOQ" }
    },
    moq: 100,
    leadTime: "2 - 4 Days Express Air to Phnom Penh",
    tags: ["TikTok Viral", "Girls Beauty"],
    supplier: {
      name: "Seoul Derm-Aesthetics Lab Corp.",
      isGold: true,
      yearsVerified: 6,
      responseRate: "99.5%",
      annualVolume: "$3.2M+",
      certifications: ["KFDA Approved", "ISO 22716"],
      location: "Gangnam Industrial Park, Seoul, South Korea"
    },
    specs: { "Thickness": "0.1mm Ultra-Thin", "Active": "Hydrocolloid, Tea Tree Oil", "Target Retail": "$2.50 – $4.00" }
  },
  // 9. China Stanley Tumbler
  {
    id: "prod-viral-stanley-tumbler",
    title: "Stanley-Style 40oz Insulated Stainless Steel Pastel Tumblers",
    modelNo: "CN-TUMBLER-40OZ",
    category: "Mall & Lifestyle",
    subCategory: "Drinkware",
    origin: { country: "China", flag: "🇨🇳", port: "Guangzhou Port / Shenzhen Air" },
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 5 Pcs", price: 4.50, label: "Sample Inspection" },
      smallLot: { qty: "6 - 23 Pcs", price: 3.40, label: "Retail Shopkeeper Rate" },
      bulkWholesale: { qty: "24+ Pcs", price: 2.80, label: "Factory Master Carton" }
    },
    moq: 24,
    leadTime: "4 - 7 Days Overland Trucking",
    tags: ["TikTok Viral", "Aeon Mall Shelf"],
    supplier: {
      name: "Zhejiang Vacuum Flask Industrial Group",
      isGold: true,
      yearsVerified: 12,
      responseRate: "98.7%",
      annualVolume: "$14.5M+",
      certifications: ["FDA Food Grade", "BPA Free"],
      location: "Yiwu / Jinhua Manufacturing Zone, China"
    },
    specs: { "Capacity": "40oz (1,180ml)", "Thermal": "Double-Wall Vacuum (24h Cold)", "Material": "304 Stainless" }
  },
  // 10. Thai Mama Tom Yum Noodles
  {
    id: "prod-th-mama-tomyum",
    title: "Mama Instant Noodles Shrimp Creamy Tom Yum (Carton 30 Packs)",
    modelNo: "MAMA-TY-55G",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Overland (1-2 Days)" },
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
      "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 3 Cartons", price: 7.50, label: "Store Testing Carton" },
      smallLot: { qty: "4 - 9 Cartons", price: 6.20, label: "Grocery Wholesaler" },
      bulkWholesale: { qty: "10+ Cartons", price: 5.40, label: "Direct Truckload Floor" }
    },
    moq: 10,
    leadTime: "24 - 48 Hours Direct Truck",
    tags: ["Supermarket Shelf", "Fast Moving"],
    supplier: {
      name: "Thai President Foods Public Co.",
      isGold: true,
      yearsVerified: 15,
      responseRate: "99.9%",
      annualVolume: "$45M+",
      certifications: ["Halal Certified", "GMP", "HACCP"],
      location: "Bangkok Logistics Hub, Thailand"
    },
    specs: { "Packing": "30 Packs x 55g", "Flavor": "Shrimp Creamy Tom Yum", "Shelf Life": "12 Months" }
  },
  // 11. Vietnam G7 Coffee
  {
    id: "prod-vn-g7-coffee",
    title: "G7 Trung Nguyen 3-in-1 Premium Coffee (50 Sachets Bag)",
    modelNo: "G7-TN-50S",
    category: "Supermarket & FMCG",
    subCategory: "Beverages",
    origin: { country: "Vietnam", flag: "🇻🇳", port: "Bavet / Moc Bai Express (24h)" },
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
    ],
    pricing: {
      sample: { qty: "1 - 4 Bags", price: 5.20, label: "Sample Testing Pack" },
      smallLot: { qty: "5 - 49 Bags", price: 4.10, label: "Mart Bulk Order" },
      bulkWholesale: { qty: "50+ Bags", price: 3.55, label: "Direct Container Lot" }
    },
    moq: 50,
    leadTime: "24 Hours Direct Trucking",
    tags: ["Supermarket Shelf", "Coffee Staple"],
    supplier: {
      name: "Trung Nguyen Legend Group Export",
      isGold: true,
      yearsVerified: 18,
      responseRate: "99.8%",
      annualVolume: "$65M+",
      certifications: ["ISO 9001", "Halal"],
      location: "Ho Chi Minh City, Vietnam"
    },
    specs: { "Weight": "800g (50 Sachets x 16g)", "Roast": "Micro-ground Dark Robusta", "Shelf Life": "24 Months" }
  },
  // 12. Cambodia Amru Jasmine Rice
  {
    id: "prod-kh-amru-rice",
    title: "Amru Premium Phka Rumduol Organic Jasmine Rice (25kg Sack)",
    modelNo: "AMRU-JASMINE-25KG",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Cambodia", flag: "🇰🇭", port: "Phnom Penh Mill Direct Delivery" },
    images: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Sack", price: 23.50, label: "Retail Sack" },
      smallLot: { qty: "5 - 19 Sacks", price: 20.00, label: "Local Mart Wholesale" },
      bulkWholesale: { qty: "20+ Sacks", price: 17.80, label: "Mill Truckload Direct" }
    },
    moq: 20,
    leadTime: "Same-Day Local Delivery in Phnom Penh",
    tags: ["Local Domestic Hub", "Export Quality"],
    supplier: {
      name: "Amru Rice (Cambodia) Co., Ltd.",
      isGold: true,
      yearsVerified: 11,
      responseRate: "99.7%",
      annualVolume: "$35M+",
      certifications: ["World's Best Rice Winner", "HACCP"],
      location: "Battambang Mills / Phnom Penh Depot, Cambodia"
    },
    specs: { "Grade": "100% Purity Phka Rumduol", "Packing": "25kg Woven PP Sack" }
  },
  // 13. China Wireless Earbuds TWS
  {
    id: "prod-cn-tws-earbuds",
    title: "Pro ANC Active Noise Cancelling Bluetooth 5.4 Earbuds (Master Carton 50)",
    modelNo: "CN-ANC-TWS-V54",
    category: "Consumer Electronics",
    subCategory: "Audio & Wearables",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen Air Cargo" },
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 4 Pcs", price: 8.50, label: "Sample Testing" },
      smallLot: { qty: "5 - 49 Pcs", price: 6.20, label: "Phone Shop Rate" },
      bulkWholesale: { qty: "50+ Pcs", price: 4.80, label: "Shenzhen Factory Direct" }
    },
    moq: 50,
    leadTime: "3 - 5 Days Express Air",
    tags: ["Hot Selling", "Electronics Mart"],
    supplier: {
      name: "Shenzhen Acoustic Precision Tech",
      isGold: true,
      yearsVerified: 10,
      responseRate: "99.1%",
      annualVolume: "$22M+",
      certifications: ["CE", "FCC", "RoHS"],
      location: "Baoan Tech Zone, Shenzhen, China"
    },
    specs: { "Bluetooth": "V5.4 Ultra Low Latency", "Battery": "35h with Charging Case", "ANC": "-35dB Noise Cancellation" }
  },
  // 14. South Korea Cica Serum
  {
    id: "prod-kr-cica-serum",
    title: "Centella Asiatica Calming Cica Barrier Serum (Carton 40 Bottles)",
    modelNo: "KR-CICA-SERUM-50ML",
    category: "Girls & Cosmetics",
    subCategory: "K-Beauty Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Airport Priority" },
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 5 Bottles", price: 7.00, label: "Sample Bottle" },
      smallLot: { qty: "6 - 39 Bottles", price: 5.40, label: "Salon Rate" },
      bulkWholesale: { qty: "40+ Bottles", price: 4.20, label: "Direct Factory Floor" }
    },
    moq: 40,
    leadTime: "3 - 5 Days Priority Air",
    tags: ["K-Beauty", "Viral Skincare"],
    supplier: {
      name: "Bio-Centella Lab Seoul",
      isGold: true,
      yearsVerified: 8,
      responseRate: "99.6%",
      annualVolume: "$7.5M+",
      certifications: ["KFDA Certified", "Cruelty-Free"],
      location: "Seongnam Bio-Valley, South Korea"
    },
    specs: { "Volume": "50ml Glass Dropper", "Active": "84% Centella Asiatica", "Skin Type": "Sensitive / Acne Prone" }
  },
  // 15. China 4K Dual Camera Drone
  {
    id: "prod-cn-fold-drone",
    title: "4K Dual-Camera GPS Brushless Obstacle Avoidance Drone Kit",
    modelNo: "CN-DRONE-4K-GPS",
    category: "Consumer Electronics",
    subCategory: "Drones & Cameras",
    origin: { country: "China", flag: "🇨🇳", port: "Guangzhou / Shenzhen Port" },
    images: ["https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 45.00, label: "Demo Testing" },
      smallLot: { qty: "2 - 9 Units", price: 34.00, label: "Retail Shop Rate" },
      bulkWholesale: { qty: "10+ Units", price: 27.50, label: "Master Crate Price" }
    },
    moq: 10,
    leadTime: "4 - 7 Days Overland Trucking",
    tags: ["Trending Tech", "High Margin"],
    supplier: {
      name: "Guangdong Aero-Tech Manufacturing",
      isGold: true,
      yearsVerified: 9,
      responseRate: "98.4%",
      annualVolume: "$19M+",
      certifications: ["CE", "FCC"],
      location: "Shantou Drone Valley, Guangdong, China"
    },
    specs: { "Camera": "4K EIS Dual Camera", "Flight Time": "25 Mins per Battery", "Range": "1.2 KM 5G WiFi" }
  },
  // 16. Thailand Freeze Dried Durian
  {
    id: "prod-th-durian-crisps",
    title: "Monthong 100% Freeze-Dried Premium Durian Crisps (Carton 50 Packs)",
    modelNo: "TH-DURIAN-FD-100",
    category: "Supermarket & FMCG",
    subCategory: "Snacks & Treats",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Direct" },
    images: ["https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 5 Packs", price: 3.50, label: "Taste Sample" },
      smallLot: { qty: "6 - 49 Packs", price: 2.60, label: "Tourist Mart Rate" },
      bulkWholesale: { qty: "50+ Packs", price: 2.10, label: "Direct Factory Carton" }
    },
    moq: 50,
    leadTime: "24 - 48 Hours Direct Trucking",
    tags: ["Tourist Hit", "Fast Moving"],
    supplier: {
      name: "Chanthaburi Fruit Agro Export",
      isGold: true,
      yearsVerified: 13,
      responseRate: "99.3%",
      annualVolume: "$16.5M+",
      certifications: ["GMP", "HACCP", "Halal"],
      location: "Chanthaburi Agro Hub, Thailand"
    },
    specs: { "Grade": "Grade A Monthong Durian", "Net Weight": "100g Vacuum Foil", "Shelf Life": "18 Months" }
  },
  // 17. Japan Ceremonial Matcha
  {
    id: "prod-jp-uji-matcha",
    title: "Uji Kyoto Ceremonial First-Harvest Organic Matcha Powder (1kg Bulk Tin)",
    modelNo: "JP-UJI-MATCHA-1KG",
    category: "Supermarket & FMCG",
    subCategory: "Beverages",
    origin: { country: "Japan", flag: "🇯🇵", port: "Kansai Air Cargo Express" },
    images: ["https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Tin", price: 55.00, label: "Cafe Sample Tin" },
      smallLot: { qty: "2 - 9 Tins", price: 42.00, label: "Barista Wholesale" },
      bulkWholesale: { qty: "10+ Tins", price: 35.00, label: "Plantation Direct Floor" }
    },
    moq: 5,
    leadTime: "3 - 5 Days Air Cargo",
    tags: ["Cafe Supply", "JAS Organic"],
    supplier: {
      name: "Kyoto Uji Green Tea Heritage Ltd.",
      isGold: true,
      yearsVerified: 20,
      responseRate: "99.9%",
      annualVolume: "$11M+",
      certifications: ["JAS Organic", "ISO 22000"],
      location: "Uji, Kyoto, Japan"
    },
    specs: { "Origin": "100% Uji, Kyoto Single Origin", "Harvest": "First Spring Flush Stone Milled", "Net Weight": "1,000g Vacuum Tin" }
  },
  // 18. China 300W Solar Street Flood Light
  {
    id: "prod-cn-solar-street",
    title: "300W IP67 Waterproof Solar Street Flood Light with Radar & Remote",
    modelNo: "CN-SOLAR-300W-PRO",
    category: "Hardware & Industrial",
    subCategory: "Solar & Lighting",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen / Ningbo Port" },
    images: ["https://images.unsplash.com/photo-1508873696983-2df57046475a?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 22.00, label: "Sample Testing" },
      smallLot: { qty: "2 - 19 Units", price: 16.50, label: "Contractor Rate" },
      bulkWholesale: { qty: "20+ Units", price: 12.80, label: "Container Floor Price" }
    },
    moq: 20,
    leadTime: "6 - 10 Days Combined Freight",
    tags: ["Solar Power", "Top Seller Cambodia"],
    supplier: {
      name: "Zhongshan Green Photovoltaic Tech Co.",
      isGold: true,
      yearsVerified: 11,
      responseRate: "98.8%",
      annualVolume: "$28M+",
      certifications: ["CE", "RoHS", "IP67"],
      location: "Guzhen Lighting Capital, Zhongshan, China"
    },
    specs: { "Wattage": "300W Monocrystalline Panel", "Battery": "3.2V 30,000mAh LiFePO4", "Backup": "14-16 Hours Continuous" }
  },
  // 19. Vietnam Roasted Cashew Nuts W240
  {
    id: "prod-vn-cashew-w240",
    title: "Binh Phuoc Premium Roasted Jumbo Cashew Nuts W240 (Carton 10kg)",
    modelNo: "VN-CASHEW-W240-10K",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Vietnam", flag: "🇻🇳", port: "Bavet Border Direct Trucking" },
    images: ["https://images.unsplash.com/photo-1509912760195-257a07c3905c?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Carton", price: 68.00, label: "Sample 10kg Box" },
      smallLot: { qty: "2 - 9 Cartons", price: 58.00, label: "Wholesale Grocery" },
      bulkWholesale: { qty: "10+ Cartons", price: 49.50, label: "Direct Processing Mill" }
    },
    moq: 10,
    leadTime: "24 Hours Direct Trucking",
    tags: ["Fast Moving", "Export Standard"],
    supplier: {
      name: "Binh Phuoc Agri-Export Corporation",
      isGold: true,
      yearsVerified: 16,
      responseRate: "99.5%",
      annualVolume: "$52M+",
      certifications: ["BRCGS Food", "ISO 22000", "Halal"],
      location: "Dong Xoai, Binh Phuoc, Vietnam"
    },
    specs: { "Grade": "W240 Jumbo Whole Roasted with Silk Skin", "Packaging": "Vacuum Nitrogen Sealed 10kg" }
  },
  // 20. South Korea Collagen Jelly Sticks
  {
    id: "prod-kr-collagen-jelly",
    title: "Low Molecular Fish Collagen Pomegranate Jelly Sticks (Box 30 Sticks)",
    modelNo: "KR-COLLAGEN-POM-30",
    category: "Girls & Cosmetics",
    subCategory: "Nutraceuticals",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Airport Priority" },
    images: ["https://images.unsplash.com/photo-1550572017-edb799839443?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 5 Boxes", price: 8.50, label: "Sample Box" },
      smallLot: { qty: "6 - 49 Boxes", price: 6.20, label: "Pharmacy / Salon Rate" },
      bulkWholesale: { qty: "50+ Boxes", price: 4.90, label: "Master Case Export" }
    },
    moq: 50,
    leadTime: "2 - 4 Days Priority Air",
    tags: ["K-Beauty", "Diet & Wellness"],
    supplier: {
      name: "Seoul Bio-Nutra Tech Co.",
      isGold: true,
      yearsVerified: 9,
      responseRate: "99.7%",
      annualVolume: "$14.2M+",
      certifications: ["GMP Korea", "HACCP"],
      location: "Gangnam Bio-District, Seoul, South Korea"
    },
    specs: { "Collagen": "3,000mg Low-Molecular Fish Collagen", "Extract": "100% Spanish Pomegranate", "Count": "30 Jelly Sticks x 20g" }
  },
  // 21. Thailand ChaTraMue Tea
  {
    id: "prod-th-chatramue-tea",
    title: "ChaTraMue Original Thai Tea Red Label Leaves (Carton 24 Bags x 400g)",
    modelNo: "TH-CHATRAMUE-RED-24",
    category: "Supermarket & FMCG",
    subCategory: "Beverages",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Express" },
    images: ["https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Carton", price: 62.00, label: "Cafe Test Carton" },
      smallLot: { qty: "2 - 9 Cartons", price: 52.00, label: "Boba Shop Wholesaler" },
      bulkWholesale: { qty: "10+ Cartons", price: 44.00, label: "Truckload Floor Price" }
    },
    moq: 10,
    leadTime: "24 - 48 Hours Overland Truck",
    tags: ["Cafe Supply", "Essential Item"],
    supplier: {
      name: "Siam Tea Factory Export Channel",
      isGold: true,
      yearsVerified: 17,
      responseRate: "99.8%",
      annualVolume: "$38M+",
      certifications: ["Thai FDA", "Halal"],
      location: "Bangkok Distribution Gate, Thailand"
    },
    specs: { "Packing": "24 Foil Bags x 400g", "Type": "Black Tea with Authentic Thai Aromas" }
  },
  // 22. China Smart Watch AMOLED
  {
    id: "prod-cn-smartwatch-amoled",
    title: "Ultra 2 Titanium Case AMOLED Smart Watch with BT Calling & Heart Sensor",
    modelNo: "CN-WATCH-ULTRA-AMOLED",
    category: "Consumer Electronics",
    subCategory: "Audio & Wearables",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen Air Cargo" },
    images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 4 Pcs", price: 16.00, label: "Sample Testing" },
      smallLot: { qty: "5 - 49 Pcs", price: 11.50, label: "Tech Shop Reseller" },
      bulkWholesale: { qty: "50+ Pcs", price: 8.90, label: "Factory Bulk Floor" }
    },
    moq: 50,
    leadTime: "3 - 5 Days Priority Air",
    tags: ["Trending Tech", "Hot Seller"],
    supplier: {
      name: "Shenzhen Wearable Smart Electronics",
      isGold: true,
      yearsVerified: 8,
      responseRate: "98.9%",
      annualVolume: "$15.8M+",
      certifications: ["CE", "RoHS"],
      location: "Huaqiangbei Tech Park, Shenzhen, China"
    },
    specs: { "Screen": "2.04-inch HD AMOLED Display", "Battery": "380mAh (7 Days Standby)", "Waterproof": "IP68" }
  },
  // 23. Japan Damascus Chef Knife
  {
    id: "prod-jp-damascus-knife",
    title: "Sakai 67-Layer VG-10 Damascus Steel 8-Inch Chef Gyuto Knife Lot",
    modelNo: "JP-SAKAI-VG10-8IN",
    category: "Hardware & Industrial",
    subCategory: "Cutlery & Tools",
    origin: { country: "Japan", flag: "🇯🇵", port: "Osaka Kansai Cargo" },
    images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 3 Pcs", price: 38.00, label: "Chef Evaluation" },
      smallLot: { qty: "4 - 19 Pcs", price: 28.50, label: "Boutique Knife Shop" },
      bulkWholesale: { qty: "20+ Pcs", price: 22.00, label: "Forge Floor Direct" }
    },
    moq: 20,
    leadTime: "4 - 7 Days Air Cargo",
    tags: ["Japan Craft", "High Margin"],
    supplier: {
      name: "Sakai Master Cutlery Guild",
      isGold: true,
      yearsVerified: 15,
      responseRate: "99.4%",
      annualVolume: "$8.2M+",
      certifications: ["Japan Handcraft Master Certification"],
      location: "Sakai, Osaka, Japan"
    },
    specs: { "Steel Core": "Japanese VG-10 Core (60±2 HRC)", "Handle": "Ergonomic Resin Stabilized Burlwood" }
  },
  // 24. Cambodia Kampot Pepper GI
  {
    id: "prod-kh-kampot-pepper",
    title: "GI Certified Kampot Black Peppercorns Premium Export Grade (5kg Vacuum)",
    modelNo: "KH-KAMPOT-GI-5KG",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Cambodia", flag: "🇰🇭", port: "Kampot Farm Direct to Phnom Penh" },
    images: ["https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Bag (5kg)", price: 48.00, label: "Sample Testing Bag" },
      smallLot: { qty: "2 - 9 Bags", price: 39.00, label: "Spice Reseller" },
      bulkWholesale: { qty: "10+ Bags", price: 32.50, label: "Plantation Direct Floor" }
    },
    moq: 5,
    leadTime: "Same-Day / Next-Day Delivery",
    tags: ["World Famous GI", "Local Cambodia Hub"],
    supplier: {
      name: "Kampot Pepper Promotion Association KPPA",
      isGold: true,
      yearsVerified: 12,
      responseRate: "99.8%",
      annualVolume: "$6.5M+",
      certifications: ["EU Protected Geographical Indication GI", "Ecocert Organic"],
      location: "Kampot Hills Organic Farms, Cambodia"
    },
    specs: { "Purity": "100% Hand-Sorted Sun-Dried Organic", "Packaging": "Heavy Vacuum Sealed Foil 5kg" }
  },
  // 25. China EV Wallbox Charger
  {
    id: "prod-cn-ev-wallbox",
    title: "7kW 32A Type 2 Smart Home EV Wallbox Charger with RFID Card & App",
    modelNo: "CN-EV-7KW-RFID",
    category: "Hardware & Industrial",
    subCategory: "Solar & Lighting",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen Port" },
    images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 110.00, label: "Evaluation Unit" },
      smallLot: { qty: "2 - 9 Units", price: 88.00, label: "Automotive Shop Rate" },
      bulkWholesale: { qty: "10+ Units", price: 72.00, label: "Factory Bulk Floor" }
    },
    moq: 10,
    leadTime: "6 - 10 Days Combined Freight",
    tags: ["EV Trend", "High Margin Tech"],
    supplier: {
      name: "Shenzhen EV-Power Dynamics Co.",
      isGold: true,
      yearsVerified: 9,
      responseRate: "99.0%",
      annualVolume: "$21M+",
      certifications: ["TUV", "CE", "IP65"],
      location: "Nanshan Tech Corridor, Shenzhen, China"
    },
    specs: { "Power": "7kW 220V 32A Single Phase", "Plug": "Universal Type 2 IEC 62196", "Cable": "5-Meter Heavy Duty" }
  },
  // 26. South Korea Snail Mucin 96
  {
    id: "prod-kr-snail-mucin",
    title: "Advanced 96 Snail Mucin Power Essence Hydrating Glow (Carton 50 Pcs)",
    modelNo: "KR-SNAIL-96-100ML",
    category: "Girls & Cosmetics",
    subCategory: "K-Beauty Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Air Cargo" },
    images: ["https://images.unsplash.com/photo-1608248597359-bb4439c368d1?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 5 Pcs", price: 6.80, label: "Sample Testing" },
      smallLot: { qty: "6 - 49 Pcs", price: 5.10, label: "Beauty Shop Rate" },
      bulkWholesale: { qty: "50+ Pcs", price: 4.10, label: "Master Export Carton" }
    },
    moq: 50,
    leadTime: "2 - 4 Days Express Air",
    tags: ["TikTok No.1", "Viral Skincare"],
    supplier: {
      name: "K-Derm Bio-Tech Laboratories",
      isGold: true,
      yearsVerified: 7,
      responseRate: "99.6%",
      annualVolume: "$12M+",
      certifications: ["KFDA Certified", "ISO 22716"],
      location: "Gyeonggi-do Bio-Hub, South Korea"
    },
    specs: { "Active": "96.3% Snail Secretion Filtrate", "Net Volume": "100ml Pump Bottle" }
  },
  // 27. Thailand Cold Pressed Coconut Oil
  {
    id: "prod-th-coconut-oil",
    title: "100% Extra Virgin Cold-Pressed Organic Coconut Oil (Carton 24 x 500ml)",
    modelNo: "TH-COCO-EV-500ML",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Direct" },
    images: ["https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Carton", price: 48.00, label: "Sample 24 Jars" },
      smallLot: { qty: "2 - 9 Cartons", price: 39.00, label: "Mart Bulk Rate" },
      bulkWholesale: { qty: "10+ Cartons", price: 32.00, label: "Direct Factory Floor" }
    },
    moq: 10,
    leadTime: "24 - 48 Hours Direct Truck",
    tags: ["Organic", "Fast Moving"],
    supplier: {
      name: "Samui Agro-Organic Industry Co.",
      isGold: true,
      yearsVerified: 14,
      responseRate: "99.4%",
      annualVolume: "$14M+",
      certifications: ["USDA Organic", "EU Organic", "GMP"],
      location: "Surat Thani Agro Belt, Thailand"
    },
    specs: { "Method": "Centrifugal Cold-Pressed (No Heat)", "Packaging": "Glass Jar 500ml x 24 per Carton" }
  },
  // 28. China Dual-Motor Standing Desk
  {
    id: "prod-cn-standing-desk",
    title: "Dual-Motor Ergonomic Electric Height Adjustable Standing Desk Frame",
    modelNo: "CN-DESK-DUAL-MOTOR",
    category: "Mall & Lifestyle",
    subCategory: "Furniture & Office",
    origin: { country: "China", flag: "🇨🇳", port: "Ningbo / Sihanoukville Sea Freight" },
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 92.00, label: "Office Sample" },
      smallLot: { qty: "2 - 9 Units", price: 74.00, label: "Furniture Store Rate" },
      bulkWholesale: { qty: "10+ Units", price: 58.00, label: "Factory Bulk Floor" }
    },
    moq: 10,
    leadTime: "8 - 12 Days Sea / Overland Freight",
    tags: ["Office Gear", "High Margin"],
    supplier: {
      name: "Zhejiang Ergonomic Machinery Corp.",
      isGold: true,
      yearsVerified: 13,
      responseRate: "98.7%",
      annualVolume: "$32M+",
      certifications: ["BIFMA", "CE", "UL"],
      location: "Ningbo Furniture District, China"
    },
    specs: { "Motors": "Dual Silent Heavy-Duty Motors (120kg Load)", "Height Range": "60cm - 125cm with Memory Presets" }
  },
  // 29. Japan Whetstone Kit
  {
    id: "prod-jp-whetstone-kit",
    title: "Professional Japanese Double-Sided 1000/6000 Grit Water Whetstone Kit",
    modelNo: "JP-STONE-1000-6000",
    category: "Hardware & Industrial",
    subCategory: "Cutlery & Tools",
    origin: { country: "Japan", flag: "🇯🇵", port: "Kobe Port Express" },
    images: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 4 Sets", price: 14.50, label: "Sample Testing" },
      smallLot: { qty: "5 - 29 Sets", price: 10.80, label: "Tool Shop Rate" },
      bulkWholesale: { qty: "30+ Sets", price: 8.20, label: "Master Carton Factory Price" }
    },
    moq: 30,
    leadTime: "4 - 7 Days Air Freight",
    tags: ["Japan Precision", "Workshop Essential"],
    supplier: {
      name: "Kansai Abrasives Corporation",
      isGold: true,
      yearsVerified: 16,
      responseRate: "99.3%",
      annualVolume: "$6.8M+",
      certifications: ["JIS Standards"],
      location: "Kyoto / Osaka Industrial Line, Japan"
    },
    specs: { "Grit": "1000 Grit Sharpening + 6000 Grit Mirror Polish", "Accessories": "Non-Slip Bamboo Base & Angle Guide" }
  },
  // 30. Vietnam Instant Rice Pho Bowls
  {
    id: "prod-vn-pho-bowls",
    title: "Vifon Traditional Beef Pho Real Herb Broth Instant Bowls (Carton 24 Bowls)",
    modelNo: "VN-PHO-BEEF-24",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Vietnam", flag: "🇻🇳", port: "Bavet Border Express (24h)" },
    images: ["https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Carton", price: 18.00, label: "Store Sample 24 Bowls" },
      smallLot: { qty: "2 - 9 Cartons", price: 14.50, label: "Grocery Wholesaler" },
      bulkWholesale: { qty: "10+ Cartons", price: 11.90, label: "Factory Direct Floor" }
    },
    moq: 10,
    leadTime: "24 Hours Direct Trucking",
    tags: ["Supermarket Shelf", "Instant Hit"],
    supplier: {
      name: "Vietnam Food Industries Joint Stock Co.",
      isGold: true,
      yearsVerified: 19,
      responseRate: "99.8%",
      annualVolume: "$42M+",
      certifications: ["ISO 22000", "Halal"],
      location: "Ho Chi Minh City, Vietnam"
    },
    specs: { "Packing": "24 Sealed Bowls x 68g with Real Spice Sachets", "Shelf Life": "12 Months" }
  },
  // 31. China Air Fryer 8L
  {
    id: "prod-cn-airfryer-8l",
    title: "8-Liter Visible Window Touchscreen Rapid Hot Air Fryer (Retail Ready)",
    modelNo: "CN-AIRFRYER-8L-VISUAL",
    category: "Mall & Lifestyle",
    subCategory: "Kitchen & Home",
    origin: { country: "China", flag: "🇨🇳", port: "Guangzhou / Foshan Hub" },
    images: ["https://images.unsplash.com/photo-1584990347449-39906666e138?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 28.00, label: "Testing Unit" },
      smallLot: { qty: "2 - 9 Units", price: 21.50, label: "Appliance Store Rate" },
      bulkWholesale: { qty: "10+ Units", price: 16.80, label: "Container Floor Price" }
    },
    moq: 10,
    leadTime: "4 - 8 Days Combined Freight",
    tags: ["Home Appliance", "High Demand"],
    supplier: {
      name: "Foshan Smart Electrical Home Appliances Co.",
      isGold: true,
      yearsVerified: 10,
      responseRate: "98.8%",
      annualVolume: "$26M+",
      certifications: ["CE", "CB", "RoHS"],
      location: "Shunde Appliance Hub, Foshan, China"
    },
    specs: { "Capacity": "8 Liters Large Family Size", "Power": "1400W 360° Rapid Air Circulation", "Feature": "Tempered Glass Viewing Window" }
  },
  // 32. South Korea Red Ginseng
  {
    id: "prod-kr-red-ginseng",
    title: "6-Year Aged Korean Red Ginseng Extract Sticks (Box 30 Pouches)",
    modelNo: "KR-GINSENG-6YR-30",
    category: "Girls & Cosmetics",
    subCategory: "Nutraceuticals",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Priority Air" },
    images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 3 Boxes", price: 19.00, label: "Sample Box" },
      smallLot: { qty: "4 - 19 Boxes", price: 14.50, label: "Pharmacy Slab" },
      bulkWholesale: { qty: "20+ Boxes", price: 11.20, label: "Master Case Export" }
    },
    moq: 20,
    leadTime: "2 - 4 Days Priority Air",
    tags: ["Immunity", "Premium Gift"],
    supplier: {
      name: "CheongKwan Herb Extraction Corp.",
      isGold: true,
      yearsVerified: 15,
      responseRate: "99.8%",
      annualVolume: "$36M+",
      certifications: ["KFDA Certified", "GMP Korea"],
      location: "Daejeon Ginseng Industrial Valley, South Korea"
    },
    specs: { "Ginseng Age": "Strictly 6-Year-Old Roots", "Extract Ratio": "100% Purity 10ml x 30 Pouches" }
  },
  // 33. China 65W 50,000mAh Power Bank
  {
    id: "prod-cn-powerbank-50k",
    title: "50,000mAh 65W PD Laptop & Phone Ultra-Fast Charging Power Bank",
    modelNo: "CN-PB-50000-65W",
    category: "Consumer Electronics",
    subCategory: "Power & Cables",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen Air Cargo" },
    images: ["https://images.unsplash.com/photo-1609592426806-3b2d186e8853?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 4 Units", price: 18.50, label: "Sample Testing" },
      smallLot: { qty: "5 - 19 Units", price: 14.00, label: "Mobile Shop Rate" },
      bulkWholesale: { qty: "20+ Units", price: 10.90, label: "Factory Bulk Floor" }
    },
    moq: 20,
    leadTime: "3 - 5 Days Priority Air",
    tags: ["Best Seller", "Electronics Mart"],
    supplier: {
      name: "Shenzhen Volt-Battery Industries",
      isGold: true,
      yearsVerified: 9,
      responseRate: "99.1%",
      annualVolume: "$18.5M+",
      certifications: ["UN38.3", "MSDS", "CE"],
      location: "Longgang Tech District, Shenzhen, China"
    },
    specs: { "Cell Capacity": "50,000mAh Grade-A Li-Polymer", "Output": "65W USB-C PD Fast Charge", "Display": "LED Smart % Meter" }
  },
  // 34. Cambodia Palm Sugar Organic
  {
    id: "prod-kh-palm-sugar",
    title: "Kampong Speu Organic Artisanal Palm Sugar Blocks (10kg Export Crate)",
    modelNo: "KH-PALM-SUGAR-10KG",
    category: "Supermarket & FMCG",
    subCategory: "Pantry Staples",
    origin: { country: "Cambodia", flag: "🇰🇭", port: "Kampong Speu to Phnom Penh Depots" },
    images: ["https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Crate (10kg)", price: 26.00, label: "Sample Crate" },
      smallLot: { qty: "2 - 9 Crates", price: 21.00, label: "Wholesale Grocery" },
      bulkWholesale: { qty: "10+ Crates", price: 17.50, label: "Direct Cooperative Price" }
    },
    moq: 5,
    leadTime: "Same-Day Delivery across Phnom Penh",
    tags: ["GI Protected", "100% Organic"],
    supplier: {
      name: "Kampong Speu Palm Sugar Association",
      isGold: true,
      yearsVerified: 10,
      responseRate: "99.5%",
      annualVolume: "$4.8M+",
      certifications: ["EU GI Indication", "ECOCERT Organic"],
      location: "Kampong Speu Province, Cambodia"
    },
    specs: { "Purity": "100% Pure Borassus Flabellifer Sap", "Form": "Natural Unrefined Solid Cakes 10kg" }
  },
  // 35. China 4D 16-Line Laser Level
  {
    id: "prod-cn-laser-level",
    title: "16-Line 4D Self-Leveling Green Beam Laser Level with Dual Batteries & Tripod",
    modelNo: "CN-LASER-4D-16L",
    category: "Hardware & Industrial",
    subCategory: "Power Tools",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen / Yiwu Express" },
    images: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 3 Sets", price: 24.00, label: "Contractor Sample" },
      smallLot: { qty: "4 - 19 Sets", price: 18.50, label: "Hardware Mart Slab" },
      bulkWholesale: { qty: "20+ Sets", price: 14.20, label: "Factory Bulk Floor" }
    },
    moq: 20,
    leadTime: "4 - 7 Days Overland Trucking",
    tags: ["Contractor Choice", "Heavy Duty"],
    supplier: {
      name: "Zhejiang Laser Precision Instruments Co.",
      isGold: true,
      yearsVerified: 8,
      responseRate: "99.0%",
      annualVolume: "$13.5M+",
      certifications: ["CE", "RoHS"],
      location: "Jinhua Tool Base, Zhejiang, China"
    },
    specs: { "Beam": "16-Line 360° Ultra-Bright German Green Laser", "Accuracy": "±1mm / 7m", "Batteries": "Dual 2400mAh Li-Ion" }
  },
  // 36. South Korea Lip Sleeping Mask
  {
    id: "prod-kr-lip-mask",
    title: "Berry Nourishing Overnight Lip Sleeping Mask (Carton 60 Tins x 20g)",
    modelNo: "KR-LIP-MASK-20G",
    category: "Girls & Cosmetics",
    subCategory: "K-Beauty Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Priority Air Cargo" },
    images: ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80"],
    pricing: {
      sample: { qty: "1 - 5 Tins", price: 4.20, label: "Sample Testing" },
      smallLot: { qty: "6 - 59 Tins", price: 3.10, label: "Cosmetic Wholesaler" },
      bulkWholesale: { qty: "60+ Tins", price: 2.30, label: "Master Case Export" }
    },
    moq: 60,
    leadTime: "2 - 4 Days Express Air",
    tags: ["Girls Beauty", "TikTok Hit"],
    supplier: {
      name: "Seoul Dermo-Aroma Lab",
      isGold: true,
      yearsVerified: 7,
      responseRate: "99.4%",
      annualVolume: "$6.8M+",
      certifications: ["KFDA Certified", "ISO 22716"],
      location: "Seoul Gangnam Hub, South Korea"
    },
    specs: { "Key Active": "Berry Fruit Complex & Vitamin C", "Net Weight": "20g Jar with Mini Silicone Spatula" }
  },
  // 37. Thailand Muay Thai Gloves
  {
    id: "prod-th-muay-thai-gloves",
    title: "Bangkok Fairtex-Grade Genuine Cowhide Leather Muay Thai Boxing Gloves",
    modelNo: "TH-GLOVES-BOX-PRO",
    category: "Mall & Lifestyle",
    subCategory: "Sports & Gym",
    origin: { country: "Thailand", flag: "🇹🇭", port: "Poipet Border Direct" },
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Pair", price: 32.00, label: "Gym Evaluation" },
      smallLot: { qty: "2 - 9 Pairs", price: 24.50, label: "Combat Sports Shop" },
      bulkWholesale: { qty: "10+ Pairs", price: 18.80, label: "Direct Factory Floor" }
    },
    moq: 10,
    leadTime: "24 - 48 Hours Direct Trucking",
    tags: ["Gym Gear", "Authentic Thai Leather"],
    supplier: {
      name: "Siam Fight Gear Industrial Group",
      isGold: true,
      yearsVerified: 16,
      responseRate: "99.2%",
      annualVolume: "$10.5M+",
      certifications: ["WMC Approved Muay Thai Gear"],
      location: "Bangkok Sports Manufacturing Hub, Thailand"
    },
    specs: { "Material": "100% Genuine Thai Cowhide Leather", "Padding": "Triple-Layered High-Density Foam", "Weights": "10oz, 12oz, 14oz Assorted" }
  },
  // 38. China Deep Tissue Massage Gun
  {
    id: "prod-cn-massage-gun",
    title: "Brushless Motor 30-Speed Deep Tissue Percussion Massage Gun (6 Heads)",
    modelNo: "CN-GUN-30SPD-6H",
    category: "Mall & Lifestyle",
    subCategory: "Sports & Gym",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen / Guangzhou Port" },
    images: ["https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 17.50, label: "Sample Testing" },
      smallLot: { qty: "2 - 19 Units", price: 12.80, label: "Gym Shop Rate" },
      bulkWholesale: { qty: "20+ Units", price: 9.80, label: "Factory Bulk Floor" }
    },
    moq: 20,
    leadTime: "4 - 7 Days Overland Freight",
    tags: ["Health Tech", "High Demand"],
    supplier: {
      name: "Zhejiang Health Precision Tech Co.",
      isGold: true,
      yearsVerified: 9,
      responseRate: "98.9%",
      annualVolume: "$24M+",
      certifications: ["CE", "FCC", "RoHS"],
      location: "Yongkang Hardware Hub, Zhejiang, China"
    },
    specs: { "Motor": "24V High-Torque Brushless Motor (< 45dB)", "Speeds": "30 Levels with Smart Touch LCD", "Heads": "6 Interchangeable Massage Attachments" }
  },
  // 39. South Korea Bio-Cellulose Sheet Masks
  {
    id: "prod-kr-sheet-masks",
    title: "Hyaluronic Acid Multi-Peptide Deep Moisture Bio-Cellulose Facial Sheet Masks (100 Pcs)",
    modelNo: "KR-MASK-BIO-100",
    category: "Girls & Cosmetics",
    subCategory: "K-Beauty Skincare",
    origin: { country: "South Korea", flag: "🇰🇷", port: "Incheon Priority Air" },
    images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"],
    pricing: {
      sample: { qty: "10 Pcs", price: 0.85, label: "Salon Sample" },
      smallLot: { qty: "20 - 99 Pcs", price: 0.55, label: "Beauty Store Rate" },
      bulkWholesale: { qty: "100+ Pcs", price: 0.35, label: "Master Box Factory Price" }
    },
    moq: 100,
    leadTime: "2 - 4 Days Express Air",
    tags: ["Girls Beauty", "Salon Essential"],
    supplier: {
      name: "Bio-Cellulose Korea Labs Corp.",
      isGold: true,
      yearsVerified: 8,
      responseRate: "99.7%",
      annualVolume: "$9.5M+",
      certifications: ["KFDA Certified", "ISO 22716 CGMP"],
      location: "Seoul Gangnam Bio-District, South Korea"
    },
    specs: { "Material": "100% Coconut Fermented Natural Bio-Cellulose", "Essence": "25ml Rich Hyaluronic Acid per Pouch" }
  },
  // 40. China Ultra-Slim Folding Walking Pad Treadmill
  {
    id: "prod-cn-walking-pad",
    title: "Under-Desk Ultra-Slim Folding Walking Pad Treadmill with Remote & LED",
    modelNo: "CN-WALK-SLIM-A1",
    category: "Mall & Lifestyle",
    subCategory: "Sports & Gym",
    origin: { country: "China", flag: "🇨🇳", port: "Shenzhen to Sihanoukville Sea Freight" },
    images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"],
    pricing: {
      sample: { qty: "1 Unit", price: 95.00, label: "Evaluation Unit" },
      smallLot: { qty: "2 - 9 Units", price: 78.00, label: "Gym Rate" },
      bulkWholesale: { qty: "10+ Units", price: 65.00, label: "Direct Factory Bulk Floor" }
    },
    moq: 10,
    leadTime: "8 - 12 Days Combined Freight",
    tags: ["Gym Gear", "TikTok Viral"],
    supplier: {
      name: "Zhejiang Intelligent Fitness Tech Co., Ltd.",
      isGold: true,
      yearsVerified: 9,
      responseRate: "98.8%",
      annualVolume: "$16M+",
      certifications: ["CE", "FCC", "RoHS"],
      location: "Yongkang Hardware Capital, Zhejiang, China"
    },
    specs: { "Speed": "0.5 - 6.0 km/h with Remote", "Motor": "110kg Brushless Silent Motor", "Thickness": "Folds flat to 12cm" }
  }
];