'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import BackLink from '@/components/portfolio/BackLink';
import { designStyles, getDesignStyleById } from '@/data/content';

export default function StyleBrowser() {
  const searchParams = useSearchParams();
  const styleId = searchParams.get('style');
  const style = styleId ? getDesignStyleById(styleId) : null;

  // If a specific style is selected and found, render the Detail View
  if (style) {
    return (
      <article className="design-style-detail">
        <div className="container">
          <BackLink href="/gaya">Kembali ke inspirasi gaya</BackLink>
          <div className="design-style-detail__intro">
            <p className="section-label">Inspirasi desain</p>
            <h1>{style.title}</h1>
            <p>{style.overview}</p>
          </div>
          <div className="design-style-detail__hero">
            <Image src={style.image} alt={style.title} fill priority sizes="(max-width: 1280px) 100vw, 1280px" style={{ objectFit: 'cover' }} />
          </div>
          <section className="design-style-detail__direction" aria-labelledby="style-direction-title">
            <div>
              <p className="section-label">Arah desain</p>
              <h2 id="style-direction-title">Elemen yang membentuk suasana</h2>
            </div>
            <ul>
              {style.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </section>
          <section className="design-style-detail__gallery" aria-labelledby="style-gallery-title">
            <div className="design-style-detail__gallery-heading">
              <h2 id="style-gallery-title">Referensi visual</h2>
              <p>Contoh visual yang dapat menjadi titik awal diskusi desain Anda.</p>
            </div>
            <HorizontalCarousel className="design-style-detail__gallery-rail">
              {style.gallery.map((image, index) => (
                <figure key={image}>
                  <Image src={image} alt={`${style.title} — referensi ${index + 1}`} fill sizes="(max-width: 1024px) 80vw, 50vw" style={{ objectFit: 'cover' }} />
                </figure>
              ))}
            </HorizontalCarousel>
          </section>
          <Link href="/konsultasi" className="btn-primary">Konsultasikan gaya ini</Link>
        </div>
      </article>
    );
  }

  // Otherwise, render the List View (Directory)
  return (
    <section className="section directory-page">
      <div className="container">
        <div className="directory-page__intro">
          <p className="section-label">Inspirasi</p>
          <h1>Temukan gaya yang terasa tepat</h1>
          <p>Jelajahi karakter desain sebagai titik awal untuk membicarakan ruang Anda.</p>
        </div>
        <HorizontalCarousel className="style-grid directory-page__grid">
          {designStyles.map((item) => (
            <Link key={item.id} href={`/gaya?style=${item.id}&ref=gaya`} className="style-card">
              <div className="style-card__image">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="style-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="style-card__link">Lihat detail gaya <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </HorizontalCarousel>
      </div>
    </section>
  );
}
