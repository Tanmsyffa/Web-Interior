import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Projects from '@/components/home/Projects';

export const metadata = {
  title: 'Portofolio | NARA Studio',
  description: 'Karya desain interior dan custom furniture terbaru dari NARA Studio.',
};

export default function PortofolioPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
