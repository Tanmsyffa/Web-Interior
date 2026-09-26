'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ConsultationCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hasConsent, setHasConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.trim().replace(/\s+/g, ' ');
    const normalizedPhone = phone.replace(/\D/g, '');

    if (normalizedName.length < 2 || normalizedName.length > 100) {
      alert('Masukkan nama lengkap antara 2 hingga 100 karakter.');
      return;
    }

    if (normalizedPhone.length < 8 || normalizedPhone.length > 15) {
      alert('Format nomor WhatsApp tidak valid. Harap gunakan 8-15 digit angka.');
      return;
    }

    if (!hasConsent) {
      alert('Mohon setujui pengiriman data ke WhatsApp terlebih dahulu.');
      return;
    }

    const message = `Halo NARA Studio, saya ${normalizedName} ingin berkonsultasi mengenai proyek interior. (Nomor kontak: ${normalizedPhone})`;
    const encodedMessage = encodeURIComponent(message);
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
                autoComplete="name"
                maxLength={100}
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
                autoComplete="tel"
                inputMode="tel"
                maxLength={24}
                required
              />
            </div>
            <label className="cta-block__consent">
              <input
                type="checkbox"
                checked={hasConsent}
                onChange={(e) => setHasConsent(e.target.checked)}
                required
              />
              <span>
                Saya setuju nama dan nomor WhatsApp saya dikirim ke WhatsApp untuk memulai konsultasi. Baca{' '}
                <a href="/kebijakan-privasi">Kebijakan Privasi</a>.
              </span>
            </label>
            <div className="cta-block__actions">
              <button type="submit" className="btn-primary">Mulai Konsultasi</button>
              <p className="cta-block__note">Gratis, tanpa komitmen. Kami akan menghubungi Anda dalam 1x24 jam.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
