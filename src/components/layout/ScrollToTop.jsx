'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Forces window to scroll to top on every client-side route change.
 * Placed in the root layout so it covers all pages.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
