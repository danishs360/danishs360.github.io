import { baseResume } from "../resume";
import type { Resume } from "../resume";

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
// testing (unit/integration/e2e), clean code, and modular design; valued extras
// are Python 3, Docker, Git branched workflows, CI/CD, and an interest in TDD,
// hexagonal architecture, and clean design. So this variant leads with
// reliability in a real production environment, the TS/React/Node stack,
// testing, clean/modular architecture, and CI/CD, then Python and the data/
// infra layers. It does NOT claim Java or C++, which aren't part of Danish's
// stack, and the AI work moves to the end.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Senior Full-Stack Engineer · Reliable Web Systems",
  summary: `<p>I'm a full-stack engineer with 5+ years building products end to end. React and TypeScript up front, Node.js and Django behind them, and the system design and database work underneath. At <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, I owned core systems from architecture through production: live video sessions, scheduling, billing, and the real-time infrastructure that runs them. Working in healthcare taught me to treat reliability, testing, and clean design as the job, not an afterthought.</p><p>I care about software that holds up in a real operating environment: clear module boundaries, tests at the unit, integration, and end-to-end level, and CI/CD that catches problems before users do. I also build agentic AI on top of all this, but the foundation is always solid full-stack engineering, and I still read every line before it ships.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered to foreground production reliability, architecture, and
      // full-stack ownership for an operational space systems role; AI last.
      bullets: [
        kindred.bullets[0], // scaled the platform to 200+ therapists, end-to-end ownership
        kindred.bullets[2], // architected event-driven backend + real-time video/transcription
        kindred.bullets[1], // full-stack delivery of Kindred Workplace, architecture to prod
        kindred.bullets[6], // authored shared conventions/tooling, clean-code discipline
        kindred.bullets[3], // production RAG pipelines, latency and spend cuts
        kindred.bullets[4], // in-app AI assistant with guardrails
        kindred.bullets[5], // org-wide developer-loop automations
      ],
    },
    ...restExperience,
  ],
  // TS/JS, Node, React, testing, then data and cloud/DevOps (Docker, CI/CD);
  // AI last.
  skills: [
    baseResume.skills[0], // Languages
    baseResume.skills[1], // Backend
    baseResume.skills[2], // Frontend
    baseResume.skills[3], // Testing
    baseResume.skills[4], // Data
    baseResume.skills[5], // Cloud & DevOps
    baseResume.skills[6], // Agentic AI
  ],
};
