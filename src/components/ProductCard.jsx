import React, { useState } from 'react';
import { useCart } from '../CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, cat: product.cat, img: product.img });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="prod-card">
      <div className="prod-img">
        {product.badge && <span className="prod-badge">{product.badge}</span>}
        <img src={product.img} alt={product.name} onError={e => { e.target.style.display = 'none'; }} />
      </div>
      <div className="prod-body">
        <div className="prod-brand">{product.brand}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-specs">{product.specs}</div>
        <div className="prod-footer">
          <div className="prod-price">
            ${product.price.toLocaleString()}
            {product.old && <s>${product.old.toLocaleString()}</s>}
          </div>
          <button
            className={`btn-sm${added ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
