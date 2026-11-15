/* eslint-disable @next/next/no-img-element */
import "./home.css";
import Film from "@/components/Film";
import MotionToggle from "@/components/MotionToggle";
import EnquiryFlow from "@/components/EnquiryFlow";
import { SolutionStage, Reel, Industries } from "@/components/HomeSections";

const CASES: { film: "a" | "b" | "c"; title: string; text: string }[] = [
  { film: "a", title: "A prospect database curated before the first call", text: "Audiences are profiled, scored and consent-checked with telco-grade analytics, so your sales team starts from people who fit the product." },
  { film: "b", title: "WhatsApp journeys that qualify leads on their own", text: "Automated messages and dynamic WhatsApp Flows let prospects answer, get a quote and book a call without leaving the chat." },
  { film: "c", title: "Voice AI that follows up while interest is fresh", text: "An AI voice agent calls opted-in leads, answers their questions and hands the warm ones to your team, with every step logged in the CRM." },
];

export default function Home() {
  return (
    <div className="ekh">
      <header className="film hero" id="top">
        <Film palette="hero" />
        <div className="wrap hero-body">
          <h1>Curated leads, and AI agents that turn them into customers</h1>
          <p>Enklaris helps insurers and other regulated businesses in Indonesia reach the right people with consent, then convert them through WhatsApp, CRM and voice AI.</p>
          <div className="row">
            <a className="pill pill-white" href="#contact">Talk to us</a>
            <a className="pill pill-ghost" href="#solutions">See solutions</a>
          </div>
        </div>
        <MotionToggle />
      </header>

      <div className="wrap partners">
        <p>Working with our technology partners</p>
        <div className="cells">
          <div><img src="/partners/kata-ai.svg" alt="Kata.ai" style={{ height: 30 }} /></div>
          <div><img src="/partners/compnet.webp" alt="Compnet" style={{ height: 62 }} /></div>
        </div>
      </div>

      <section id="use-cases">
        <div className="wrap">
          <h2 className="cases-head">Solving the problems that move the business.</h2>
          <div className="cases">
            {CASES.map((c) => (
              <a key={c.film} className="film case" href="#solutions">
                <Film palette={c.film} />
                <div className="top">
                  <h3>{c.title}</h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </div>
                <p>{c.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="statement">
            We bring together a <b>curated database</b>, <b>AI agents</b> and a <b>team that runs them</b>, so more of your leads become customers.
          </p>
        </div>
      </section>

      <section className="night" id="solutions">
        <div className="wrap">
          <div className="journey-head">
            <h2>From curated database to closed sale.</h2>
            <p>Three steps, one continuous journey for every lead.</p>
          </div>
          <Reel />
          <SolutionStage />
          <div className="panels">
            <div className="film panel">
              <Film palette="d" />
              <h2>An implementation team that builds with you.</h2>
              <p>We design the flows, connect your CRM and channels, and run the campaign alongside your sales team.</p>
              <a className="pill pill-white" href="#contact">Talk to us</a>
            </div>
            <div className="film panel">
              <Film palette="e" />
              <h2>Start with a pilot.</h2>
              <p>Begin with a limited database and budget, compare cost per customer with your current method, then scale what works.</p>
              <a className="pill pill-white" href="#contact">Plan a pilot</a>
            </div>
          </div>
        </div>
      </section>

      <section id="industries">
        <div className="wrap">
          <Industries />
        </div>
      </section>

      <section className="night" id="contact">
        <div className="wrap contact">
          <div className="lead">
            <h2>Tell us what you need.</h2>
            <p>Five short questions, about a minute. We reply within one business day.</p>
          </div>
          <EnquiryFlow />
        </div>
      </section>
    </div>
  );
}
