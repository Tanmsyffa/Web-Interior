import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/hero/hero_interior.jpg"
        alt="Contemporary minimalist living room by NARA Studio"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="hero__overlay"></div>

      <div className="container">
        <div className="hero__content fade-up visible">
          <p className="section-label" style={{ color: 'var(--color-sand)', marginBottom: 'var(--space-3)' }}>
            Interior Design &middot; Custom Furniture
          </p>
          <h1>Ruang yang dirancang untuk hidup lebih baik.</h1>
          <p>
            Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.
          </p>
          <div className="hero__actions">
            <Link href="/konsultasi" className="btn-primary">Konsultasi Proyek</Link>
            <Link href="/portofolio" className="btn-secondary">Lihat Portofolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
