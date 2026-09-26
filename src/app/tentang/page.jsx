import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Intro from '@/components/home/Intro';
import Principles from '@/components/home/Principles';
import AreaCoverage from '@/components/home/AreaCoverage';

export const metadata = {
  title: 'Tentang Kami | NARA Studio',
  description: 'Tentang NARA Studio, prinsip desain, dan area cakupan layanan kami.',
};

export default function TentangPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Intro />
        <Principles />
        <AreaCoverage />
      </main>
      <Footer />
    </>
  );
}
