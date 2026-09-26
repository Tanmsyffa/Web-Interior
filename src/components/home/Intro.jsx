export default function Intro() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="intro-grid">
          <div>
            <p className="section-label">Tentang Studio</p>
            <h2>Menghadirkan keheningan dan harmoni di setiap sudut ruang.</h2>
          </div>
          <div>
            <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--color-ink-soft)' }}>
              NARA Studio memadukan pendekatan arsitektural dengan pemahaman mendalam tentang rutinitas harian. Kami percaya bahwa ruang yang baik tidak hanya indah dilihat, tetapi juga nyaman dirasakan dan dihidupi sehari-hari.
            </p>
            <div className="intro-meta">
              <div className="intro-meta__item">
                <label>Fokus</label>
                <span>Residensial & Komersial</span>
              </div>
              <div className="intro-meta__item">
                <label>Layanan</label>
                <span>Desain hingga Instalasi</span>
              </div>
              <div className="intro-meta__item">
                <label>Lokasi</label>
                <span>Jakarta & sekitarnya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
