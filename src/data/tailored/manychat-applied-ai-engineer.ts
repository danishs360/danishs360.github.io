import { baseResume } from "../resume";
import type { Resume } from "../resume";

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
// calling, memory/state, evals, and reliable backend patterns (async, retries,
// queues, idempotency). This is squarely Danish's day-to-day. So this variant
// leads with the agent + automation work, the RAG/eval/monitoring, and the
// orchestration backend, then ownership/scale, then the rest. Skills foreground
// Agentic AI, TypeScript/Node, and the data/infra layers (pgvector, Redis,
// PostgreSQL, Docker, CI/CD) the JD names. Nothing invented: no Temporal/n8n,
// no NestJS, no Kafka claims that aren't true.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Software Engineer · AI Agents & Workflow Automation",
  summary: `<p>I build AI agents and the backend systems that run them, with 5+ years shipping products end to end. Most of it in TypeScript and Node.js, with Python where it fits. At <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, I built the agentic features and the orchestration underneath them: an in-app assistant that takes real actions through tool calls, RAG grounded in real clinical context, and automation pipelines wired into the systems the business actually runs on.</p><p>I care about agents that hold up in production, so I lean on the unglamorous parts: retries, idempotency, queues, evals, and monitoring. I built a pipeline that turns a Sentry alert into a reviewed pull request, deployed RAG on pgvector with eval-driven iteration, and worked closely with product and domain experts to find the use cases worth building before writing the code. I use Claude Code and Cursor every day to move faster, but the judgment stays mine, and I still read every line before it ships.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered for an Applied AI / agent-automation role: agents and
      // tool-calling first, then agentic workflow automation tied into ticketing,
      // then RAG/eval, then the orchestration backend (async, real-time
      // integrations), then ownership/scale and full-stack delivery.
      bullets: [
        kindred.bullets[4], // in-app AI assistant: tool calls, structured outputs, scoped permissions, guardrails
        kindred.bullets[5], // developer-loop automations: Sentry/Gleap -> Goose agents -> reviewed PRs
        kindred.bullets[3], // production RAG pipelines on pgvector, eval-driven, latency/spend cuts
        kindred.bullets[2], // event-driven backend (Node/TS, Django, Lambda), real-time video/transcription/chat
        kindred.bullets[0], // scaled the platform to 200+ therapists, end-to-end ownership
        kindred.bullets[1], // full-stack delivery of Kindred Workplace (React, Node/TS, Django)
        kindred.bullets[6], // authored shared Cursor rules / Claude Code skills
      ],
    },
    ...restExperience,
  ],
  // Agentic AI first, then the languages and backend the JD names, then the
  // data and infra layers (pgvector, Redis, PostgreSQL, Docker, CI/CD), then
  // frontend and testing.
  skills: [
    baseResume.skills[6], // Agentic AI
    baseResume.skills[0], // Languages (TypeScript, Python)
    baseResume.skills[1], // Backend (Node.js, ...)
    baseResume.skills[4], // Data (PostgreSQL, Redis, pgvector, ...)
    baseResume.skills[5], // Cloud & DevOps (Docker, CI/CD, ...)
    baseResume.skills[2], // Frontend
    baseResume.skills[3], // Testing
  ],
};
