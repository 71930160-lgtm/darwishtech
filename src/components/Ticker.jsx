import React from 'react';
const ITEMS = ['RTX 4090 In Stock','DDR5 RAM Sale','Free Shipping Over $150','AMD Ryzen 9 7950X','ASUS ROG Motherboards','NVMe SSD Deals','Corsair PSU Bundle','Lian Li Cases Restocked'];
export default function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {all.map((item, i) => <span key={i} className="ticker-item">{item}</span>)}
      </div>
    </div>
  );
}
