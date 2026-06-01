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
    `I'm a full-stack engineer with five years of building products end to end, and I'd be glad to bring that to your team. Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform where I built the live video sessions, scheduling, billing, and the AI features that run on top of all of it.`,
    `What I care about is shipping things that survive contact with real users. At Kindred I scaled the practice platform to 200+ therapists and the clients they see, deployed RAG pipelines grounded in real clinical context, and built automations that turn a Sentry alert into a reviewed pull request. I use AI tools like Claude Code and Cursor every day to move faster, but I still read every line before it ships. The judgment stays mine.`,
    `I do my best work on teams that take speed and craft seriously at the same time, and that's the kind of place I'm looking for. I'd welcome the chance to talk about where I could help, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
