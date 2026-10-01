import Image from 'next/image';
import Link from 'next/link';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { designStyles } from '@/data/content';

export default function DesignStyles() {
  return (
    <section className="section section--white">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
            <p className="section-label">Inspirasi</p>
            <h2>Desain Interior Sesuai Gaya</h2>
            <p style={{ color: 'var(--color-ink-soft)', marginTop: 'var(--space-2)' }}>
              Koleksi inspirasi gaya desain interior terbaru oleh tim profesional Griyacipta Kreasi Perdana.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <HorizontalCarousel className="style-grid">
            {designStyles.map((style) => (
              <Link key={style.id} href={`/gaya?style=${style.id}&ref=gaya`} className="style-card">
                <div className="style-card__image">
                  <Image src={style.image} alt={style.title} fill sizes="(max-width: 1024px) 76vw, 400px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="style-card__body">
                  <h3>{style.title}</h3>
                  <p>{style.description}</p>
                  <span className="style-card__link">Eksplorasi gaya <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </HorizontalCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}