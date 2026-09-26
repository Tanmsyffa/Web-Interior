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

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        {/* Content Security Policy (CSP) for XSS and Injection Protection */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';" 
        />
        {/* Security headers equivalents for static HTML */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
