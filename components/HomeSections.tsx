"use client";

import { useEffect, useRef, useState } from "react";
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

const PICKS = [3, 8, 14, 17, 22, 27, 31, 33, 38, 44, 49, 52, 57];
const REEL_STEPS = ["Curate the database", "Confirm consent in WhatsApp", "Close on a voice call"];
const SCENE_MS = 6500;

// Three scenes that play in turn: database curation, consent in a WhatsApp Flow, then a voice call.
// Elements carry data-at (ms into the scene); the effect adds the "on" class at that time.
export function Reel() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = usePrefersReducedMotion();
  const screen = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const shot = screen.current?.querySelectorAll<HTMLElement>(".shot")[i];
    if (!shot) return;
    const els = Array.from(shot.querySelectorAll<HTMLElement>("[data-at]"));
    if (reduce) {
      shot.classList.remove("play");
      els.forEach((e) => e.classList.add("on"));
      return;
    }
    els.forEach((e) => e.classList.remove("on"));
    shot.classList.add("play");
    setRun(true);
    const timers = els.map((e) => setTimeout(() => e.classList.add("on"), Number(e.dataset.at)));
    timers.push(setTimeout(() => { if (auto && !motionPaused()) setI((v) => (v + 1) % REEL_STEPS.length); }, SCENE_MS));
    return () => { timers.forEach(clearTimeout); setRun(false); };
  }, [i, auto, reduce]);

  return (
    <div className="reel" aria-label="How the lead journey works">
      <div className="reel-screen film" ref={screen}>
        <Film palette="g" />
        <div className="shot" hidden={i !== 0}>
          <div className="shot-text">
            <h3>The database is curated first.</h3>
            <p>Profiles are filtered by location, behaviour and fit, so only the right audience moves forward.</p>
          </div>
          <div className="shot-vis">
            <div className="dots" aria-hidden="true">
              {Array.from({ length: 60 }, (_, k) => {
                const pk = PICKS.indexOf(k);
                return pk > -1 ? <i key={k} data-at={2600 + pk * 150} data-keep="" /> : <i key={k} />;
              })}
            </div>
            <div className="frows">
              <div className="frow" data-at={500} data-keep=""><span>Location</span><i className="tg" /></div>
              <div className="frow" data-at={1300} data-keep=""><span>Behaviour</span><i className="tg" /></div>
              <div className="frow" data-at={2100} data-keep=""><span>Fit score</span><i className="tg" /></div>
            </div>
            <div className="okline" data-at={4700}><i>✓</i>Curated audience ready</div>
          </div>
        </div>
        <div className="shot" hidden={i !== 1}>
          <div className="shot-text">
            <h3>Consent is confirmed in WhatsApp.</h3>
            <p>An official message opens a short Flow. The prospect answers and agrees to be contacted, all inside the chat.</p>
          </div>
          <div className="shot-vis">
            <div className="phone">
              <small>Your brand, official business account</small>
              <div className="bub" data-at={300}>Hi! We have a protection plan that may suit you. May we tell you more?</div>
              <div className="fcard" data-at={1400}>
                <b>Two quick questions</b>
                <div className="fopts"><span>Life cover</span><span className="fsel" data-at={2300} data-keep="">Health cover</span><span>Not sure</span></div>
                <div className="fcheck" data-at={3200} data-keep=""><i />I agree to be contacted by phone</div>
                <div className="fbtn" data-at={4000} data-keep="">Submit</div>
              </div>
              <div className="okline" data-at={4800}><i>✓</i>Consent recorded</div>
            </div>
          </div>
        </div>
        <div className="shot" hidden={i !== 2}>
          <div className="shot-text">
            <h3>Then a voice call closes the sale.</h3>
            <p>A voice AI agent calls the opted-in lead, answers questions and passes warm leads to your sales team.</p>
          </div>
          <div className="shot-vis">
            <div className="call">
              <div className="ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
              </div>
              <b>Voice AI agent</b>
              <div className="wave" aria-hidden="true">{Array.from({ length: 14 }, (_, k) => <span key={k} />)}</div>
              <div className="tags">
                <span data-at={1500}>Questions answered</span>
                <span data-at={3000}>Handed to sales team</span>
                <span data-at={4500}>Logged in CRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reel-steps" role="tablist" aria-label="Lead journey">
        {REEL_STEPS.map((label, k) => (
          <button key={label} type="button" role="tab" className={`rstep${k === i && run ? " run" : ""}`} aria-selected={k === i} onClick={() => { setI(k); setAuto(false); }}>
            <i />{label}
          </button>
        ))}
      </div>
    </div>
  );
}

const INDUSTRIES: { name: string; head: string; text: string; cases: [string, string][] }[] = [
    { name:"Insurance", head:"More policies from the same sales team.", text:"Telemarketing agents receive curated, opted-in prospects, and an AI agent handles first contact, quotes and reminders.", cases: [
      ["New policy acquisition","Reach prospects curated by life stage and location, collect their needs in a WhatsApp Flow, and let voice AI book the agent call."],
      ["Renewal and lapse recovery","Remind policyholders before expiry with a one-tap renewal Flow, then follow up lapsed policies by voice."],
      ["Cross-sell to existing customers","Offer health riders or add-on cover to current policyholders, with consent captured in chat."]]},
    { name:"Multifinance", head:"Qualified applicants, not cold lists.", text:"Prospects are scored before outreach and share their details in chat, so credit teams start with a complete application.", cases: [
      ["Pre-qualified loan leads","Target scored audiences and collect income and vehicle details in a Flow before a person steps in."],
      ["Top-up and repeat financing","Invite customers near the end of their tenor to refinance or upgrade, with eligibility checked in chat."],
      ["Payment reminders that listen","WhatsApp and voice AI remind customers, answer questions and record a promise-to-pay date."]]},
    { name:"Banking", head:"Cross-sell with consent on record.", text:"Reach existing and new audiences through official channels, with every opt-in stored in your CRM.", cases: [
      ["Card and personal loan acquisition","Send offers to curated segments and complete the first application steps inside WhatsApp."],
      ["Dormant account reactivation","Re-engage inactive customers with a relevant offer and a voice AI callback."],
      ["Bancassurance referrals","Pass interested customers to insurance partners with consent and context attached."]]},
    { name:"Automotive", head:"From interest to showroom visit.", text:"Dealers and brands reach in-market buyers and owners, and book the next step without a call centre queue.", cases: [
      ["Test drive booking","Curated in-market audiences pick a model, branch and time slot in a Flow."],
      ["Trade-in and upgrade campaigns","Offer owners a valuation and upgrade path, with warm leads routed to sales advisers."],
      ["Service reminders","Voice AI and WhatsApp book periodic service and recover missed appointments."]]},
    { name:"Healthcare", head:"Fuller schedules, fewer no-shows.", text:"Hospitals and clinics reach the right audiences for their programmes and keep appointments on track.", cases: [
      ["Health check-up packages","Promote screening packages to curated segments and take bookings in chat."],
      ["Appointment reminders","Confirm, reschedule or cancel by WhatsApp or a voice AI call."],
      ["Corporate wellness leads","Qualify employers interested in staff health programmes before the sales visit."]]}
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
          <div className="ind-text">
            <h2>{d.head}</h2>
            <p>{d.text}</p>
          </div>
          <div className="ind-cases">
            <small>Potential use cases</small>
            {d.cases.map(([title, text]) => (
              <div className="ind-case" key={title}><b>{title}</b><span>{text}</span></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
