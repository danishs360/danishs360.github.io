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
    text: "danishsiddique.com",
    href: "https://danishsiddique.com",
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
  role: "Senior Product Engineer · AI Products",
  summary: `<p>Senior product engineer with 6 years of turning real user problems into AI products that run in production. Comfortable across the whole lifecycle: shaping the problem with product and design, then building the agents, backend, apps and infrastructure, and owning reliability and cost after launch. At <span class="navy">Kindred AI</span>, works across products used by <b>1,000+ therapists</b>, <b>8,300+ people at 21 companies</b> and <b>25,000+ Stellantis employees</b>, with a focus on the gap between an AI demo and a product people trust: evals, memory, guardrails, latency and cost.</p>`,
  experience: [
    {
      company: "Kindred AI",
      note: "(kindredeq.com)",
      meta: "Sep 2023 – Present · Remote",
      title: "Senior Product Engineer",
      stack:
        "TypeScript · Python · Node.js · NestJS · Django · PostgreSQL/pgvector · AWS · Pulumi · Inngest · LiveKit · ElevenLabs · Deepgram · Claude · Langfuse",
      bullets: [
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Kindred Workplace:</b> shipped <b>Analyze</b>, which turns recorded conversations of up to 90 minutes into coaching feedback, and <b>Voice ID</b>, which recognises the member's own voice, with per-user usage limits to keep AI cost predictable and consent and GDPR deletion built in.`,
        `<b>Kindred Workplace:</b> took Paige beyond the web app into <b>Slack and Microsoft Teams</b> with scheduled check-ins, and connected the ElevenLabs voice agent to live product data securely.`,
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Kindred Practice:</b> cut the monthly AWS production bill by <b>61%</b> by right-sizing instances and removing idle, duplicated and over-provisioned resources.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Agent Ops:</b> built a support agent that drafts customer replies and hands off to the team when unsure, a pipeline that keeps help articles up to date, and a <b>scanner that blocks patient data and secrets</b> from agent changes.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>long-term memory</b> that lets AI agents remember what users shared and when it was true, with full erasure on request. <b>Roughly doubled accuracy</b> on time-sensitive questions.`,
        `<b>Kindred Core:</b> tuned speaker recognition on real production audio so it identifies the right person across different microphones, reaching <b>24 of 24 correct decisions</b> in testing.`,
        `<b>Kindred Core:</b> built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Kindred Core:</b> built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Medimap</b> (medimap.ca, 4,200+ walk-in clinics across six provinces): rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking. <b>Revenue and users each grew 15%</b> in two months.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
      ],
    },
    {
      company: "Extendly",
      note: "(extendly.com)",
      meta: "Apr 2023 – May 2024 · Remote",
      title: "Full-Stack Developer",
      stack: "Python · OpenAI · FastAPI · PostgreSQL · React · AWS Lambda",
      bullets: [
        `Built a retrieval-backed support assistant on OpenAI, FastAPI and PostgreSQL that answered <b>500–600 tickets a day</b> from the product knowledge base, freeing the support team for cases that needed judgment.`,
        `Built the customer-facing React apps and a serverless AWS Lambda layer that syncs GoHighLevel with third-party tools, so client workflows ran without anyone copying records by hand.`,
      ],
    },
    {
      company: "Zaytrics",
      note: "(zaytrics.com)",
      meta: "Sep 2020 – Apr 2023 · Islamabad",
      title: "Full-Stack Developer",
      stack: "Python · TensorFlow · Selenium · Node.js · React · PostgreSQL · MongoDB",
      bullets: [
        `Built a computer-vision system that detects trademark infringement in logos at <b>85%+ accuracy</b>, fed by a Selenium data pipeline, removing roughly <b>70% of the legal team's manual review</b>.`,
        `Redesigned PostgreSQL and MongoDB schemas that were slowing down as data grew, restoring query performance and leaving room to scale.`,
      ],
    },
  ],
  projects: [
    {
      name: "TallyReel",
      url: "https://tallyreel.com",
      urlText: "tallyreel.com",
      extra: " · AI video creation and social scheduling",
      desc: "Turns one line into a finished short video and schedules it to 15 social networks, across web (Next.js), iOS and Android (Expo) and a Mac and Windows desktop app. Includes a remote MCP server with 52 tools and OAuth so Claude and ChatGPT users can create, schedule and review videos, and an in-app AI agent with three autonomy levels and per-video GPU cost tracking on Modal.",
    },
    {
      name: "Round Zero",
      url: "https://joinroundzero.com",
      urlText: "joinroundzero.com",
      extra: " · AI interview practice",
      desc: "Live AI voice interviewer on LiveKit that adapts follow-up questions in real time, scores answers against role-specific rubrics calibrated by seniority, and runs coding rounds.",
    },
    {
      name: "Blurt",
      url: "https://blurt.soonbuilt.com",
      urlText: "blurt.soonbuilt.com",
      desc: "Hold a key and talk, and clean text appears wherever you type, with on-device speech recognition in Rust for Mac and Windows.",
    },
    {
      name: "Maina",
      url: "https://maina.soonbuilt.com",
      urlText: "maina.soonbuilt.com",
      desc: "Voice cloning from 30 seconds of speech in English, Hindi and Urdu, with a built-in AI watermark and evals for word error rate and speaker similarity.",
    },
  ],
  skills: [
    { label: "Languages", items: "TypeScript, JavaScript, Python, Rust, SQL" },
    {
      label: "AI and LLMs",
      items:
        "Claude, OpenAI, Gemini, DeepSeek, Claude Agent SDK, LangChain, MCP, RAG, graph RAG, multi-agent systems, tool calling, agent memory, LLM evals, Langfuse",
    },
    {
      label: "Voice and ML",
      items: "LiveKit, ElevenLabs, Deepgram, Whisper, speaker recognition, computer vision, MLX, llama.cpp, ONNX",
    },
    { label: "Frontend and mobile", items: "React, Next.js, Expo, React Native, Tailwind CSS, TanStack Query" },
    {
      label: "Backend and data",
      items:
        "Node.js, NestJS, Fastify, FastAPI, Django, PostgreSQL, pgvector, MongoDB, DynamoDB, Redis, Elasticsearch, Inngest",
    },
    {
      label: "Cloud and DevOps",
      items: "AWS, Azure, GCP, Cloudflare, Modal, Docker, Pulumi, GitHub Actions, CI/CD, Sentry, Jest",
    },
    { label: "Auth and billing", items: "SAML SSO, WorkOS, Clerk, RBAC, multi-tenancy, Stripe, RevenueCat, HIPAA, GDPR" },
    { label: "AI dev tools", items: "Claude Code, Cursor, Codex, GitHub Copilot" },
  ],
  education: [
    {
      degree: "BS Computer Science (final-year research: deep-learning segmentation of the liver and liver tumors in abdominal CT scans)",
      school: "Air University",
      place: "Islamabad, Pakistan",
      date: "Sep 2017 – Jun 2021",
      coursework:
        "Data Structures and Algorithms, Database Systems, Operating Systems, Artificial Intelligence, Software Engineering.",
    },
  ],
};
