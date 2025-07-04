import "~/styles/globals.css";

import { Inter, Playfair_Display, Libre_Baskerville } from "next/font/google";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ThemeProvider } from "~/components/ThemeProvider";

// Define fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
    { rel: "icon", url: "/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${baskerville.variable}`}>
      <body className="flex min-h-screen flex-col bg-white dark:bg-gray-900 font-sans text-logo-800 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
