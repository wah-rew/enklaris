"use client";

import { useState } from "react";

type FlowKey = "chatbot" | "akuisisi" | "lahan";

const FLOWS: Record<FlowKey, { label: string; minat: string; reply: string }> = {
  chatbot: {
    label: "Chatbot untuk layanan pelanggan",
    minat: "Implementasi agent dan chatbot AI",
    reply:
      "Untuk layanan pelanggan, kami memasang agent AI di WhatsApp dan web bersama Kata.ai dan Compnet, lalu menghubungkannya ke CRM Anda. Boleh tahu nama dan perusahaan Anda?",
  },
  akuisisi: {
    label: "Akuisisi nasabah lewat WhatsApp",
    minat: "Akuisisi nasabah berbasis consent",
    reply:
      "Kami mengirim penawaran lewat WhatsApp resmi, dan tim Anda hanya menelepon yang menekan “Saya tertarik”. Boleh tahu nama dan perusahaan Anda?",
  },
  lahan: {
    label: "Penilaian lahan dan properti",
    minat: "Penilaian lahan dan manajemen properti",
    reply:
      "Bersama Perare, kami menggabungkan data, peta, dan AI untuk menilai lahan dan mengelola portofolio properti. Boleh tahu nama dan perusahaan Anda?",
  },
};

const GREETING = "Halo, saya agent Enklaris. Apa yang sedang ingin Anda selesaikan?";

type Msg = { who: "agent" | "user"; text: string };

// Scripted walkthrough of an AI agent that fills a CRM record. Nothing is sent anywhere.
export default function AgentDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([{ who: "agent", text: GREETING }]);
  const [flow, setFlow] = useState<FlowKey | null>(null);
  const [kontak, setKontak] = useState("");
  const [draft, setDraft] = useState("");

  const done = kontak !== "";
  const status = done ? "Terkualifikasi" : flow ? "Prospek baru" : "Menunggu";

  const choose = (key: FlowKey) => {
    setFlow(key);
    setMsgs((m) => [...m, { who: "user", text: FLOWS[key].label }, { who: "agent", text: FLOWS[key].reply }]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || !flow || done) return;
    setKontak(text);
    setDraft("");
    setMsgs((m) => [
      ...m,
      { who: "user", text },
      { who: "agent", text: "Terima kasih. Kebutuhan Anda sudah saya catat, dan tim Enklaris akan menghubungi dalam satu hari kerja." },
    ]);
  };

  const reset = () => {
    setMsgs([{ who: "agent", text: GREETING }]);
    setFlow(null);
    setKontak("");
    setDraft("");
  };

  return (
    <div className="ek-window ek-glass" aria-label="Demo agent AI yang terhubung ke CRM">
      <div className="ek-window-bar">
        <div className="ek-dots"><span /><span /><span /></div>
        <span>Agent Enklaris</span>
        <span className="ek-tag">Demo interaktif</span>
      </div>
      <div className="ek-window-body">
        <div className="ek-chat">
          <div className="ek-msgs" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`ek-msg ${m.who === "agent" ? "ek-msg-agent" : "ek-msg-user"}`}>{m.text}</div>
            ))}
          </div>
          {!flow && (
            <div className="ek-chips">
              {(Object.keys(FLOWS) as FlowKey[]).map((k) => (
                <button key={k} type="button" className="ek-chip" onClick={() => choose(k)}>{FLOWS[k].label}</button>
              ))}
            </div>
          )}
          <form className="ek-composer" onSubmit={submit}>
            <input
              type="text"
              aria-label="Pesan untuk agent"
              autoComplete="off"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              disabled={!flow || done}
              placeholder={done ? "Demo selesai" : flow ? "Contoh: Rina, PT Maju Bersama" : "Pilih salah satu topik di atas"}
            />
            <button type="submit" aria-label="Kirim" disabled={!flow || done}>↑</button>
          </form>
        </div>
        <aside className="ek-crm" aria-live="polite">
          <h4>Catatan CRM <span className={`ek-pill ${done ? "ek-pill-on" : ""}`}>{status}</span></h4>
          <dl>
            <div className="ek-row"><dt>Sumber</dt><dd>Agent di situs web</dd></div>
            <div className="ek-row"><dt>Minat</dt><dd>{flow ? FLOWS[flow].minat : "Belum diketahui"}</dd></div>
            <div className="ek-row"><dt>Kontak</dt><dd>{kontak || "Belum diketahui"}</dd></div>
            <div className="ek-row"><dt>Tindak lanjut</dt><dd>{done ? "Hubungi dalam 1 hari kerja" : "Belum ada"}</dd></div>
          </dl>
          <p className="ek-note">Contoh alur: agent menjawab pengunjung, lalu mengisi catatan prospek di CRM secara otomatis. Demo ini tidak mengirim data.</p>
          {flow && <button type="button" className="ek-linkbtn" onClick={reset}>Ulangi demo</button>}
        </aside>
      </div>
    </div>
  );
}
