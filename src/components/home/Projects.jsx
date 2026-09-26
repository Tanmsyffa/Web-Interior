import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/content';

export default function Projects() {
  const featured = projects[0];
  const supporting = projects.slice(1);

  return (
    <section id="portfolio" className="section section--sand">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Portofolio</p>
            <h2>Proyek Terpilih</h2>
          </div>
          <Link href="/portofolio" className="btn-secondary btn-secondary--dark">Lihat Semua Portofolio</Link>
        </div>

        <div className="projects-grid">
          {/* Featured */}
          <div className="project-card project-card--featured">
            <div className="project-card__image">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="project-card__meta">
              <div>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
              </div>
              <div className="project-card__tag">
                {featured.category} &middot; {featured.location}
              </div>
            </div>
          </div>

          {/* Supporting */}
          {supporting.map(project => (
            <div key={project.slug} className="project-card">
              <div className="project-card__image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="project-card__meta">
                <div>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-card__tag">
                  {project.category} &middot; {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
