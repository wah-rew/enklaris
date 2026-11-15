"use client";

import { useState } from "react";

type Answers = {
  goal: string; industry: string; volume: string; channels: string[];
  start: string; budget: string; name: string; company: string; email: string; wa: string;
};
const EMPTY: Answers = { goal: "", industry: "", volume: "", channels: [], start: "", budget: "", name: "", company: "", email: "", wa: "" };
const TOTAL = 5;

function Choice({ label, options, value, onPick }: { label: string; options: string[]; value: string | string[]; onPick: (v: string) => void }) {
  const on = (o: string) => (Array.isArray(value) ? value.includes(o) : value === o);
  return (
    <div className="q">
      <span>{label}</span>
      <div className="opts">
        {options.map((o) => (
          <button key={o} type="button" className="opt" aria-pressed={on(o)} onClick={() => onPick(o)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

// Five short steps; step three adapts to the goal picked in step one.
export default function EnquiryFlow() {
  const [a, setA] = useState<Answers>(EMPTY);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const set = (patch: Partial<Answers>) => { setA((v) => ({ ...v, ...patch })); setError(""); };
  const wantsLeads = a.goal !== "Convert the leads we already have";
  const wantsAgent = a.goal !== "Get more qualified leads";
  const toggleChannel = (c: string) => set({ channels: a.channels.includes(c) ? a.channels.filter((x) => x !== c) : [...a.channels, c] });

  const valid = [
    () => !!a.goal,
    () => !!a.industry,
    () => (!wantsLeads || !!a.volume) && (!wantsAgent || a.channels.length > 0),
    () => !!a.start,
    () => !!a.name.trim() && !!a.company.trim() && /^\S+@\S+\.\S+$/.test(a.email.trim()),
  ];
  const titles = ["What do you want to improve?", "Which industry are you in?", "A little about scale", "Timing and budget", "Where should we reply?"];

  const next = async () => {
    if (!valid[step]()) {
      setError(step === TOTAL - 1 ? "Add your name, company and a valid work email." : "Choose an option to continue.");
      return;
    }
    if (step < TOTAL - 1) { setStep(step + 1); return; }
    setState("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(a) });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Request failed");
      setState("sent");
    } catch {
      setState("idle");
      setError("We could not send your request. Check your connection and try again.");
    }
  };

  if (state === "sent") {
    const rows: [string, string][] = [
      ["Goal", a.goal], ["Industry", a.industry],
      ...(wantsLeads ? [["Monthly reach", a.volume] as [string, string]] : []),
      ...(wantsAgent ? [["Agent scope", a.channels.join(", ")] as [string, string]] : []),
      ["Start", a.start], ["Budget", a.budget || "Not stated"], ["Contact", `${a.name}, ${a.company}`], ["Email", a.email],
      ...(a.wa ? [["WhatsApp", a.wa] as [string, string]] : []),
    ];
    return (
      <div className="flow" aria-live="polite">
        <h3>Thanks, {a.name.trim().split(" ")[0]}. Your request is with our team.</h3>
        <dl className="ticket">
          {rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
        <p>We reply within one business day.</p>
      </div>
    );
  }

  return (
    <div className="flow" aria-live="polite">
      <div className="flow-top">
        <span>Step {step + 1} of {TOTAL}</span>
        <div className="flow-bar"><i style={{ width: `${((step + 1) / TOTAL) * 100}%` }} /></div>
      </div>
      <div className="flow-step swap" key={step}>
        <h3>{titles[step]}</h3>
        {step === 0 && <Choice label="Pick the closest one" options={["Get more qualified leads", "Convert the leads we already have", "Both"]} value={a.goal} onPick={(goal) => set({ goal })} />}
        {step === 1 && <Choice label="So we can bring the right examples" options={["Insurance", "Multifinance", "Banking", "Other"]} value={a.industry} onPick={(industry) => set({ industry })} />}
        {step === 2 && wantsLeads && <Choice label="How many prospects do you want to reach each month?" options={["Under 10,000", "10,000 to 50,000", "Over 50,000", "Not sure yet"]} value={a.volume} onPick={(volume) => set({ volume })} />}
        {step === 2 && wantsAgent && <Choice label="What should the AI agent cover? Pick all that apply" options={["WhatsApp automation", "WhatsApp Flows", "CRM integration", "Voice AI"]} value={a.channels} onPick={toggleChannel} />}
        {step === 3 && <Choice label="When would you like to start?" options={["This month", "Within 3 months", "Just exploring"]} value={a.start} onPick={(start) => set({ start })} />}
        {step === 3 && <Choice label="Estimated budget for a first phase (optional)" options={["Under Rp50 million", "Rp50 to 250 million", "Over Rp250 million", "Not decided"]} value={a.budget} onPick={(budget) => set({ budget })} />}
        {step === 4 && (
          <>
            <div className="pair">
              <label htmlFor="flow-name">Full name<input id="flow-name" type="text" autoComplete="name" value={a.name} onChange={(e) => set({ name: e.target.value })} /></label>
              <label htmlFor="flow-company">Company<input id="flow-company" type="text" autoComplete="organization" value={a.company} onChange={(e) => set({ company: e.target.value })} /></label>
            </div>
            <div className="pair">
              <label htmlFor="flow-email">Work email<input id="flow-email" type="email" autoComplete="email" value={a.email} onChange={(e) => set({ email: e.target.value })} /></label>
              <label htmlFor="flow-wa">WhatsApp number (optional)<input id="flow-wa" type="tel" autoComplete="tel" value={a.wa} onChange={(e) => set({ wa: e.target.value })} /></label>
            </div>
          </>
        )}
      </div>
      {error && <p className="flow-err">{error}</p>}
      <div className="flow-nav">
        <button type="button" className="flow-back" hidden={step === 0} onClick={() => { setError(""); setStep(step - 1); }}>Back</button>
        <button type="button" className="pill pill-signal" disabled={state === "sending"} onClick={next}>
          {state === "sending" ? "Sending" : step === TOTAL - 1 ? "Send request" : "Continue"}
        </button>
      </div>
    </div>
  );
}
