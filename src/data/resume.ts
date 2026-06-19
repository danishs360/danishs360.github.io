// Single source of truth for the resume.
//
// `baseResume` is the canonical resume rendered at /resume and /resume/print.
// Tailored, job-specific variants live in src/data/tailored/<slug>.ts and
// reuse this data with a few honest overrides (reordered/reworded, never
// invented). They render at /resume/<slug> and are listed at /resume/tailored.

export interface Contact {
  type: string;
  text: string;
  href: string | null;
  path: string; // SVG path for the icon
}

export interface ExperienceItem {
  company: string;
  note?: string; // e.g. "(formerly Mynd)"
  meta: string; // e.g. "Sept 2023 – Present · Remote"
  title: string;
  stack: string; // mono tech line
  bullets: string[]; // may contain inline HTML (<b>, etc.)
}

export interface Project {
  name: string;
  url?: string;
  urlText?: string;
  extra?: string; // trailing meta, e.g. " (formerly mynd.app)"
  desc: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface Education {
  degree: string;
  school: string;
  place: string;
  date: string;
  coursework?: string;
}

export interface Resume {
  role: string;
  summary: string; // may contain inline HTML (e.g. <span class="navy">)
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
}

export const name = "Danish Siddique";

export const contacts: Contact[] = [
  {
    type: "email",
    text: "idanishsiddique@gmail.com",
    href: "mailto:idanishsiddique@gmail.com",
    path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  },
  {
    type: "phone",
    text: "+92 311 5238087",
    href: "tel:+923115238087",
    path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  },
  {
    type: "website",
    text: "danishs360.github.io",
    href: "https://danishs360.github.io",
    path: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
  },
  {
    type: "linkedin",
    text: "linkedin.com/in/danishs360",
    href: "https://linkedin.com/in/danishs360",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    type: "github",
    text: "github.com/danishs360",
    href: "https://github.com/danishs360",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    type: "location",
    text: "Islamabad, Pakistan",
    href: null,
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
];

export const baseResume: Resume = {
  role: "Senior Full-Stack Engineer · Agentic AI",
  summary: `<p>I'm a full-stack engineer with 5+ years building products end to end. React and TypeScript on the frontend, Node and Django on the backend, and the database design underneath. For the last few years I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and their clients. I owned a lot of the core product there: live video sessions, scheduling, billing, and the AI features that run on top of them.</p><p>Lately most of my work has been agentic. I built a RAG system grounded in real clinical context, an in-app assistant that can take actions on the user's behalf, and a pipeline that turns a Sentry alert into a reviewed PR. I also built and launched <span class="navy">Round Zero</span> (joinroundzero.com), a job-prep platform with honest resume tailoring, cited company research, and live AI voice interviews that score and coach candidates before the real thing. I use Claude Code and Cursor every day to move faster, but not to do the thinking. I still read every line before it ships.</p>`,
  experience: [
    {
      company: "Kindred",
      note: "(formerly Mynd)",
      meta: "Sept 2023 – Present · Remote",
      title: "Senior Full-Stack Engineer",
      stack:
        "TypeScript · Node.js · Django · AWS Lambda · React · LangChain · Goose · Inngest · LiveKit · Deepgram",
      bullets: [
        `Built and scaled <b>Kindred Practice (formerly Mynd)</b>, an AI-driven practice-management platform, to <b>200+ therapists</b> and the <b>thousands of clients</b> they serve; owned scheduling, billing, clinical documentation, and AI features end-to-end.`,
        `Own full-stack delivery of <b>Kindred Workplace</b>, an emotional-intelligence platform for teams, across React, Node.js (TypeScript), and Django, shipping features from architecture through production.`,
        `Architected an event-driven backend on Node.js (TypeScript), Django, and AWS Lambda, integrating real-time video, transcription, and chat via LiveKit, AWS Chime, and Deepgram to power live therapy sessions.`,
        `Deployed multiple <b>production RAG pipelines</b> (pgvector, custom chunking, eval-driven iteration) across clinical, support, and internal-knowledge surfaces, cutting p95 response latency <b>~40%</b> and LLM/API spend <b>~30%</b> via prompt caching and model routing.`,
        `Built an <b>in-app AI assistant</b> that takes real actions inside the product through tool calls, with structured outputs, scoped permissions, and per-call guardrails to keep it production-safe.`,
        `Shipped org-wide <b>developer-loop automations</b>: Sentry incidents and Gleap tickets route through <b>Goose</b> agents that reproduce, implement, and open ready-to-review pull requests, auto-handling <b>30+ incidents and tickets a month</b> and cutting incident-to-fix time significantly.`,
        `Authored the team's shared <b>Cursor rules</b> and <b>Claude Code</b> skills that encode Kindred's conventions, keeping feature velocity around 2-3x and cutting new-hire ramp from weeks to days.`,
      ],
    },
    {
      company: "Extendly",
      meta: "Apr 2023 – May 2024 · Remote",
      title: "Full-Stack Developer",
      stack: "Python · OpenAI · FastAPI · PostgreSQL · React · AWS Lambda",
      bullets: [
        `Built a <b>RAG-powered customer support chatbot</b> on OpenAI, FastAPI, and PostgreSQL. Improved response accuracy and significantly reduced manual support load.`,
        `Designed and shipped cross-platform React interfaces for the SaaS product.`,
        `Integrated third-party APIs into SaaS workflows on AWS Lambda using a serverless architecture, enabling automation and data sync across platforms.`,
      ],
    },
    {
      company: "Zaytrics Pvt Ltd",
      meta: "Sep 2020 – Apr 2023 · Islamabad",
      title: "Full-Stack Developer",
      stack: "Node.js · React · Flask · PostgreSQL · MongoDB · TensorFlow",
      bullets: [
        `Built an <b>ML-based trademark infringement detection</b> system on logos. Reached 85%+ accuracy. Reduced manual review effort by ~70%.`,
        `Delivered multiple applications across Node.js, React, Flask, and PostgreSQL for legal and marketing automation.`,
        `Refactored PostgreSQL and MongoDB databases. Improved query performance and scalability under growing data loads.`,
      ],
    },
  ],
  projects: [
    {
      name: "Round Zero",
      url: "https://joinroundzero.com",
      urlText: "joinroundzero.com",
      desc: "Job-search prep platform: honest resume tailoring to a JD, cited company research, live voice interviews with an adaptive AI interviewer (Maeve), evidence-backed scoring, application tracking, and progress trends. Built end-to-end on LiveKit, Deepgram, tool-calling agents, RAG, and Postgres. Launched in early access.",
    },
    {
      name: "Kindred Workplace",
      url: "https://kindredworkplace.com",
      urlText: "kindredworkplace.com",
      desc: "Helps teams strengthen emotional intelligence at work. Full-stack build with real-time collaboration and embedded AI.",
    },
    {
      name: "Kindred Practice",
      url: "https://kindredpractice.com",
      urlText: "kindredpractice.com",
      extra: " (formerly mynd.app)",
      desc: "AI-powered practice management platform used by 200+ therapists. Video, automated note-taking, RAG-based chat, scheduling, billing.",
    },
    {
      name: "Developer-Loop Automations",
      extra: " · internal · Goose-based agents",
      desc: "Sentry incidents and Gleap tickets routed to Goose agents that scope, implement, and open pull requests.",
    },
    {
      name: "Medimap",
      url: "https://medimap.ca",
      urlText: "medimap.ca",
      desc: "Healthcare platform helping patients find nearby walk-in clinics and providers in real time.",
    },
  ],
  skills: [
    { label: "Languages", items: "TypeScript, Python, JavaScript" },
    { label: "Backend", items: "Node.js, Django, FastAPI, Flask, Fastify" },
    { label: "Frontend", items: "React, Vue, Tailwind CSS, Chakra UI" },
    { label: "Testing", items: "Jest, Pytest, Playwright" },
    { label: "Data", items: "PostgreSQL, MongoDB, DynamoDB, Redis, Elasticsearch, pgvector" },
    { label: "Cloud & DevOps", items: "AWS (Lambda, Chime), GCP, Docker, GitHub Actions, CI/CD" },
    {
      label: "Agentic AI",
      items:
        "RAG, tool-calling agents, MCP, evals, vector search, prompt caching, LangChain, Claude Code, Cursor, Goose, Inngest, GPT, Gemini, Deepgram, LiveKit",
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      school: "Air University",
      place: "Islamabad, Pakistan",
      date: "Sep 2017 – Jun 2021",
      coursework:
        "Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks, Software Engineering, and Artificial Intelligence.",
    },
  ],
};
