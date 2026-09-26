import { materials } from '@/data/content';

export default function Materials() {
  return (
    <section className="section">
      <div className="container">
        <div className="materials-header">
          <p className="section-label">Material</p>
          <h2>Material & Kriya</h2>
          <p>
            Pemilihan material yang tepat adalah fondasi dari ruang yang berkarakter dan fungsional.
          </p>
        </div>

        <div className="materials-grid">
          {materials.map(material => (
            <div key={material.id} className="material-box">
              <span>{material.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
