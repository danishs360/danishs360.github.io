import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "amk-python-fullstack",
  company: "AMK Technology",
  role: "Full Stack Python Developer (Agentic AI Platform)",
  added: "2026-06-05",
};

// Honest tailoring: AMK wants a Full Stack Python developer for an agentic AI
// platform who is highly independent, picks up an existing codebase fast, and
// ships production-quality work with minimal guidance. Mandatory skills are
// Python, full-stack, LLM workflows / AI applications, agentic AI platforms,
// backend + API development, and AI orchestration frameworks. Danish's Python
// is real and production: Django at Kindred AI, FastAPI + OpenAI (retrieval-
// backed support assistant) at Extendly, Python + TensorFlow (computer vision)
// at Zaytrics. So this variant foregrounds Python in the summary and skills and
// leads the Kindred bullets with the multi-agent, memory, eval and agent
// automation work. The posted range is 7-10 years and Danish has 6; that gap is
// addressed in the cover letter rather than papered over here. Nothing invented.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Python & Agentic AI",
  summary: `<p>Senior product engineer with 6 years of building AI products end to end, with Python in production throughout: <span class="navy">Django</span> at Kindred AI, <span class="navy">FastAPI</span> and OpenAI at Extendly, and TensorFlow computer vision at Zaytrics, alongside TypeScript, Node.js and React. At <span class="navy">Kindred AI</span>, builds multi-agent systems, RAG, long-term agent memory and the evaluation system that tests AI behaviour before every release, across products used by <b>1,000+ therapists</b> and <b>8,300+ people at 21 companies</b>. Picks up unfamiliar codebases quickly and works well with little hand-holding, while keeping product, design and the rest of the team in the loop.</p>`,
  experience: [
    {
      ...kindred,
      // Agentic and orchestration work first, then memory, evals and RAG, then
      // agent automation and platform plumbing, then product ownership.
      bullets: [
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>long-term memory</b> that lets AI agents remember what users shared and when it was true, with full erasure on request. <b>Roughly doubled accuracy</b> on time-sensitive questions.`,
        `<b>Kindred Core:</b> built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Agent Ops:</b> built a support agent that drafts customer replies and hands off to the team when unsure, a pipeline that keeps help articles up to date, and a <b>scanner that blocks patient data and secrets</b> from agent changes.`,
        `<b>Kindred Core:</b> built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Kindred Workplace:</b> shipped <b>Analyze</b>, which turns recorded conversations of up to 90 minutes into coaching feedback, and <b>Voice ID</b>, which recognises the member's own voice, with per-user usage limits to keep AI cost predictable and consent and GDPR deletion built in.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
      ],
    },
    ...restExperience,
  ],
  // AI first, then languages and backend with Python and its frameworks led,
  // then cloud, voice/ML, frontend, auth, AI dev tools.
  skills: [
    skill("AI and LLMs"),
    { label: "Languages", items: "Python, TypeScript, JavaScript, Rust, SQL" },
    {
      label: "Backend and data",
      items:
        "Django, FastAPI, Node.js, NestJS, Fastify, PostgreSQL, pgvector, MongoDB, DynamoDB, Redis, Elasticsearch, Inngest",
    },
    skill("Cloud and DevOps"),
    skill("Voice and ML"),
    skill("Frontend and mobile"),
    skill("Auth and billing"),
    skill("AI dev tools"),
  ],
};
