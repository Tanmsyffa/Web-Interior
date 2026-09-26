'use client';

import { useState } from 'react';
import { processSteps } from '@/data/content';

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const StepIcon = ({ id }) => {
  const icons = {
    '01': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/></svg>, // Consult
    '02': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, // Survey
    '03': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="21" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>, // Design
    '04': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, // Production
    '05': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="15" y2="15"/></svg>, // Installation
    '06': <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>, // Handover
  };
  return (
    <div className="process-icon">
      {icons[id]}
    </div>
  );
};

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const goNext = () => setActiveStep(prev => Math.min(prev + 1, processSteps.length - 1));
  const goPrev = () => setActiveStep(prev => Math.max(prev - 1, 0));

  const current = processSteps[activeStep];

  // Build cumulative payment segments for the progress bar
  const paymentMilestones = processSteps
    .filter(s => s.paymentPercent > 0)
    .reduce((acc, step) => {
      if (!acc.find(m => m.label === step.paymentLabel)) {
        acc.push({ label: step.paymentLabel, percent: step.paymentPercent });
      }
      return acc;
    }, []);

  // Bar fill width based on current step's payment percent
  const barFillPercent = current.paymentPercent;

  return (
    <section id="process" className="section section--sand">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <p className="section-label">Proses</p>
          <h2>Langkah Menuju Interior Impian</h2>
        </div>

        {/* Step circles */}
        <div className="process-stepper">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-stepper__step">
              <div
                className={`process-stepper__circle ${index <= activeStep ? 'process-stepper__circle--active' : ''} ${index === activeStep ? 'process-stepper__circle--current' : ''}`}
                onClick={() => setActiveStep(index)}
                role="button"
                tabIndex={0}
                aria-label={`Langkah ${index + 1}: ${step.title}`}
              >
                {index + 1}
              </div>
              {index < processSteps.length - 1 && (
                <div className={`process-stepper__line ${index < activeStep ? 'process-stepper__line--active' : ''}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Content card */}
        <div className="process-stepper__content">
          <StepIcon id={current.id} />
          <h3>{current.title}</h3>
          <p>{current.description}</p>

          {/* Payment progress bar */}
          <div className="payment-bar">
            <div className="payment-bar__track">
              {barFillPercent === 0 && (
                <span className="payment-bar__label payment-bar__label--empty">{current.paymentLabel}</span>
              )}
              <div
                className="payment-bar__fill"
                style={{ width: `${barFillPercent}%` }}
              >
                {barFillPercent > 0 && (
                  <span className="payment-bar__label">{current.paymentLabel}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        <div className="process-nav">
          <button onClick={goPrev} aria-label="Langkah sebelumnya" disabled={activeStep === 0}>
            <ChevronLeft />
          </button>
          <button onClick={goNext} aria-label="Langkah selanjutnya" disabled={activeStep === processSteps.length - 1}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
