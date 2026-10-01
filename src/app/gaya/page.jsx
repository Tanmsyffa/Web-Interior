import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StyleBrowser from '@/components/gaya/StyleBrowser';

export const metadata = {
  title: 'Inspirasi Gaya Desain | Griyacipta Kreasi Perdana',
  description: 'Eksplorasi inspirasi gaya desain interior Griyacipta Kreasi Perdana.',
};

export default function DesignStyleIndexPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        <Suspense>
          <StyleBrowser />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}