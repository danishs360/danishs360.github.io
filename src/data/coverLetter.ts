// Cover letters, mirroring the resume setup.
//
// `baseLetter` is a reusable, general-purpose letter (rendered at /cover-letter
// and /cover-letter/print). Tailored, job-specific letters live in
// src/data/cover-letters/<slug>.ts, render at /cover-letter/<slug>, and are
// listed privately (noindex) at /cover-letter/tailored.
//
// Sender identity (name + contacts) is reused from resume.ts so there is still
// a single source of truth for contact info.

export interface Letter {
  date?: string; // e.g. "June 1, 2026"; falls back to build-time date
  recipient?: string[]; // optional lines, e.g. ["Hiring Team", "Acme Inc."]
  salutation: string; // e.g. "Dear Hiring Team,"
  paragraphs: string[]; // body paragraphs; inline HTML allowed
  closing: string; // e.g. "Sincerely,"
}

export interface CoverLetterMeta {
  slug: string;
  company: string;
  role: string;
  added?: string;
  jdUrl?: string;
}

export const baseLetter: Letter = {
  salutation: "Dear Hiring Team,",
  paragraphs: [
    `I'm a senior product engineer with six years of turning real user problems into products that run in production, and I'd be glad to bring that to your team. For the last few years I've been at <span class="navy">Kindred AI</span>, working with product, design and clinical colleagues across products used by 1,000+ therapists, 8,300+ people at 21 companies and 25,000+ Stellantis employees.`,
    `What I care about is the gap between an AI demo and a product people trust. At Kindred I've helped build the multi-agent backend behind our AI coach, long-term memory for our agents, and the evaluation system that tests AI behaviour before every release. I've also worked on the less glamorous side: taking RAG to production while cutting p95 latency by about 40% and LLM spend by about 30%, and trimming our monthly AWS bill by 61%. Our coding agents now turn Sentry errors and tickets into 30+ reviewed pull requests a month, with a person approving every plan.`,
    `I do my best work on teams that take speed and craft seriously at the same time, and I like helping the people around me move faster, which is why I wrote the shared Claude Code skills and Cursor rules our engineers build with. I'd welcome the chance to talk about where I could help, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
