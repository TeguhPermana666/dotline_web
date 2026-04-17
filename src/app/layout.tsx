import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Eksternal Local Font Config
const graduatedFont = localFont({
  src: './fonts/Graduate-Regular.ttf', 
  variable: '--font-graduated',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dotline Tattu | Art by Silver Jerry',
  description: 'Tattoo Tradisional Indonesia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${graduatedFont.variable}`}>
      <body className="bg-background text-foreground antialiased font-graduated">
        {children}
      </body>
    </html>
  );
}