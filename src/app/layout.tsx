import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartal Dinlenme Tesisleri",
  description: "Modern ve konforlu dinlenme tesisleri",
  openGraph: {
    title: 'Kartal Dinlenme Tesisleri | Gümüşhane - Trabzon Yolu',
    description: 'Lezzetli sac kavurma, taze çorba ve 7/24 hizmet veren dinlenme tesisi. İkisu/Gümüşhane konumunda güvenli ve konforlu mola noktası.',
    url: 'https://kartaldinlenmetesisleri.com',
    siteName: 'Kartal Dinlenme Tesisleri',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Kartal Dinlenme Tesisleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kartal Dinlenme Tesisleri | Gümüşhane - Trabzon Yolu',
    description: 'Lezzetli sac kavurma, taze çorba ve 7/24 hizmet veren dinlenme tesisi.',
    images: ['/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans">
        <SplashScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
