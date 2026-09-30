'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const legalLinks = [
  { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
  { href: '/syarat-ketentuan', label: 'Syarat & Ketentuan' },
];

/**
 * Shared sidebar navigation for legal pages.
 * Uses <Link> for client-side navigation (no full reload).
 * Highlights the active link based on current pathname.
 */
export default function LegalNav() {
  const pathname = usePathname();

  return (
    <aside className="legal-sidebar">
      <nav className="legal-nav">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`legal-nav__link${pathname === link.href ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
