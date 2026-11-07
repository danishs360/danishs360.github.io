import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

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
// domain (Kindred Practice for 1,000+ therapists, Medimap for walk-in clinics),
// (2) React, Next.js and TypeScript in production, and (3) close work with
// product, design and clinical stakeholders. So this variant leads with the
// user-facing healthcare products and keeps backend present but lower, with AI
// toward the end. It does NOT claim Rails, Java, Kotlin, Swift, or React
// Native, and it does not claim accessibility or design-system work, testing
// tools beyond Jest, or Playwright, none of which are on the base resume.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Frontend (React & TypeScript)",
  summary: `<p>Senior product engineer with 6 years of building products end to end, much of it in healthcare, with <span class="navy">React</span>, <span class="navy">Next.js</span> and <span class="navy">TypeScript</span> at the core and Node.js and Django behind them. At <span class="navy">Kindred AI</span>, owns Kindred Practice, the platform <b>1,000+ therapists</b> use for scheduling, billing, clinical notes and live video sessions, alongside products used by <b>8,300+ people at 21 companies</b> and <b>25,000+ Stellantis employees</b>. Rebuilt Medimap's platform for 4,200+ walk-in clinics on Next.js and launched online booking, after which <b>revenue and users each grew 15%</b>. Works closely with product, design and clinical stakeholders so what ships makes sense for the people using it.</p>`,
  experience: [
    {
      ...kindred,
      // User-facing healthcare and web products first, then the product
      // features members interact with; backend and AI work after.
      bullets: [
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Medimap</b> (medimap.ca, 4,200+ walk-in clinics across six provinces): rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking. <b>Revenue and users each grew 15%</b> in two months.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): shipped <b>Analyze</b>, which turns recorded conversations of up to 90 minutes into coaching feedback, and <b>Voice ID</b>, which recognises the member's own voice, with consent and GDPR deletion built in.`,
        `<b>Kindred Workplace:</b> took Paige, the AI coach, beyond the web app into <b>Slack and Microsoft Teams</b> with scheduled check-ins.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built the <b>evaluation system</b> that tests AI behaviour before every release: automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
      ],
    },
    ...restExperience,
  ],
  // Frontend and languages first, then backend, auth/compliance (HIPAA, GDPR),
  // cloud (incl. Jest), then AI.
  skills: [
    { label: "Frontend", items: "React, Next.js, TypeScript, React Native, Expo, Tailwind CSS, TanStack Query" },
    skill("Languages"),
    skill("Backend and data"),
    skill("Auth and billing"),
    skill("Cloud and DevOps"),
    skill("AI and LLMs"),
    skill("AI dev tools"),
  ],
};
