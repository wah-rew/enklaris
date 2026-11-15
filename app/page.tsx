import AgentDemo from "@/components/AgentDemo";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    href: "/layanan/ai-agent",
    partner: "Bersama Kata.ai dan Compnet",
    title: "Implementasi agent dan chatbot AI",
    desc: "Agent percakapan untuk layanan pelanggan dan alur kerja internal, terhubung ke sistem yang sudah Anda pakai.",
    points: ["WhatsApp, web, dan kanal lain dalam satu agent", "Terhubung ke CRM dan basis data pelanggan", "Dilatih dengan pengetahuan bisnis Anda"],
    status: "Berjalan",
  },
  {
    href: "/layanan/akuisisi-consent",
    partner: "WhatsApp resmi dan AI Kata.ai",
    title: "Akuisisi nasabah berbasis consent",
    desc: "Tim telemarketing hanya menelepon orang yang sudah menyatakan tertarik. Persetujuan tercatat digital dan sejalan dengan UU PDP.",
    points: ["Penyaringan profil sebelum penawaran dikirim", "Pesan WhatsApp resmi terverifikasi", "Biaya per nomor, tanpa lisensi"],
    status: "Sedang dikerjakan",
  },
  {
    href: "/layanan/geo-analytics",
    partner: "Bersama Perare",
    title: "Penilaian lahan dan manajemen properti",
    desc: "Data, peta, dan AI dalam satu sistem informasi lahan untuk menilai lokasi dan mengelola portofolio properti.",
    points: ["Penilaian dan valuasi lahan", "Analisis wilayah di atas peta", "Pelaporan portofolio properti"],
    status: "Berjalan",
  },
];

const STEPS = [
  { n: "01", title: "Saring", desc: "Profil yang sesuai target disaring lebih dulu, sebelum ada satu pesan pun yang dikirim." },
  { n: "02", title: "Tawarkan", desc: "Penawaran dikirim lewat WhatsApp resmi. Penerima memilih sendiri dengan menekan “Saya tertarik”." },
  { n: "03", title: "Serahkan", desc: "Hanya nomor yang sudah memberi persetujuan yang masuk ke dasbor tim Anda, siap ditelepon." },
];

const WHY = [
  { title: "Satu pintu", desc: "Anda berurusan dengan satu tim untuk teknologi beberapa mitra, dari kontrak sampai operasi harian." },
  { title: "Paham konteks Indonesia", desc: "Solusi disesuaikan dengan regulasi, perilaku pengguna, dan infrastruktur di Indonesia." },
  { title: "Mulai dari pilot", desc: "Setiap proyek dimulai kecil dan terukur. Skala dinaikkan setelah angkanya terbukti." },
];

export default function Home() {
  return (
    <div className="ek">
      <div className="ek-haze">
        <div className="ek-wrap">
          <header className="ek-hero">
            <p className="ek-eyebrow">Mitra implementasi AI dan data · Jakarta</p>
            <h1>AI dan data yang benar-benar bekerja untuk bisnis Anda.</h1>
            <p className="ek-lede">
              Enklaris merancang, memasang, dan menjalankan solusi bersama Kata.ai, Compnet, dan Perare: agent AI
              percakapan, akuisisi nasabah berbasis consent, dan analitik lahan.
            </p>
            <div className="ek-cta">
              <a className="ek-btn ek-btn-primary" href="#kontak-form">Mulai konsultasi</a>
              <a className="ek-btn ek-btn-ghost" href="#layanan">Lihat layanan</a>
            </div>
            <AgentDemo />
          </header>

          <div className="ek-partners" aria-label="Mitra">
            <span>Bekerja bersama</span>
            <b>Kata.ai</b>
            <b>Compnet</b>
            <b>Perare</b>
          </div>
        </div>
      </div>

      <section id="layanan" className="ek-section">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Layanan</p>
            <h2>Tiga solusi yang sudah berjalan.</h2>
            <p className="ek-lede">
              Setiap solusi dijalankan bersama mitra teknologi yang ahli di bidangnya. Enklaris memegang perancangan,
              integrasi, dan operasinya.
            </p>
          </div>
          <div className="ek-services">
            {SERVICES.map((s) => (
              <article key={s.href} className="ek-svc ek-glass">
                <p className="ek-with">{s.partner}</p>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="ek-status">
                  <span className="ek-pill ek-pill-on">{s.status}</span>
                  <a className="ek-more" href={s.href}>Pelajari lebih lanjut</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="ek-section ek-haze">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Cara kerja · akuisisi berbasis consent</p>
            <h2>Saring. Tawarkan. Serahkan.</h2>
            <p className="ek-lede">Tiga langkah yang mengubah daftar nomor menjadi daftar orang yang menunggu ditelepon.</p>
          </div>
          <div className="ek-flow">
            {STEPS.map((s) => (
              <div key={s.n} className="ek-step ek-glass">
                <span className="ek-step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="ek-assure">
            <i>✓</i>
            <span>Data nasabah tidak berpindah sebelum ada persetujuan.</span>
          </div>
        </div>
      </section>

      <section id="mengapa" className="ek-section">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Mengapa Enklaris</p>
            <h2>Bukan hanya vendor. Mitra yang ikut menjalankan.</h2>
          </div>
          <div className="ek-why">
            {WHY.map((w) => (
              <div key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak-form" className="ek-section ek-haze">
        <div className="ek-wrap ek-contact">
          <div className="ek-head">
            <p className="ek-eyebrow">Mulai diskusi</p>
            <h2>Ceritakan kebutuhan Anda.</h2>
            <p className="ek-lede">Kami membalas dalam satu hari kerja.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
