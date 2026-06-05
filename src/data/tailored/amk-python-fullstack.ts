import { baseResume } from "../resume";
import type { Resume } from "../resume";

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
// is real and production: Django at Kindred, FastAPI + OpenAI (RAG chatbot) at
// Extendly, Flask + TensorFlow (ML) at Zaytrics. So this variant foregrounds
// Python in the summary and skills, leads the Kindred bullets with the agentic
// + orchestration work and the Python (Django) backend, and surfaces the
// fast-ramp / works-independently angle the JD asks for. The posted range is
// 7-10 years and Danish has 5+; that gap is addressed in the cover letter and
// email rather than papered over here. Nothing invented.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Full-Stack Python Engineer · Agentic AI",
  summary: `<p>I'm a full-stack engineer with 5+ years building products end to end, a lot of it in Python. I've shipped backends on Django, FastAPI, and Flask, with React and TypeScript up front and the database design underneath. For the last few years I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, where I own core product and the AI features that run on top of it.</p><p>Most of my recent work has been agentic: an in-app assistant that takes real actions through tool calls, RAG grounded in real clinical context, and a pipeline that turns a Sentry alert into a reviewed pull request. Before Kindred I built a production RAG support chatbot on FastAPI and OpenAI, and an ML trademark-detection system in Python. I pick up unfamiliar codebases fast and ship without much hand-holding. I use Claude Code and Cursor every day to move quicker, but I still read every line before it ships.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered for a Python agentic-platform role: the in-app agent and the
      // orchestration/automation work first, then RAG, then the Python (Django)
      // event-driven backend, then ownership/scale, then full-stack delivery,
      // then the reusable conventions that let new people ramp fast.
      bullets: [
        kindred.bullets[4], // in-app AI assistant: tool calls, structured outputs, scoped permissions, guardrails
        kindred.bullets[5], // developer-loop automations: Sentry/Gleap -> Goose agents -> reviewed PRs
        kindred.bullets[3], // production RAG pipelines on pgvector, eval-driven, latency/spend cuts
        kindred.bullets[2], // event-driven backend (Node/TS, Django, Lambda), real-time integrations
        kindred.bullets[0], // scaled the platform to 200+ therapists, end-to-end ownership
        kindred.bullets[1], // full-stack delivery of Kindred Workplace (React, Node/TS, Django)
        kindred.bullets[6], // authored shared Cursor rules / Claude Code skills, cut ramp to days
      ],
    },
    ...restExperience,
  ],
  // Agentic AI first (LLM workflows, RAG, tool-calling, MCP, orchestration),
  // then languages with Python led, then backend with the Python frameworks
  // led, then the data and infra layers, then frontend and testing.
  skills: [
    baseResume.skills[6], // Agentic AI
    { label: "Languages", items: "Python, TypeScript, JavaScript" },
    { label: "Backend", items: "Django, FastAPI, Flask, Node.js, Fastify" },
    baseResume.skills[4], // Data (PostgreSQL, MongoDB, Redis, pgvector, ...)
    baseResume.skills[5], // Cloud & DevOps (AWS, GCP, Docker, CI/CD)
    baseResume.skills[2], // Frontend
    baseResume.skills[3], // Testing
  ],
};
