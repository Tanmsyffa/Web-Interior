'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/proses', label: 'Proses' },
  { href: '/tentang', label: 'Tentang' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector = 'a[href], button:not([disabled])';
    const drawer = drawerRef.current;
    const focusableElements = drawer ? [...drawer.querySelectorAll(focusableSelector)] : [];

    document.body.style.overflow = 'hidden';
    focusableElements[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);
  const headerClass = (isHomePage && !scrolled) ? 'site-header--transparent' : 'site-header--scrolled';

  return (
    <>
      <header className={`site-header ${headerClass}`}>
        <Link href="/" className="site-header__logo">
          NARA<span>STUDIO</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="site-header__cta-wrapper">
          <Link href="/konsultasi" className="site-header__cta">Konsultasi</Link>
        </div>

        <button
          ref={menuButtonRef}
          className="site-header__menu-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Buka menu navigasi"
          aria-expanded={drawerOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        id="mobile-navigation"
        ref={drawerRef}
        className={`mobile-drawer ${drawerOpen ? 'mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        aria-hidden={!drawerOpen}
      >
        <button
          className="mobile-drawer__close"
          onClick={closeDrawer}
          aria-label="Tutup menu"
        >
          &#x2715;
        </button>
        <nav className="mobile-drawer__nav" aria-label="Navigasi mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeDrawer}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/konsultasi" className="mobile-drawer__cta" onClick={closeDrawer}>
          Mulai Konsultasi
        </Link>
      </div>
    </>
  );
}