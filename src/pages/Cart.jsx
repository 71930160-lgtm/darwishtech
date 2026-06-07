import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { useReveal, useScrollTop } from '../hooks/useReveal';

const PROMO_CODES = { 'DARWISH10': 0.10, 'BUILD15': 0.15, 'PC20': 0.20 };
const SUGGESTIONS = ['rtx4070','z790','o11-evo-xl','h150i'];

export default function Cart() {
  useScrollTop();
  useReveal();
  const { items, removeItem, updateQty, clearCart, subtotal, addItem, addToast } = useCart();
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState(null);
  const [checking, setChecking] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const shipping = subtotal >= 150 ? 0 : 15;
  const tax = subtotal * 0.08;
  const discountAmt = subtotal * discount;
  const total = subtotal - discountAmt + shipping + tax;

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setDiscount(PROMO_CODES[code]);
      setPromoMsg({ ok: true, text: `✓ ${(PROMO_CODES[code]*100).toFixed(0)}% discount applied!` });
      addToast('Promo Applied', `${(PROMO_CODES[code]*100).toFixed(0)}% off your order!`);
    } else {
      setPromoMsg({ ok: false, text: '✗ Invalid promo code' });
    }
  };

  const handleCheckout = () => {
    if (!items.length) return;
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setOrdered(true);
      clearCart();
      addToast('Order Placed!', 'Thank you for your purchase.');
      setTimeout(() => setOrdered(false), 4000);
    }, 2000);
  };

  const suggestions = PRODUCTS.filter(p => SUGGESTIONS.includes(p.id) && !items.find(i => i.id === p.id));

  return (
    <>
      <Ticker />

      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb mb-2"><Link to="/">Home</Link> › <span>My Cart</span></div>
          <h1>🛒 My Cart</h1>
          <p className="section-sub">Review your selected items before checkout</p>
        </div>
      </div>

      <section className="py-5">
        <div className="container">

          {ordered && (
            <div style={{ background: 'rgba(42,157,42,0.1)', border: '1px solid #2a9d2a', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: 'uppercase', fontSize: '1.5rem', color: '#2a9d2a' }}>Order Placed Successfully!</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Thank you for shopping with DARWISH TECH. You'll receive a confirmation email shortly.</p>
            </div>
          )}

          <div className="cart-notice">
            <strong>// Tip:</strong> Use promo codes DARWISH10, BUILD15, or PC20 for discounts!
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 991 ? '1fr 360px' : '1fr', gap: '2rem', alignItems: 'start' }}>

              {/* ITEMS */}
              <div>
                <span className="section-tag">// Cart Items — {items.reduce((s,i)=>s+i.qty,0)} item{items.reduce((s,i)=>s+i.qty,0)!==1?'s':''}</span>
                <div style={{ marginTop: '1rem' }}>
                  {items.length === 0 && !ordered ? (
                    <div className="cart-empty">
                      <div className="cart-empty-icon">🛒</div>
                      <h3>Your Cart is Empty</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0 1.5rem', color: 'var(--muted)' }}>Looks like you haven't added anything yet.</p>
                      <Link to="/products" className="btn-primary">Browse Products →</Link>
                    </div>
                  ) : (
                    items.map(item => (
                      <div key={item.id} className="cart-row">
                        <div className="cart-row-img">
                          <img src={item.img} alt={item.name} onError={e=>e.target.style.display='none'} />
                        </div>
                        <div className="cart-row-info">
                          <div className="cart-row-name">{item.name}</div>
                          <div className="cart-row-cat">{item.cat}</div>
                          <button className="remove-btn" onClick={() => removeItem(item.id)}>✕ Remove</button>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div className="cart-row-price">${(item.price * item.qty).toLocaleString()}</div>
                          <div className="qty-wrap" style={{ marginTop: '0.5rem' }}>
                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                            <div className="qty-num">{item.qty}</div>
                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {items.length > 0 && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <Link to="/products" className="btn-ghost">← Continue Shopping</Link>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', color: 'var(--muted)' }}>// Use +/− to adjust quantities</span>
                  </div>
                )}
              </div>

              {/* ORDER SUMMARY */}
              <div className="order-box">
                <div className="order-title">// Order Summary</div>
                <div className="order-line"><span className="order-label">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="order-line"><span className="order-label">Shipping</span><span style={{ color: shipping === 0 ? '#2a9d2a' : undefined }}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                <div className="order-line"><span className="order-label">Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
                {discount > 0 && (
                  <div className="order-line"><span className="order-label" style={{ color: '#2a9d2a' }}>Discount</span><span style={{ color: '#2a9d2a' }}>-${discountAmt.toFixed(2)}</span></div>
                )}

                {/* PROMO */}
                <div style={{ margin: '1rem 0', padding: '1rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                  <div className="form-label">Promo Code</div>
                  <div className="promo-row">
                    <input className="tz-input" placeholder="e.g. DARWISH10" value={promo} onChange={e => setPromo(e.target.value)} onKeyDown={e => e.key==='Enter' && applyPromo()} />
                    <button className="btn-sm" onClick={applyPromo}>Apply</button>
                  </div>
                  {promoMsg && <div className="promo-msg" style={{ color: promoMsg.ok ? '#2a9d2a' : 'var(--accent2)' }}>{promoMsg.text}</div>}
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.54rem', color: 'var(--muted)', marginTop: '0.4rem' }}>Try: DARWISH10 · BUILD15 · PC20</div>
                </div>

                <div className="order-total"><span>Total</span><span>${total.toFixed(2)}</span></div>

                <button
                  className={`btn-primary w-full`}
                  style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', opacity: checking ? 0.7 : 1 }}
                  onClick={handleCheckout}
                  disabled={checking || !items.length}
                >
                  {checking ? 'Processing…' : 'Proceed to Checkout →'}
                </button>

                <div style={{ marginTop: '1rem' }}>
                  {[['🔒','Secure checkout · SSL encrypted'],['↩','30-day free returns'],['🚚','Same-day dispatch before 2PM']].map(([icon, text]) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>{icon}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* SUGGESTIONS */}
          {suggestions.length > 0 && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <span className="section-tag">// You May Also Like</span>
              <h3 className="section-heading mb-3" style={{ fontSize: '1.8rem' }}>Complete Your Build</h3>
              <div className="grid grid-4" style={{ gap: '1rem' }}>
                {suggestions.map((p, i) => (
                  <div key={p.id} className={`reveal reveal-d${i+1}`}>
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
