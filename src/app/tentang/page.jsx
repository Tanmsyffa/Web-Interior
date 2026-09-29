import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Intro from '@/components/home/Intro';

export const metadata = {
  title: 'Tentang Kami | Griyacipta Kreasi Perdana',
  description: 'Tentang Griyacipta Kreasi Perdana dan pendekatan kami dalam merancang interior serta custom furniture.',
};

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        <Intro />
      </main>
      <Footer />
    </>
  );
}
