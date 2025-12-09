import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ProTech - Digital Agency',
  description: 'Building powerful digital experiences through web development, video editing, and brand design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-display w-full antialiased text-white bg-[#240202] `}>
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
          {/* Background Decorations */}
          <svg 
            className="absolute top-0 left-0 w-64 h-auto text-primary/20  -translate-x-1/2 -translate-y-1/4 pointer-events-none -z-10 float-smooth opacity-30" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 20,80 C 40,40 80,40 100,80 S 160,120 180,80 C 200,40 240,40 260,80 S 320,120 340,80" />
          </svg>
          
          <svg 
            className="absolute bottom-0 right-0 w-64 h-auto text-primary/20  translate-x-1/2 translate-y-1/4 pointer-events-none -z-10 float-smooth opacity-30" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M -60,80 C -40,120 -0,120 20,80 S 80,40 100,80 C 120,120 160,120 180,80 S 240,40 260,80" />
          </svg>

          <Header />
          <main className="flex-1 container mx-auto px-6 py-12 fade-up">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}