import { baseResume } from "../resume";
import type { Resume } from "../resume";

export const meta = {
  slug: "doctolib-frontend",
  company: "Doctolib",
  role: "Frontend Software Engineer (React / TypeScript)",
  added: "2026-06-01",
  jdUrl: "https://careers.doctolib.com",
};

// Honest tailoring: Doctolib is a healthcare technology platform hiring a
// FRONTEND engineer to build React/TypeScript components with a strong focus on
// performance, testing, accessibility, and design systems, working closely with
// PMs and designers. The biggest honest edges here are (1) the healthcare
// domain, which Danish has worked in for years, (2) React + TypeScript in
// production, and (3) a real testing culture (Playwright, Jest). So this variant
// leads with the frontend stack, product collaboration, code quality/testing,
// and the healthcare context. It keeps backend present (he's full-stack) but
// lower, and moves AI to the end. It does NOT claim Rails, Java, Kotlin, Swift,
// or React Native, which aren't part of Danish's stack.
const [kindred, ...restExperience] = baseResume.experience;

export const resume: Resume = {
  ...baseResume,
  role: "Senior Engineer · Frontend (React & TypeScript)",
  summary: `<p>I'm a frontend-leaning full-stack engineer with 5+ years building products end to end, most of that in healthcare. I work in React and TypeScript every day, building the interfaces people actually touch, with Node.js and Django behind them when I need them. At <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they serve, I built the live video sessions, scheduling, billing, and the screens that tie them together.</p><p>I care about the things this role does: components that perform under real load, a testing culture I actually trust (Playwright, Jest), and code other people can read and extend. I work closely with product and design so what ships makes sense for the people using it, which matters even more in healthcare. I still read every line before it ships.</p>`,
  experience: [
    {
      ...kindred,
      // Reordered to foreground full-stack React delivery, the users served,
      // and code-quality/conventions work for a frontend role; AI last.
      bullets: [
        kindred.bullets[1], // full-stack delivery across React, Node.js (TS), Django
        kindred.bullets[0], // scaled the platform to 200+ therapists and their clients
        kindred.bullets[6], // authored shared conventions/tooling, code quality and ramp
        kindred.bullets[2], // architected event-driven backend + real-time video/transcription
        kindred.bullets[3], // production RAG pipelines, latency and spend cuts
        kindred.bullets[4], // in-app AI assistant with guardrails
        kindred.bullets[5], // org-wide developer-loop automations
      ],
    },
    ...restExperience,
  ],
  // Frontend and Languages first, then Testing, then the rest; AI last.
  skills: [
    baseResume.skills[2], // Frontend
    baseResume.skills[0], // Languages
    baseResume.skills[3], // Testing
    baseResume.skills[1], // Backend
    baseResume.skills[4], // Data
    baseResume.skills[5], // Cloud & DevOps
    baseResume.skills[6], // Agentic AI
  ],
};
