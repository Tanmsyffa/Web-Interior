'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/layanan', label: 'Layanan' },
    { href: '/portofolio', label: 'Portofolio' },
    { href: '/proses', label: 'Proses' },
    { href: '/tentang', label: 'Tentang' },
  ];

  const headerClass = (isHomePage && !scrolled) ? 'site-header--transparent' : 'site-header--scrolled';

  return (
    <>
      <header className={`site-header ${headerClass}`}>
        <Link href="/" className="site-header__logo">
          NARA<span>STUDIO</span>
        </Link>

        <nav className="site-header__nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <button
          className="site-header__menu-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Buka menu navigasi"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'mobile-drawer--open' : ''}`}>
        <button
          className="mobile-drawer__close"
          onClick={() => setDrawerOpen(false)}
          aria-label="Tutup menu"
        >
          &#x2715;
        </button>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setDrawerOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
