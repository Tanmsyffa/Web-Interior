import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalNav from "@/components/layout/LegalNav";

export const metadata = {
  title: "Syarat & Ketentuan | Griyacipta Kreasi Perdana",
  description: "Syarat dan ketentuan layanan Griyacipta Kreasi Perdana.",
};

export default function SyaratKetentuan() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-hero">
          <div className="container">
            <p className="section-label" style={{ color: "var(--color-clay)" }}>
              Legal
            </p>
            <h1>Syarat &amp; Ketentuan</h1>
            <p className="legal-subtitle">Diperbarui pada September 2024</p>
          </div>
        </div>

        <div className="container">
          <div className="legal-layout">
            <LegalNav />

            <div className="legal-content">
              <div className="legal-content__block">
                <h3>1. Lingkup Layanan</h3>
                <p>
                  Griyacipta Kreasi Perdana menyediakan jasa desain interior,
                  pembuatan <em>custom furniture</em>, dan layanan{" "}
                  <em>design &amp; build</em> terintegrasi. Detail spesifik dari
                  lingkup pekerjaan, jadwal, dan spesifikasi material akan
                  tertuang secara formal dalam perjanjian proyek terpisah yang
                  disepakati oleh kedua belah pihak.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>2. Proses Konsultasi</h3>
                <p>
                  Konsultasi awal yang dijadwalkan melalui website kami bersifat
                  gratis dan tanpa komitmen. Setelah memahami kebutuhan Anda,
                  tim kami akan menyusun proposal konsep awal beserta estimasi
                  biaya (RAB) yang bisa Anda jadikan acuan.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>3. Term of Payment (Pembayaran)</h3>
                <p>
                  Skema pembayaran akan disesuaikan dengan skala proyek, umumnya
                  terdiri dari:
                </p>
                <ul>
                  <li>
                    <strong>Booking Fee / DP Desain:</strong> Dibayarkan sebelum
                    proses gambar kerja dan 3D visual dimulai.
                  </li>
                  <li>
                    <strong>DP Produksi:</strong> Dibayarkan saat proyek
                    memasuki tahap produksi (untuk custom furniture) atau
                    konstruksi.
                  </li>
                  <li>
                    <strong>Termin Lanjutan:</strong> Berdasarkan progres
                    pekerjaan di lapangan.
                  </li>
                  <li>
                    <strong>Pelunasan:</strong> Dilakukan setelah serah terima
                    (handover) proyek selesai.
                  </li>
                </ul>
              </div>

              <div className="legal-content__block">
                <h3>4. Garansi Pekerjaan</h3>
                <p>
                  Setiap hasil pekerjaan Griyacipta Kreasi Perdana dilindungi
                  oleh garansi. Lama masa garansi untuk struktur furniture dan
                  mekanikal bervariasi antara 3 hingga 12 bulan (tergantung
                  jenis material dan proyek), yang akan dicantumkan secara
                  detail dalam kontrak.
                </p>
              </div>

              <div className="legal-content__block">
                <h3>5. Kontak</h3>
                <p>
                  Untuk pertanyaan lebih lanjut, silakan diskusikan bersama tim
                  kami di{" "}
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

