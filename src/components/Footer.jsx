import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <Link to="/" className="footer-logo">DARWISH<span>TECH</span></Link>
            <p className="footer-desc">Your local source for genuine PC hardware. Building rigs since 2018.</p>
          </div>
          <div>
            <div className="footer-col-title">Hardware</div>
            <ul className="footer-links">
              <li><Link to="/products">Graphics Cards</Link></li>
              <li><Link to="/products">Processors</Link></li>
              <li><Link to="/products">Motherboards</Link></li>
              <li><Link to="/products">RAM</Link></li>
              <li><Link to="/products">Storage</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Support</div>
            <ul className="footer-links">
              <li><Link to="/contact">Get Help</Link></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">PC Build Help</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2018 DARWISH TECH. All rights reserved.</div>
          <div>
            {['FB','TW','YT','DC'].map(s => <a key={s} href="#" className="soc-link">{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
