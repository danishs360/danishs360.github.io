# Tailored cover letters

One `.ts` file per job. Each starts from `baseLetter` and is tailored honestly to
the role. They render at `/cover-letter/<slug>` and are listed (privately,
noindexed) at `/cover-letter/tailored`.

## Format

```ts
// src/data/cover-letters/acme-senior-fullstack.ts
import type { Letter } from "../coverLetter";

export const meta = {
  slug: "acme-senior-fullstack", // becomes /cover-letter/acme-senior-fullstack
  company: "Acme",
  role: "Senior Full-Stack Engineer",
  added: "2026-06-01",
  jdUrl: "https://...", // optional, for reference
};

export const letter: Letter = {
  date: "June 1, 2026", // optional; defaults to build-time date
  recipient: ["Hiring Team", "Acme Inc."], // optional
  salutation: "Dear Acme Hiring Team,",
  paragraphs: [
    // Tailor honestly to the role. Real experience only; mirror the JD's
    // language for things actually done. Inline HTML allowed (<span class="navy">).
  ],
  closing: "Best regards,",
};
```

Sender name + contacts come from `src/data/resume.ts`, so there is one source of
truth for contact info. After adding a file, run `pnpm build` and it appears at
its URL and in the `/cover-letter/tailored` list.
