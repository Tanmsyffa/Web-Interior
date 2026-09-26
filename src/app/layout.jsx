import { Manrope, DM_Sans } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'NARA Studio | Interior Design & Custom Furniture',
  description: 'Ruang yang dirancang untuk hidup lebih baik. Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.',
};

const contentSecurityPolicy = process.env.NODE_ENV === 'development'
  ? "default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self';"
  : "default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self';";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        {/* Fallback CSP. The deployment server sends the authoritative policy. */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content={contentSecurityPolicy}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
