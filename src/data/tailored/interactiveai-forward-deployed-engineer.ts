import { baseResume } from "../resume";
import type { Resume } from "../resume";

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
// Python or Node.js; building system integrations (REST/GraphQL APIs,
// connectors, custom backend services) and turning them into tools for LLMs;
// MCP / custom CLI tools; multi-agent orchestration and RAG; memory / data
// pipelines for long-term context; Docker, Postgres, Redis; cloud; high
// autonomy. This is squarely Danish's day-to-day at Kindred, where he ships
// agentic features and the integration plumbing under them and works directly
// with the people who use the product. So this variant leads with the
// agent + tool/MCP work and the automation wired into real business systems,
// then RAG/memory grounding, then the event-driven integration backend, then
// ownership/scale, then full-stack delivery and reusable patterns. Skills
// foreground Agentic AI, the Python/Node languages, the backend, and the
// data/infra layers (Postgres, Redis, pgvector, Docker) the JD names.
// Nothing invented: no Kubernetes/Terraform/Salesforce/Okta claims that
// aren't true, no enterprise platforms he hasn't touched.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Forward Deployed Engineer · Agentic AI",
  summary: `<p>I build agentic systems and the backend plumbing that lets them work against real data and real business systems, with 5+ years shipping products end to end. Mostly TypeScript and Node.js, with Python where it fits. At <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, I built the AI features and the integration layer underneath them: an in-app assistant that takes real actions through tool calls with scoped permissions and guardrails, RAG grounded in real clinical context, and automation pipelines wired into the ticketing and monitoring tools the business runs on.</p><p>A lot of the job is figuring out what's actually worth building. I work directly with product and domain experts to scope an ambiguous problem, find the pre-requisite integrations (APIs, databases, queues), and ship something that holds up in production, which means the unglamorous parts: retries, idempotency, evals, and monitoring. I'm comfortable turning a REST or GraphQL API into a tool an agent can use, and I keep up with the MCP side of things. I use Claude Code and Cursor every day to move faster, but the judgment stays mine, and I still read every line before it ships.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered for a Forward Deployed Engineer role: agent tool-use and
      // safety guardrails first, then automation wired into real business
      // systems (ticketing/monitoring), then RAG/memory grounding, then the
      // event-driven integration backend, then ownership/scale and ROI, then
      // full-stack delivery, then the reusable patterns / best practices.
      bullets: [
        kindred.bullets[4], // in-app AI assistant: tool calls, structured outputs, scoped permissions, guardrails
        kindred.bullets[5], // developer-loop automations: Sentry/Gleap -> Goose agents -> reviewed PRs
        kindred.bullets[3], // production RAG pipelines on pgvector, eval-driven, latency/spend cuts
        kindred.bullets[2], // event-driven backend (Node/TS, Django, Lambda), real-time video/transcription/chat integrations
        kindred.bullets[0], // scaled the platform to 200+ therapists, end-to-end ownership
        kindred.bullets[1], // full-stack delivery of Kindred Workplace (React, Node/TS, Django)
        kindred.bullets[6], // authored shared Cursor rules / Claude Code skills (reusable patterns)
      ],
    },
    ...restExperience,
  ],
  // Agentic AI first (MCP, tool-calling, RAG, evals), then the languages the
  // JD names (Python and Node), then backend, then the data/infra layers
  // (Postgres, Redis, pgvector, Docker, CI/CD), then frontend and testing.
  skills: [
    baseResume.skills[6], // Agentic AI
    baseResume.skills[0], // Languages (TypeScript, Python, JavaScript)
    baseResume.skills[1], // Backend (Node.js, Django, FastAPI, ...)
    baseResume.skills[4], // Data (PostgreSQL, Redis, pgvector, ...)
    baseResume.skills[5], // Cloud & DevOps (AWS, GCP, Docker, CI/CD)
    baseResume.skills[2], // Frontend
    baseResume.skills[3], // Testing
  ],
};
