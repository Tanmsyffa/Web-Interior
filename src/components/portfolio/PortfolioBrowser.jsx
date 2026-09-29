'use client';

import { useMemo, useState } from 'react';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import PortfolioCard from './PortfolioCard';

export default function PortfolioBrowser({ categories, projects }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProjects = useMemo(() => activeCategory === 'all' ? projects : projects.filter((project) => project.categoryId === activeCategory), [activeCategory, projects]);

  return (
    <section className="section portfolio-browser">
      <div className="container">
        <div className="portfolio-browser__intro"><p className="section-label">Portofolio</p><h1>Jelajahi proyek kami</h1><p>Pilih kategori untuk melihat proyek dan detail pekerjaan yang relevan.</p></div>
        <div className="portfolio-filter" role="group" aria-label="Filter kategori portofolio">
          <div className="portfolio-filter__buttons">
            <button type="button" className={activeCategory === 'all' ? 'is-active' : ''} onClick={() => setActiveCategory('all')}>Semua</button>
            {categories.map((category) => <button type="button" key={category.id} className={activeCategory === category.id ? 'is-active' : ''} onClick={() => setActiveCategory(category.id)}>{category.title}</button>)}
          </div>
        </div>
        <HorizontalCarousel className="portfolio-browser__grid portfolio-browser__gallery">{filteredProjects.map((project) => <PortfolioCard key={project.slug} project={project} refSource="portofolio" />)}</HorizontalCarousel>
      </div>
    </section>
  );
}