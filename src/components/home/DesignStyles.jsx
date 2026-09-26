import Image from 'next/image';
import { designStyles } from '@/data/content';

export default function DesignStyles() {
  return (
    <section className="section section--white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <p className="section-label">Inspirasi</p>
          <h2>Desain Interior Sesuai Gaya</h2>
          <p style={{ color: 'var(--color-ink-soft)', marginTop: 'var(--space-2)' }}>
            Koleksi inspirasi gaya desain interior terbaru oleh tim profesional NARA Studio.
          </p>
        </div>
        <div className="style-grid">
          {designStyles.map(style => (
            <div key={style.id} className="style-card">
              <div className="style-card__image">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="style-card__body">
                <h3>{style.title}</h3>
                <p>{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
