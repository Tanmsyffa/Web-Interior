import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioCard({ project, featured = false, showDescription = true, refSource }) {
  const href = refSource ? `/portofolio/${project.slug}?ref=${encodeURIComponent(refSource)}` : `/portofolio/${project.slug}`;

  return (
    <Link href={href} className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__image">
        <Image src={project.image} alt={project.title} fill sizes={featured ? '(max-width: 768px) 100vw, 1280px' : '(max-width: 768px) 100vw, 640px'} style={{ objectFit: 'cover' }} />
      </div>
      <div className="project-card__meta">
        <div>
          <h3>{project.title}</h3>
          {showDescription && <p>{project.description}</p>}
        </div>
        <div className="project-card__tag">{project.location} · {project.year}</div>
      </div>
    </Link>
  );
}