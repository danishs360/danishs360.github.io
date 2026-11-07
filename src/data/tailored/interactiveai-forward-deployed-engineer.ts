import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "interactiveai-forward-deployed-engineer",
  company: "InteractiveAI",
  role: "Forward Deployed Engineer",
  added: "2026-06-03",
  jdUrl: "https://interactiveai.jobs.personio.com",
};

// Honest tailoring: InteractiveAI wants a Forward Deployed Engineer who walks
// into a customer's environment, translates an ambiguous business problem into
// a production agentic solution, and owns delivery end to end. Core asks:
// Python or Node.js; building system integrations (APIs, connectors, custom
// backend services) and turning them into tools for LLMs; MCP / custom CLI
// tools; multi-agent orchestration and RAG; memory / data pipelines for
// long-term context; Docker, Postgres, Redis; cloud; high autonomy. This is
// close to Danish's day-to-day at Kindred AI, where he builds agentic features
// and the integrations under them and works directly with product, clinical
// and partner stakeholders. So this variant leads with multi-agent work and
// agents wired into real business systems (Slack, Teams, Sentry, tickets,
// live product data), then long-term memory, partner-facing platform plumbing,
// RAG and evals, then ownership. The MCP experience is real (TallyReel's
// remote MCP server). Nothing invented: no Kubernetes/Terraform/Salesforce/
// Okta claims, no enterprise platforms he hasn't touched, and the role line
// does not claim a "Forward Deployed Engineer" title he hasn't held.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Agentic AI & Integrations",
  summary: `<p>Senior product engineer with 6 years of turning ambiguous business problems into AI systems that run in production, mostly in TypeScript and Node.js with Python where it fits. At <span class="navy">Kindred AI</span>, builds multi-agent backends, RAG, long-term agent memory and the integrations underneath them (Slack, Microsoft Teams, Sentry, ticketing and live product data), across products used by <b>1,000+ therapists</b>, <b>8,300+ people at 21 companies</b> and partner companies on a shared multi-tenant platform. Works directly with product, clinical and partner stakeholders to scope what is worth building, then owns it through production: evals, guardrails, audit logs, data deletion, latency and cost. Outside work, built a remote <b>MCP server with 52 tools</b> and OAuth so Claude and ChatGPT users can drive TallyReel.</p>`,
  experience: [
    {
      ...kindred,
      // Multi-agent work and agents wired into business systems first, then
      // memory and partner-facing platform plumbing, then RAG/evals, then
      // product ownership and delivery for large customers.
      bullets: [
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Kindred Workplace:</b> took Paige beyond the web app into <b>Slack and Microsoft Teams</b> with scheduled check-ins, and connected the ElevenLabs voice agent to live product data securely.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
        `<b>Agent Ops:</b> built a support agent that drafts customer replies and hands off to the team when unsure, a pipeline that keeps help articles up to date, and a <b>scanner that blocks patient data and secrets</b> from agent changes.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>long-term memory</b> that lets AI agents remember what users shared and when it was true, with full erasure on request. <b>Roughly doubled accuracy</b> on time-sensitive questions.`,
        `<b>Kindred Core:</b> built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Kindred Core:</b> built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
        `<b>Kindred Workplace:</b> shipped <b>Analyze</b>, which turns recorded conversations of up to 90 minutes into coaching feedback, and <b>Voice ID</b>, which recognises the member's own voice, with per-user usage limits to keep AI cost predictable and consent and GDPR deletion built in.`,
      ],
    },
    ...restExperience,
  ],
  // AI first (MCP, tool calling, RAG, memory, evals), then languages, backend
  // and data (Postgres, Redis, pgvector), cloud (Docker), auth/multi-tenancy,
  // voice, frontend, AI dev tools.
  skills: [
    skill("AI and LLMs"),
    skill("Languages"),
    skill("Backend and data"),
    skill("Cloud and DevOps"),
    skill("Auth and billing"),
    skill("Voice and ML"),
    skill("Frontend and mobile"),
    skill("AI dev tools"),
  ],
};
