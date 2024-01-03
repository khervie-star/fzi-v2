import "./globals.css";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Events, Footer } from "../components";

import { Outfit, Nunito_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const nunito_sans = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito_sans",
});

export const metadata: Metadata = {
  title: "Frontida Zois Initiative",
  description:
    "To boost human productivity, enhance peace process among families and promote development of communities through dialogue, advocacy, sensitization, technology, arts, sports, culture and data driven approaches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${nunito_sans.variable}`}>
        <Navbar />
        {children}
        <Events />
        <Footer />
      </body>
    </html>
  );
}
