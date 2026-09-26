'use client';

import { useState } from 'react';
import { faqItems } from '@/data/content';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <p className="section-label">FAQ</p>
          <h2>Pertanyaan Umum</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={item.id} className="faq-item">
              <button className="faq-question" onClick={() => toggle(item.id)}>
                <span className="faq-question__num">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-question__text">{item.question}</span>
                <span className={`faq-question__icon ${openId === item.id ? 'faq-question__icon--open' : ''}`}>+</span>
              </button>
              {openId === item.id && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
