import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Geo Location Analysis — Enklaris",
  description:
    "Spatial intelligence untuk keputusan bisnis yang tepat. Analisis lokasi untuk ekspansi retail, optimasi logistik, dan territory management berbasis data spasial.",
  keywords: [
    "geo analytics Indonesia",
    "location intelligence",
    "spatial data analysis",
    "retail expansion analytics",
    "logistics optimization",
    "Enklaris",
  ],
  openGraph: {
    title: "Geo Location Analysis — Enklaris",
    description:
      "Spatial intelligence yang membantu Anda memahami di mana peluang bisnis berada — dari ekspansi outlet hingga analisis kompetitor.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
};

/* ─── SVG Illustrations ───────────────────────────────────── */

function IllustrationStore() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Map pin */}
      <path d="M40 10 C30 10 22 18 22 28 C22 42 40 58 40 58 C40 58 58 42 58 28 C58 18 50 10 40 10Z" stroke="#D4C5B0" strokeWidth="1.5" fill="rgba(212,197,176,0.08)" />
      {/* Store icon inside pin */}
      <rect x="33" y="24" width="14" height="10" rx="1" stroke="#D4C5B0" strokeWidth="1.2" fill="rgba(212,197,176,0.15)" />
      <path d="M33 24 L36.5 20 L43.5 20 L47 24" stroke="#D4C5B0" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="37" y="29" width="6" height="5" rx="1" fill="#D4C5B0" opacity="0.5" />
      {/* Ripple rings */}
      <circle cx="40" cy="28" r="22" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.15" />
      <circle cx="40" cy="28" r="28" stroke="#D4C5B0" strokeWidth="0.5" opacity="0.08" />
      {/* Shadow ground */}
      <ellipse cx="40" cy="60" rx="8" ry="3" fill="#D4C5B0" opacity="0.15" />
    </svg>
  );
}

function IllustrationTruck() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Road/route path */}
      <path d="M10 55 Q20 45 30 50 Q40 55 50 45 Q60 35 70 40" stroke="rgba(212,197,176,0.3)" strokeWidth="2" strokeDasharray="3 4" strokeLinecap="round" />
      {/* Truck body */}
      <rect x="12" y="36" width="28" height="16" rx="2" stroke="#D4C5B0" strokeWidth="1.5" fill="rgba(212,197,176,0.08)" />
      {/* Cab */}
      <path d="M40 46 L40 38 L50 38 L54 44 L54 52 L40 52 L40 46" stroke="#D4C5B0" strokeWidth="1.5" fill="rgba(212,197,176,0.1)" strokeLinejoin="round" />
      {/* Windshield */}
      <path d="M41 39 L41 44 L52 44 L50 39Z" fill="rgba(212,197,176,0.2)" />
      {/* Wheels */}
      <circle cx="22" cy="52" r="5" stroke="#D4C5B0" strokeWidth="1.5" fill="rgba(212,197,176,0.1)" />
      <circle cx="22" cy="52" r="2" fill="#D4C5B0" opacity="0.5" />
      <circle cx="46" cy="52" r="5" stroke="#D4C5B0" strokeWidth="1.5" fill="rgba(212,197,176,0.1)" />
      <circle cx="46" cy="52" r="2" fill="#D4C5B0" opacity="0.5" />
      {/* Destination pin */}
      <path d="M66 22 C62 22 59 25 59 29 C59 34 66 40 66 40 C66 40 73 34 73 29 C73 25 70 22 66 22Z" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.12)" />
      <circle cx="66" cy="29" r="3" fill="#7BA7A0" opacity="0.7" />
    </svg>
  );
}

function IllustrationMap() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Map outline */}
      <path d="M12 18 L28 14 L52 20 L68 14 L68 60 L52 66 L28 60 L12 66 Z" stroke="#7BA7A0" strokeWidth="1.5" fill="rgba(123,167,160,0.05)" strokeLinejoin="round" />
      {/* Fold line */}
      <line x1="28" y1="14" x2="28" y2="60" stroke="#7BA7A0" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 3" />
      <line x1="52" y1="20" x2="52" y2="66" stroke="#7BA7A0" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 3" />
      {/* Territory zones */}
      <path d="M14 30 Q20 28 26 32 Q32 36 28 44 Q24 52 14 48Z" fill="rgba(123,167,160,0.12)" stroke="#7BA7A0" strokeWidth="0.8" />
      <path d="M30 22 Q42 20 50 28 Q52 38 44 44 Q36 46 30 38Z" fill="rgba(193,127,90,0.1)" stroke="#C17F5A" strokeWidth="0.8" />
      <path d="M54 26 Q62 24 66 32 Q66 46 58 50 Q52 48 52 36Z" fill="rgba(212,197,176,0.15)" stroke="#D4C5B0" strokeWidth="0.8" />
      {/* Pins */}
      <circle cx="20" cy="36" r="3" fill="#7BA7A0" opacity="0.8" />
      <circle cx="40" cy="30" r="3" fill="#C17F5A" opacity="0.8" />
      <circle cx="60" cy="36" r="3" fill="#D4C5B0" opacity="0.8" />
    </svg>
  );
}

/* ─── Stat Card ───────────────────────────────────────────── */
function StatCard({ value, label, desc }: { value: string; label: string; desc: string }) {
  return (
    <div
      className="p-8 rounded-2xl text-center"
      style={{ background: "rgba(212,197,176,0.05)", border: "1px solid rgba(212,197,176,0.15)" }}
    >
      <p className="text-4xl font-jakarta font-extrabold mb-2" style={{ color: "#D4C5B0" }}>{value}</p>
      <p className="font-jakarta font-bold text-white mb-1">{label}</p>
      <p className="text-xs text-white/40">{desc}</p>
    </div>
  );
}

/* ─── Use Case Card ───────────────────────────────────────── */
function UseCaseCard({
  illustration,
  title,
  desc,
}: {
  illustration: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      style={{ border: "1px solid rgba(212,197,176,0.2)" }}
    >
      {illustration}
      <h3 className="font-jakarta font-bold text-obsidian text-xl mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Capability Item ─────────────────────────────────────── */
function CapabilityItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5">
      <div
        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl"
        style={{ background: "rgba(212,197,176,0.08)", border: "1px solid rgba(212,197,176,0.15)" }}
      >
        {icon}
      </div>
      <div>
        <p className="font-jakarta font-bold text-white mb-1">{title}</p>
        <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function GeoAnalyticsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: "#0F0F1E" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,197,176,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,197,176,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orb */}
        <div
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,197,176,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8"
              style={{
                background: "rgba(212,197,176,0.1)",
                border: "1px solid rgba(212,197,176,0.25)",
                color: "#D4C5B0",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#D4C5B0" }} />
              Geo Location Analysis
            </div>
            <h1 className="text-5xl md:text-6xl font-jakarta font-extrabold leading-[1.06] text-white mb-6">
              Dari Data Lokasi<br />
              Menjadi Keputusan<br />
              <span style={{ color: "#D4C5B0" }}>Bisnis yang Tepat</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10">
              Spatial intelligence yang membantu Anda memahami di mana peluang bisnis berada — dari ekspansi outlet hingga analisis kompetitor.
            </p>
            <a
              href="/#kontak-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-obsidian transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4C5B0, #e8ddd1)" }}
            >
              Mulai Analisis
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Visual — map abstraction */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              <svg viewBox="0 0 240 240" className="w-full h-full animate-float" fill="none" style={{ animationDuration: "11s" }}>
                {/* Map grid */}
                <rect x="20" y="20" width="200" height="200" rx="12" stroke="rgba(212,197,176,0.12)" strokeWidth="1" fill="rgba(212,197,176,0.02)" />
                {/* Grid lines */}
                <line x1="20" y1="80" x2="220" y2="80" stroke="rgba(212,197,176,0.06)" strokeWidth="1" />
                <line x1="20" y1="140" x2="220" y2="140" stroke="rgba(212,197,176,0.06)" strokeWidth="1" />
                <line x1="80" y1="20" x2="80" y2="220" stroke="rgba(212,197,176,0.06)" strokeWidth="1" />
                <line x1="140" y1="20" x2="140" y2="220" stroke="rgba(212,197,176,0.06)" strokeWidth="1" />
                {/* Territory zones */}
                <path d="M30 30 Q70 25 100 50 Q80 90 50 100 Q25 80 30 50Z" fill="rgba(123,167,160,0.08)" stroke="#7BA7A0" strokeWidth="0.8" />
                <path d="M100 40 Q160 35 190 70 Q185 120 150 130 Q110 120 95 90Z" fill="rgba(193,127,90,0.07)" stroke="#C17F5A" strokeWidth="0.8" />
                <path d="M40 130 Q90 120 120 150 Q110 190 70 200 Q30 195 35 160Z" fill="rgba(212,197,176,0.08)" stroke="#D4C5B0" strokeWidth="0.8" />
                <path d="M140 140 Q185 135 205 165 Q200 200 170 210 Q140 200 135 170Z" fill="rgba(123,167,160,0.06)" stroke="#7BA7A0" strokeWidth="0.8" />
                {/* Pins */}
                <circle cx="60" cy="65" r="5" fill="#7BA7A0" opacity="0.9" />
                <circle cx="60" cy="65" r="9" stroke="#7BA7A0" strokeWidth="1" opacity="0.3" />
                <circle cx="145" cy="80" r="5" fill="#C17F5A" opacity="0.9" />
                <circle cx="145" cy="80" r="9" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <circle cx="80" cy="165" r="4" fill="#D4C5B0" opacity="0.9" />
                <circle cx="80" cy="165" r="7" stroke="#D4C5B0" strokeWidth="1" opacity="0.3" />
                <circle cx="172" cy="172" r="4" fill="#7BA7A0" opacity="0.7" />
                {/* Compass */}
                <circle cx="200" cy="35" r="14" fill="rgba(212,197,176,0.06)" stroke="rgba(212,197,176,0.2)" strokeWidth="1" />
                <line x1="200" y1="24" x2="200" y2="46" stroke="rgba(212,197,176,0.4)" strokeWidth="1" />
                <line x1="189" y1="35" x2="211" y2="35" stroke="rgba(212,197,176,0.4)" strokeWidth="1" />
                <text x="200" y="30" textAnchor="middle" fill="#D4C5B0" fontSize="7" opacity="0.6">N</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ background: "#F8F6F1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#D4C5B0" }}>
                Use Cases
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Data Lokasi sebagai<br />
                <span style={{ color: "#7BA7A0" }}>Keunggulan Kompetitif</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto leading-relaxed">
                Bisnis yang memahami geografi operasionalnya membuat keputusan lebih cepat dan lebih tepat dari kompetitor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <UseCaseCard
                illustration={<IllustrationStore />}
                title="Retail Expansion"
                desc="Analisis kepadatan populasi, daya beli, dan kompetitor untuk menentukan lokasi outlet berikutnya dengan data — bukan intuisi."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <UseCaseCard
                illustration={<IllustrationTruck />}
                title="Logistics Optimization"
                desc="Optimasi rute pengiriman, analisis coverage area, dan identifikasi bottleneck distribusi untuk efisiensi biaya logistik."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <UseCaseCard
                illustration={<IllustrationMap />}
                title="Territory Management"
                desc="Bagi wilayah kerja tim sales, pantau coverage, dan alokasi sumber daya berdasarkan data spasial yang akurat."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background: "#0F0F1E" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: capabilities */}
            <div>
              <ScrollReveal>
                <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#D4C5B0" }}>
                  Kapabilitas
                </p>
                <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-8">
                  Spatial Intelligence<br />
                  <span style={{ color: "#D4C5B0" }}>yang Komprehensif</span>
                </h2>
              </ScrollReveal>
              <div className="space-y-7">
                <ScrollReveal delay={0}>
                  <CapabilityItem
                    icon="🗺️"
                    title="Heat Mapping"
                    desc="Visualisasi distribusi pelanggan, transaksi, atau peristiwa dalam peta panas yang mudah dibaca oleh eksekutif."
                  />
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <CapabilityItem
                    icon="📍"
                    title="Point of Interest Analysis"
                    desc="Analisis proximity ke kompetitor, transport hub, demographics — semua dalam satu layer spasial."
                  />
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <CapabilityItem
                    icon="📐"
                    title="Territory Delineation"
                    desc="Algoritma pembagian wilayah yang fair dan optimal berdasarkan potensi, beban kerja, atau parameter bisnis Anda."
                  />
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <CapabilityItem
                    icon="🔄"
                    title="Real-time Tracking"
                    desc="Live monitoring armada, field agents, atau aset bergerak dengan dashboard yang terintegrasi ke sistem operasional."
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Right: stats + ecosystem */}
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 gap-5">
                  <StatCard value="50M+" label="Data Points Diproses" desc="per proyek analytics untuk akurasi spatial yang tinggi" />
                  <StatCard value="< 2s" label="Query Response" desc="untuk spatial query pada dataset skala nasional" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(212,197,176,0.04)",
                    border: "1px solid rgba(212,197,176,0.12)",
                  }}
                >
                  <p className="text-xs font-mono text-white/30 tracking-wider uppercase mb-5">Ecosystem Partner</p>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(212,197,176,0.08)", border: "1px solid rgba(212,197,176,0.15)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <circle cx="12" cy="10" r="4" stroke="#D4C5B0" strokeWidth="1.5" />
                        <path d="M12 14v8M8 22h8" stroke="#D4C5B0" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M5 10C5 6.13 8.13 3 12 3s7 3.13 7 7c0 4-7 12-7 12S5 14 5 10z" stroke="#D4C5B0" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-jakarta font-bold text-white mb-1">Perare.io</p>
                      <p className="text-xs text-white/40 leading-relaxed">Platform geo-analytics Indonesia yang spesialis dalam spatial data infrastructure — kolaborasi untuk solusi location intelligence skala enterprise yang sesuai dengan konteks bisnis lokal.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section style={{ background: "#F8F6F1" }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#D4C5B0" }}>
              Mulai Sekarang
            </p>
            <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-3">
              Temukan peluang yang tersembunyi dalam data lokasi Anda
            </h2>
            <p className="text-muted text-sm">Kami akan merespons dalam 1 hari kerja.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
