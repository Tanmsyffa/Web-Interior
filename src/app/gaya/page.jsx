import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import Footer from '@/components/layout/Footer';
import { designStyles } from '@/data/content';

export const metadata = {
  title: 'Inspirasi Gaya Desain | Griyacipta Kreasi Perdana',
  description: 'Eksplorasi inspirasi gaya desain interior Griyacipta Kreasi Perdana.',
};

export default function DesignStyleIndexPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        <section className="section directory-page">
          <div className="container">
            <div className="directory-page__intro">
              <p className="section-label">Inspirasi</p>
              <h1>Temukan gaya yang terasa tepat</h1>
              <p>Jelajahi karakter desain sebagai titik awal untuk membicarakan ruang Anda.</p>
            </div>
            <HorizontalCarousel className="style-grid directory-page__grid">
              {designStyles.map((style) => (
                <Link key={style.id} href={`/gaya/${style.id}?ref=gaya`} className="style-card">
                  <div className="style-card__image"><Image src={style.image} alt={style.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} /></div>
                  <div className="style-card__body"><h3>{style.title}</h3><p>{style.description}</p><span className="style-card__link">Lihat detail gaya <span aria-hidden="true">→</span></span></div>
                </Link>
              ))}
            </HorizontalCarousel>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}