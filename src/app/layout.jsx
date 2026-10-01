import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/layout/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://griyacipta-kreasi-perdana.vercel.app";
const socialImage = new URL('/opengraph-image.png', siteUrl).toString();
const twitterImage = new URL('/twitter-image.png', siteUrl).toString();
const siteDescription =
  "Ruang yang dirancang untuk hidup lebih baik. Desain interior dan furniture custom yang dirancang sesuai karakter, kebutuhan, dan cara Anda menggunakan ruang.";

export const viewport = {
  themeColor: '#f7f5f0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Griyacipta Kreasi Perdana | Design & Build",
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Griyacipta Kreasi Perdana",
    title: "Griyacipta Kreasi Perdana | Design & Build",
    description: siteDescription,
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Griyacipta Kreasi Perdana — desain interior dan furniture custom' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Griyacipta Kreasi Perdana | Design & Build",
    description: siteDescription,
    images: [twitterImage],
  },
};

const contentSecurityPolicy =
  process.env.NODE_ENV === "development"
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
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
