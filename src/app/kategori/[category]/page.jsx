import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackLink from '@/components/portfolio/BackLink';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { categories, getCategoryById, getProjectsByCategory } from '@/data/content';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) return {};

  return {
    title: `${category.title} | Portofolio Griyacipta Kreasi Perdana`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const categoryProjects = getProjectsByCategory(category.id);

  return (
    <>
      <Header />
      <main className="page-with-header">
        <section className="section category-page">
          <div className="container">
            <BackLink href="/kategori">Kembali ke kategori</BackLink>
            <div className="category-page__intro">
              <p className="section-label">Kategori portofolio</p>
              <h1>{category.title}</h1>
              <p>{category.description}</p>
            </div>
            <div className="portfolio-browser__grid">
              {categoryProjects.map((project) => (
                <PortfolioCard key={project.slug} project={project} refSource={`kategori-${category.id}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
