import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProcessStepper from '@/components/home/ProcessStepper';

export const metadata = {
  title: 'Proses Kerja | NARA Studio',
  description: 'Proses kerja NARA Studio dari konsep hingga instalasi.',
};

export default function ProsesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <ProcessStepper />
      </main>
      <Footer />
    </>
  );
}
