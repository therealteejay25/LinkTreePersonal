import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tayo ✦ Link Hub",
  description: "Tayo's Link Hub – WhatsApp, X, Instagram, Github, and Portfolio all in one place.",
  keywords: ["Tayo", "Link Hub", "Linktree", "WhatsApp", "Instagram", "X", "Github", "Portfolio"],
  authors: [{ name: "Tayo", url: "https://tayo01.vercel.app" }],
  openGraph: {
    title: "Tayo ✦ Link Hub",
    description: "Tayo's Link Hub – WhatsApp, X, Instagram, Github, and Portfolio all in one place.",
    url: "https://tayo01.vercel.app",
    siteName: "Tayo ✦",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Tayo ✦ Link Hub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayo ✦ Link Hub",
    description: "Tayo's Link Hub – WhatsApp, X, Instagram, Github, and Portfolio all in one place.",
    site: "https://tayolinks.vercel.app",
    creator: "@therealteejay25",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
