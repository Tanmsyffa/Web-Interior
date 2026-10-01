'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/proses', label: 'Proses' },
  { href: '/tentang', label: 'Tentang' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle scroll detection: hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);

      // Solid background after 20px
      setScrolled(currentScrollY > 20);

      // Auto-hide on scroll down, show on scroll up
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY + 6) {
          // Scrolling down
          setHidden(true);
        } else if (currentScrollY < lastScrollY - 6) {
          // Scrolling up
          setHidden(false);
        }
      } else {
        // At or near top, always show navbar
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Drawer accessibility & keyboard traps
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

  const closeDrawer = () => {
    if (document.activeElement && drawerRef.current?.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    setDrawerOpen(false);
  };

  const isHidden = hidden && !drawerOpen;

  const headerClassNames = [
    'site-header',
    'site-header--solid',
    scrolled ? 'site-header--scrolled-shadow' : '',
    isHidden ? 'site-header--hidden' : '',
    drawerOpen ? 'site-header--menu-active' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={headerClassNames}>
        <div className="site-header__container">
          <Link href="/" className="site-header__logo" aria-label="Griyacipta Kreasi Perdana - Beranda">
            <span className="site-header__logo-brand">Griyacipta</span>
            <span className="site-header__logo-sub">Kreasi Perdana</span>
          </Link>

          <nav className="site-header__nav" aria-label="Navigasi utama">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`site-header__nav-link ${isActive ? 'site-header__nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__cta-wrapper">
            <Link href="/konsultasi" className="site-header__cta">
              <span>Konsultasi</span>
              <ArrowUpRight className="site-header__cta-icon" size={15} />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            className="site-header__menu-btn"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-label={drawerOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-navigation"
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      <div
        className={`mobile-drawer__backdrop ${drawerOpen ? 'mobile-drawer__backdrop--visible' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-navigation"
        ref={drawerRef}
        className={`mobile-drawer ${drawerOpen ? 'mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        aria-hidden={!drawerOpen}
      >
        <div className="mobile-drawer__header">
          <div className="mobile-drawer__brand">
            <span className="mobile-drawer__brand-main">Griyacipta</span>
            <span className="mobile-drawer__brand-tag">Design &amp; Build</span>
          </div>
          <button
            className="mobile-drawer__close-btn"
            onClick={closeDrawer}
            aria-label="Tutup menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-drawer__nav" aria-label="Navigasi mobile">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className={`mobile-drawer__nav-item ${isActive ? 'mobile-drawer__nav-item--active' : ''}`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} className="mobile-drawer__item-icon" />
              </Link>
            );
          })}
        </nav>

        <div className="mobile-drawer__footer">
          <Link
            href="/konsultasi"
            className="mobile-drawer__cta"
            onClick={closeDrawer}
          >
            <span>Mulai Konsultasi Gratis</span>
            <ArrowUpRight size={16} />
          </Link>
          <p className="mobile-drawer__note">
            Wujudkan hunian &amp; ruang impian Anda bersama konsultan interior berpengalaman.
          </p>
        </div>
      </aside>
    </>
  );
}