import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

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
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex min-h-screen flex-col bg-sepia-gradient font-serif text-sepia-900">
          <div className="bg-sepia-800 text-white">
            <div className="mx-auto max-w-6xl px-4 py-2 flex justify-end items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-md bg-sepia-700 px-4 py-2 text-white hover:bg-sepia-600">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-md border border-white px-4 py-2 text-white hover:bg-sepia-700">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
