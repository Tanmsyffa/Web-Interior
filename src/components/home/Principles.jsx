import { principles } from '@/data/content';

const descriptions = {
  p1: 'Setiap proyek dimulai dari riset mendalam tentang kebutuhan dan gaya hidup penghuni.',
  p2: 'Pemilihan material yang jujur dan fungsional, bukan sekadar tampilan.',
  p3: 'Pengerjaan detail dengan standar presisi tinggi dari produksi hingga instalasi.',
  p4: 'Satu tim bertanggung jawab penuh dari konsep awal hingga serah terima.',
};

export default function Principles() {
  return (
    <section className="section">
      <div className="container">
        <div className="principles-grid">
          <div>
            <p className="section-label">Pendekatan</p>
            <h2>Mengapa NARA Studio</h2>
            <p style={{ color: 'var(--color-ink-soft)', marginTop: 'var(--space-3)', maxWidth: '380px' }}>
              Setiap keputusan desain didasarkan pada prinsip yang memastikan kualitas dan fungsionalitas jangka panjang.
            </p>
          </div>
          <div>
            {principles.map((principle, index) => (
              <div key={principle.id} className="principle-item">
                <span className="principle-item__num">{String(index + 1).padStart(2, '0')}</span>
                <div className="principle-item__content">
                  <h3>{principle.title}</h3>
                  <p>{descriptions[principle.id]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
