import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Kebijakan Privasi | Griyacipta Kreasi Perdana",
  description:
    "Kebijakan privasi Griyacipta Kreasi Perdana terkait pengumpulan dan penggunaan data.",
};

export default function KebijakanPrivasi() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <p className="section-label" style={{ color: "var(--color-clay)" }}>
              Legal
            </p>
            <h1>Kebijakan Privasi</h1>
            <p className="legal-subtitle">Diperbarui pada 26 September 2026</p>
          </div>
        </div>

        <div className="container">
          <div className="legal-layout">
            <aside className="legal-sidebar">
              <nav className="legal-nav">
                <a href="/kebijakan-privasi" className="legal-nav__link active">
                  Kebijakan Privasi
                </a>
                <a href="/syarat-ketentuan" className="legal-nav__link">
                  Syarat &amp; Ketentuan
                </a>
              </nav>
            </aside>

            <div className="legal-content">
              <div className="legal-content__block">
                <h3>1. Informasi yang Kami Kumpulkan</h3>
                <p>
                  Situs ini tidak memiliki formulir konsultasi dan tidak
                  mengumpulkan nama maupun nomor WhatsApp melalui website. Saat
                  Anda memilih tombol konsultasi, Anda akan dialihkan langsung ke
                  WhatsApp untuk memulai percakapan.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>2. Penggunaan Informasi</h3>
                <p>
                  Informasi yang dikumpulkan digunakan secara eksklusif untuk:
                </p>
                <ul>
                  <li>
                    Membuka percakapan konsultasi melalui WhatsApp atas pilihan
                    Anda.
                  </li>
                  <li>
                    Memungkinkan tim Griyacipta Kreasi Perdana menindaklanjuti
                    konsultasi yang Anda minta.
                  </li>
                </ul>
              </div>

              <div className="legal-content__block">
                <h3>3. Perlindungan Data</h3>
                <p>
                  Percakapan dan informasi yang Anda kirimkan melalui WhatsApp
                  tunduk pula pada kebijakan privasi WhatsApp. Griyacipta Kreasi
                  Perdana tidak menggunakan informasi tersebut untuk pemasaran
                  pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh
                  hukum yang berlaku.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>4. Penghapusan Data</h3>
                <p>
                  Anda dapat meminta penghapusan informasi kontak yang dikelola
                  oleh Griyacipta Kreasi Perdana kapan saja. Untuk menghapus
                  riwayat atau data pada layanan WhatsApp, gunakan pula kontrol
                  privasi yang disediakan WhatsApp.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>5. Kontak</h3>
                <p>
                  Untuk pertanyaan lebih lanjut atau klarifikasi terkait
                  kebijakan privasi ini, silakan hubungi kami di{" "}
                  <a href="mailto:halo@narastudio.id" className="legal-link">
                    halo@narastudio.id
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
