import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami — Enklaris",
  description: "Enklaris adalah platform integrasi teknologi B2B yang membantu bisnis modern Indonesia tumbuh melalui WhatsApp Business API, AI Agent, Database Management, dan Geo Location Analysis.",
};

export default function TentangPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4"
            style={{ color: "#7BA7A0" }}
          >
            Tentang Kami
          </p>
          <h1
            className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-6 leading-tight"
          >
            Membangun jembatan antara{" "}
            <span style={{ color: "#7BA7A0" }}>teknologi dan bisnis</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Enklaris hadir untuk membantu bisnis Indonesia menavigasi kompleksitas integrasi teknologi
            — dari WhatsApp automation hingga geo analytics — dengan pendekatan yang strategis dan terukur.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6" style={{ background: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4"
                style={{ color: "#7BA7A0" }}
              >
                Cerita Kami
              </p>
              <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-6">
                Didirikan atas dasar kepercayaan bahwa teknologi harus bekerja untuk bisnis
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Kami percaya bahwa setiap bisnis — besar maupun kecil — berhak mendapatkan akses ke
                teknologi yang benar-benar relevan dengan kebutuhan mereka. Bukan sekadar implementasi
                tools, tapi solusi yang terintegrasi dengan cara bisnis Anda beroperasi.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Dengan keahlian di bidang WhatsApp Business API, pengembangan AI Agent, manajemen database,
                dan analisis geolokasi, kami membantu perusahaan di Indonesia meningkatkan efisiensi
                operasional dan mengambil keputusan berbasis data yang lebih baik.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: "🎯",
                  title: "Misi",
                  desc: "Menjadi mitra integrasi teknologi yang paling dipercaya oleh bisnis Indonesia — memberikan solusi yang tepat, terukur, dan berkelanjutan.",
                },
                {
                  icon: "🔭",
                  title: "Visi",
                  desc: "Membangun ekosistem bisnis digital Indonesia yang lebih cerdas melalui integrasi teknologi yang seamless dan berbasis data.",
                },
                {
                  icon: "⚖️",
                  title: "Nilai",
                  desc: "Kejujuran dalam setiap rekomendasi. Presisi dalam setiap implementasi. Komitmen dalam setiap partnership.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6"
                  style={{ background: "white", border: "1px solid rgba(26,26,46,0.06)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-jakarta font-bold text-obsidian mb-2">{item.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-6" style={{ background: "#1A1A2E" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
              Keahlian Kami
            </p>
            <h2 className="text-3xl font-jakarta font-extrabold text-white">
              Empat domain, satu ekosistem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💬", title: "WhatsApp Business API", desc: "Template message, chatbot conversational, dan campaign management yang terverifikasi Meta." },
              { icon: "🤖", title: "AI Agent Development", desc: "Membangun agen AI yang memahami konteks bisnis Anda — dari customer service hingga workflow internal." },
              { icon: "🗄️", title: "Database Management", desc: "Arsitektur, migrasi, dan optimasi database untuk performa dan keandalan maksimal." },
              { icon: "📍", title: "Geo Location Analysis", desc: "Mengubah data lokasi menjadi insight bisnis yang actionable melalui heat mapping dan analisis spasial." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(123,167,160,0.15)" }}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="font-jakarta font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6" style={{ background: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-mono-accent font-medium tracking-widest uppercase mb-4" style={{ color: "#7BA7A0" }}>
                Lokasi
              </p>
              <h2 className="text-3xl font-jakarta font-extrabold text-obsidian mb-6">
                Berbasis di Jakarta, melayani seluruh Indonesia
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Tim kami beroperasi dari pusat bisnis Jakarta dengan kemampuan untuk melayani klien
                di seluruh Indonesia, baik secara remote maupun on-site sesuai kebutuhan.
              </p>
              <div
                className="rounded-2xl p-6"
                style={{ background: "white", border: "1px solid rgba(26,26,46,0.06)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-jakarta font-bold text-obsidian mb-1">Kantor Pusat</p>
                    <p className="text-sm text-muted leading-relaxed">
                      AD Premier Office Park<br />
                      Jl. TB Simatupang No.5<br />
                      Ragunan, Pasar Minggu<br />
                      Jakarta Selatan 12550<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "#1A1A2E", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-white/40 text-sm">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#1A1A2E" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-jakarta font-extrabold text-white mb-4">
            Siap bekerja sama?
          </h2>
          <p className="text-white/40 mb-8">Ceritakan kebutuhan bisnis Anda kepada kami.</p>
          <a
            href="/#kontak-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #C17F5A, #d4956f)", fontSize: "1rem" }}
          >
            Mulai Diskusi →
          </a>
        </div>
      </section>
    </main>
  );
}
