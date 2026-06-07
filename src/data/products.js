export const PRODUCTS = [
  // GPU
  { id:'rtx4090', cat:'gpu', brand:'ASUS', name:'ASUS ROG STRIX RTX 4090 24GB OC', specs:'24GB GDDR6X · PCIe 4.0 · 2640 MHz Boost · Ada Lovelace', price:1699, old:1999, badge:'Top Tier', img:'images/ASUS ROG STRIX RTX 4090 24GB OC.webp' },
  { id:'rtx4080s', cat:'gpu', brand:'MSI', name:'MSI GeForce RTX 4080 Super Gaming X', specs:'16GB GDDR6X · PCIe 4.0 · 2610 MHz · DLSS 3 · Ray Tracing', price:999, old:1099, img:'images/MSI GeForce RTX 4080 Super Gaming X.webp' },
  { id:'rtx4070tis', cat:'gpu', brand:'Gigabyte', name:'Gigabyte AORUS RTX 4070 Ti Super 16GB', specs:'16GB GDDR6X · PCIe 4.0 · 2640 MHz · Ada Lovelace', price:799, old:899, badge:'Best Value', img:'images/gigabyte-geforce-rtx-4070-ti-super-gaming-oc-16g.webp' },
  { id:'rtx4070', cat:'gpu', brand:'ASUS', name:'ASUS ROG STRIX RTX 4070 OC 12GB', specs:'12GB GDDR6X · PCIe 4.0 · 2565 MHz Boost · Ada Lovelace', price:599, old:699, badge:'Best Seller', img:'images/ASUS ROG STRIX RTX 4070 OC 12GB.webp' },
  { id:'rtx4060ti', cat:'gpu', brand:'Zotac', name:'Zotac RTX 4060 Ti Twin Edge 16GB', specs:'16GB GDDR6 · PCIe 4.0 · 2535 MHz · Compact · DLSS 3', price:449, old:499, img:'images/Zotac RTX 4060 Ti Twin Edge 16GB.webp' },
  { id:'rx7600', cat:'gpu', brand:'XFX', name:'XFX Speedster RX 7600 SWFT 210 8GB', specs:'8GB GDDR6 · PCIe 4.0 · 2755 MHz · Excellent 1080p Budget', price:249, old:279, badge:'Budget', img:'images/XFX Speedster RX 7600 SWFT 210 8GB.jpg' },
  // RAM
  { id:'ddr5-64gb', cat:'ram', brand:'Corsair', name:'Corsair Dominator Titanium DDR5 64GB', specs:'2×32GB · DDR5-6400 · CL32 · RGB · Intel XMP 3.0 · AMD EXPO', price:289, old:349, badge:'Premium', img:'images/Corsair Dominator Titanium DDR5 64GB.avif' },
  { id:'ddr5-32gb', cat:'ram', brand:'Corsair', name:'Corsair Dominator Platinum DDR5 32GB', specs:'2×16GB · DDR5-6000 · CL30 · RGB · Intel XMP 3.0', price:189, old:229, badge:'Best Seller', img:'images/Corsair Dominator Platinum DDR5 32GB.avif' },
  { id:'gskill-z5', cat:'ram', brand:'G.Skill', name:'G.Skill Trident Z5 RGB DDR5 32GB', specs:'2×16GB · DDR5-6400 · CL32 · RGB · Ultra-slim design', price:169, old:199, img:'images/G.Skill Trident Z5 RGB DDR5 32GB Kit.webp' },
  { id:'kingston-fury', cat:'ram', brand:'Kingston', name:'Kingston Fury Beast DDR5 32GB', specs:'2×16GB · DDR5-5600 · CL40 · XMP 3.0 · EXPO', price:129, old:159, badge:'Value', img:'images/Kingston Fury Beast DDR5 32GB Kit.jpg' },
  { id:'ddr4-16gb', cat:'ram', brand:'Corsair', name:'Corsair Vengeance LPX DDR4 16GB', specs:'2×8GB · DDR4-3200 · CL16 · Low-profile · Intel XMP 2.0', price:49, old:65, badge:'Budget', img:'images/Corsair Vengeance LPX DDR4 16GB.jpg' },
  { id:'ripjaws-v', cat:'ram', brand:'G.Skill', name:'G.Skill Ripjaws V DDR4 32GB Kit', specs:'2×16GB · DDR4-3600 · CL18 · Red heatspreader · XMP 2.0', price:89, old:109, img:'images/G.Skill Ripjaws V DDR4 32GB Kit.jpg' },
  // CPU
  { id:'i9-14900k', cat:'cpu', brand:'Intel', name:'Intel Core i9-14900K 24-Core', specs:'24C/32T · 6.0 GHz Max Boost · 125W TDP · LGA1700 · Raptor Lake', price:399, old:499, badge:'Best Intel', img:'images/Intel Core i9-14900K 24-Core.webp' },
  { id:'i7-14700k', cat:'cpu', brand:'Intel', name:'Intel Core i7-14700K 20-Core', specs:'20C/28T · 5.6 GHz Max Boost · 125W TDP · LGA1700', price:319, old:399, img:'images/Intel Core i7-14700K 20-Core.jpg' },
  { id:'i5-14600k', cat:'cpu', brand:'Intel', name:'Intel Core i5-14600K 14-Core', specs:'14C/20T · 5.3 GHz Max Boost · 125W TDP · Best Mid-Range', price:239, old:299, badge:'Best Value', img:'images/Intel Core i5-14600K 14-Core.webp' },
  { id:'r9-7950x', cat:'cpu', brand:'AMD', name:'AMD Ryzen 9 7950X 16-Core', specs:'16C/32T · 5.7 GHz Max Boost · 170W TDP · AM5 · DDR5', price:499, old:599, badge:'Best AMD', img:'images/AMD Ryzen 9 7950X 16-Core.jpg' },
  { id:'r7-7700x', cat:'cpu', brand:'AMD', name:'AMD Ryzen 7 7700X 8-Core', specs:'8C/16T · 5.4 GHz Max Boost · 105W TDP · AM5 · DDR5', price:249, old:299, img:'images/AMD Ryzen 7 7700X 8-Core.jpg' },
  { id:'r5-7600x', cat:'cpu', brand:'AMD', name:'AMD Ryzen 5 7600X 6-Core', specs:'6C/12T · 5.3 GHz Max Boost · 105W TDP · AM5 · Best Budget', price:199, old:249, badge:'Budget AMD', img:'images/AMD Ryzen 5 7600X 6-Core.jpg' },
  // Motherboards
  { id:'z790', cat:'motherboard', brand:'ASUS', name:'ASUS ROG Maximus Z790 Hero WiFi', specs:'LGA1700 · DDR5 · PCIe 5.0 · WiFi 6E · Thunderbolt 4 · ATX', price:449, old:549, badge:'Flagship', img:'images/ASUS ROG Maximus Z790 Hero WiFi.jpg' },
  { id:'z790-msi', cat:'motherboard', brand:'MSI', name:'MSI MEG Z790 ACE MAX WiFi', specs:'LGA1700 · DDR5 · PCIe 5.0 · WiFi 7 · 4× M.2 · ATX', price:399, old:479, img:'images/MSI MEG Z790 ACE MAX WiFi.png' },
  { id:'b650-tomahawk', cat:'motherboard', brand:'MSI', name:'MSI MAG B650 Tomahawk WiFi', specs:'AM5 · DDR5 · PCIe 4.0 · WiFi 6E · 2.5G LAN · ATX', price:199, old:249, badge:'Best Value AMD', img:'images/MSI MAG B650 Tomahawk WiFi.png' },
  { id:'b760m-asus', cat:'motherboard', brand:'ASUS', name:'ASUS Prime B760M-A WiFi D4', specs:'LGA1700 · DDR4 · PCIe 4.0 · WiFi 6 · Micro-ATX · Budget', price:149, old:179, badge:'Budget', img:'images/ASUS Prime B760M-A WiFi D4.png' },
  // Storage
  { id:'990pro', cat:'storage', brand:'Samsung', name:'Samsung 990 Pro 2TB NVMe PCIe 4.0', specs:'PCIe 4.0 x4 · 7450 MB/s Read · 6900 MB/s Write · M.2 2280', price:149, old:199, badge:'Best Seller', img:'images/Samsung 990 Pro 2TB NVMe PCIe 4.0.jpg' },
  { id:'sn850x', cat:'storage', brand:'WD', name:'WD Black SN850X 2TB NVMe PCIe 4.0', specs:'PCIe 4.0 x4 · 7300 MB/s Read · 6600 MB/s Write · Gaming SSD', price:139, old:179, badge:'Gaming', img:'images/WD Black SN850X 2TB NVMe PCIe 4.0.jpg' },
  { id:'p5-plus', cat:'storage', brand:'Crucial', name:'Crucial P5 Plus 2TB PCIe 4.0 NVMe', specs:'PCIe 4.0 x4 · 6600 MB/s Read · 5000 MB/s Write · Budget NVMe', price:109, old:149, badge:'Budget', img:'images/Crucial P5 Plus 2TB PCIe 4.0 NVMe.avif' },
  { id:'barracuda-4tb', cat:'storage', brand:'Seagate', name:'Seagate Barracuda 4TB HDD 3.5"', specs:'3.5" · SATA III · 5400 RPM · 256MB Cache · Mass Storage', price:79, old:99, img:'images/818Zr2FoBWL._AC_SL1500___22464.webp' },
  // PSU
  { id:'hx1000i', cat:'psu', brand:'Corsair', name:'Corsair HX1000i 1000W Platinum', specs:'1000W · 80+ Platinum · Fully Modular · ATX 3.0 · PCIe 5.0', price:219, old:279, badge:'Premium', img:'images/Corsair HX1000i 1000W Platinum.jpg' },
  { id:'seasonic850', cat:'psu', brand:'Seasonic', name:'Seasonic Focus GX-850 850W Gold', specs:'850W · 80+ Gold · Fully Modular · 10yr Warranty · Silent Fan', price:149, old:189, badge:'Best Value', img:'images/Seasonic Focus GX-850 850W Gold.jpg' },
  { id:'mwe-gold', cat:'psu', brand:'Cooler Master', name:'Cooler Master MWE Gold 650W V2', specs:'650W · 80+ Gold · Semi-Modular · 5yr Warranty · Great Budget PSU', price:79, old:99, badge:'Budget', img:'images/Cooler Master MWE Gold 650W V2.jpg' },
  // Cases
  { id:'fractal-north', cat:'case', brand:'Fractal Design', name:'Fractal Design North ATX Mid Tower', specs:'ATX · Mesh/Wood front · 2× 140mm fans · 280mm rad · USB-C', price:129, old:149, badge:'Design Award', img:'images/Fractal Design North ATX Mid Tower.avif' },
  { id:'o11-evo-xl', cat:'case', brand:'Lian Li', name:'Lian Li PC-O11 Dynamic EVO XL', specs:'E-ATX · Tempered Glass · 6× fan spots · 360mm rad · Dual chamber', price:169, old:199, img:'images/Lian Li PC-O11 Dynamic EVO XL.jpg' },
  { id:'lancool216', cat:'case', brand:'Lian Li', name:'Lian Li LANCOOL 216 Mid-Tower ATX', specs:'ATX · Mesh front · 2× 160mm fans · Tempered Glass · USB-C', price:89, old:109, badge:'Best Value', img:'images/Lian Li LANCOOL 216 Mid-Tower ATX.jpg' },
  { id:'p300a', cat:'case', brand:'Phanteks', name:'Phanteks Eclipse P300A Mesh ATX', specs:'ATX · Mesh front panel · 1× 120mm fan · USB 3.0 · Budget pick', price:59, old:79, badge:'Budget', img:'images/Phanteks Eclipse P300A Mesh ATX.jpg' },
  // Cooling
  { id:'noctua-u14s', cat:'cooling', brand:'Noctua', name:'Noctua NH-U14S chromax.black', specs:'Tower air cooler · 140mm fan · LGA1700/AM5 · 158mm · Silent', price:89, old:109, badge:'Best Air', img:'images/Noctua NH-U14S chromax.black.jpg' },
  { id:'h150i', cat:'cooling', brand:'Corsair', name:'Corsair iCUE H150i Elite LCD 360mm', specs:'360mm AIO · 3× 120mm RGB fans · LGA1700/AM5 · LCD pump head', price:229, old:279, badge:'Flagship AIO', img:'images/Corsair iCUE H150i Elite LCD 360mm.webp' },
  { id:'arctic-360', cat:'cooling', brand:'ARCTIC', name:'ARCTIC Liquid Freezer III 360 AIO', specs:'360mm AIO · 3× 120mm fans · LGA1700/AM5 · VRM cooling', price:119, old:149, badge:'Best Value', img:'images/ARCTIC Liquid Freezer III 360 AIO.jpg' },
  // Monitors
  { id:'lg-27gp850', cat:'monitors', brand:'LG', name:'LG 27GP850-B 27" Nano IPS 165Hz', specs:'27" · 2560×1440 · Nano IPS · 165Hz · 1ms GtG · HDR400 · G-Sync', price:299, old:399, badge:'Best 1440p', img:'images/DZ_02.avif' },
  { id:'pg279qm', cat:'monitors', brand:'ASUS', name:'ASUS ROG Swift PG279QM 27" 240Hz', specs:'27" · 2560×1440 · IPS · 240Hz · 1ms · G-Sync · HDR400', price:549, old:649, img:'images/shopping.webp' },
  { id:'aoc-q24g2s', cat:'monitors', brand:'AOC', name:'AOC Q24G2S 24" IPS 165Hz 1ms', specs:'24" · 2560×1440 · IPS · 165Hz · 1ms · FreeSync · Budget 1440p', price:199, old:249, badge:'Budget', img:'images/shopping (2).webp' },
  // Mice
  { id:'g502x-plus', cat:'mouse', brand:'Logitech', name:'Logitech G502 X Plus Wireless', specs:'Wireless · HERO 25K sensor · 25600 DPI · Lightforce · RGB', price:139, old:159, badge:'Best Wireless', img:'images/Logitech G502 X Plus Wireless.webp' },
  { id:'deathadder-v3', cat:'mouse', brand:'Razer', name:'Razer DeathAdder V3 HyperSpeed', specs:'Wireless · Focus Pro 30K sensor · 30000 DPI · Optical switches', price:99, old:119, img:'images/Razer DeathAdder V3 HyperSpeed.webp' },
  { id:'g305', cat:'mouse', brand:'Logitech', name:'Logitech G305 Wireless HERO', specs:'Wireless · HERO sensor · 12000 DPI · LIGHTSPEED · 1yr battery', price:39, old:59, badge:'Budget', img:'images/Logitech G305 Wireless HERO.webp' },
  // Keyboards
  { id:'wooting-60he', cat:'keyboards', brand:'Wooting', name:'Wooting 60HE Analog Hall Effect', specs:'60% · Hall Effect switches · Rapid Trigger · Analog input · RGB', price:169, old:199, badge:'Best Mech', img:'images/Wooting 60HE Analog Hall Effect.webp' },
  { id:'g915-tkl', cat:'keyboards', brand:'Logitech', name:'Logitech G915 TKL Wireless RGB', specs:'TKL · GL Linear switches · Wireless · LIGHTSPEED · Low-profile', price:199, old:239, badge:'Premium', img:'images/Logitech G915 TKL Wireless RGB.webp' },
  { id:'q6-pro', cat:'keyboards', brand:'Keychron', name:'Keychron Q6 Pro Full-Size Wireless', specs:'Full-size · Gateron Jupiter switches · Wireless · QMK/VIA · Knob', price:199, old:229, badge:'Custom', img:'images/Keychron Q6 Pro Full-Size Wireless.jpg' },
];
const images = document.getElementById("images");
export const CATEGORIES = [
  
  { id:'gpu', label:'Graphics Cards', count:6, icon:'📟' },
  { id:'cpu', label:'Processors', count:6, icon:'🔲' },
  { id:'mouse', label:' Gaming Mouse', count:3, icon:'🖱️' },
  { id:'monitors', label:' Monitors', count:3, icon:'🖥️' },
  { id:'storage', label:'Storage / SSDs', count:4, icon:'💾' },
  { id:'psu', label:'Power Supplies', count:3, icon:'⚡' },
  { id:'case', label:'PC Cases', count:4, icon:'🖥' },
  { id:'cooling', label:'CPU Coolers', count:3, icon:'❄️' },
  { id:'motherboard', label:'Motherboards', count:4, icon:'' },
  { id:'ram', label:'RAM Memory', count:6, icon:'' },
  { id:'keyboards', label:' keyboards', count:3, icon:'' },
   
  
  
];
