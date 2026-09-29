import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioBrowser from '@/components/portfolio/PortfolioBrowser';
import { categories, projects } from '@/data/content';

export const metadata = {
  title: 'Portofolio | Griyacipta Kreasi Perdana',
  description: 'Jelajahi portofolio desain interior dan custom furniture Griyacipta Kreasi Perdana berdasarkan kategori proyek.',
};

export default function PortofolioPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        <PortfolioBrowser categories={categories} projects={projects} />
      </main>
      <Footer />
    </>
  );
}
