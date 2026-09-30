'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  { src: '/images/hero/hero_interior.jpg', alt: 'Ruang keluarga minimalis dengan pencahayaan alami oleh Griyacipta Kreasi Perdana' },
  { src: '/images/portfolio/kitchen-set/kitchen-set.jpg', alt: 'Kitchen set kayu natural karya Griyacipta Kreasi Perdana' },
  { src: '/images/portfolio/interior-rumah/oak-residence.jpg', alt: 'Interior hunian dengan suasana hangat oleh Griyacipta Kreasi Perdana' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="Sorotan proyek Griyacipta Kreasi Perdana">
      <div className="hero__slides">
        {heroSlides.map((slide, index) => (
          <div key={slide.src} className={`hero__slide${index === activeSlide ? ' hero__slide--active' : ''}`} aria-hidden={index !== activeSlide}>
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} sizes="100vw" style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="container">
        <div className="hero__content fade-up visible">
          <p className="section-label hero__eyebrow">Interior Design &middot; Custom Furniture</p>
          <h1>Ruang yang dirancang untuk hidup lebih baik.</h1>
          <p>Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.</p>
          <div className="hero__actions">
            <Link href="/konsultasi" className="btn-primary">Konsultasi Proyek</Link>
            <Link href="/portofolio" className="btn-secondary">Lihat Portofolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}