import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Development — Enklaris",
  description:
    "Bangun AI agent dengan memori, reasoning, dan kemampuan mengambil tindakan — bukan sekadar chatbot. Customer service otomatis, knowledge base internal, dan sales qualification.",
  keywords: [
    "AI agent Indonesia",
    "chatbot AI",
    "conversational AI",
    "RAG Indonesia",
    "LLM Indonesia",
    "Enklaris AI",
  ],
  openGraph: {
    title: "AI Agent Development — Enklaris",
    description:
      "Bukan sekadar chatbot — kami bangun AI agent dengan memori, reasoning, dan kemampuan mengambil tindakan yang relevan dengan operasional bisnis Anda.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
};

/* ─── SVG Illustrations ───────────────────────────────────── */

function IllustrationCS() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Headset */}
      <path d="M20 44 Q20 22 40 22 Q60 22 60 44" stroke="#C17F5A" strokeWidth="1.5" fill="none" />
      <rect x="14" y="42" width="10" height="16" rx="5" stroke="#C17F5A" strokeWidth="1.5" fill="rgba(193,127,90,0.1)" />
      <rect x="56" y="42" width="10" height="16" rx="5" stroke="#C17F5A" strokeWidth="1.5" fill="rgba(193,127,90,0.1)" />
      <path d="M60 58 Q60 66 50 66 L46 66" stroke="#C17F5A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="66" r="3" fill="#C17F5A" opacity="0.7" />
      {/* AI sparkle */}
      <circle cx="58" cy="18" r="8" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="1" />
      <path d="M58 13v10M53 18h10M55.5 15.5l5 5M60.5 15.5l-5 5" stroke="#C17F5A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function IllustrationKB() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Book / Database */}
      <rect x="16" y="14" width="34" height="44" rx="4" stroke="#7BA7A0" strokeWidth="1.5" fill="rgba(123,167,160,0.06)" />
      <path d="M16 18 Q26 14 50 18" stroke="#7BA7A0" strokeWidth="1" opacity="0.4" />
      <line x1="22" y1="28" x2="44" y2="28" stroke="#7BA7A0" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="22" y1="35" x2="44" y2="35" stroke="#7BA7A0" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="22" y1="42" x2="36" y2="42" stroke="#7BA7A0" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Spine */}
      <rect x="16" y="14" width="6" height="44" rx="2" fill="rgba(123,167,160,0.15)" />
      {/* Search/query spark */}
      <circle cx="58" cy="52" r="12" fill="rgba(123,167,160,0.08)" stroke="#7BA7A0" strokeWidth="1.2" />
      <circle cx="56" cy="50" r="5" stroke="#7BA7A0" strokeWidth="1.2" />
      <line x1="60" y1="54" x2="64" y2="58" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IllustrationSales() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Bar chart going up */}
      <rect x="14" y="46" width="10" height="18" rx="2" fill="rgba(123,167,160,0.2)" stroke="#7BA7A0" strokeWidth="1.2" />
      <rect x="30" y="34" width="10" height="30" rx="2" fill="rgba(123,167,160,0.35)" stroke="#7BA7A0" strokeWidth="1.2" />
      <rect x="46" y="22" width="10" height="42" rx="2" fill="rgba(123,167,160,0.5)" stroke="#7BA7A0" strokeWidth="1.2" />
      {/* Trend arrow */}
      <path d="M18 42 L35 30 L52 18" stroke="#C17F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 16 L54 16 L54 24" stroke="#C17F5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Funnel overlay */}
      <path d="M60 10 L70 10 L67 22 L63 22 Z" stroke="#C17F5A" strokeWidth="1" fill="rgba(193,127,90,0.1)" opacity="0.7" />
      <rect x="63" y="22" width="4" height="8" rx="1" fill="#C17F5A" opacity="0.4" />
    </svg>
  );
}

/* ─── Tech Stack Badge ────────────────────────────────────── */
function TechBadge({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "rgba(123,167,160,0.06)", border: "1px solid rgba(123,167,160,0.15)" }}
    >
      <p className="font-jakarta font-bold text-white text-base mb-1">{label}</p>
      <p className="text-xs text-white/40 leading-relaxed">{sublabel}</p>
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
      style={{ border: "1px solid rgba(193,127,90,0.1)" }}
    >
      {illustration}
      <h3 className="font-jakarta font-bold text-obsidian text-xl mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function AIAgentPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: "#0F0F1E" }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(193,127,90,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(193,127,90,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orb */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(193,127,90,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8"
              style={{
                background: "rgba(193,127,90,0.1)",
                border: "1px solid rgba(193,127,90,0.25)",
                color: "#C17F5A",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C17F5A" }} />
              AI Agent Development
            </div>
            <h1 className="text-5xl md:text-6xl font-jakarta font-extrabold leading-[1.06] text-white mb-6">
              AI Agent yang<br />
              <span style={{ color: "#C17F5A" }}>Benar-Benar Memahami</span>
              <br />Konteks Bisnis Anda
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10">
              Bukan sekadar chatbot — kami bangun AI agent dengan memori, reasoning, dan kemampuan mengambil tindakan yang relevan dengan operasional bisnis Anda.
            </p>
            <a
              href="/#kontak-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C17F5A, #d4956f)" }}
            >
              Diskusi Kebutuhan Anda
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Visual — neural network abstraction */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              <svg viewBox="0 0 240 240" className="w-full h-full animate-float" fill="none" style={{ animationDuration: "9s" }}>
                {/* Outer ring */}
                <circle cx="120" cy="120" r="110" stroke="rgba(193,127,90,0.08)" strokeWidth="1" />
                <circle cx="120" cy="120" r="80" stroke="rgba(193,127,90,0.12)" strokeWidth="1" strokeDasharray="4 8" />
                {/* Nodes */}
                <circle cx="120" cy="40" r="8" fill="rgba(193,127,90,0.2)" stroke="#C17F5A" strokeWidth="1.5" />
                <circle cx="200" cy="90" r="6" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="1.2" />
                <circle cx="190" cy="170" r="7" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="1.2" />
                <circle cx="120" cy="200" r="8" fill="rgba(193,127,90,0.2)" stroke="#C17F5A" strokeWidth="1.5" />
                <circle cx="50" cy="170" r="6" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="1.2" />
                <circle cx="40" cy="90" r="7" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="1.2" />
                {/* Center */}
                <circle cx="120" cy="120" r="22" fill="rgba(193,127,90,0.15)" stroke="#C17F5A" strokeWidth="2" />
                <circle cx="120" cy="120" r="10" fill="#C17F5A" opacity="0.8" />
                {/* Connections */}
                <line x1="120" y1="98" x2="120" y2="48" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <line x1="140" y1="108" x2="194" y2="96" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <line x1="140" y1="132" x2="183" y2="163" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <line x1="120" y1="142" x2="120" y2="192" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <line x1="100" y1="132" x2="57" y2="163" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
                <line x1="100" y1="108" x2="46" y2="96" stroke="#C17F5A" strokeWidth="1" opacity="0.3" />
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
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#C17F5A" }}>
                Use Cases
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Lebih dari Chatbot.
                <br />
                <span style={{ color: "#C17F5A" }}>Ini Intelligence.</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto leading-relaxed">
                AI agent kami tidak hanya menjawab — mereka mengingat konteks, mengambil keputusan, dan bertindak atas nama tim Anda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <UseCaseCard
                illustration={<IllustrationCS />}
                title="Customer Service Otomatis"
                desc="AI agent yang handle ribuan pertanyaan pelanggan secara bersamaan, 24/7, dengan kualitas jawaban yang konsisten."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <UseCaseCard
                illustration={<IllustrationKB />}
                title="Internal Knowledge Base"
                desc="Agent internal yang bisa menjawab pertanyaan tim dari dokumen SOP, kebijakan, dan database perusahaan — tanpa perlu membuka file satu per satu."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <UseCaseCard
                illustration={<IllustrationSales />}
                title="Sales & Lead Qualification"
                desc="AI agent yang qualify leads, jadwalkan demo, dan nurture prospects secara otomatis di berbagai channel — CRM terupdate sendiri."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: "#0F0F1E" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#C17F5A" }}>
                Technology Stack
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-4">
                Dibangun dengan<br />
                <span style={{ color: "#C17F5A" }}>Teknologi Terdepan</span>
              </h2>
              <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
                Kami mengintegrasikan berbagai komponen AI terbaik dalam satu arsitektur yang kohesif dan production-ready.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              <TechBadge
                label="LLM Providers"
                sublabel="OpenAI, Anthropic, Google Gemini — pilih model yang paling sesuai dengan kebutuhan dan anggaran Anda."
              />
              <TechBadge
                label="RAG Architecture"
                sublabel="Retrieval-Augmented Generation untuk jawaban yang akurat berdasarkan dokumen dan data internal perusahaan."
              />
              <TechBadge
                label="Vector Database"
                sublabel="Pinecone, Weaviate, pgvector — semantic search yang cepat dan skalabel untuk knowledge base besar."
              />
              <TechBadge
                label="Tool Use & Actions"
                sublabel="Agent yang bisa berinteraksi dengan API eksternal, database, dan sistem internal untuk mengambil tindakan nyata."
              />
            </div>
          </ScrollReveal>


        </div>
      </section>

      {/* CTA / CONTACT */}
      <section style={{ background: "#F8F6F1" }} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#C17F5A" }}>
              Mulai Sekarang
            </p>
            <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-3">
              Bangun AI agent pertama Anda
            </h2>
            <p className="text-muted text-sm">Kami akan merespons dalam 1 hari kerja.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
