import Link from 'next/link';

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const IconMapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Main footer content */}
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">NARA<span>STUDIO</span></div>
            <p className="footer-brand__desc">
              Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social__link">
                <IconInstagram />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="footer-social__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 4-2 6-4 8"/><path d="M12 12l-2 8"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <div className="footer-links">
              <Link href="/layanan">Layanan</Link>
              <Link href="/portofolio">Portofolio</Link>
              <Link href="/proses">Proses Kerja</Link>
              <Link href="/tentang">Tentang Kami</Link>
              <Link href="/konsultasi">Konsultasi</Link>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Layanan</h4>
            <div className="footer-links">
              <Link href="/layanan">Interior Rumah</Link>
              <Link href="/layanan">Apartemen</Link>
              <Link href="/layanan">Kitchen Set</Link>
              <Link href="/layanan">Kantor</Link>
              <Link href="/layanan">Retail</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Hubungi Kami</h4>
            <div className="footer-contact">
              <a href="mailto:halo@narastudio.id" className="footer-contact__item">
                <IconMail />
                <span>halo@narastudio.id</span>
              </a>
              <a href="https://wa.me/6281112345678" target="_blank" rel="noopener noreferrer" className="footer-contact__item">
                <IconPhone />
                <span>+62 811 1234 5678</span>
              </a>
              <a href="https://maps.google.com/?q=Jakarta+Indonesia" target="_blank" rel="noopener noreferrer" className="footer-contact__item">
                <IconMapPin />
                <span>Jakarta, Indonesia</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} NARA Studio. All rights reserved.</span>
          <div className="footer-bottom__links">
            <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan">Syarat &amp; Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
