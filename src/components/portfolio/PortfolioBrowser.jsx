'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import PortfolioCard from './PortfolioCard';

export default function PortfolioBrowser({ categories, projects }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read initial category from ?kategori= query param
  const kategoriParam = searchParams.get('kategori') || 'all';
  const [activeCategory, setActiveCategory] = useState(kategoriParam);

  // Sync state when query param changes (e.g. browser back/forward)
  useEffect(() => {
    const paramValue = searchParams.get('kategori') || 'all';
    setActiveCategory(paramValue);
  }, [searchParams]);

  const filteredProjects = useMemo(
    () => activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.categoryId === activeCategory),
    [activeCategory, projects]
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Update URL query param without full reload
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === 'all') {
      params.delete('kategori');
    } else {
      params.set('kategori', categoryId);
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
  };

  return (
    <section className="section portfolio-browser">
      <div className="container">
        <div className="portfolio-browser__intro">
          <p className="section-label">Portofolio</p>
          <h1>Jelajahi proyek kami</h1>
          <p>Pilih kategori untuk melihat proyek dan detail pekerjaan yang relevan.</p>
        </div>
        <div className="portfolio-filter" role="group" aria-label="Filter kategori portofolio">
          <div className="portfolio-filter__buttons">
            <button
              type="button"
              className={activeCategory === 'all' ? 'is-active' : ''}
              onClick={() => handleCategoryChange('all')}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={activeCategory === category.id ? 'is-active' : ''}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        <HorizontalCarousel className="portfolio-browser__grid portfolio-browser__gallery">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} refSource="portofolio" />
          ))}
        </HorizontalCarousel>
      </div>
    </section>
  );
}