import Link from 'next/link';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/data/content';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

export default function Projects({ showViewAll = true }) {
  const featured = projects[0];
  const supporting = projects.slice(1, 3);

  return (
    <section id="portfolio" className="section section--sand">
      <div className="container">
        <ScrollReveal>
          <div className="projects-header">
            <div>
              <p className="section-label">Portofolio</p>
              <h2>Proyek Terpilih</h2>
            </div>
            {showViewAll && <Link href="/portofolio" className="btn-secondary btn-secondary--dark">Lihat Semua Portofolio</Link>}
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <HorizontalCarousel className="projects-grid" label="proyek terpilih">
            <PortfolioCard project={featured} featured refSource="beranda" />
            {supporting.map((project) => <PortfolioCard key={project.slug} project={project} showDescription={false} refSource="beranda" />)}
          </HorizontalCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}