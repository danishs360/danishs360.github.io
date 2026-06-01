import { baseResume } from "../resume";
import type { Resume } from "../resume";

export const meta = {
  slug: "noa-ignite-fullstack",
  company: "NoA Ignite",
  role: "Senior Full-Stack Web Developer",
  added: "2026-06-01",
  jdUrl: "",
};

const kindred = baseResume.experience[0];

export const resume: Resume = {
  ...baseResume,
  role: "Senior Full-Stack Web Developer · Next.js & TypeScript",
  summary: `<p>Senior full-stack web developer with 5+ years shipping production applications in <span class="navy">Next.js</span>, React, and TypeScript, comfortable owning the whole system around the code: architecture, performance, security, and deployment. At <span class="navy">Kindred</span> (formerly Mynd), I built and scaled a real product to 200+ therapists and the thousands of clients they serve, owning everything from the React/Next.js front end to the Node and Django services behind it.</p><p>I care about the things that keep web apps fast and maintainable as they grow: modern rendering (SSR, SSG, ISR), caching, and clean architecture. I also enjoy the parts of a senior role beyond code, advising on technical direction, setting standards, and mentoring other developers, and I lean on AI tools like Claude Code and Cursor to move faster without giving up the judgment that keeps quality high.</p>`,
  skills: [
    { label: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS, Vue" },
    { label: "Rendering & Web", items: "SSR, SSG, ISR, edge/streaming, caching, performance" },
    { label: "Languages", items: "TypeScript, JavaScript, Python" },
    { label: "Backend", items: "Node.js, Django, FastAPI, Flask, REST, GraphQL" },
    { label: "Data", items: "PostgreSQL, MongoDB, Redis, DynamoDB, pgvector" },
    { label: "Cloud & DevOps", items: "AWS, GCP, Docker, GitHub Actions, CI/CD" },
    { label: "Testing", items: "Jest, Pytest, Playwright" },
    {
      label: "Agentic AI",
      items: "RAG, tool-calling agents, MCP, evals, LangChain, Claude Code, Cursor",
    },
  ],
  experience: [
    {
      ...kindred,
      stack: "TypeScript · Next.js · React · Node.js · Django · GraphQL · AWS · GCP",
      bullets: [
        `Own full-stack delivery of <b>Kindred Workplace</b>, an emotional-intelligence platform for teams, across <b>Next.js/React</b>, Node.js (TypeScript), and Django, shipping features from architecture through production.`,
        `Built and scaled <b>Kindred Practice (formerly Mynd)</b> to <b>200+ therapists</b> and the <b>thousands of clients</b> they serve; owned the React/Next.js front end plus scheduling, billing, and clinical documentation end-to-end.`,
        `Architected an event-driven backend on Node.js (TypeScript), Django, and AWS, integrating real-time video, transcription, and chat via LiveKit, AWS Chime, and Deepgram to power live therapy sessions.`,
        `Drove front-end performance with deliberate rendering, caching, and data-fetching choices, cutting p95 response latency <b>~40%</b> and LLM/API spend <b>~30%</b>.`,
        `Authored the team's shared <b>standards, Cursor rules, and Claude Code skills</b>, mentoring developers and cutting new-hire ramp from weeks to days.`,
        `Work closely with product and design to turn ambiguous requirements into clean, maintainable features, and explain technical trade-offs to non-engineers.`,
        `Built production <b>RAG pipelines</b> and an in-app AI assistant that takes real actions through tool calls, with scoped permissions and per-call guardrails.`,
      ],
    },
    baseResume.experience[1],
    baseResume.experience[2],
  ],
};
