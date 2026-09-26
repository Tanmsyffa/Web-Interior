'use client';
import { useState } from 'react';

import DOMPurify from 'dompurify';

export default function ConsultationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // XSS Sanitization
    const sanitizedName = DOMPurify.sanitize(name.trim());
    const sanitizedPhone = DOMPurify.sanitize(phone.trim());
    const sanitizedEmail = DOMPurify.sanitize(email.trim());

    if (!sanitizedName || !sanitizedPhone) {
      alert('Mohon isi nama dan no. WhatsApp Anda');
      return;
    }

    // Input Validation
    const phoneRegex = /^[0-9\-\+\s\(\)]{8,15}$/;
    if (!phoneRegex.test(sanitizedPhone)) {
      alert('Format nomor WhatsApp tidak valid. Harap gunakan hanya angka (8-15 digit).');
      return;
    }

    if (sanitizedEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        alert('Format email tidak valid.');
        return;
      }
    }

    const message = `Halo NARA Studio, saya ${sanitizedName} ingin berkonsultasi mengenai proyek interior. (Nomor kontak: +62${sanitizedPhone}, Email: ${sanitizedEmail || '-'})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281112345678?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="consult-form-wrapper">
      <div className="container">
        <div className="consult-form-card">
          <h3>Konsultasi Gratis</h3>
          <form className="consult-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Nama lengkap" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">No. Telepon (WhatsApp)</label>
              <div className="phone-input-wrap">
                <span className="phone-prefix">+62</span>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="812 XXX XXX" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (Opsional)</label>
              <input 
                type="email" 
                id="email" 
                placeholder="email@contoh.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ height: '44px' }}>Konsultasi</button>
          </form>
        </div>
      </div>
    </div>
  );
}
