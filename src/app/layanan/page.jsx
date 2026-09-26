import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Categories from '@/components/home/Categories';
import DesignStyles from '@/components/home/DesignStyles';

export const metadata = {
  title: 'Layanan Kami | NARA Studio',
  description: 'Layanan desain interior dan custom furniture oleh NARA Studio.',
};

export default function LayananPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Categories />
        <DesignStyles />
      </main>
      <Footer />
    </>
  );
}
