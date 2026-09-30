import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Halaman Tidak Ditemukan | Griyacipta Kreasi Perdana',
  description: 'Halaman yang Anda cari tidak dapat ditemukan.',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="page-with-header" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <section className="section" style={{ width: '100%', textAlign: 'center' }}>
          <div className="container">
            <p className="section-label" style={{ color: 'var(--color-clay)' }}>Error 404</p>
            <h1 style={{ fontSize: '64px', marginBottom: 'var(--space-3)' }}>Ruang Kosong</h1>
            <p style={{ color: 'var(--color-ink-soft)', maxWidth: '500px', margin: '0 auto var(--space-5)', fontSize: '18px' }}>
              Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada. Mari kembali ke ruang utama.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
              <Link href="/portofolio" className="btn-outline">Lihat Portofolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
