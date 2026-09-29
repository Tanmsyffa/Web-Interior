'use client';

import { useState } from 'react';
import { processSteps } from '@/data/content';

const icons = {
  '01': <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="10" r="2" /><path d="M7 17c1.2-2 4.8-2 6 0" /></>,
  '02': <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  '03': <><path d="M4 20h16" /><path d="M5 17 10 12l3 3 6-7" /><path d="M16 8h3v3" /></>,
  '04': <><path d="m14.5 6.5 3 3" /><path d="m3.5 20.5 7.8-7.8a4.5 4.5 0 0 1 6.4-6.4l-2.2 2.2 2.2 2.2 2.2-2.2a4.5 4.5 0 0 1-6.4 6.4l-7.8 7.8Z" /></>,
  '05': <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="m8 12 2.5 2.5L16 9" /></>,
  '06': <><path d="m5 12 4.5 4.5L19 7" /><path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3" /></>,
};

const Arrow = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={direction === 'previous' ? 'm14 18-6-6 6-6' : 'm10 6 6 6-6 6'} />
  </svg>
);

export default function ProcessStepper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];
  const setStep = (index) => setActiveIndex(Math.max(0, Math.min(index, processSteps.length - 1)));

  return (
    <section id="process" className="section section--sand">
      <div className="container">
        <div className="process-progress__intro">
          <p className="section-label">Proses</p>
          <h2>Terarah dari awal hingga ruang siap digunakan</h2>
          <p>Satu alur kerja terpadu, dengan progres dan tahapan yang selalu jelas.</p>
        </div>
        <div className="process-progress" aria-label="Tahapan kerja proyek">
          <article id="process-progress-panel" className="process-progress__panel" role="tabpanel">
            <div className="process-progress__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icons[activeStep.id]}</svg></div>
            <div className="process-progress__panel-header"><div><p>Langkah {activeStep.id} dari {processSteps.length}</p><h3>{activeStep.title}</h3></div><span className="process-progress__badge">{activeStep.paymentLabel}</span></div>
            <p className="process-progress__description">{activeStep.description}</p>
            <div className="process-progress__bar" role="progressbar" aria-label="Progres pembayaran" aria-valuemin="0" aria-valuemax="100" aria-valuenow={activeStep.paymentPercent}><div className="process-progress__bar-fill" style={{ width: `${activeStep.paymentPercent}%` }} /></div>
            <div className="process-progress__bar-labels"><span>Mulai</span><span>{activeStep.paymentPercent}%</span><span>Selesai</span></div>
          </article>
          <div className="process-progress__nav" aria-label="Navigasi tahapan">
            <button type="button" onClick={() => setStep(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Tahap sebelumnya"><Arrow direction="previous" /></button>
            <button type="button" onClick={() => setStep(activeIndex + 1)} disabled={activeIndex === processSteps.length - 1} aria-label="Tahap berikutnya"><Arrow direction="next" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}