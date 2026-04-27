"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

/* ─── SVG Icons ─────────────────────────────────────────── */

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="12" fill="rgba(123,167,160,0.15)" />
      <path
        d="M20 10C14.477 10 10 14.477 10 20c0 1.89.525 3.66 1.44 5.17L10 30l4.96-1.41A10 10 0 1020 10z"
        stroke="#7BA7A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 17.5c.2.5 1.2 2.3 2.5 3.5s3 2.3 3.5 2.5c.5.2.8.1 1.1-.2l.8-.9c.2-.2.5-.3.7-.1l2.2 1.5c.2.1.2.4 0 .6l-.7.8c-.7.8-1.9 1.1-3 .5-1.5-.8-3.7-2.4-5-3.7S16 19 15.2 17.5c-.6-1.1-.3-2.3.5-3l.8-.7c.2-.2.5-.2.6 0l1.5 2.2c.2.2.1.5-.1.7l-.9.8c-.3.3-.4.6-.1 1z"
        fill="#7BA7A0"
      />
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="12" fill="rgba(193,127,90,0.12)" />
      <circle cx="20" cy="20" r="5" stroke="#C17F5A" strokeWidth="1.5" />
      <circle cx="20" cy="10" r="2" fill="#C17F5A" opacity="0.6" />
      <circle cx="20" cy="30" r="2" fill="#C17F5A" opacity="0.6" />
      <circle cx="10" cy="20" r="2" fill="#C17F5A" opacity="0.6" />
      <circle cx="30" cy="20" r="2" fill="#C17F5A" opacity="0.6" />
      <circle cx="13" cy="13" r="1.5" fill="#C17F5A" opacity="0.4" />
      <circle cx="27" cy="27" r="1.5" fill="#C17F5A" opacity="0.4" />
      <circle cx="27" cy="13" r="1.5" fill="#C17F5A" opacity="0.4" />
      <circle cx="13" cy="27" r="1.5" fill="#C17F5A" opacity="0.4" />
      <line x1="20" y1="15" x2="20" y2="12" stroke="#C17F5A" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="25" x2="20" y2="28" stroke="#C17F5A" strokeWidth="1" opacity="0.5" />
      <line x1="15" y1="20" x2="12" y2="20" stroke="#C17F5A" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="20" x2="28" y2="20" stroke="#C17F5A" strokeWidth="1" opacity="0.5" />
      <line x1="16.5" y1="16.5" x2="14.2" y2="14.2" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
      <line x1="23.5" y1="23.5" x2="25.8" y2="25.8" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
      <line x1="23.5" y1="16.5" x2="25.8" y2="14.2" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
      <line x1="16.5" y1="23.5" x2="14.2" y2="25.8" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="12" fill="rgba(123,167,160,0.12)" />
      <ellipse cx="20" cy="13" rx="9" ry="3.5" stroke="#7BA7A0" strokeWidth="1.5" />
      <path d="M11 13v7c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-7" stroke="#7BA7A0" strokeWidth="1.5" />
      <path d="M11 20v7c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-7" stroke="#7BA7A0" strokeWidth="1.5" />
    </svg>
  );
}

function IconGeo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect width="40" height="40" rx="12" fill="rgba(212,197,176,0.2)" />
      <path
        d="M20 10c-4.42 0-8 3.58-8 8 0 6 8 14 8 14s8-8 8-14c0-4.42-3.58-8-8-8z"
        stroke="#D4C5B0"
        strokeWidth="1.5"
        fill="rgba(212,197,176,0.1)"
      />
      <circle cx="20" cy="18" r="2.5" fill="#D4C5B0" />
      {/* Ripple rings */}
      <circle cx="20" cy="18" r="4.5" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.3" />
      <circle cx="20" cy="18" r="7" stroke="#D4C5B0" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

/* ─── Hero geometric visual ──────────────────────────────── */

function HeroVisual() {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-slow"
        style={{ border: "1px solid rgba(123,167,160,0.15)" }}
      />
      {/* Mid ring */}
      <div
        className="absolute inset-8 rounded-full"
        style={{ border: "1px dashed rgba(123,167,160,0.25)" }}
      />
      {/* Inner circle */}
      <div
        className="absolute inset-16 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(123,167,160,0.25) 0%, rgba(123,167,160,0.05) 70%)",
          border: "1.5px solid rgba(123,167,160,0.35)",
        }}
      />

      {/* Geometric hexagon */}
      <div className="relative animate-float" style={{ animationDuration: "8s" }}>
        <svg viewBox="0 0 120 120" className="w-40 h-40" fill="none">
          <polygon
            points="60,8 108,34 108,86 60,112 12,86 12,34"
            stroke="rgba(123,167,160,0.6)"
            strokeWidth="1.5"
            fill="rgba(123,167,160,0.05)"
          />
          <polygon
            points="60,22 96,42 96,82 60,102 24,82 24,42"
            stroke="rgba(212,197,176,0.4)"
            strokeWidth="1"
            fill="rgba(212,197,176,0.04)"
          />
          <polygon
            points="60,36 84,50 84,74 60,88 36,74 36,50"
            stroke="rgba(123,167,160,0.5)"
            strokeWidth="1"
            fill="rgba(123,167,160,0.08)"
          />
          {/* Center dot */}
          <circle cx="60" cy="60" r="5" fill="#7BA7A0" opacity="0.8" />
          {/* Connection lines */}
          <line x1="60" y1="8" x2="60" y2="36" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
          <line x1="108" y1="34" x2="84" y2="50" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
          <line x1="108" y1="86" x2="84" y2="74" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
          <line x1="60" y1="112" x2="60" y2="88" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
          <line x1="12" y1="86" x2="36" y2="74" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
          <line x1="12" y1="34" x2="36" y2="50" stroke="rgba(123,167,160,0.3)" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating nodes */}
      {[
        { top: "5%", left: "20%", size: 5, delay: "0s" },
        { top: "25%", right: "5%", size: 4, delay: "1.5s" },
        { bottom: "15%", left: "10%", size: 6, delay: "3s" },
        { bottom: "30%", right: "15%", size: 3, delay: "2s" },
        { top: "55%", left: "5%", size: 4, delay: "1s" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: n.size,
            height: n.size,
            top: n.top,
            left: "left" in n ? n.left : undefined,
            right: "right" in n ? n.right : undefined,
            bottom: "bottom" in n ? n.bottom : undefined,
            background: "#7BA7A0",
            animationDelay: n.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Node Network Background ────────────────────────────── */

function NodeNetwork() {
  const dots = [
    { x: "5%", y: "15%", size: 4, delay: "0s" },
    { x: "15%", y: "65%", size: 3, delay: "1.2s" },
    { x: "25%", y: "30%", size: 5, delay: "2.4s" },
    { x: "35%", y: "80%", size: 3, delay: "0.8s" },
    { x: "50%", y: "20%", size: 4, delay: "1.6s" },
    { x: "60%", y: "55%", size: 3, delay: "3.2s" },
    { x: "70%", y: "10%", size: 5, delay: "0.4s" },
    { x: "80%", y: "70%", size: 4, delay: "2s" },
    { x: "90%", y: "35%", size: 3, delay: "1s" },
    { x: "8%", y: "45%", size: 3, delay: "2.8s" },
    { x: "42%", y: "90%", size: 4, delay: "1.4s" },
    { x: "88%", y: "85%", size: 3, delay: "0.6s" },
  ];

  return (
    <div className="node-network">
      {/* SVG lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
        <line x1="5%" y1="15%" x2="25%" y2="30%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="25%" y1="30%" x2="50%" y2="20%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="50%" y1="20%" x2="70%" y2="10%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="70%" y1="10%" x2="90%" y2="35%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="15%" y1="65%" x2="35%" y2="80%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="35%" y1="80%" x2="60%" y2="55%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="60%" y1="55%" x2="80%" y2="70%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="25%" y1="30%" x2="15%" y2="65%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="50%" y1="20%" x2="60%" y2="55%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="90%" y1="35%" x2="80%" y2="70%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="5%" y1="15%" x2="8%" y2="45%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="42%" y1="90%" x2="35%" y2="80%" stroke="#7BA7A0" strokeWidth="1" />
        <line x1="88%" y1="85%" x2="80%" y2="70%" stroke="#7BA7A0" strokeWidth="1" />
      </svg>

      {/* Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            background: "#7BA7A0",
            opacity: 0.4,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Service Card ───────────────────────────────────────── */

interface ServiceCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  features: string[];
  accentColor?: string;
}

function ServiceCard({ icon, tag, title, description, features, accentColor = "#7BA7A0" }: ServiceCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-celadon/20 overflow-hidden"
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${accentColor}06 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        <div className="mb-5">{icon}</div>

        <p
          className="text-xs font-mono-accent font-medium mb-2 tracking-wider uppercase"
          style={{ color: accentColor }}
        >
          {tag}
        </p>

        <h3 className="text-xl font-jakarta font-bold text-obsidian mb-3">{title}</h3>

        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-obsidian/70">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: accentColor }}
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-obsidian/5">
          <a
            href="#kontak"
            className="text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
            style={{ color: accentColor }}
          >
            Pelajari lebih lanjut
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Step Component ─────────────────────────────────────── */

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      {/* Number + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-jakarta flex-shrink-0"
          style={{
            background: "rgba(123,167,160,0.15)",
            border: "1.5px solid rgba(123,167,160,0.4)",
            color: "#7BA7A0",
          }}
        >
          {number}
        </div>
        {number !== "03" && (
          <div
            className="w-px flex-1 mt-3"
            style={{ background: "rgba(123,167,160,0.15)", minHeight: 40 }}
          />
        )}
      </div>
      <div className="pb-10">
        <h4 className="font-jakarta font-bold text-white text-lg mb-2">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Pillar Component ───────────────────────────────────── */

function Pillar({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-8">
      <div
        className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl"
        style={{ background: "rgba(123,167,160,0.1)", border: "1.5px solid rgba(123,167,160,0.2)" }}
      >
        {icon}
      </div>
      <h4 className="font-jakarta font-bold text-obsidian text-lg mb-3">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0F0F1E" }}
      >
        <NodeNetwork />

        {/* Gradient orb */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(123,167,160,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-accent font-medium mb-8 animate-fade-up"
              style={{
                background: "rgba(123,167,160,0.1)",
                border: "1px solid rgba(123,167,160,0.25)",
                color: "#7BA7A0",
                animationDelay: "0.1s",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#7BA7A0" }}
              />
              Intelligent Systems for Modern Business
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-jakarta font-extrabold leading-[1.05] mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">Clarity</span>
              <br />
              <span className="text-white">through</span>
              <br />
              <span style={{ color: "#7BA7A0" }}>Connection</span>
            </h1>

            <p
              className="text-white/50 text-lg leading-relaxed max-w-lg mb-10 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              Platform integrasi cerdas untuk bisnis modern Indonesia. WhatsApp API, AI Agent, Database, dan Geo Analytics dalam satu ekosistem.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#kontak"
                className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #C17F5A, #d4956f)",
                }}
              >
                Mulai Konsultasi
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#layanan"
                className="px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Lihat Layanan
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <HeroVisual />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, rgba(123,167,160,0.5))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7BA7A0" }} />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="layanan" style={{ background: "#F8F6F1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4"
                style={{ color: "#7BA7A0" }}
              >
                Layanan
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-5">
                Ekosistem Integrasi
                <br />
                <span style={{ color: "#7BA7A0" }}>Lengkap & Terpadu</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed">
                Dari komunikasi pelanggan hingga analitik data, kami mengintegrasikan setiap lapisan bisnis Anda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <ServiceCard
                icon={<IconWhatsApp />}
                tag="WhatsApp Business API"
                title="Template Message & Chatbot"
                description="Bangun customer journey otomatis via WhatsApp Business API. Template pesan terverifikasi, broadcast campaign, dan chatbot conversational."
                features={["Template verified", "Broadcast campaign", "Analytics dashboard"]}
                accentColor="#7BA7A0"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ServiceCard
                icon={<IconAI />}
                tag="AI Agent Development"
                title="Conversational AI & Automation"
                description="Bangun AI agent yang memahami konteks bisnis Anda. Dari customer service otomatis hingga internal workflow intelligence."
                features={["Natural Language Processing", "Custom training", "Multi-channel"]}
                accentColor="#C17F5A"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                icon={<IconDatabase />}
                tag="Database Management"
                title="Architecture & Optimization"
                description="Design, migrasi, dan optimasi database untuk performa maksimal. PostgreSQL, MySQL, MongoDB, dan cloud-native solutions."
                features={["Migration & design", "Query optimization", "24/7 monitoring"]}
                accentColor="#7BA7A0"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ServiceCard
                icon={<IconGeo />}
                tag="Geo Location Analysis"
                title="Spatial Intelligence"
                description="Ubah data lokasi menjadi insight bisnis. Heat mapping, territory analysis, dan location-based intelligence untuk keputusan strategis."
                features={["Heat mapping", "Territory analysis", "Reporting & BI"]}
                accentColor="#D4C5B0"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section
        id="tentang"
        className="py-24"
        style={{ background: "#0F0F1E" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <p
                  className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4"
                  style={{ color: "#7BA7A0" }}
                >
                  Cara Kerja
                </p>
                <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-6">
                  Dari Konsultasi
                  <br />
                  <span style={{ color: "#7BA7A0" }}>ke Deployment</span>
                </h2>
                <p className="text-white/40 leading-relaxed mb-8">
                  Proses kami dirancang untuk efisiensi tanpa mengorbankan kualitas. Setiap langkah transparan, terukur, dan berfokus pada hasil bisnis Anda.
                </p>

                {/* Mini visual */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(123,167,160,0.06)",
                    border: "1px solid rgba(123,167,160,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#7BA7A0" }}
                    />
                    <span className="text-xs text-white/30 font-mono-accent tracking-wider">
                      ENKLARIS PROCESS
                    </span>
                  </div>
                  <div className="space-y-2">
                    {["Discovery", "Design", "Deploy"].map((s, i) => (
                      <div key={s} className="flex items-center gap-3">
                        <div
                          className="text-xs font-mono-accent w-4 text-right"
                          style={{ color: "#7BA7A0", opacity: 0.5 }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div
                          className="flex-1 h-1 rounded-full"
                          style={{
                            background: `rgba(123,167,160,${0.7 - i * 0.15})`,
                            width: `${100 - i * 15}%`,
                          }}
                        />
                        <span className="text-xs text-white/30">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: steps */}
            <div className="space-y-0">
              <ScrollReveal delay={0}>
                <Step
                  number="01"
                  title="Discovery & Konsultasi"
                  description="Kami pelajari kebutuhan dan ekosistem bisnis Anda secara menyeluruh — dari pain points operasional hingga tech stack yang sudah ada."
                />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <Step
                  number="02"
                  title="Design & Integrasi"
                  description="Tim kami merancang dan membangun solusi yang tepat. Setiap komponen diintegrasikan dengan presisi dan dokumentasi lengkap."
                />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Step
                  number="03"
                  title="Deploy & Monitor"
                  description="Launch dengan confidence. Kami pantau sistem 24/7, memastikan uptime, performa, dan keamanan data bisnis Anda."
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ENKLARIS ─────────────────────────────────────── */}
      <section style={{ background: "#F8F6F1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4"
                style={{ color: "#7BA7A0" }}
              >
                Mengapa Enklaris
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Bukan hanya vendor.
              </h2>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold" style={{ color: "#7BA7A0" }}>
                Partner strategis.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <ScrollReveal delay={0}>
              <Pillar
                icon="⚙️"
                title="Deep Technical Expertise"
                description="Tim kami memiliki keahlian mendalam di setiap domain — dari API integration hingga machine learning dan spatial data engineering."
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <Pillar
                icon="🏭"
                title="Industry-First Approach"
                description="Solusi kami dirancang spesifik untuk konteks industri Indonesia — regulasi lokal, behavior pengguna, dan tantangan infrastruktur."
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Pillar
                icon="🤝"
                title="Long-term Partnership"
                description="Kami tidak hilang setelah delivery. Kami berkomitmen pada pertumbuhan jangka panjang bisnis Anda bersama."
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        id="kontak"
        className="py-24 relative overflow-hidden"
        style={{ background: "#1A1A2E" }}
      >
        {/* BG decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(123,167,160,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(123,167,160,0.4))" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p
              className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-6"
              style={{ color: "#7BA7A0" }}
            >
              Mulai Hari Ini
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-jakarta font-extrabold text-white mb-6 leading-tight">
              Siap mengintegrasikan
              <br />
              <span style={{ color: "#7BA7A0" }}>intelligence</span> ke dalam
              <br />
              bisnis Anda?
            </h2>
            <p className="text-white/40 text-lg mb-10 leading-relaxed">
              Konsultasi gratis. Tidak ada komitmen.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#kontak-form"
                className="px-10 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow flex items-center gap-2.5"
                style={{
                  background: "linear-gradient(135deg, #C17F5A, #d4956f)",
                  fontSize: "1rem",
                }}
              >
                Schedule a Demo
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-6 justify-center mt-12 text-sm text-white/30">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2a4 4 0 100 8 4 4 0 000-8zm0 10c-4 0-6 1.34-6 2v1h12v-1c0-.66-2-2-6-2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                Jakarta, Indonesia
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section id="kontak-form" style={{ background: "#F8F6F1" }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-3" style={{ color: "#7BA7A0" }}>Mulai Diskusi</p>
            <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-3">Ceritakan kebutuhan Anda</h2>
            <p className="text-muted text-sm">Kami akan merespons dalam 1 hari kerja.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
