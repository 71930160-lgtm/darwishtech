import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { useReveal, useScrollTop } from '../hooks/useReveal';

const FEATURED_IDS = ['rtx4070','ddr5-32gb','i9-14900k','z790','990pro','seasonic850'];

export default function Home() {
  useScrollTop();
  useReveal();
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id));

  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '3rem 1rem' }}>
          <div style={{ maxWidth: 560 }}>
            <span className="hero-tag reveal">PC Components &amp; Peripherals</span>
            <h1 className="reveal reveal-d1">Build Your<em>Dream Rig</em></h1>
            <p className="hero-sub reveal reveal-d2">Top-tier hardware, real prices, zero fluff. The parts you actually need from brands that actually matter.</p>
            <div className="flex gap-3 flex-wrap reveal reveal-d3">
              <Link to="/products" className="btn-primary">Shop Hardware →</Link>
              <Link to="/about" className="btn-outline">Our Story</Link>
            </div>
            <div className="hero-stats reveal reveal-d4">
              <div><span className="stat-n">500+</span><span className="stat-l">Products</span></div>
              <div><span className="stat-n">3yr</span><span className="stat-l">Avg Warranty</span></div>
              <div><span className="stat-n">24h</span><span className="stat-l">Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-5 bg2 border-b">
        <div className="container">
          <div className="flex justify-between items-end mb-4">
            <div className="reveal">
              <span className="section-tag">// Hardware Categories</span>
              <h2 className="section-heading">Build by Component</h2>
            </div>
            <Link to="/products" className="btn-ghost reveal">View All →</Link>
          </div>
          <div className="grid grid-4" style={{ gap: '0.5rem' }}>
            {CATEGORIES.slice(0, 8).map((cat, i) => (
              <Link to={`/products#${cat.id}`} key={cat.id} className={`cat-card reveal reveal-d${(i % 4) + 1}`}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '0.9rem' }}>{cat.icon}</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem', color: 'var(--text)' }}>{cat.label}</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cat.count} models</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-4">
        <div className="container">
          <div className="promo-banner flex items-center justify-between flex-wrap gap-3 reveal">
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>// Limited Time Deal</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>
                Get <span style={{ color: 'var(--accent)' }}>15% off</span> all RTX 40-series cards this week
              </div>
            </div>
            <Link to="/products" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Grab the Deal →</Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-5 border-b">
        <div className="container">
          <span className="section-tag reveal">// Featured Products</span>
          <h2 className="section-heading mb-2 reveal">Hot Right Now</h2>
          <p className="section-sub mb-4 reveal">Handpicked hardware with the best price-to-performance this month.</p>
          <div className="grid grid-3" style={{ gap: '1rem' }}>
            {featured.map((p, i) => (
              <div key={p.id} className={`reveal reveal-d${(i % 3) + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4 reveal">
            <Link to="/products" className="btn-primary">See All Products →</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-5 border-b">
        <div className="container">
          <span className="section-tag reveal">// Why DARWISH TECH</span>
          <h2 className="section-heading mb-4 reveal">The Difference</h2>
          <div className="grid grid-4" style={{ gap: '0.5rem' }}>
            {[
              { n:'01', t:'Real Stock, Always', d:'No ghost listings. If it\'s on the site, it\'s in the warehouse. Updated twice daily.' },
              { n:'02', t:'Price Match', d:'Found it cheaper somewhere else? Show us and we\'ll beat it. No questions asked.' },
              { n:'03', t:'Expert Support', d:'Our staff actually builds PCs. Real advice from people who know the hardware.' },
              { n:'04', t:'30-Day Returns', d:'Bought the wrong part? Returns are free, fast and no-hassle for 30 days.' },
            ].map((w, i) => (
              <div key={w.n} className={`why-card reveal reveal-d${i + 1}`}>
                <div className="why-num">{w.n}</div>
                <div className="why-title">{w.t}</div>
                <div className="why-desc">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
