import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import Footer from '@/components/layout/Footer';
import { categories } from '@/data/content';

export const metadata = {
  title: 'Kategori Proyek | Griyacipta Kreasi Perdana',
  description: 'Jelajahi kategori layanan dan proyek Griyacipta Kreasi Perdana.',
};

export default function CategoryIndexPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        <section className="section directory-page">
          <div className="container">
            <div className="directory-page__intro">
              <p className="section-label">Kategori</p>
              <h1>Ruang dan kebutuhan yang kami tangani</h1>
              <p>Pilih kategori untuk melihat contoh pekerjaan dan detail proyek yang relevan.</p>
            </div>
            <HorizontalCarousel className="category-grid directory-page__grid">
              {categories.map((category) => (
                <Link key={category.id} href={`/kategori/${category.id}?ref=kategori`} className="category-card">
                  <div className="category-card__image"><Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} /></div>
                  <div className="category-card__body"><h3>{category.title}</h3><p>{category.description}</p><span className="category-card__link">Lihat kategori <span aria-hidden="true">→</span></span></div>
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