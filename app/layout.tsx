import "./globals.css";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Events, Footer } from "../components";

import { Outfit, Nunito_Sans } from "next/font/google";

import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito_sans",
});

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Frontida Zois Initiative",
    description:
      "To boost human productivity, enhance peace process among families and promote development of communities through dialogue, advocacy, sensitization, technology, arts, sports, culture and data driven approaches.",
    url: "",
    siteName: "Glory Tabernacle Ministry",
    images: [
      {
        url: "/assets/Images/schools.jpeg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "/assets/Images/schools.jpeg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Glory Tabernacle Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${outfit.variable} ${nunito_sans.variable}`}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName="font-outfit"
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
          }}
        />
        <Navbar />
        {children}
        <Events />
        <Footer />
      </body>
    </html>
  );
}
