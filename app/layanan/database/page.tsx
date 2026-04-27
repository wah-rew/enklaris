import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Database Management — Enklaris",
  description:
    "Infrastruktur data yang andal untuk bisnis yang terus tumbuh. Arsitektur, migrasi, optimasi performa, dan monitoring untuk PostgreSQL, MySQL, MongoDB, dan cloud-native database.",
  keywords: [
    "database management Indonesia",
    "PostgreSQL optimization",
    "database migration",
    "cloud database",
    "database architecture",
    "Enklaris",
  ],
  openGraph: {
    title: "Database Management — Enklaris",
    description:
      "Dari arsitektur awal hingga optimasi skala enterprise — kami pastikan database Anda performant, aman, dan siap scale.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
};

/* ─── SVG Illustrations ───────────────────────────────────── */

function IllustrationRocket() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Rocket body */}
      <path d="M40 10 C30 10 22 20 22 34 L22 50 L40 58 L58 50 L58 34 C58 20 50 10 40 10Z" stroke="#7BA7A0" strokeWidth="1.5" fill="rgba(123,167,160,0.06)" />
      {/* Window */}
      <circle cx="40" cy="30" r="7" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.12)" />
      <circle cx="40" cy="30" r="3.5" fill="#7BA7A0" opacity="0.6" />
      {/* Wings */}
      <path d="M22 46 L12 58 L22 54" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.1)" strokeLinejoin="round" />
      <path d="M58 46 L68 58 L58 54" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.1)" strokeLinejoin="round" />
      {/* Exhaust */}
      <path d="M32 58 Q36 66 40 70 Q44 66 48 58" stroke="#C17F5A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Stars */}
      <circle cx="14" cy="18" r="1.5" fill="#D4C5B0" opacity="0.6" />
      <circle cx="66" cy="22" r="1" fill="#D4C5B0" opacity="0.5" />
      <circle cx="10" cy="36" r="1" fill="#D4C5B0" opacity="0.4" />
    </svg>
  );
}

function IllustrationSpeedometer() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Gauge arc */}
      <path d="M16 52 A28 28 0 1 1 64 52" stroke="#7BA7A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Speed zones */}
      <path d="M16 52 A28 28 0 0 1 25 28" stroke="rgba(123,167,160,0.3)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M25 28 A28 28 0 0 1 55 28" stroke="#7BA7A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M55 28 A28 28 0 0 1 64 52" stroke="#C17F5A" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Center */}
      <circle cx="40" cy="52" r="5" fill="#7BA7A0" />
      {/* Needle */}
      <line x1="40" y1="52" x2="56" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <circle cx="40" cy="52" r="3" fill="white" opacity="0.9" />
      {/* Tick marks */}
      <line x1="16" y1="52" x2="19" y2="52" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="40" y1="24" x2="40" y2="27" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="64" y1="52" x2="61" y2="52" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Label */}
      <text x="40" y="64" textAnchor="middle" fill="#7BA7A0" fontSize="6" fontFamily="monospace" opacity="0.7">OPTIMIZED</text>
    </svg>
  );
}

function IllustrationTransfer() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Left cylinder (source) */}
      <ellipse cx="22" cy="24" rx="12" ry="4" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.1)" />
      <rect x="10" y="24" width="24" height="18" fill="rgba(123,167,160,0.06)" stroke="#7BA7A0" strokeWidth="1.2" />
      <ellipse cx="22" cy="42" rx="12" ry="4" stroke="#7BA7A0" strokeWidth="1.2" fill="rgba(123,167,160,0.1)" />
      {/* Right cylinder (dest) */}
      <ellipse cx="58" cy="24" rx="12" ry="4" stroke="#C17F5A" strokeWidth="1.2" fill="rgba(193,127,90,0.1)" />
      <rect x="46" y="24" width="24" height="18" fill="rgba(193,127,90,0.06)" stroke="#C17F5A" strokeWidth="1.2" />
      <ellipse cx="58" cy="42" rx="12" ry="4" stroke="#C17F5A" strokeWidth="1.2" fill="rgba(193,127,90,0.1)" />
      {/* Arrow right */}
      <path d="M36 30 L44 30" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M41 27 L44 30 L41 33" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow left (bidirectional) */}
      <path d="M44 38 L36 38" stroke="#C17F5A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M39 35 L36 38 L39 41" stroke="#C17F5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Check success */}
      <circle cx="58" cy="58" r="10" fill="rgba(123,167,160,0.12)" stroke="#7BA7A0" strokeWidth="1" />
      <path d="M53 58 L56.5 61.5 L63 55" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Technology Badge ────────────────────────────────────── */
function TechPill({ name, color = "#7BA7A0" }: { name: string; color?: string }) {
  return (
    <div
      className="px-5 py-2.5 rounded-full text-sm font-medium"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {name}
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
      style={{ border: "1px solid rgba(123,167,160,0.1)" }}
    >
      {illustration}
      <h3 className="font-jakarta font-bold text-obsidian text-xl mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function DatabasePage() {
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
              "linear-gradient(rgba(123,167,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,167,160,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orb */}
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,167,160,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8"
              style={{
                background: "rgba(123,167,160,0.1)",
                border: "1px solid rgba(123,167,160,0.25)",
                color: "#7BA7A0",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-celadon animate-pulse" />
              Database Management
            </div>
            <h1 className="text-5xl md:text-6xl font-jakarta font-extrabold leading-[1.06] text-white mb-6">
              Infrastruktur Data<br />
              yang Andal untuk<br />
              <span style={{ color: "#7BA7A0" }}>Bisnis yang Terus Tumbuh</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10">
              Dari arsitektur awal hingga optimasi skala enterprise — kami pastikan database Anda performant, aman, dan siap scale.
            </p>
            <a
              href="/#kontak-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow"
              style={{ background: "linear-gradient(135deg, #7BA7A0, #9bc4bd)" }}
            >
              Audit Database Anda
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Visual — database stack abstraction */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <svg viewBox="0 0 240 240" className="w-72 h-72 animate-float" fill="none" style={{ animationDuration: "10s" }}>
                {/* Stacked cylinders */}
                <ellipse cx="120" cy="60" rx="60" ry="18" stroke="rgba(123,167,160,0.6)" strokeWidth="1.5" fill="rgba(123,167,160,0.08)" />
                <rect x="60" y="60" width="120" height="40" fill="rgba(123,167,160,0.05)" />
                <ellipse cx="120" cy="100" rx="60" ry="18" stroke="rgba(123,167,160,0.5)" strokeWidth="1.5" fill="rgba(123,167,160,0.1)" />
                <rect x="60" y="100" width="120" height="40" fill="rgba(123,167,160,0.04)" />
                <ellipse cx="120" cy="140" rx="60" ry="18" stroke="rgba(123,167,160,0.4)" strokeWidth="1.5" fill="rgba(123,167,160,0.12)" />
                <rect x="60" y="140" width="120" height="40" fill="rgba(123,167,160,0.03)" />
                <ellipse cx="120" cy="180" rx="60" ry="18" stroke="rgba(123,167,160,0.3)" strokeWidth="1.5" fill="rgba(123,167,160,0.14)" />
                {/* Vertical sides */}
                <line x1="60" y1="60" x2="60" y2="180" stroke="rgba(123,167,160,0.3)" strokeWidth="1.5" />
                <line x1="180" y1="60" x2="180" y2="180" stroke="rgba(123,167,160,0.3)" strokeWidth="1.5" />
                {/* Layer labels */}
                <text x="120" y="82" textAnchor="middle" fill="#7BA7A0" fontSize="9" fontFamily="monospace" opacity="0.7">CACHE</text>
                <text x="120" y="122" textAnchor="middle" fill="#7BA7A0" fontSize="9" fontFamily="monospace" opacity="0.7">QUERY LAYER</text>
                <text x="120" y="162" textAnchor="middle" fill="#7BA7A0" fontSize="9" fontFamily="monospace" opacity="0.7">STORAGE</text>
                {/* Highlight top */}
                <ellipse cx="120" cy="60" rx="60" ry="18" stroke="#7BA7A0" strokeWidth="2" fill="rgba(123,167,160,0.15)" />
                {/* Activity pulse */}
                <circle cx="168" cy="60" r="5" fill="#C17F5A" opacity="0.8" />
                <circle cx="168" cy="60" r="9" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
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
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Use Cases
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Database yang Tepat<br />
                <span style={{ color: "#7BA7A0" }}>untuk Setiap Fase</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto leading-relaxed">
                Setiap bisnis punya tantangan data yang berbeda. Kami hadir di setiap titik perjalanan growth Anda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <UseCaseCard
                illustration={<IllustrationRocket />}
                title="Startup Scale-up"
                desc="Migrasi dari database sederhana ke arsitektur yang siap handle jutaan records tanpa downtime. Kami handle kompleksitasnya."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <UseCaseCard
                illustration={<IllustrationSpeedometer />}
                title="Performance Optimization"
                desc="Query yang lambat bisa membunuh user experience. Kami audit, optimize, dan monitor untuk hasil nyata yang terukur."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <UseCaseCard
                illustration={<IllustrationTransfer />}
                title="Data Migration"
                desc="Pindah cloud provider atau restrukturisasi schema tanpa kehilangan satu pun data. Zero-downtime migration strategy."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section style={{ background: "#0F0F1E" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Technologies
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-4">
                Database Apa Pun,<br />
                <span style={{ color: "#7BA7A0" }}>Kami Kuasai</span>
              </h2>
              <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
                Dari relational classics hingga NoSQL modern dan cloud-native managed services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-10">
              <p className="text-xs font-mono text-white/30 tracking-wider uppercase mb-5">Relational</p>
              <div className="flex flex-wrap gap-3">
                <TechPill name="PostgreSQL" color="#7BA7A0" />
                <TechPill name="MySQL" color="#7BA7A0" />
                <TechPill name="MariaDB" color="#7BA7A0" />
                <TechPill name="SQLite" color="#7BA7A0" />
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs font-mono text-white/30 tracking-wider uppercase mb-5">NoSQL & Search</p>
              <div className="flex flex-wrap gap-3">
                <TechPill name="MongoDB" color="#C17F5A" />
                <TechPill name="Redis" color="#C17F5A" />
                <TechPill name="Elasticsearch" color="#C17F5A" />
                <TechPill name="Cassandra" color="#C17F5A" />
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-white/30 tracking-wider uppercase mb-5">Cloud-Native</p>
              <div className="flex flex-wrap gap-3">
                <TechPill name="AWS RDS" color="#D4C5B0" />
                <TechPill name="AWS Aurora" color="#D4C5B0" />
                <TechPill name="Supabase" color="#D4C5B0" />
                <TechPill name="PlanetScale" color="#D4C5B0" />
                <TechPill name="Google Cloud SQL" color="#D4C5B0" />
                <TechPill name="Neon" color="#D4C5B0" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { value: "99.9%", label: "Uptime SLA", sub: "untuk managed database services" },
                { value: "< 50ms", label: "Query Target", sub: "setelah optimization engagement" },
                { value: "Zero", label: "Data Loss", sub: "dalam setiap migration project" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-8 rounded-2xl"
                  style={{ background: "rgba(123,167,160,0.05)", border: "1px solid rgba(123,167,160,0.12)" }}
                >
                  <p className="text-4xl font-jakarta font-extrabold mb-2" style={{ color: "#7BA7A0" }}>{stat.value}</p>
                  <p className="font-jakarta font-bold text-white mb-1">{stat.label}</p>
                  <p className="text-xs text-white/40">{stat.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section style={{ background: "#F8F6F1" }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#7BA7A0" }}>
              Mulai Sekarang
            </p>
            <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-3">
              Audit database Anda gratis
            </h2>
            <p className="text-muted text-sm">Ceritakan situasi database Anda. Kami analisis dan rekomendasikan langkah terbaik.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
