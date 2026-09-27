'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, domAnimation, LazyMotion, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    src: '/images/hero/hero_interior.jpg',
    alt: 'Ruang keluarga minimalis dengan pencahayaan alami oleh NARA Studio',
  },
  {
    src: '/images/projects/oak-residence.jpg',
    alt: 'Interior residensial Oak Residence oleh NARA Studio',
  },
  {
    src: '/images/projects/terrace-house.jpg',
    alt: 'Interior Terrace House oleh NARA Studio',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeImage = heroSlides[activeSlide];
  const imageTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1.25, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="Sorotan proyek NARA Studio">
      <div className="hero__slides" aria-live="off">
        <LazyMotion features={domAnimation} strict>
          <AnimatePresence initial={false} mode="sync">
          <m.div
            key={activeImage.src}
            className="hero__slide"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.01 }}
            transition={imageTransition}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </m.div>
        </AnimatePresence>
        </LazyMotion>
      </div>
      <div className="hero__overlay"></div>

      <div className="container">
        <div className="hero__content fade-up visible">
          <p className="section-label hero__eyebrow">
            Interior Design &middot; Custom Furniture
          </p>
          <h1>Ruang yang dirancang untuk hidup lebih baik.</h1>
          <p>
            Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.
          </p>
          <div className="hero__actions">
            <Link href="/konsultasi" className="btn-primary">Konsultasi Proyek</Link>
            <Link href="/portofolio" className="btn-secondary">Lihat Portofolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}