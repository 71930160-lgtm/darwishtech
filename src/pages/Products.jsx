import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { useReveal, useScrollTop } from '../hooks/useReveal';

export default function Products() {
  useScrollTop();
  useReveal();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setActiveCat(id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  const filtered = PRODUCTS.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.specs.toLowerCase().includes(q);
    const matchCat = !activeCat || p.cat === activeCat;
    return matchSearch && matchCat;
  });

  const groupedCats = activeCat
    ? CATEGORIES.filter(c => c.id === activeCat)
    : CATEGORIES;

  return (
    <>
      <Ticker />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb mb-2"><a href="/">Home</a> › <span>Products</span></div>
          <h1>All Products</h1>
          <p className="section-sub">Browse our full range of PC hardware and peripherals</p>
          <div className="search-wrap mt-3">
            <input
              className="search-input"
              placeholder="Search products, brands…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div style={{ display: 'flex' }}>
        {/* SIDEBAR */}
        <div className="sidebar">
          <span className="filter-title">// Categories</span>
          <ul className="filter-list">
            <li>
              <button className={!activeCat ? 'active' : ''} onClick={() => setActiveCat(null)}>
                All Products <span className="filter-count">{PRODUCTS.length}</span>
              </button>
            </li>
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <button
                  className={activeCat === cat.id ? 'active' : ''}
                  onClick={() => {
                    setActiveCat(activeCat === cat.id ? null : cat.id);
                    const el = document.getElementById(cat.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {cat.label} <span className="filter-count">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS AREA */}
        <div style={{ flex: 1, padding: '1.5rem', background: 'var(--bg)', minWidth: 0 }}>
          {groupedCats.map(cat => {
            const catProds = filtered.filter(p => p.cat === cat.id);
            if (!catProds.length) return null;
            return (
              <div key={cat.id} id={cat.id} style={{ marginBottom: '3rem', scrollMarginTop: '80px' }}>
                <div className="cat-section-title">{cat.label}</div>
                <div className="grid grid-3" style={{ gap: '1rem' }}>
                  {catProds.map((p, i) => (
                    <div key={p.id} className={`reveal reveal-d${(i % 3) + 1}`}>
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', color: 'var(--muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text)' }}>No Results Found</h3>
              <p>Try a different search term or clear the filter.</p>
              <button className="btn-primary" onClick={() => { setSearch(''); setActiveCat(null); }}>Clear Filter</button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
