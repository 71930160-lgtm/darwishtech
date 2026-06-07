import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dt_cart') || '[]'); }
    catch { return []; }
  });
  const [toasts, setToasts] = useState([]);

  const save = useCallback((next) => {
    setItems(next);
    localStorage.setItem('dt_cart', JSON.stringify(next));
  }, []);

  const addToast = useCallback((title, msg) => {
    const id = Date.now();
    setToasts(t => [...t, { id, title, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }, []);

  const addItem = useCallback((item) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      const next = exists
        ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }];
      localStorage.setItem('dt_cart', JSON.stringify(next));
      return next;
    });
    addToast('Added to Cart', item.name);
  }, [addToast]);

  const removeItem = useCallback((id) => {
    setItems(prev => {
      const next = prev.filter(i => i.id !== id);
      localStorage.setItem('dt_cart', JSON.stringify(next));
      return next;
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) { removeItem(id); return; }
    setItems(prev => {
      const next = prev.map(i => i.id === id ? { ...i, qty } : i);
      localStorage.setItem('dt_cart', JSON.stringify(next));
      return next;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => { save([]); }, [save]);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, count, subtotal, toasts, addToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </CartContext.Provider>
  );
}

function ToastContainer({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          <strong>✓ {t.title}</strong>{t.msg}
        </div>
      ))}
    </div>
  );
}

export function useCart() { return useContext(CartContext); }
