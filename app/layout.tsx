import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mehul Shekhada | Software Engineer (MERN Stack | Backend-Focused)',
  description:
    'Software Engineer with 5+ years of experience building scalable, production-grade systems. Currently at PortPro Technologies. Backend-focused MERN Stack developer specializing in microservices and API development.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Mehul Shekhada | Software Engineer (MERN Stack | Backend-Focused)',
    description:
      'Software Engineer with 5+ years of experience building scalable, production-grade systems. Currently at PortPro Technologies. Backend-focused MERN Stack developer specializing in microservices and API development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehul Shekhada | Software Engineer (MERN Stack | Backend-Focused)',
    description:
      'Software Engineer with 5+ years of experience building scalable, production-grade systems. Currently at PortPro Technologies. Backend-focused MERN Stack developer specializing in microservices and API development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics />}
      </body>
    </html>
  );
}
