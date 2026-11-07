import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "agoda-staff-fullstack",
  company: "Agoda",
  role: "Staff Software Engineer (Full Stack)",
  added: "2026-06-01",
  jdUrl: "https://careersatagoda.com",
};

// Honest tailoring: Agoda wants full-stack architecture and system design on a
// high-traffic platform, plus cross-team work and mentorship. So this variant
// leads with the platforms Danish owns at scale (Kindred Practice, Stellantis,
// Medimap), architecture, infrastructure and cost, and the shared tooling that
// helps the whole team, and mirrors the TypeScript + Node + React stack he
// actually uses. AI work follows. It does NOT claim Java/Kotlin/.NET or 8+
// years, which aren't true (he has 6).
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Full-Stack Systems",
  summary: `<p>Senior product engineer with 6 years of building and running full-stack products end to end: React, Next.js and TypeScript on the front, Node.js, NestJS, Django and PostgreSQL behind them, and AWS infrastructure underneath. At <span class="navy">Kindred AI</span>, works across products used by <b>1,000+ therapists</b>, <b>8,300+ people at 21 companies</b> and <b>25,000+ Stellantis employees</b>, from system design through production, reliability and cost, including a <b>61% cut</b> to the monthly AWS bill. Works closely with product, design and fellow engineers, and helps the whole team move faster: wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.</p>`,
  experience: [
    {
      ...kindred,
      // Platform ownership and scale first, then architecture, infrastructure
      // and cost, then team enablement; AI-specific work follows.
      bullets: [
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
        `<b>Medimap</b> (medimap.ca, 4,200+ walk-in clinics across six provinces): rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking. <b>Revenue and users each grew 15%</b> in two months.`,
        `<b>Kindred Practice:</b> cut the monthly AWS production bill by <b>61%</b> by right-sizing instances and removing idle, duplicated and over-provisioned resources.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Kindred Core:</b> built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
      ],
    },
    ...restExperience,
  ],
  // TypeScript/JS, frontend, backend/data and cloud first; AI last.
  skills: [
    skill("Languages"),
    skill("Frontend and mobile"),
    skill("Backend and data"),
    skill("Cloud and DevOps"),
    skill("Auth and billing"),
    skill("AI and LLMs"),
    skill("AI dev tools"),
  ],
};
