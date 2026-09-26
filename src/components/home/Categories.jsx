import Image from 'next/image';
import { categories } from '@/data/content';

export default function Categories() {
  return (
    <section id="layanan" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <p className="section-label">Layanan</p>
          <h2>Desain Interior Sesuai Kebutuhan</h2>
          <p style={{ color: 'var(--color-ink-soft)', marginTop: 'var(--space-2)' }}>
            Ragam desain interior untuk setiap kebutuhan gaya hidup
          </p>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <div key={cat.id} id={cat.id} className="category-card">
              <div className="category-card__image">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="category-card__body">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
