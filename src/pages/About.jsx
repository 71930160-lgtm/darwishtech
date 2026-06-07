import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import { useReveal, useScrollTop } from '../hooks/useReveal';

const TEAM = [
  { initials:'AD', name:'Asaad Darwish', role:'Co-Founder & CEO', bio:'Daily driver: custom water-cooled Threadripper. Has been building since age 14.' },
  { initials:'MA', name:'Maya Darwish', role:'Co-Founder & CTO', bio:'Benchmark obsessed. Runs every new GPU before it hits the shelf. Six monitors, no apologies.' },
  { initials:'AD', name:'Assil Darwish', role:'Head of Procurement', bio:'Tracks global chip supply like a hawk. The reason we always have stock when no one else does.' },
  { initials:'HD', name:'Hassan Darwish', role:'Lead Support Tech', bio:'Has diagnosed 3,000+ PC issues. If your build won\'t POST, Hassan is your person.' },
];
const VALUES = [
  { n:'01', t:'Honest Advice', d:'We sell you what you need, not what makes us the most money. If a cheaper part fits your build, we\'ll tell you.' },
  { n:'02', t:'Real Stock', d:'No ghost listings or bait-and-switch. If it\'s on the website, it\'s in the warehouse, ready to ship today.' },
  { n:'03', t:'Builder First', d:'We are builders ourselves. Every product is picked by someone who has actually used it and cares about performance.' },
  { n:'04', t:'Long Term', d:'We\'re not here for a quick sale. We want you to come back when you upgrade in two years — and recommend us to a friend.' },
];
const TIMELINE = [
  { year:'2018', title:'The Garage Days', text:'Asaad and Maya started DARWISH TECH out of a shared garage, importing parts and selling locally. First month revenue: $840.' },
  { year:'2019', title:'First Storefront', text:'Opened our brick-and-mortar location. 200 sq ft of shelves, one employee, and a whiteboard PC configurator on the wall.' },
  { year:'2020', title:'Going Online', text:'Launched darwishtech.com. Hit 10,000 orders in the first year. Expanded the warehouse to 4,000 sq ft to keep up with demand.' },
  { year:'2022', title:'500+ Products', text:'Crossed the 500-product milestone. Partnered directly with ASUS, Corsair, and Samsung for exclusive bundle pricing.' },
  { year:'NOW', title:'Still Building', text:'Team of 18, 48,000+ happy customers, and the same obsession with quality hardware that started it all.' },
];

export default function About() {
  useScrollTop();
  useReveal();

  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag reveal">// Our Story</span>
          <h1 className="reveal reveal-d1">We Are<em>DARWISH TECH</em></h1>
          <p className="section-sub mt-3 reveal reveal-d2" style={{ maxWidth: 460 }}>
            Born in a garage workshop in 2018, DARWISH TECH started as a passion project by two builders who were sick of buying overpriced parts from clueless retailers. Today we're one of the most trusted PC hardware stores — but we never forgot where we came from.
          </p>
          <div className="flex gap-3 flex-wrap mt-4 reveal reveal-d3">
            <Link to="/products" className="btn-primary">Shop Hardware →</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="grid grid-4 text-center">
            {[['2018','Founded'],['500+','Products'],['48K+','Rigs Built'],['4.9★','Avg Rating']].map(([n,l]) => (
              <div key={l}><div className="stat-big">{n}</div><div className="stat-sub">{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <section className="py-5 bg2 border-b">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'start' }}>
            <div className="reveal" style={{ maxWidth: 280 }}>
              <span className="section-tag">// What We Stand For</span>
              <h2 className="section-heading mb-2">Our Values</h2>
              <p className="section-sub">Everything we do starts with these four principles.</p>
            </div>
            <div className="grid grid-2" style={{ gap: '0.75rem' }}>
              {VALUES.map((v, i) => (
                <div key={v.n} className={`value-card reveal reveal-d${i + 1}`}>
                  <div className="v-num">{v.n}</div>
                  <div className="v-title">{v.t}</div>
                  <div className="v-text">{v.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-5 border-b">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            <div className="reveal">
              <span className="section-tag">// How We Got Here</span>
              <h2 className="section-heading mb-2">Our Journey</h2>
              <p className="section-sub">From a garage to a 4,000 sq ft warehouse. It's been a ride.</p>
              <Link to="/products" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Shop Now →</Link>
            </div>
            <div>
              {TIMELINE.map((t, i) => (
                <div key={t.year} className={`tl-item reveal reveal-d${(i % 4) + 1}`} style={{ marginBottom: i === TIMELINE.length - 1 ? 0 : '2.5rem' }}>
                  <div className="tl-dot">{t.year}</div>
                  <div>
                    <div className="tl-year">// {t.year}</div>
                    <div className="tl-title">{t.title}</div>
                    <div className="tl-text">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-5 bg2 border-b">
        <div className="container">
          <span className="section-tag reveal">// The People</span>
          <h2 className="section-heading mb-2 reveal">Meet The Team</h2>
          <p className="section-sub mb-4 reveal">Builders, overclockers, and hardware nerds — every one of us.</p>
          <div className="grid grid-4" style={{ gap: '1rem' }}>
            {TEAM.map((m, i) => (
              <div key={m.name} className={`team-card reveal reveal-d${i + 1}`}>
                <div className="team-avatar">{m.initials}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band py-5">
        <div className="container text-center">
          <span className="section-tag block mb-2 reveal">// Ready to Build?</span>
          <h2 className="section-heading mb-3 reveal">Your Next Rig Starts Here</h2>
          <p className="section-sub mb-4 reveal" style={{ maxWidth: 440, margin: '0 auto 1.5rem' }}>Browse our full catalogue of verified hardware or reach out to our team for a personalised build recommendation.</p>
          <div className="flex gap-3 justify-center flex-wrap reveal">
            <Link to="/products" className="btn-primary">Shop Hardware →</Link>
            <Link to="/contact" className="btn-outline">Talk to the Team</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
