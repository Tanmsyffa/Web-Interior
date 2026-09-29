'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const returnRoutes = {
  beranda: '/',
  gaya: '/gaya',
  kategori: '/kategori',
  portofolio: '/portofolio',
};

function getReturnHref(reference, fallbackHref) {
  if (returnRoutes[reference]) return returnRoutes[reference];
  if (/^kategori-[a-z0-9-]+$/.test(reference ?? '')) return `/kategori/${reference.slice('kategori-'.length)}`;
  return fallbackHref;
}

export default function BackLink({ href, children }) {
  const router = useRouter();

  const handleClick = (event) => {
    const reference = new URLSearchParams(window.location.search).get('ref');
    const destination = getReturnHref(reference, href);
    if (destination === href) return;
    event.preventDefault();
    router.push(destination);
  };

  return (
    <Link href={href} onClick={handleClick} className="back-link">
      <span className="back-link__icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12.5 4.5 7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span>{children}</span>
    </Link>
  );
}