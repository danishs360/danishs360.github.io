import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "manychat-applied-ai-engineer",
  company: "Manychat",
  role: "Applied AI Engineer (AI Agents & Workflow Automation)",
  added: "2026-06-01",
  jdUrl: "https://manychat.com/careers",
};

// Honest tailoring: Manychat wants an Applied AI Engineer focused on AI agents,
// agentic workflows, LLM orchestration, and automation pipelines wired into real
// business systems, written in TypeScript/Node.js, with RAG, tool/function
// calling, memory/state, evals, and reliable backend patterns. This is close to
// Danish's day-to-day. So this variant leads with the multi-agent coach, the
// agent automations (coding, support, help articles), agents inside Slack and
// Teams, long-term memory and evals, then RAG cost/latency and the platform
// plumbing. Skills foreground AI, TypeScript/Node, and the data/infra layers
// (pgvector, Redis, PostgreSQL, Docker, CI/CD) the JD names. Nothing invented:
// no Temporal/n8n or Kafka claims.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · AI Agents & Automation",
  summary: `<p>Senior product engineer with 6 years of shipping products end to end, now focused on AI agents and the backend systems that run them, mostly in TypeScript and Node.js with Python where it fits. At <span class="navy">Kindred AI</span>, builds the multi-agent coach used by <b>8,300+ people at 21 companies</b>, agents that live inside Slack and Microsoft Teams, and automations that turn Sentry errors and tickets into <b>30+ reviewed pull requests a month</b> and draft support replies with a hand-off to the team. Cares about the parts that decide whether an agent holds up with real users: long-term memory, evals that can block a bad release, guardrails, latency and cost. Works closely with product and domain experts to find the use cases worth building first.</p>`,
  experience: [
    {
      ...kindred,
      // Agents and agent automations first, then memory/evals/RAG, then the
      // platform plumbing and product ownership.
      bullets: [
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Agent Ops:</b> built a support agent that drafts customer replies and hands off to the team when unsure, a pipeline that keeps help articles up to date, and a <b>scanner that blocks patient data and secrets</b> from agent changes.`,
        `<b>Kindred Workplace:</b> took Paige beyond the web app into <b>Slack and Microsoft Teams</b> with scheduled check-ins, and connected the ElevenLabs voice agent to live product data securely.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>long-term memory</b> that lets AI agents remember what users shared and when it was true, with full erasure on request. <b>Roughly doubled accuracy</b> on time-sensitive questions.`,
        `<b>Kindred Core:</b> built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Kindred Workplace:</b> shipped <b>Analyze</b>, which turns recorded conversations of up to 90 minutes into coaching feedback, and <b>Voice ID</b>, which recognises the member's own voice, with per-user usage limits to keep AI cost predictable and consent and GDPR deletion built in.`,
        `<b>Kindred Core:</b> built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
      ],
    },
    ...restExperience,
  ],
  // AI first, then languages, backend/data, cloud/DevOps,
  // voice, frontend, auth, AI dev tools.
  skills: [
    skill("AI and LLMs"),
    skill("Languages"),
    skill("Backend and data"),
    skill("Cloud and DevOps"),
    skill("Voice and ML"),
    skill("Frontend and mobile"),
    skill("Auth and billing"),
    skill("AI dev tools"),
  ],
};
