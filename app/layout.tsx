import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Noto_Sans } from 'next/font/google';
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
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
        className={`${poppins.variable} ${notoSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
