import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "gmv-space-fullstack",
  company: "GMV",
  role: "Full Stack Software Engineer (Space · Satellite Control Centers)",
  added: "2026-06-01",
  jdUrl: "https://www.gmv.com",
};

// Honest tailoring: GMV wants a full-stack engineer for satellite control
// center web applications running in real operating environments. The required
// stack is JavaScript/TypeScript + React + Node.js, with a strong emphasis on
// testing, clean code, and modular design; valued extras are Python 3, Docker,
// Git branched workflows, CI/CD, and an interest in TDD, hexagonal
// architecture, and clean design. So this variant leads with systems run in
// production for large organisations, infrastructure and release safety, the
// TS/React/Node stack, then Python and the data/infra layers. It does NOT claim
// Java or C++, TDD or hexagonal architecture experience, or testing tools
// beyond what's on the base resume; AI work moves toward the end.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Full-Stack (TypeScript, React, Node.js)",
  summary: `<p>Senior product engineer with 6 years of building full-stack web systems that run in real production environments: TypeScript, React and Node.js, with Python, PostgreSQL, Docker and CI/CD around them. At <span class="navy">Kindred AI</span>, works across products used by <b>1,000+ therapists</b>, <b>8,300+ people at 21 companies</b> and <b>25,000+ Stellantis employees</b>, from system design to running them on AWS. Healthcare work made reliability and careful releases part of the job, not an afterthought: automated checks that can block a bad release, audit logs, clear data rules and infrastructure kept lean, including a <b>61% cut</b> to the monthly AWS bill. Works closely with product, design and the rest of the engineering team.</p>`,
  experience: [
    {
      ...kindred,
      // Production systems for large organisations first, then infrastructure,
      // release safety and auditability, then the remaining product work.
      bullets: [
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
        `<b>Kindred Practice:</b> cut the monthly AWS production bill by <b>61%</b> by right-sizing instances and removing idle, duplicated and over-provisioned resources.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Kindred Core:</b> built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Medimap</b> (medimap.ca, 4,200+ walk-in clinics across six provinces): rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking. <b>Revenue and users each grew 15%</b> in two months.`,
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
      ],
    },
    ...restExperience,
  ],
  // TS/JS and Python, frontend, backend, then cloud/DevOps (Docker, CI/CD);
  // AI last.
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
