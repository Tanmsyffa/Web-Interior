import Image from 'next/image';
import { testimonials } from '@/data/content';

export default function TestimonialCarousel() {
  return (
    <section className="section section--ink">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <p className="section-label" style={{ color: 'var(--color-sand)' }}>Testimoni</p>
          <h2 style={{ color: 'var(--color-paper)' }}>Kata Mereka Tentang Interior yang Terwujud</h2>
        </div>
        <div className="testimonial-carousel">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-card__image">
                <Image
                  src={t.image}
                  alt={`Proyek ${t.name}`}
                  fill
                  sizes="300px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="testimonial-card__body">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-date">{t.date}</div>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="carousel-hint carousel-hint--light" aria-hidden="true">Geser untuk melihat lainnya <span>→</span></p>
      </div>
    </section>
  );
}
