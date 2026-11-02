"use client";

import { useEffect } from "react";
import Script from "next/script";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyChat from "@/components/agency/AgencyChat";

const SYSTEMS = {
  featured: {
    name: "AI Voice Receptionist",
    tagline: "Every call answered. Every caller captured or booked.",
    setup: "$497",
    monthly: "$397",
    terms: "One-time setup, then $397/month. Cancel with 30 days' notice.",
    items: [
      "A natural-voice AI answers your phone 24/7: nights, weekends, holidays",
      "Books appointments straight into your calendar",
      "Captures name, number, and need on every single call",
      "Answers questions from facts you approve: services, prices, hours",
      "Instant summary to you after every call",
      "Covers after-hours, overflow, or every call you get",
    ],
  },
  others: [
    {
      name: "Ads Management",
      tagline: "Google + Meta campaigns, built and managed for you.",
      setup: "$500",
      monthly: "$1,250",
      terms:
        "One-time setup, then $1,250/month. Ad spend stays on your card (we recommend $1,500+/month). 90-day minimum.",
      items: [
        "Strategy, build, and launch on Google + Meta",
        "Ad copy and audience targeting done for you",
        "Weekly optimization: budget follows what works",
        "Monthly report: spend, leads, cost per lead",
        "Your ad accounts stay 100% yours, always",
      ],
      note: "Straight talk: ads bring traffic and inquiries. Results vary, and no honest agency guarantees sales.",
    },
    {
      name: "Website + AI Booking",
      tagline: "A website that books jobs while you sleep.",
      setup: "$997",
      monthly: "$497",
      terms:
        "One-time setup, then $497/month. 6-month minimum, then month-to-month.",
      items: [
        "A fast new website, built for your business",
        "AI chat on every page, 24/7: captures name, phone, and problem",
        "Instant lead alert to you, instant reply to the customer",
        "Follow-up emails to leads who didn't book: 4 emails over 7 days",
        "Online booking and automatic review requests",
        "A 1-page monthly report: chats, leads, bookings",
      ],
    },
    {
      name: "Reactivation Campaign",
      tagline: "Wake up the customers you already earned.",
      setup: "$750",
      monthly: null as string | null,
      terms:
        "One-time, from $750. Final price depends on list size and is quoted on the call.",
      items: [
        "2–3 emails written for your business, sent to your past customers",
        "You approve every word before anything sends",
        "Your list stays 100% yours: never shared, never reused",
        "Replies and bookings tracked for you",
        "A results report when the campaign ends",
      ],
    },
  ],
};

const LEAKS = [
  {
    title: "The phone rings out",
    body: "A customer calls at 8pm and gets voicemail. They don't leave a message. They call the next company.",
  },
  {
    title: "Leads go cold",
    body: "Someone fills out your form and hears back tomorrow, or never. Whoever answers first wins the job.",
  },
  {
    title: "The list sleeps",
    body: "Past customers are ready to buy again and nobody asks. It's the cheapest revenue you own.",
  },
];

const COMPARE = [
  [
    "Missed calls",
    "A receptionist: $3,000+/month, 9-to-5, sick days and turnover",
    "AI receptionist answers 24/7 for $397/month",
  ],
  [
    "Lead follow-up",
    "Whoever notices first, hours or days later",
    "Instant alert to you, instant reply to the customer",
  ],
  [
    "New customers",
    "Hope, referrals, and word of mouth",
    "Managed Google + Meta ads with cost-per-lead reporting",
  ],
  [
    "Past customers",
    "A list sitting in a drawer, going cold",
    "A campaign that wakes them up and books them again",
  ],
  ["Proof it works", "Gut feeling", "One monthly report in plain numbers"],
  [
    "Who runs it",
    "You, on top of everything else",
    "Excelsus: built, managed, reported",
  ],
];

const STEPS = [
  {
    n: "01",
    t: "Demo call",
    d: "Day 0",
    p: "15 minutes. We find the leak costing you the most customers. If we can't fix it, I'll tell you straight.",
  },
  {
    n: "02",
    t: "Say yes",
    d: "Day 0",
    p: "The setup fee for your system, paid online. No payment, no start. That keeps both of us serious.",
  },
  {
    n: "03",
    t: "Intake",
    d: "Day 1",
    p: "A 15-minute form: services, prices, hours. You approve one page of facts. That's all your AI is ever allowed to say.",
  },
  {
    n: "04",
    t: "Build & launch",
    d: "Days 2–6",
    p: "We build it, then test it live with you watching: a real call, a real lead, end to end. Ad campaigns launch within 14 days.",
  },
  {
    n: "05",
    t: "Report & grow",
    d: "Day 30",
    p: "Your first monthly report lands: exactly what your systems produced, in plain numbers. Add a second system whenever you're ready.",
  },
];

const AUDIENCE = [
  "Home services",
  "Medical & dental",
  "Legal & professional",
  "Realtors",
  "Auto",
  "Salons & fitness",
  "Any lead-driven business",
];

const PROOF = [
  {
    tag: "Live platform",
    name: "Excelsus",
    desc: "Full-stack brand and membership platform: auth, subscriptions, community, and an admin panel. Built and maintained by me.",
    stack: ["Next.js", "Supabase", "Stripe", "Vercel"],
  },
  {
    tag: "Live platform",
    name: "HackLingo",
    desc: "Gamified cybersecurity learning platform with an XP system for learning ethical hacking. Built from scratch.",
    stack: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    tag: "Client work",
    name: "Orlando Realtor, Roxanne Fernandez",
    desc: "Real estate listing site with lead capture and property inquiry forms. Delivered in under a week.",
    stack: ["Next.js", "Vercel", "SEO"],
  },
  {
    tag: "Security",
    name: "Hardened by default",
    desc: "OWASP Top 10, CSP headers, input validation, auth hardening. Security is part of the foundation, not an add-on.",
    stack: ["OWASP", "CSP", "Auth"],
  },
  {
    tag: "Engineering",
    name: "Achlys, a programming language",
    desc: "A complete language built from scratch: lexer, parser, interpreter, standard library. The caliber of thinking behind every system.",
    stack: ["Language design", "C / Rust"],
  },
  {
    tag: "Systems",
    name: "Custom OS / kernel",
    desc: "A kernel and operating system written from scratch: memory management, scheduling, system calls.",
    stack: ["Systems", "C / Assembly / LLVM"],
  },
];

const FAQ = [
  [
    "Do I have to manage anything?",
    "No. We build, run, monitor, and report. You approve one page of facts and, for reactivation, the emails. We handle the rest.",
  ],
  [
    "What does the AI say to my customers?",
    "Only what's on the one-page facts sheet you approve: your services, prices, and hours. It answers from those facts and captures the caller's details for you.",
  ],
  [
    "Do I keep my ad accounts and customer list?",
    "Yes. Ad accounts stay 100% yours, and your customer list is never shared or reused.",
  ],
  [
    "How long am I locked in?",
    "Voice receptionist: cancel with 30 days' notice. Ads: 90-day minimum. Website + AI booking: 6-month minimum, then month-to-month. Reactivation is a one-time project.",
  ],
  [
    "Can I start with one system and add more later?",
    "Yes. Start with the leak that costs you the most and add a second system any time.",
  ],
];

export default function AgencyHomePage() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <AgencyNav />

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="pill reveal">
              <span className="dot"></span>
              Growth systems for businesses · Anywhere in the world
            </span>
            <h1 className="reveal">
              Never miss
              <br />a <em>customer</em> again.
            </h1>
            <p className="hero-sub reveal">
              An AI receptionist that answers every call. Ads that bring buyers
              to your door. A website that books jobs on its own. Campaigns
              that wake up the customers you already earned. Pick your leak.
              We build the system, run it, and report what it made you.
            </p>
            <div className="hero-cta reveal">
              <a href="#book-call" className="btn btn-primary">
                Book a 15-minute call
              </a>
              <a href="#systems" className="btn btn-ghost">
                See the systems
              </a>
            </div>
            <div className="hero-trust reveal">
              <span>
                <i>✓</i> Fixed public prices
              </span>
              <span>
                <i>✓</i> Done for you
              </span>
              <span>
                <i>✓</i> English & Spanish
              </span>
            </div>
          </div>

          <div className="reveal" aria-hidden="true">
            <div className="mock">
              <div className="mock-head">
                <div className="mock-who">
                  <div className="mock-ava">📞</div>
                  <div>
                    <div className="mock-title">Incoming call · 8:42 PM</div>
                    <div className="mock-sub">After hours</div>
                  </div>
                </div>
                <span className="mock-live">
                  <span className="dot"></span>Answered
                </span>
              </div>
              <div className="bubble b-caller">
                <small>Caller</small>
                Hi, my kitchen sink is leaking and I need someone out as soon
                as possible.
              </div>
              <div className="bubble b-ai">
                <small>AI receptionist</small>
                I can get you booked. We have tomorrow at 9:00 AM open. What's
                the best number and address for the visit?
              </div>
              <div className="mock-result">
                <div className="mock-chip">
                  <b>Booked</b>
                  <span>Tomorrow · 9:00 AM</span>
                </div>
                <div className="mock-chip">
                  <b>Owner alert</b>
                  <span>Summary sent</span>
                </div>
              </div>
              <p className="mock-cap">Illustrative example of a call</p>
            </div>
          </div>
        </div>
      </header>

      {/* STRIP */}
      <div className="strip">
        <div className="wrap strip-grid">
          {[
            ["7", "Days to launch"],
            ["24/7", "Always answering"],
            ["4", "Growth systems"],
            ["1", "Point of contact"],
          ].map(([n, l]) => (
            <div className="strip-item" key={l}>
              <div className="strip-n">{n}</div>
              <div className="strip-l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LEAKS */}
      <section className="sec">
        <div className="wrap">
          <span className="eyebrow reveal">The problem</span>
          <h2 className="h2 reveal">
            Most businesses don't have a product problem.
            <br />
            They have a <em>response</em> problem.
          </h2>
          <div className="leaks">
            {LEAKS.map((l, i) => (
              <div className="leak reveal" key={l.title}>
                <div className="leak-n">0{i + 1}</div>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section
        className="sec"
        id="systems"
        style={{
          background: "var(--alt)",
          paddingTop: "clamp(4rem,8vw,6rem)",
        }}
      >
        <div className="wrap">
          <div className="sys-head">
            <div>
              <span className="eyebrow reveal">What we do</span>
              <h2 className="h2 reveal">
                Pick the leak.
                <br />
                We <em>plug</em> it.
              </h2>
            </div>
            <p className="lede reveal" style={{ marginTop: 0 }}>
              Four systems, each built to plug one leak. Fixed prices, run for
              you, reported monthly in plain numbers. No surprises on the call.
            </p>
          </div>

          {/* Featured System */}
          <div className="feat reveal">
            <div className="feat-l">
              <span className="badge">Start here</span>
              <h3>{SYSTEMS.featured.name}</h3>
              <p className="feat-tag">{SYSTEMS.featured.tagline}</p>
              <div className="price-row">
                <span className="price-big">{SYSTEMS.featured.setup}</span>
                <span className="price-unit">setup</span>
              </div>
              <p className="price-plus">
                then {SYSTEMS.featured.monthly}/month
              </p>
              <p className="feat-terms">{SYSTEMS.featured.terms}</p>
            </div>
            <div className="feat-r">
              <ul className="checks">
                {SYSTEMS.featured.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="feat-cta">
                <a href="#book-call" className="btn btn-primary btn-block">
                  Book a 15-minute call
                </a>
              </div>
            </div>
          </div>

          {/* Others */}
          <div className="cards">
            {SYSTEMS.others.map((s) => (
              <div className="card reveal" key={s.name}>
                <h3>{s.name}</h3>
                <p className="card-tag">{s.tagline}</p>
                <div className="price-row">
                  <span className="price-big">{s.setup}</span>
                  <span className="price-unit">
                    {s.monthly ? "setup" : "one-off, from"}
                  </span>
                </div>
                {s.monthly && (
                  <p className="price-plus">then {s.monthly}/month</p>
                )}
                <p className="card-terms">{s.terms}</p>
                <ul className="checks">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                {s.note && <p className="card-note">{s.note}</p>}
                <a href="#book-call" className="btn btn-ghost btn-block">
                  Book a 15-minute call
                </a>
              </div>
            ))}
          </div>

          <div className="promise reveal">
            <div className="promise-ic">✓</div>
            <div>
              <b>Our promise</b>
              <p>
                Most systems live within 7 days of your completed intake (ad
                campaigns within 14 days), and your first monthly report lands
                within 30 days of launch. If we're late because of us, we keep
                working free until it's live.
              </p>
            </div>
          </div>

          <p
            className="lede reveal"
            style={{ marginTop: "1.6rem", fontSize: ".95rem" }}
          >
            One partner, everything run for you: one point of contact, systems
            monitored 24/7, small updates included, one plain monthly report.
            Not sold here: hourly work, logos, standalone social posting, SEO
            packages. If it's not one of the four systems above, ask on the
            call. We'd rather tell you straight than sell you wrong.
          </p>
        </div>
      </section>

      {/* COMPARE */}
      <section className="sec">
        <div className="wrap">
          <span className="eyebrow reveal">Why Excelsus</span>
          <h2 className="h2 reveal">
            Why not the <em>usual</em> way?
          </h2>
          <div className="cmp reveal">
            <div className="cmp-row cmp-head">
              <div>What matters</div>
              <div>The usual way</div>
              <div>Excelsus</div>
            </div>
            {COMPARE.map(([k, o, n]) => (
              <div className="cmp-row" key={k}>
                <div className="cmp-k">{k}</div>
                <div className="cmp-old">{o}</div>
                <div className="cmp-new">{n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="sec"
        id="process"
        style={{ background: "var(--alt)" }}
      >
        <div className="wrap">
          <span className="eyebrow reveal">How it works</span>
          <h2 className="h2 reveal">
            From first call to working system
            <br />
            in <em>days</em>.
          </h2>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step reveal" key={s.n}>
                <div className="step-n">{s.n}</div>
                <h3>{s.t}</h3>
                <div className="step-d">{s.d}</div>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <p className="eyebrow reveal" style={{ marginTop: "3.5rem" }}>
            Who this is for
          </p>
          <div className="chips reveal">
            {AUDIENCE.map((a) => (
              <span className="chip" key={a}>
                {a}
              </span>
            ))}
            <span className="chip chip-accent">
              Anywhere in the world · English & Spanish
            </span>
          </div>
        </div>
      </section>

      {/* MANIFESTO BANNER */}
      <div className="manifesto-banner">
        <div className="wrap">
          <blockquote className="reveal">
            &ldquo;I&apos;m not a freelancer guessing what might work, and this
            isn&apos;t a template shop. I&apos;m an AI engineer running a
            systems firm: we find the leak costing you customers, plug it with
            a system that runs 24/7, and report exactly what it produced. You
            run your business. The systems run the rest.&rdquo;
          </blockquote>
          <cite>Miguel Esteves · Founder, Excelsus Agency</cite>
        </div>
      </div>

      {/* PROOF */}
      <section className="sec" id="proof">
        <div className="wrap">
          <span className="eyebrow reveal">Proof of work</span>
          <h2 className="h2 reveal">
            Built by an engineer.
            <br />
            Not a <em>template</em>.
          </h2>
          <p className="lede reveal">
            I don&apos;t resell page builders. I build and run real platforms,
            and every system we run for you gets the same engineering, the same
            standards, and the same accountability.
          </p>
          <div className="proof">
            {PROOF.map((p) => (
              <div className="pcard reveal" key={p.name}>
                <span className="ptag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="pstack">
                  {p.stack.map((s) => (
                    <span className="pill-s" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq" style={{ background: "var(--alt)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow reveal">Questions</span>
            <h2 className="h2 reveal">
              Straight <em>answers</em>.
            </h2>
          </div>
          <div className="faq reveal">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK A CALL */}
      <section className="sec contact" id="book-call">
        <div className="wrap">
          <span className="eyebrow reveal">Book a call · 15 minutes</span>
          <h2 className="h2 reveal">
            Let&apos;s find your
            <br />
            biggest <em>leak</em>.
          </h2>
          <p className="lede reveal">
            15 minutes. We look at where customers are slipping away (the
            ringing phone, the slow follow-up, the sleeping list) and which
            system plugs it first. Every price is already on this page.
          </p>
          <div className="hero-cta reveal" style={{ justifyContent: "center" }}>
            <a
              href="mailto:alejandriosity@gmail.com?subject=Call — Excelsus Agency&body=Hi Miguel,%0A%0AI run a business and I'd like to book a 15-minute call.%0A%0A[Business name / what you sell / where you lose customers]"
              className="btn btn-primary"
            >
              Email to book
            </a>
            <a href="#systems" className="btn btn-ghost">
              Back to systems
            </a>
          </div>

          <div className="cal reveal">
            <p className="cal-label">Or pick a time below</p>
            <div
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              id="my-cal-inline-15min"
            ></div>
          </div>
          <Script
            id="cal-embed"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "15min", {origin:"https://app.cal.com"});
          Cal.config = Cal.config || {};
          Cal.config.forwardQueryParams = true;
          Cal.ns["15min"]("inline", {
            elementOrSelector:"#my-cal-inline-15min",
            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "miguelesteves/15min",
          });
          Cal.ns["15min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#0A7F57"},"dark":{"cal-brand":"#0A7F57"}},"hideEventTypeDetails":false,"layout":"month_view"});
        `,
            }}
          />

          <div className="contact-row">
            <div className="contact-col">
              <p className="lbl">Email</p>
              <a href="mailto:alejandriosity@gmail.com">
                alejandriosity@gmail.com
              </a>
            </div>
            <div className="contact-col">
              <p className="lbl">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/miguel-esteves-129879314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miguel Esteves
              </a>
            </div>
            <div className="contact-col">
              <p className="lbl">Service area</p>
              <span className="v">Worldwide · English & Spanish</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <AgencyFooter />

      {/* AI CHATBOT */}
      <AgencyChat />
    </>
  );
}
