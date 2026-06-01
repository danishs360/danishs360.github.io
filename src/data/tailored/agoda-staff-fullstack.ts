import { baseResume } from "../resume";
import type { Resume } from "../resume";

export const meta = {
  slug: "agoda-staff-fullstack",
  company: "Agoda",
  role: "Staff Software Engineer (Full Stack)",
  added: "2026-06-01",
  jdUrl: "https://careersatagoda.com",
};

// Honest tailoring: Agoda wants full-stack architecture and system design on a
// high-traffic platform, plus cross-team work and mentorship. So this variant
// leads with scale, architecture, real-time systems, and the conventions work,
// and mirrors the JS/TypeScript + Node + React stack Danish actually uses. It
// does NOT claim Java/Kotlin/.NET or 8+ years, which aren't true.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Senior Full-Stack Engineer · Systems & Scale",
  summary: `<p>I'm a full-stack engineer with 5+ years building and scaling products end to end. React and TypeScript up front, Node.js and Django behind them, and the system design and database work underneath. At <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, I owned core systems from architecture through production: live video sessions, scheduling, billing, and the real-time infrastructure that runs them.</p><p>I work well across squads and through ambiguous problems. I wrote the conventions and tooling my team builds against, which cut new-hire ramp from weeks to days, and I still read every line before it ships. I also build agentic AI: RAG grounded in real product context, an in-app assistant that takes actions on a user's behalf, and a pipeline that turns a Sentry alert into a reviewed pull request.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered to foreground scale, architecture, full-stack ownership, and
      // mentorship for a staff full-stack role; AI work follows.
      bullets: [
        kindred.bullets[0], // scaled the platform to 200+ therapists, end-to-end ownership
        kindred.bullets[2], // architected event-driven backend + real-time video/transcription
        kindred.bullets[1], // full-stack delivery of Kindred Workplace, architecture to prod
        kindred.bullets[6], // authored shared conventions/tooling, cut new-hire ramp
        kindred.bullets[3], // production RAG pipelines, latency and spend cuts
        kindred.bullets[4], // in-app AI assistant with guardrails
        kindred.bullets[5], // org-wide developer-loop automations
      ],
    },
    ...restExperience,
  ],
  // JS/TypeScript, Node, React, and the data/cloud layers first; AI last.
  skills: [
    baseResume.skills[0], // Languages
    baseResume.skills[1], // Backend
    baseResume.skills[2], // Frontend
    baseResume.skills[4], // Data
    baseResume.skills[5], // Cloud & DevOps
    baseResume.skills[3], // Testing
    baseResume.skills[6], // Agentic AI
  ],
};
