import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Kebijakan Privasi | NARA Studio',
  description: 'Kebijakan privasi NARA Studio terkait pengumpulan dan penggunaan data.',
};

export default function KebijakanPrivasi() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <p className="section-label" style={{ color: 'var(--color-clay)' }}>Legal</p>
            <h1>Kebijakan Privasi</h1>
            <p className="legal-subtitle">Diperbarui pada September 2024</p>
          </div>
        </div>

        <div className="container">
          <div className="legal-layout">
            <aside className="legal-sidebar">
              <nav className="legal-nav">
                <a href="/kebijakan-privasi" className="legal-nav__link active">Kebijakan Privasi</a>
                <a href="/syarat-ketentuan" className="legal-nav__link">Syarat &amp; Ketentuan</a>
              </nav>
            </aside>

            <div className="legal-content">
              <div className="legal-content__block">
                <h3>1. Informasi yang Kami Kumpulkan</h3>
                <p>Kami mengumpulkan informasi yang Anda berikan secara langsung melalui formulir konsultasi, termasuk nama, nomor telepon, dan alamat email. Informasi ini digunakan semata-mata untuk merespons permintaan konsultasi Anda dengan presisi.</p>
              </div>

              <div className="legal-content__block">
                <h3>2. Penggunaan Informasi</h3>
                <p>Informasi yang dikumpulkan digunakan secara eksklusif untuk:</p>
                <ul>
                  <li>Menghubungi Anda terkait layanan desain interior dan custom furniture.</li>
                  <li>Menjadwalkan sesi konsultasi awal dengan tim desainer kami.</li>
                  <li>Memberikan pembaruan atau penawaran relevan mengenai proyek yang sedang berjalan.</li>
                </ul>
              </div>

              <div className="legal-content__block">
                <h3>3. Perlindungan Data</h3>
                <p>NARA Studio mengutamakan kerahasiaan Anda. Kami menerapkan standar keamanan internal untuk melindungi informasi pribadi Anda. Data Anda tidak akan diperjualbelikan atau dibagikan kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit dari Anda, kecuali diwajibkan oleh hukum yang berlaku.</p>
              </div>

              <div className="legal-content__block">
                <h3>4. Penghapusan Data</h3>
                <p>Anda memiliki hak untuk meminta penghapusan informasi kontak Anda dari basis data kami kapan saja setelah proyek selesai atau jika konsultasi tidak berlanjut. Silakan hubungi tim kami untuk proses ini.</p>
              </div>

              <div className="legal-content__block">
                <h3>5. Kontak</h3>
                <p>Untuk pertanyaan lebih lanjut atau klarifikasi terkait kebijakan privasi ini, silakan hubungi kami di <a href="mailto:halo@narastudio.id" className="legal-link">halo@narastudio.id</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
