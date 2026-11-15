import type { Metadata } from "next";
import { Newsreader, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import "./enklaris.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enklaris — Mitra implementasi AI dan data",
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
  },
  description:
    "Enklaris merancang, memasang, dan menjalankan agent AI percakapan, akuisisi nasabah berbasis consent, dan analitik lahan untuk perusahaan di Indonesia.",
  keywords: [
    "WhatsApp Business API Indonesia",
    "AI Agent Development",
    "akuisisi nasabah berbasis consent",
    "UU PDP telemarketing",
    "Geo Location Analysis",
    "system integrator Indonesia",
    "B2B tech integration",
    "Enklaris",
  ],
  authors: [{ name: "Enklaris", url: "https://enklaris.id" }],
  openGraph: {
    title: "Enklaris — Mitra implementasi AI dan data",
    description:
      "Agent AI percakapan, akuisisi nasabah berbasis consent, dan analitik lahan, dijalankan bersama mitra teknologi.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enklaris — Mitra implementasi AI dan data",
    description:
      "Mitra implementasi AI dan data untuk perusahaan di Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`antialiased ${display.variable} ${sans.variable} ${mono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
