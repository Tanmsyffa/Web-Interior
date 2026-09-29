import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackLink from '@/components/portfolio/BackLink';
import HorizontalCarousel from '@/components/ui/HorizontalCarousel';
import { getCategoryById, getProjectBySlug, projects } from '@/data/content';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Griyacipta Kreasi Perdana`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const category = getCategoryById(project.categoryId);

  return (
    <>
      <Header />
      <main className="page-with-header">
        <article className="project-detail">
          <div className="container">
            <BackLink href="/portofolio">Kembali ke portofolio</BackLink>
            <div className="project-detail__intro">
              <p className="section-label">{category.title}</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <div className="project-detail__hero">
              <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1280px) 100vw, 1280px" style={{ objectFit: 'cover' }} />
            </div>
            <dl className="project-detail__facts">
              <div><dt>Lokasi</dt><dd>{project.location}</dd></div>
              <div><dt>Tahun</dt><dd>{project.year}</dd></div>
              <div><dt>Kategori</dt><dd>{category.title}</dd></div>
            </dl>
            <section className="project-detail__gallery" aria-labelledby="gallery-title">
              <h2 id="gallery-title">Galeri proyek</h2>
              <HorizontalCarousel className="project-detail__gallery-grid">
                {project.images.map((image, index) => (
                  <figure key={image}>
                    <Image src={image} alt={`${project.title} — foto ${index + 1}`} fill sizes="(max-width: 1024px) 80vw, 50vw" style={{ objectFit: 'cover' }} />
                  </figure>
                ))}
              </HorizontalCarousel>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
