import { processSteps } from '@/data/content';

export default function Process() {
  return (
    <section id="process" className="section section--sand">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <p className="section-label">Proses</p>
          <h2>Alur Kerja Terpadu</h2>
          <p style={{ color: 'var(--color-ink-soft)', marginTop: 'var(--space-2)', maxWidth: '520px', margin: 'var(--space-2) auto 0 auto' }}>
            Dari konsultasi awal hingga serah terima, setiap tahap dirancang untuk memastikan hasil yang presisi dan sesuai harapan.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="process-step__num">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
