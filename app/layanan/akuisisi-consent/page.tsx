import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Akuisisi Nasabah Berbasis Consent — Enklaris",
  description:
    "Tim telemarketing hanya menelepon orang yang sudah menyatakan tertarik. Persetujuan tercatat digital dan sejalan dengan UU PDP.",
  openGraph: {
    title: "Akuisisi Nasabah Berbasis Consent — Enklaris",
    description: "Penawaran lewat WhatsApp resmi, persetujuan tercatat digital, dan agen yang hanya menelepon peminat.",
    type: "website",
    locale: "id_ID",
    siteName: "Enklaris",
  },
};

const PROBLEMS = [
  { title: "Risiko hukum", desc: "UU PDP mewajibkan dasar yang sah untuk memproses data pribadi. Denda administratif bisa mencapai 2% dari pendapatan tahunan." },
  { title: "Anggaran terbuang", desc: "Banyak panggilan cold calling tidak diangkat, salah sambung, atau ditolak sebelum penawaran selesai dijelaskan." },
  { title: "Agen kelelahan", desc: "Jam kerja tim habis untuk nada sibuk dan penolakan, bukan untuk percakapan dengan calon nasabah." },
];

const STEPS = [
  { n: "01", title: "Saring", desc: "Profil yang sesuai target disaring lebih dulu, sebelum ada satu pesan pun yang dikirim." },
  { n: "02", title: "Tawarkan", desc: "Penawaran dikirim lewat WhatsApp resmi yang terverifikasi. Penerima memilih sendiri dengan menekan “Saya tertarik”." },
  { n: "03", title: "Serahkan", desc: "Hanya nomor yang sudah memberi persetujuan yang masuk ke dasbor tim Anda, siap ditelepon." },
];

const BENEFITS = [
  { title: "Consent-first, siap audit", desc: "Persetujuan eksplisit dan tercatat digital untuk setiap nomor yang diterima tim Anda." },
  { title: "Biaya murni variabel", desc: "Satu harga per nomor yang sudah mencakup penyaringan, pengiriman WhatsApp resmi, AI, dan pengelolaan kampanye. Tanpa lisensi dan tanpa biaya setup." },
  { title: "Agen hanya bicara dengan peminat", desc: "Setiap panggilan ditujukan kepada orang yang memang menunggu penjelasan." },
];

export default function AkuisisiConsentPage() {
  return (
    <div className="ek">
      <div className="ek-haze">
        <div className="ek-wrap">
          <header className="ek-hero ek-hero-left">
            <p className="ek-eyebrow">Layanan · akuisisi nasabah</p>
            <h1>Telepon hanya yang sudah bilang “ya”.</h1>
            <p className="ek-lede">
              Akuisisi nasabah berbasis consent untuk tim telemarketing. Penawaran dikirim lewat WhatsApp resmi,
              persetujuan tercatat digital, dan agen Anda hanya menelepon orang yang tertarik.
            </p>
            <div className="ek-cta">
              <a className="ek-btn ek-btn-primary" href="#kontak-form">Diskusikan pilot</a>
              <a className="ek-btn ek-btn-ghost" href="#cara-kerja">Lihat cara kerja</a>
            </div>
          </header>
        </div>
      </div>

      <section className="ek-section">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Masalahnya</p>
            <h2>Cold calling kini mahal, melelahkan, dan berisiko hukum.</h2>
          </div>
          <div className="ek-why">
            {PROBLEMS.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="ek-section ek-haze">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Cara kerja</p>
            <h2>Saring. Tawarkan. Serahkan.</h2>
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

      <section className="ek-section">
        <div className="ek-wrap">
          <div className="ek-head">
            <p className="ek-eyebrow">Manfaat</p>
            <h2>Tim Anda tenang. Agen Anda produktif.</h2>
          </div>
          <div className="ek-why">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak-form" className="ek-section ek-haze">
        <div className="ek-wrap ek-contact">
          <div className="ek-head">
            <p className="ek-eyebrow">Mulai dari pilot</p>
            <h2>Uji dengan jumlah data terbatas.</h2>
            <p className="ek-lede">Bandingkan biaya per nasabah baru dengan metode lama, lalu naikkan skala setelah angkanya terbukti.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
