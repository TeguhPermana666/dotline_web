import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AudioProvider } from '@/components/providers/audio-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const graduatedFont = localFont({
  src: './fonts/Graduate-Regular.ttf',
  variable: '--font-graduated',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dotlinetattu | Art by Silver Jerry',
  description: 'Premium traditional and modern tattoo studio in Bali.',
  // Menambahkan logo.jpg sebagai favicon utama dan Apple Touch Icon
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${graduatedFont.variable}`}>
      <body className="bg-background text-foreground antialiased font-graduated">
        <AudioProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}