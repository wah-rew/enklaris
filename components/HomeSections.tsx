"use client";

import { useEffect, useState } from "react";
import Film from "@/components/Film";

const SOLUTIONS = [
  {
    name: "Lead generation and database curation",
    text: "A prospect database built for your product: profiled, scored and consent-checked before it reaches your sales team.",
    points: ["Profiling by location and behaviour", "Scoring to rank who to contact first", "Consent recorded for every contact"],
    partner: "With telco-grade analytics from our data partner",
  },
  {
    name: "AI agent implementation",
    text: "One agent across the lead journey: automated WhatsApp, dynamic Flows for forms and quotes, CRM sync, and voice AI for follow-up calls.",
    points: ["WhatsApp automation and Flows", "CRM updated at every step", "Voice AI for callbacks"],
    partner: "With Kata.ai and Compnet",
  },
];

const usePrefersReducedMotion = () => {
  const [reduce, setReduce] = useState(false);
  useEffect(() => setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  return reduce;
};
const motionPaused = () => document.documentElement.dataset.motion === "paused";

export function SolutionStage() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (!auto || reduce) return;
    const id = setInterval(() => {
      if (!motionPaused()) setI((v) => (v + 1) % SOLUTIONS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [auto, reduce]);

  const s = SOLUTIONS[i];
  return (
    <div className="stage" style={{ ["--mx" as string]: `${[35, 65][i]}%` }}>
      <h2>Two solutions, one lead journey.</h2>
      <div className="chips" role="tablist" aria-label="Solutions">
        {SOLUTIONS.map((x, k) => (
          <button key={x.name} type="button" role="tab" className="chip" aria-selected={k === i} onClick={() => { setI(k); setAuto(false); }}>
            {x.name}
          </button>
        ))}
      </div>
      <div className="sol swap" role="tabpanel" key={i}>
        <p>{s.text}</p>
        <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <small>{s.partner}</small>
      </div>
    </div>
  );
}

const STEPS = [
  ["Curated audience", "Profiles are filtered and scored before anything is sent."],
  ["WhatsApp and Flows", "An official message opens a guided flow: interest, details, quote."],
  ["CRM", "Every answer lands in the lead record, with consent attached."],
  ["Voice AI and your team", "The agent calls back, then hands warm leads to a person."],
];

export function Journey() {
  const [at, setAt] = useState(STEPS.length);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    setAt(0);
    const id = setInterval(() => {
      if (!motionPaused()) setAt((v) => (v + 1) % (STEPS.length + 1));
    }, 2700);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="journey">
      <h3>From first message to closed sale</h3>
      <ol>
        {STEPS.map(([title, text], k) => (
          <li key={title} className={k < at ? "done" : k === at ? "on" : undefined}>
            <b>{title}</b>
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

const INDUSTRIES = [
  { name: "Insurance", head: "More policies from the same sales team.", text: "Telemarketing agents receive curated, opted-in prospects, and an AI agent handles first contact, quotes and reminders.", sol: "Database curation with AI agents" },
  { name: "Multifinance", head: "Qualified applicants, not cold lists.", text: "Prospects are scored before outreach and complete their application details in a WhatsApp Flow.", sol: "Database curation with AI agents" },
  { name: "Banking", head: "Cross-sell with consent on record.", text: "Reach existing and new audiences through official channels, with every opt-in stored in your CRM.", sol: "AI agent implementation" },
];

export function Industries() {
  const [i, setI] = useState(0);
  const d = INDUSTRIES[i];
  return (
    <>
      <div className="center">
        <h2>For insurers and other regulated businesses that sell through conversation.</h2>
        <div className="itabs" role="tablist" aria-label="Industries">
          {INDUSTRIES.map((x, k) => (
            <button key={x.name} type="button" role="tab" className="itab" aria-selected={k === i} onClick={() => setI(k)}>
              {x.name}
            </button>
          ))}
        </div>
      </div>
      <div className="film ind" role="tabpanel">
        <Film palette="f" />
        <div className="ind-body swap" key={i}>
          <h2>{d.head}</h2>
          <p>{d.text}</p>
          <span>Solution: {d.sol}</span>
        </div>
      </div>
    </>
  );
}
