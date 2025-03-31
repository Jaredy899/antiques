import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// Define antique-style fonts
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baskerville',
});

export const metadata: Metadata = {
  title: "Abingdon Antiques",
  description: "Abingdon Antiques and More Vendor Mall - Quality antiques and collectibles",
  icons: [
    { rel: "icon", url: "/images/favicon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${playfair.variable} ${baskerville.variable}`}>
        <body className="flex min-h-screen flex-col bg-white font-serif text-logo-800">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
