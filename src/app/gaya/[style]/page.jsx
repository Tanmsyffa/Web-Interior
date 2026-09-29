import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackLink from '@/components/portfolio/BackLink';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import { designStyles, getDesignStyleById } from '@/data/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return designStyles.map((style) => ({ style: style.id }));
}

export async function generateMetadata({ params }) {
  const { style: styleId } = await params;
  const style = getDesignStyleById(styleId);
  if (!style) return {};

  return {
    title: `${style.title} | Griyacipta Kreasi Perdana`,
    description: style.description,
  };
}

export default async function DesignStylePage({ params }) {
  const { style: styleId } = await params;
  const style = getDesignStyleById(styleId);
  if (!style) notFound();

  return (
    <>
      <Header />
      <main className="page-with-header">
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
      </main>
      <Footer />
    </>
  );
}