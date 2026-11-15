"use client";

import { useState } from "react";

type Answers = {
  goal: string; company: string; industry: string; size: string; volume: string; channels: string[];
  start: string; budget: string; name: string; role: string; email: string; wa: string;
};
const EMPTY: Answers = { goal: "", company: "", industry: "", size: "", volume: "", channels: [], start: "", budget: "", name: "", role: "", email: "", wa: "" };
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

// Five short steps: goal, company, scale, budget and timeline, contact.
// Step three adapts to the goal picked in step one.
export default function EnquiryFlow() {
  const [a, setA] = useState<Answers>(EMPTY);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const set = (patch: Partial<Answers>) => { setA((v) => ({ ...v, ...patch })); setError(""); };
  const wantsLeads = a.goal !== "Convert the leads we already have";
  const wantsAgent = a.goal !== "Get more qualified leads";
  const toggleChannel = (c: string) => set({ channels: a.channels.includes(c) ? a.channels.filter((x) => x !== c) : [...a.channels, c] });

  const steps = [
    { title: "What do you want to improve?", error: "Choose an option to continue.", ok: () => !!a.goal },
    { title: "About your company", error: "Add your company name, industry and size.", ok: () => !!a.company.trim() && !!a.industry && !!a.size },
    { title: "A little about scale", error: "Choose an option to continue.", ok: () => (!wantsLeads || !!a.volume) && (!wantsAgent || a.channels.length > 0) },
    { title: "Budget and timeline", error: "Choose a timeline and a budget range.", ok: () => !!a.start && !!a.budget },
    { title: "Who should we contact?", error: "Add your name, a valid work email and a WhatsApp number.", ok: () => !!a.name.trim() && /^\S+@\S+\.\S+$/.test(a.email.trim()) && a.wa.replace(/\D/g, "").length >= 8 },
  ];

  const next = async () => {
    if (!steps[step].ok()) { setError(steps[step].error); return; }
    if (step < TOTAL - 1) { setStep(step + 1); return; }
    setState("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(a) });
      if (!res.ok) throw new Error("Request failed");
      setState("sent");
    } catch {
      setState("idle");
      setError("We could not send your request. Check your connection and try again.");
    }
  };

  if (state === "sent") {
    const rows: [string, string][] = [
      ["Goal", a.goal],
      ["Company", `${a.company} (${a.industry}, ${a.size})`],
      ...(wantsLeads ? [["Monthly reach", a.volume] as [string, string]] : []),
      ...(wantsAgent ? [["Agent scope", a.channels.join(", ")] as [string, string]] : []),
      ["Timeline", a.start],
      ["Budget", a.budget],
      ["Contact", a.role.trim() ? `${a.name}, ${a.role}` : a.name],
      ["Email", a.email],
      ["WhatsApp", a.wa],
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
        <h3>{steps[step].title}</h3>
        {step === 0 && <Choice label="Pick the closest one" options={["Get more qualified leads", "Convert the leads we already have", "Both"]} value={a.goal} onPick={(goal) => set({ goal })} />}
        {step === 1 && (
          <>
            <label htmlFor="flow-company">Company name<input id="flow-company" type="text" autoComplete="organization" value={a.company} onChange={(e) => set({ company: e.target.value })} /></label>
            <Choice label="Industry" options={["Insurance", "Multifinance", "Banking", "Automotive", "Healthcare", "Other"]} value={a.industry} onPick={(industry) => set({ industry })} />
            <Choice label="Company size" options={["Under 50 people", "50 to 500", "Over 500"]} value={a.size} onPick={(size) => set({ size })} />
          </>
        )}
        {step === 2 && wantsLeads && <Choice label="How many prospects do you want to reach each month?" options={["Under 10,000", "10,000 to 50,000", "Over 50,000", "Not sure yet"]} value={a.volume} onPick={(volume) => set({ volume })} />}
        {step === 2 && wantsAgent && <Choice label="What should the AI agent cover? Pick all that apply" options={["WhatsApp automation", "WhatsApp Flows", "CRM integration", "Voice AI"]} value={a.channels} onPick={toggleChannel} />}
        {step === 3 && <Choice label="When would you like to start?" options={["This month", "Within 3 months", "Within 6 months", "Just exploring"]} value={a.start} onPick={(start) => set({ start })} />}
        {step === 3 && <Choice label="Potential budget for a first phase" options={["Under Rp50 million", "Rp50 to 250 million", "Over Rp250 million", "Not decided yet"]} value={a.budget} onPick={(budget) => set({ budget })} />}
        {step === 4 && (
          <>
            <div className="pair">
              <label htmlFor="flow-name">Full name<input id="flow-name" type="text" autoComplete="name" value={a.name} onChange={(e) => set({ name: e.target.value })} /></label>
              <label htmlFor="flow-role">Job title<input id="flow-role" type="text" autoComplete="organization-title" value={a.role} onChange={(e) => set({ role: e.target.value })} /></label>
            </div>
            <div className="pair">
              <label htmlFor="flow-email">Work email<input id="flow-email" type="email" autoComplete="email" value={a.email} onChange={(e) => set({ email: e.target.value })} /></label>
              <label htmlFor="flow-wa">WhatsApp number<input id="flow-wa" type="tel" autoComplete="tel" value={a.wa} onChange={(e) => set({ wa: e.target.value })} /></label>
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
