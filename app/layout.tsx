import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import "./enklaris.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
  title: "Enklaris — Curated leads and AI agents",
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
  },
  description:
    "Enklaris helps insurers and other regulated businesses in Indonesia reach the right people with consent, then convert them through WhatsApp, CRM and voice AI.",
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
    title: "Enklaris — Curated leads and AI agents",
    description:
      "Curated lead databases and AI agent implementation: automated WhatsApp, dynamic Flows, CRM and voice AI.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enklaris — Curated leads and AI agents",
    description:
      "Curated leads, and AI agents that turn them into customers.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased ${sans.variable} ${mono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
