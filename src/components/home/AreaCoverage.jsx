import Image from 'next/image';
import { coverageCities, projects } from '@/data/content';

export default function AreaCoverage() {
  const galleryImages = [
    projects[0].image,
    projects[1].image,
    projects[2].image,
    '/images/projects/kitchen-set.jpg',
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
          <p className="section-label">Jangkauan</p>
          <h2>Jangkauan Proyek NARA Studio</h2>
          <div className="area-cities" style={{ marginTop: 'var(--space-2)' }}>
            {coverageCities.map((city, i) => (
              <span key={city}>
                {city}{i < coverageCities.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>

        <div className="area-gallery">
          {galleryImages.map((img, i) => (
            <div key={i} className="area-gallery__item">
              <Image
                src={img}
                alt={`Proyek NARA Studio ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <p className="carousel-hint" aria-hidden="true">Geser untuk melihat lainnya <span>→</span></p>
      </div>
    </section>
  );
}
