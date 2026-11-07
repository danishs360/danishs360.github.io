import { baseResume } from "../resume";
import type { Resume, SkillGroup } from "../resume";

export const meta = {
  slug: "noa-ignite-fullstack",
  company: "NoA Ignite",
  role: "Senior Full-Stack Web Developer",
  added: "2026-06-01",
  jdUrl: "",
};

// Honest tailoring: NoA Ignite (agency/consultancy) wants a senior full-stack
// web developer strong in Next.js, React and TypeScript who owns the whole
// system around the code (architecture, performance, security, deployment),
// advises clients and mentors developers. So this variant leads with the
// Next.js rebuild of Medimap and its measured outcome, the client-style
// delivery for Stellantis, platform ownership, security (SSO, permissions, data
// rules), infrastructure cost and team standards; AI work follows. It does not
// claim Vue, GraphQL, specific rendering modes (SSR/SSG/ISR) or Playwright,
// which aren't on the base resume.
const kindred = baseResume.experience.find((e) => e.company === "Kindred AI")!;
const restExperience = baseResume.experience.filter((e) => e !== kindred);
const skill = (label: string): SkillGroup => {
  const s = baseResume.skills.find((g) => g.label === label);
  if (!s) throw new Error(`Unknown skill group: ${label}`);
  return s;
};

export const resume: Resume = {
  ...baseResume,
  role: "Senior Product Engineer · Next.js & TypeScript",
  summary: `<p>Senior product engineer with 6 years of shipping production web applications in <span class="navy">Next.js</span>, React and TypeScript, and owning the system around the code: architecture, security, deployment and cost. Rebuilt <span class="navy">Medimap</span> (4,200+ walk-in clinics) on Next.js and Payload CMS and launched online booking; <b>revenue and users each grew 15%</b> in two months. At <span class="navy">Kindred AI</span>, works across products used by <b>1,000+ therapists</b>, <b>8,300+ people at 21 companies</b> and <b>25,000+ Stellantis employees</b>, including SAML single sign-on, permissions and lean AWS production setups (a <b>61% cut</b> to the monthly bill). Works closely with product, design and non-engineers, and wrote the shared standards the engineering team builds with, cutting new-hire ramp from weeks to days.</p>`,
  experience: [
    {
      ...kindred,
      // Next.js web delivery and client-style projects first, then platform
      // ownership, cost and security, then team standards; AI after.
      bullets: [
        `<b>Medimap</b> (medimap.ca, 4,200+ walk-in clinics across six provinces): rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking. <b>Revenue and users each grew 15%</b> in two months.`,
        `<b>Stellantis Skills Platform</b> (25,000+ employees, 14 languages): delivered multi-rater skill assessments, SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.`,
        `<b>Kindred Practice</b> (kindredpractice.com): product and engineering owner, working with product, design and clinical stakeholders as the platform grew to <b>1,000+ therapists</b>: scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime, Deepgram) and AI features.`,
        `<b>Kindred Practice:</b> cut the monthly AWS production bill by <b>61%</b> by right-sizing instances and removing idle, duplicated and over-provisioned resources.`,
        `<b>Kindred Core</b> (multi-tenant AI platform shared by every Kindred product and partner): built usage metering, billing credits and an audit log of every AI decision for partner companies, with per-partner data rules and complete deletion of a person's records on request.`,
        `<b>Agent Ops:</b> wrote the shared Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.`,
        `<b>Kindred Workplace</b> (kindredworkplace.com, used by <b>8,300+ people across 21 companies</b>): built the <b>multi-agent backend</b> behind Paige, the AI coach: a supervisor that routes each message to specialist agents, streamed replies, and an eval suite of golden conversations that alerts the team when quality drops.`,
        `<b>Kindred Practice:</b> took RAG from prototype to production with eval-driven iteration, cutting <b>p95 latency ~40%</b> and <b>LLM spend ~30%</b> through prompt caching and model routing.`,
        `<b>Agent Ops:</b> built coding agents that turn Sentry errors and tickets into ready-to-review pull requests, <b>30+ a month</b>, with a human approving each plan and a review agent checking every PR.`,
      ],
    },
    ...restExperience,
  ],
  // Frontend first, then languages, backend, cloud, auth/security; AI last.
  skills: [
    skill("Frontend and mobile"),
    skill("Languages"),
    skill("Backend and data"),
    skill("Cloud and DevOps"),
    skill("Auth and billing"),
    skill("AI and LLMs"),
    skill("AI dev tools"),
  ],
};
