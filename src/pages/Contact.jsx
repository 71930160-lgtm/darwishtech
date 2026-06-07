import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { useCart } from '../CartContext';
import { useReveal, useScrollTop } from '../hooks/useReveal';

const FAQS = [
  { q:'How long does delivery take?', a:'Standard delivery is 1–3 business days. Express 24h shipping is available at checkout. All orders placed before 2PM ship the same day.' },
  { q:'Do you price match?', a:'Yes. If you find the same product in stock at an authorized retailer for less, send us a link and we\'ll match or beat it. The item must be identical (same SKU, new condition).' },
  { q:'What is your return policy?', a:'30-day no-hassle returns on all products. Items must be in original packaging. Return shipping is free if the item is faulty. For change-of-mind returns, a $9 label fee applies.' },
  { q:'Can you help me pick parts for my build?', a:'Absolutely. Use the contact form, mention your budget and what you want to do (gaming, streaming, rendering, etc.) and a team member will put together a parts list for you — free of charge.' },
  { q:'Are all products covered by warranty?', a:'Yes. All products carry the manufacturer\'s warranty, which averages 3 years across our catalogue. We also offer extended warranty plans at checkout.' },
  { q:'Do you ship internationally?', a:'Currently we ship to KSA, UAE, and Egypt. International orders ship via DHL Express (5–7 business days). Duties and import taxes are the buyer\'s responsibility.' },
];

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const HOURS = [
  { day:'Monday', time:'9:00 AM – 7:00 PM' },
  { day:'Tuesday', time:'9:00 AM – 7:00 PM' },
  { day:'Wednesday', time:'9:00 AM – 7:00 PM' },
  { day:'Thursday', time:'9:00 AM – 7:00 PM' },
  { day:'Friday', time:'9:00 AM – 8:00 PM' },
  { day:'Saturday', time:'10:00 AM – 6:00 PM' },
  { day:'Sunday', time:'Closed' },
];

export default function Contact() {
  useScrollTop();
  useReveal();
  const { addToast } = useCart();
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ first:'', last:'', email:'', topic:'', order:'', message:'' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const today = DAYS[new Date().getDay()];

  const handleSubmit = () => {
    if (!form.first || !form.email || !form.message) {
      addToast('Missing Fields', 'Name, email and message are required.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      addToast('Message Sent!', 'We\'ll reply within 24 hours.');
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <>
      <Ticker />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb mb-2 reveal"><Link to="/">Home</Link> › <span>Contact</span></div>
          <span className="section-tag reveal">// Reach Out</span>
          <h1 className="reveal reveal-d1">Contact <span style={{ color:'var(--accent)' }}>Us</span></h1>
          <p className="section-sub mt-3 reveal reveal-d2" style={{ maxWidth:480 }}>
            Have a question about a product, need help with your build, or want to track an order? Our team of actual builders is here to help — no bots, no scripts.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-5 border-b">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap:'2rem', alignItems:'start' }}>

            {/* FORM */}
            <div className="contact-card reveal">
              <span className="section-tag mb-2">// Send a Message</span>
              <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, textTransform:'uppercase', fontSize:'1.5rem', marginBottom:'1.5rem' }}>
                We'll Reply Within 24h
              </h3>
              {sent && (
                <div style={{ background:'rgba(42,157,42,0.1)', border:'1px solid #2a9d2a', padding:'1rem', marginBottom:'1rem', fontSize:'0.85rem', color:'#2a9d2a', fontFamily:"'Space Mono',monospace" }}>
                  ✓ Message sent! We'll get back to you shortly.
                </div>
              )}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                <div>
                  <label className="form-label">First Name</label>
                  <input className="tz-input" placeholder="Asaad" value={form.first} onChange={e=>setForm({...form,first:e.target.value})} />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input className="tz-input" placeholder="Darwish" value={form.last} onChange={e=>setForm({...form,last:e.target.value})} />
                </div>
              </div>
              <div style={{ marginTop:'1rem' }}>
                <label className="form-label">Email Address</label>
                <input className="tz-input" type="email" placeholder=" your email@gmail.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
              </div>
              <div style={{ marginTop:'1rem' }}>
                <label className="form-label">Topic</label>
                <select className="tz-select" value={form.topic} onChange={e=>setForm({...form,topic:e.target.value})}>
                  <option value="">— Select a topic —</option>
                  <option>Order / Shipping Question</option>
                  <option>Product Advice / Build Help</option>
                  <option>Returns &amp; Warranty</option>
                  <option>Price Match Request</option>
                  <option>Stock Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginTop:'1rem' }}>
                <label className="form-label">Order Number (Optional)</label>
                <input className="tz-input" placeholder="e.g. DT-2026-XXXXX" value={form.order} onChange={e=>setForm({...form,order:e.target.value})} />
              </div>
              <div style={{ marginTop:'1rem' }}>
                <label className="form-label">Message</label>
                <textarea className="tz-input" rows={5} placeholder="Describe your question or issue in detail..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
              </div>
              <div style={{ marginTop:'1.5rem', display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
                <button className="btn-primary" onClick={handleSubmit} disabled={sending} style={{ opacity:sending?0.7:1 }}>
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'0.6rem', color:'var(--muted)' }}>// No spam. Ever.</span>
              </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
              {/* Info */}
              <div className="contact-card reveal reveal-d1">
                <span className="section-tag mb-3">// Get In Touch</span>
                {[
                  { icon:'📍', label:'Location', value:'lebanon-Tyre-qlayle main street' },
                  { icon:'✉️', label:'Email', value:'support@darwishtech.com' },
                  { icon:'📞', label:'Phone', value:'+961 81-059896' },
                  { icon:'💬', label:'Discord', value:'discord.gg/darwishtech' },
                ].map(item => (
                  <div key={item.label} className="info-item" style={{ marginBottom:item.label==='Discord'?0:undefined }}>
                    <div className="info-icon">{item.icon}</div>
                    <div><div className="info-label">{item.label}</div><div className="info-value">{item.value}</div></div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="contact-card reveal reveal-d2">
                <span className="section-tag mb-3">// Store Hours</span>
                {HOURS.map(h => (
                  <div key={h.day} className={`hours-row${h.day===today?' today':''}`}>
                    <span className="hours-day">{h.day}</span>
                    <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                      {h.day===today && <span className="hours-badge">Today</span>}
                      <span className={`hours-time${h.time==='Closed'?' closed':''}`}>{h.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="map-block reveal reveal-d3">
                <div className="map-grid" />
                <div className="map-pin">
                  <div className="map-pin-dot" />
                  <div className="map-pin-label">DARWISH TECH HQ</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg2 border-b">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'4rem', alignItems:'start' }}>
            <div className="reveal">
              <span className="section-tag">// Quick Answers</span>
              <h2 className="section-heading">FAQ</h2>
              <p className="section-sub mt-3">Most questions answered here. Still stuck? Use the form above.</p>
            </div>
            <div>
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq===i?' open':''} reveal reveal-d${(i%4)+1}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                    {faq.q}
                    <span className="faq-arrow">+</span>
                  </button>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="py-5 border-b">
        <div className="container">
          <span className="section-tag reveal">// Other Ways to Reach Us</span>
          <h2 className="section-heading mb-4 reveal">Support Channels</h2>
          <div className="grid grid-4" style={{ gap:'1rem' }}>
            {[
              { icon:'📧', t:'Email Support', d:'support@darwishtech.com — we reply within 24 hours, usually much faster.' },
              { icon:'💬', t:'Discord Community', d:'Join 12,000+ builders in our Discord. Get advice, showcase builds, and chat live.' },
              { icon:'📞', t:'Phone Support', d:'Call us Mon–Fri, 9AM–7PM PST. Real staff, no hold music robot mazes.' },
              { icon:'🏪', t:'Walk-In Store', d:'Visit us at 142 Silicon Ave, SF. Bring your rig — we\'ll take a look in person.' },
            ].map((ch, i) => (
              <div key={ch.t} className={`why-card reveal reveal-d${i+1}`}>
                <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{ch.icon}</div>
                <div className="why-title">{ch.t}</div>
                <div className="why-desc">{ch.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
