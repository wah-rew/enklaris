import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enklaris — Clarity through Connection",
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
  },
  description:
    "Platform integrasi cerdas: WhatsApp Business API, AI Agent, Database Management, dan Geo Location Analysis untuk bisnis modern Indonesia.",
  keywords: [
    "WhatsApp Business API Indonesia",
    "AI Agent Development",
    "Database Management",
    "Geo Location Analysis",
    "system integrator Indonesia",
    "B2B tech integration",
    "Enklaris",
  ],
  authors: [{ name: "Enklaris", url: "https://enklaris.id" }],
  openGraph: {
    title: "Enklaris — Clarity through Connection",
    description:
      "Platform integrasi cerdas untuk bisnis modern Indonesia. WhatsApp API, AI Agent, Database, dan Geo Analytics dalam satu ekosistem.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enklaris — Clarity through Connection",
    description:
      "Platform integrasi cerdas untuk bisnis modern Indonesia.",
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
        className={`antialiased ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
