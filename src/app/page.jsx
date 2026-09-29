import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import Categories from '@/components/home/Categories';
import DesignStyles from '@/components/home/DesignStyles';
import ProcessStepper from '@/components/home/ProcessStepper';
import Materials from '@/components/home/Materials';
import Projects from '@/components/home/Projects';
import FAQ from '@/components/home/FAQ';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Categories />
        <DesignStyles />
        <ProcessStepper />
        <Materials />
        <Projects />
        <FAQ />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}