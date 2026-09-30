import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Intro from '@/components/home/Intro';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Tentang Kami | Griyacipta Kreasi Perdana',
  description: 'Tentang Griyacipta Kreasi Perdana dan pendekatan kami dalam merancang interior serta custom furniture.',
};

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="page-with-header">
        
        {/* Page Header */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <ScrollReveal>
              <p className="section-label" style={{ color: 'var(--color-clay)' }}>Tentang Kami</p>
              <h1 style={{ maxWidth: '800px', marginBottom: 'var(--space-5)' }}>
                Kami merancang ruang yang tidak hanya memanjakan mata, tapi juga merangkul keseharian Anda.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ position: 'relative', width: '100%', height: 'min(50vw, 500px)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image 
                  src="/images/portfolio/interior-rumah/japandi-natural.jpg" 
                  alt="Tim Griyacipta Kreasi Perdana" 
                  fill 
                  priority
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Existing Intro Section */}
        <Intro />

        {/* Philosophy Section */}
        <section className="section section--sand">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', alignItems: 'center' }}>
              <ScrollReveal>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <Image 
                    src="/images/portfolio/custom-furniture/terrace-house.jpg" 
                    alt="Detail custom furniture" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={150}>
                <div>
                  <p className="section-label">Filosofi Desain</p>
                  <h2 style={{ marginBottom: 'var(--space-3)' }}>Keindahan dalam Fungsi</h2>
                  <p style={{ color: 'var(--color-ink-soft)', marginBottom: 'var(--space-3)' }}>
                    Kami menolak gagasan bahwa desain interior hanya sekadar tentang estetika. Di Griyacipta Kreasi Perdana, kami memulai setiap proyek dengan observasi mendalam tentang bagaimana Anda bergerak, berinteraksi, dan beristirahat di dalam ruang.
                  </p>
                  <p style={{ color: 'var(--color-ink-soft)' }}>
                    Pendekatan ini memungkinkan kami menciptakan furniture custom yang presisi dan layout ruangan yang secara intuitif mendukung aktivitas Anda, menghadirkan harmoni yang sesungguhnya antara keindahan visual dan kenyamanan praktis.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
                <p className="section-label">Nilai Kami</p>
                <h2>Prinsip Kerja Griyacipta</h2>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
              {[
                { title: 'Personal & Spesifik', desc: 'Tidak ada desain template. Setiap garis dan material dipilih berdasarkan narasi dan kebutuhan unik setiap klien.' },
                { title: 'Kualitas Kriya', desc: 'Furniture custom kami dikerjakan oleh pengrajin berpengalaman dengan material pilihan yang dirancang untuk bertahan lintas generasi.' },
                { title: 'Transparansi', desc: 'Dari timeline kerja hingga rincian biaya (RAB), kami mengedepankan komunikasi terbuka di setiap tahapan proyek.' }
              ].map((val, idx) => (
                <ScrollReveal key={val.title} delay={idx * 150}>
                  <div style={{ 
                    padding: 'var(--space-5) var(--space-4)', 
                    backgroundColor: 'var(--color-white)', 
                    border: '1px solid rgba(0,0,0,0.04)',
                    boxShadow: '0 12px 40px rgba(29,33,31,0.04)',
                    borderRadius: 'var(--radius-lg)', 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-clay)', marginBottom: 'var(--space-3)' }} />
                    <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{val.title}</h3>
                    <p style={{ color: 'var(--color-ink-soft)', fontSize: '15px', lineHeight: 1.65 }}>{val.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
