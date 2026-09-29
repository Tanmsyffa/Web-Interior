import Image from 'next/image';
import Link from 'next/link';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import { categories } from '@/data/content';

export default function Categories() {
  return (
    <section id="layanan" className="section">
      <div className="container">
        <div className="categories-intro">
          <p className="section-label">Layanan</p>
          <h2>Desain Interior Sesuai Kebutuhan</h2>
          <p>Ragam desain interior untuk setiap kebutuhan gaya hidup.</p>
        </div>
        <HorizontalCarousel className="category-grid">
          {categories.map((category) => (
            <Link key={category.id} href={`/kategori/${category.id}?ref=beranda`} className="category-card">
              <div className="category-card__image">
                <Image src={category.image} alt={category.title} fill sizes="(max-width: 1024px) 76vw, 400px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="category-card__body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="category-card__link">Lihat kategori <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </HorizontalCarousel>
      </div>
    </section>
  );
}