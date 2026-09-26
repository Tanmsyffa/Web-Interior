'use client';
import Image from 'next/image';
import { useState } from 'react';

import DOMPurify from 'dompurify';

export default function ConsultationCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // XSS Sanitization
    const sanitizedName = DOMPurify.sanitize(name.trim());
    const sanitizedPhone = DOMPurify.sanitize(phone.trim());

    if (!sanitizedName || !sanitizedPhone) {
      alert('Mohon isi nama dan no. WhatsApp Anda');
      return;
    }

    // CWE-20: Improper Input Validation
    const phoneRegex = /^[0-9\-\+\s\(\)]{8,15}$/;
    if (!phoneRegex.test(sanitizedPhone)) {
      alert('Format nomor WhatsApp tidak valid. Harap gunakan hanya angka (8-15 digit).');
      return;
    }

    const message = `Halo NARA Studio, saya ${sanitizedName} ingin berkonsultasi mengenai proyek interior. (Nomor kontak: ${sanitizedPhone})`;
    const encodedMessage = encodeURIComponent(message);
    // Secure external link with noopener,noreferrer
    window.open(`https://wa.me/6281112345678?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="consultation" className="cta-block">
      <div className="cta-block__bg">
        <Image
          src="/images/hero/hero_interior.jpg"
          alt="Interior oleh NARA Studio"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="cta-block__overlay"></div>
      </div>

      <div className="container cta-block__inner">
        <p className="section-label" style={{ color: 'var(--color-sand)' }}>Konsultasi</p>
        <h2 className="cta-block__heading">Mari bicarakan<br />ruang Anda.</h2>
        <p className="cta-block__sub">
          Jadwalkan sesi konsultasi awal bersama tim desain kami untuk mendiskusikan visi, kebutuhan, dan anggaran proyek Anda.
        </p>

        <div className="cta-block__form">
          <form className="cta-block__form-row" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Nama lengkap" 
                aria-label="Nama" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                placeholder="No. WhatsApp" 
                aria-label="No. WhatsApp" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary">Mulai Konsultasi</button>
          </form>
          <p className="cta-block__note">Gratis, tanpa komitmen. Kami akan menghubungi Anda dalam 1x24 jam.</p>
        </div>
      </div>
    </section>
  );
}
