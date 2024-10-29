import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Noto_Sans, Montserrat } from 'next/font/google';
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/cursor/Cursor";
import { Analytics } from '@vercel/analytics/react';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Zenlect",
  description: "ZENLECT AI PRIVATE LIMITED- (Zonal Enforcement Network Leveraging Enhanced Cognitive Technology), is a tech company that specializes in developing cutting-edge artificial intelligence (AI) technologies across multiple sectors, including geolocation and legal matters. The company has created a proprietary AI capable of precisely determining the location of any image."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <div className="hidden md:block">
          <Cursor />
        </div>
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-white/10">
          <Navbar />
        </nav>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
