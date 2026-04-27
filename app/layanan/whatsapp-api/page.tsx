import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "WhatsApp Business API — Enklaris",
  description:
    "Bangun customer journey yang terhubung via WhatsApp. Template pesan terverifikasi, chatbot conversational, broadcast campaign, dan multi-agent inbox untuk bisnis Indonesia.",
  keywords: [
    "WhatsApp Business API Indonesia",
    "WhatsApp chatbot",
    "template pesan WhatsApp",
    "broadcast WhatsApp",
    "multi-agent inbox",
    "Enklaris",
  ],
  openGraph: {
    title: "WhatsApp Business API — Enklaris",
    description:
      "Dari template pesan terverifikasi hingga chatbot conversational — kami bantu bisnis Anda hadir di channel yang paling banyak digunakan di Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
};

/* ─── SVG Illustrations ───────────────────────────────────── */

function IllustrationRetail() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Shopping bag */}
      <rect x="18" y="30" width="44" height="36" rx="4" stroke="#7BA7A0" strokeWidth="1.5" fill="rgba(123,167,160,0.06)" />
      <path d="M28 30V24a12 12 0 0124 0v6" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" />
      {/* Handle loops */}
      <path d="M32 30v-6a8 8 0 0116 0v6" stroke="#7BA7A0" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Ribbon */}
      <line x1="40" y1="38" x2="40" y2="54" stroke="#7BA7A0" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M33 46 Q36.5 42 40 46 Q43.5 50 47 46" stroke="#7BA7A0" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Notification dot */}
      <circle cx="56" cy="24" r="7" fill="#C17F5A" />
      <text x="56" y="28" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">!</text>
    </svg>
  );
}

function IllustrationFinance() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Shield */}
      <path d="M40 10 L60 20 L60 42 Q60 58 40 68 Q20 58 20 42 L20 20 Z" stroke="#7BA7A0" strokeWidth="1.5" fill="rgba(123,167,160,0.06)" />
      {/* Inner shield */}
      <path d="M40 18 L54 26 L54 42 Q54 54 40 62 Q26 54 26 42 L26 26 Z" stroke="#7BA7A0" strokeWidth="0.8" fill="rgba(123,167,160,0.04)" opacity="0.5" />
      {/* Check mark */}
      <path d="M30 40 L37 47 L52 32" stroke="#7BA7A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bank columns */}
      <rect x="34" y="26" width="3" height="8" rx="1" fill="#7BA7A0" opacity="0.3" />
      <rect x="39" y="24" width="3" height="10" rx="1" fill="#7BA7A0" opacity="0.5" />
      <rect x="44" y="27" width="3" height="7" rx="1" fill="#7BA7A0" opacity="0.3" />
    </svg>
  );
}

function IllustrationHealth() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-6">
      {/* Heartbeat line */}
      <path d="M10 42 L22 42 L27 28 L32 56 L37 36 L42 46 L47 38 L52 42 L70 42" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Heart */}
      <path d="M40 68 C40 68 20 56 20 44 C20 38 24 34 30 34 C34 34 37.5 36 40 40 C42.5 36 46 34 50 34 C56 34 60 38 60 44 C60 56 40 68 40 68Z" stroke="#C17F5A" strokeWidth="1.5" fill="rgba(193,127,90,0.08)" opacity="0.7" />
    </svg>
  );
}

/* ─── Feature grid item ───────────────────────────────────── */
function FeatureItem({ label, icon }: { label: string; icon: string }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-4 rounded-xl"
      style={{ background: "rgba(123,167,160,0.08)", border: "1px solid rgba(123,167,160,0.15)" }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-obsidian/80">{label}</span>
    </div>
  );
}

/* ─── How it works step ───────────────────────────────────── */
function HowStep({ n, title, desc }: { n: string; title: string; desc: string }) {
  const isLast = n === "03";
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-jakarta"
          style={{
            background: "rgba(123,167,160,0.12)",
            border: "1.5px solid rgba(123,167,160,0.4)",
            color: "#7BA7A0",
          }}
        >
          {n}
        </div>
        {!isLast && <div className="w-px flex-1 mt-3" style={{ background: "rgba(123,167,160,0.2)", minHeight: 48 }} />}
      </div>
      <div className="pb-10">
        <h4 className="font-jakarta font-bold text-white text-lg mb-2">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
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
      style={{ border: "1px solid rgba(123,167,160,0.12)" }}
    >
      {illustration}
      <h3 className="font-jakarta font-bold text-obsidian text-xl mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function WhatsAppAPIPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: "#0F0F1E" }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(123,167,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,167,160,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orb */}
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
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
              WhatsApp Business API
            </div>
            <h1 className="text-5xl md:text-6xl font-jakarta font-extrabold leading-[1.06] text-white mb-6">
              Bangun Customer Journey<br />
              <span style={{ color: "#7BA7A0" }}>yang Terhubung</span>
              <br />via WhatsApp
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10">
              Dari template pesan terverifikasi hingga chatbot conversational — kami bantu bisnis Anda hadir di channel yang paling banyak digunakan di Indonesia.
            </p>
            <a
              href="/#kontak-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-glow"
              style={{ background: "linear-gradient(135deg, #C17F5A, #d4956f)" }}
            >
              Mulai Konsultasi
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full animate-pulse-slow" style={{ border: "1px solid rgba(123,167,160,0.12)" }} />
              <div className="absolute inset-8 rounded-full" style={{ border: "1px dashed rgba(123,167,160,0.2)" }} />
              {/* WhatsApp central SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-44 h-44 animate-float" fill="none">
                  <circle cx="60" cy="60" r="48" fill="rgba(123,167,160,0.06)" stroke="rgba(123,167,160,0.3)" strokeWidth="1.5" />
                  <path d="M60 28C43.43 28 30 41.43 30 58c0 5.67 1.57 10.97 4.32 15.5L28 92l19.03-4.25C51.3 90.17 55.56 91 60 91c16.57 0 30-13.43 30-33 0-16.57-13.43-30-30-30z" fill="rgba(123,167,160,0.15)" stroke="#7BA7A0" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M49 51.5c.6 1.5 3.6 6.9 7.5 10.5S66 68.4 67.5 69c1.5.6 2.4.3 3.3-.6l2.4-2.7c.6-.6 1.5-.9 2.1-.3l6.6 4.5c.6.3.6 1.2 0 1.8l-2.1 2.4c-2.1 2.4-5.7 3.3-9 1.5-4.5-2.4-11.1-7.2-15-11.1S46.5 54 44.4 49.5c-1.8-3.3-.9-6.9 1.5-9l2.4-2.1c.6-.6 1.5-.6 1.8 0l4.5 6.6c.6.6.3 1.5-.3 2.1l-2.7 2.4c-.9.9-1.2 1.8-.3 3z" fill="#7BA7A0" opacity="0.9" />
                  {/* Floating notification badges */}
                  <circle cx="85" cy="32" r="10" fill="rgba(193,127,90,0.9)" />
                  <text x="85" y="36" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3</text>
                  <circle cx="24" cy="72" r="8" fill="rgba(123,167,160,0.3)" stroke="rgba(123,167,160,0.5)" strokeWidth="1" />
                  <circle cx="96" cy="72" r="6" fill="rgba(212,197,176,0.3)" stroke="rgba(212,197,176,0.5)" strokeWidth="1" />
                </svg>
              </div>
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
                Solusi untuk<br />
                <span style={{ color: "#7BA7A0" }}>Setiap Industri</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto leading-relaxed">
                WhatsApp bukan hanya messaging. Di tangan yang tepat, ia menjadi infrastruktur komunikasi bisnis yang powerful.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <UseCaseCard
                illustration={<IllustrationRetail />}
                title="Retail & E-commerce"
                desc="Notifikasi order, tracking pengiriman, dan customer service otomatis via WhatsApp. Kurangi beban CS hingga 60%."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <UseCaseCard
                illustration={<IllustrationFinance />}
                title="Financial Services"
                desc="OTP, notifikasi transaksi, pengingat pembayaran, dan verifikasi dokumen KYC via WhatsApp terverifikasi."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <UseCaseCard
                illustration={<IllustrationHealth />}
                title="Healthcare"
                desc="Reminder jadwal dokter, hasil lab, dan follow-up pasca kunjungan. Tingkatkan patient engagement secara signifikan."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MESSAGE CATEGORIES */}
      <section style={{ background: "#F8F6F1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Kategori Pesan
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Kategori Pesan yang<br />
                <span style={{ color: "#7BA7A0" }}>Bisa Dikirim</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto leading-relaxed">
                Meta mengkategorikan pesan WhatsApp Business API ke dalam 4 kategori utama, masing-masing dengan aturan dan kemampuan berbeda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marketing */}
            <ScrollReveal delay={0}>
              <div
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ borderLeft: "4px solid #7BA7A0", border: "1px solid rgba(123,167,160,0.15)", borderLeftWidth: "4px", borderLeftColor: "#7BA7A0" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(123,167,160,0.1)" }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                      <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-obsidian text-xl">Marketing</h3>
                    <p className="text-sm text-muted">Promosi produk, layanan, atau bisnis Anda</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {["Flash sale, diskon, launching produk baru", "Re-engagement campaign untuk pelanggan lama", "Upsell & cross-sell yang dipersonalisasi", "Program loyalitas dan reward", "Promosi musiman & event khusus"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-obsidian/70">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0" style={{ color: "#7BA7A0" }}>
                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Authentication */}
            <ScrollReveal delay={100}>
              <div
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(123,167,160,0.15)", borderLeftWidth: "4px", borderLeftColor: "#7BA7A0" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(123,167,160,0.1)" }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                      <path d="M12 2L4 6v6c0 5.25 3.5 10.14 8 11.35C16.5 22.14 20 17.25 20 12V6l-8-4z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-obsidian text-xl">Authentication</h3>
                    <p className="text-sm text-muted">Verifikasi identitas pengguna dengan aman</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {["One-time passwords (OTP)", "Verifikasi akun baru", "Login 2-factor authentication", "Konfirmasi perubahan password", "Verifikasi transaksi finansial"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-obsidian/70">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Utility */}
            <ScrollReveal delay={200}>
              <div
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(123,167,160,0.15)", borderLeftWidth: "4px", borderLeftColor: "#7BA7A0" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(123,167,160,0.1)" }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-obsidian text-xl">Utility</h3>
                    <p className="text-sm text-muted">Notifikasi transaksional dan operasional</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {["Konfirmasi pesanan dan pembayaran", "Update status pengiriman (tracking)", "Reminder jadwal dan appointment", "Notifikasi perubahan akun", "Invoice dan receipt digital"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-obsidian/70">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Service */}
            <ScrollReveal delay={300}>
              <div
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(123,167,160,0.15)", borderLeftWidth: "4px", borderLeftColor: "#7BA7A0" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(123,167,160,0.1)" }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="10" r="1" fill="#7BA7A0" />
                      <circle cx="12" cy="10" r="1" fill="#7BA7A0" />
                      <circle cx="15" cy="10" r="1" fill="#7BA7A0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-obsidian text-xl">Service</h3>
                    <p className="text-sm text-muted">Layanan pelanggan berbasis percakapan</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {["Respons customer service (in-bound)", "Jawaban pertanyaan pelanggan", "Penanganan komplain dan eskalasi", "Komunikasi pasca transaksi", "Support teknis real-time"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-obsidian/70">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USE CASES BY INDUSTRY */}
      <section style={{ background: "#F8F6F1" }} className="py-24 border-t border-obsidian/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Per Industri
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian mb-4">
                Solusi Nyata untuk<br />
                <span style={{ color: "#7BA7A0" }}>Setiap Sektor</span>
              </h2>
              <p className="text-muted max-w-xl mx-auto leading-relaxed">
                Dari retail hingga pendidikan — WhatsApp Business API memberikan dampak nyata di setiap industri.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 10a4 4 0 01-8 0" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "E-commerce & Retail",
                points: ["Konfirmasi order otomatis", "Update status pengiriman real-time", "Abandoned cart recovery campaign", "Flash sale & promo notifications"],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#7BA7A0" strokeWidth="1.8" />
                    <path d="M2 10h20" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ),
                title: "Banking & Finance",
                points: ["OTP & autentikasi transaksi", "Peringatan aktivitas mencurigakan", "Notifikasi mutasi rekening", "Update status pengajuan kredit"],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Healthcare",
                points: ["Reminder jadwal dokter & konsultasi", "Notifikasi hasil lab dan diagnosis", "Pengingat konsumsi obat", "Follow-up pasca teleconsultation"],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                    <rect x="1" y="3" width="15" height="13" rx="2" stroke="#7BA7A0" strokeWidth="1.8" />
                    <path d="M16 8h4l3 5v3h-7V8z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5.5" cy="18.5" r="2.5" stroke="#7BA7A0" strokeWidth="1.8" />
                    <circle cx="18.5" cy="18.5" r="2.5" stroke="#7BA7A0" strokeWidth="1.8" />
                  </svg>
                ),
                title: "Logistics",
                points: ["Tracking pengiriman real-time", "Notifikasi penugasan driver", "Konfirmasi bukti pengiriman (POD)", "Alert keterlambatan & perubahan rute"],
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" stroke="#7BA7A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Education",
                points: ["Jadwal kelas & perubahan jadwal", "Pengingat tugas dan deadline", "Pengumuman hasil ujian", "Reminder pembayaran SPP & biaya"],
              },
            ].map(({ icon, title, points }, idx) => (
              <ScrollReveal key={title} delay={idx * 80}>
                <div
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                  style={{ border: "1px solid rgba(123,167,160,0.12)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-4 sm:w-64 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(123,167,160,0.1)" }}>
                        {icon}
                      </div>
                      <h3 className="font-jakarta font-bold text-obsidian text-lg">{title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      {points.map((pt) => (
                        <span key={pt} className="flex items-center gap-1.5 text-sm text-obsidian/65">
                          <svg viewBox="0 0 8 8" className="w-2 h-2 flex-shrink-0"><circle cx="4" cy="4" r="3" fill="#7BA7A0" /></svg>
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#0F0F1E" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                  Cara Kerja
                </p>
                <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-6">
                  Tiga Langkah<br />
                  <span style={{ color: "#7BA7A0" }}>Menuju Go Live</span>
                </h2>
                <p className="text-white/40 leading-relaxed mb-8">
                  Proses onboarding yang efisien dengan panduan penuh dari tim Enklaris — dari registrasi Meta hingga monitoring production.
                </p>
                {/* Partner badge */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(123,167,160,0.06)",
                    border: "1px solid rgba(123,167,160,0.15)",
                  }}
                >
                  <p className="text-xs font-mono text-white/30 tracking-wider uppercase mb-4">Technology Partners</p>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                        style={{ background: "rgba(123,167,160,0.1)", border: "1px solid rgba(123,167,160,0.2)" }}
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="#7BA7A0" strokeWidth="1.5" />
                          <path d="M8 12h8M12 8v8" stroke="#7BA7A0" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-xs text-white/40">NLP Engine</span>
                    </div>
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                        style={{ background: "rgba(193,127,90,0.1)", border: "1px solid rgba(193,127,90,0.2)" }}
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                          <rect x="3" y="3" width="8" height="8" rx="2" stroke="#C17F5A" strokeWidth="1.5" />
                          <rect x="13" y="3" width="8" height="8" rx="2" stroke="#C17F5A" strokeWidth="1.5" />
                          <rect x="3" y="13" width="8" height="8" rx="2" stroke="#C17F5A" strokeWidth="1.5" />
                          <rect x="13" y="13" width="8" height="8" rx="2" stroke="#C17F5A" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="text-xs text-white/40">Meta Business</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0}>
                <HowStep
                  n="01"
                  title="Registrasi & Verifikasi Akun Meta Business"
                  desc="Kami panduan Anda melalui proses verifikasi bisnis di Meta — dari Business Manager setup hingga phone number registration."
                />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <HowStep
                  n="02"
                  title="Setup Template & Chatbot Flow"
                  desc="Desain message templates yang sesuai brand, bangun conversation flows, dan integrasikan dengan sistem CRM atau ERP yang sudah ada."
                />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <HowStep
                  n="03"
                  title="Go Live & Monitor Analytics"
                  desc="Launch dengan confidence. Dashboard analytics real-time memantau delivery rate, read rate, dan response metrics untuk continuous improvement."
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background: "#F8F6F1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Kapabilitas
              </p>
              <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold text-obsidian">
                Fitur Lengkap,<br />
                <span style={{ color: "#7BA7A0" }}>Satu Platform</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <FeatureItem label="Template Message Terverifikasi" icon="✅" />
              <FeatureItem label="Broadcast Campaign" icon="📢" />
              <FeatureItem label="Chatbot Conversational" icon="🤖" />
              <FeatureItem label="Multi-agent Inbox" icon="👥" />
              <FeatureItem label="Analytics Dashboard" icon="📊" />
              <FeatureItem label="API Integration" icon="🔗" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="kontak-form" style={{ background: "#F8F6F1" }} className="py-20 border-t border-obsidian/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#7BA7A0" }}>
              Mulai Sekarang
            </p>
            <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-3">
              Siap hadir di WhatsApp pelanggan Anda?
            </h2>
            <p className="text-muted text-sm">Kami akan merespons dalam 1 hari kerja.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
