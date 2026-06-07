import React, { useState, useEffect } from 'react';
export default function ProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const doc = document.documentElement;
      setPct((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="progress-bar" style={{ width: `${pct}%` }} />;
}
