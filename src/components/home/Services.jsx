import { services } from '@/data/content';

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-label">Layanan Kami</p>
        <h2 style={{ marginBottom: 'var(--space-5)' }}>Apa yang kami kerjakan</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={service.id} className="service-row">
              <div className="service-row__num">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="service-row__title">{service.title}</h3>
              <p className="service-row__desc">{service.description}</p>
              <div className="service-row__arrow">
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

