# Tailored resumes

One `.ts` file per job. Each reuses `baseResume` and overrides only what
genuinely matches the role (reordered/reworded, never invented). They render at
`/resume/<slug>` and are listed (privately, noindexed) at `/resume/tailored`.

## Format

```ts
// src/data/tailored/acme-senior-fullstack.ts
import { baseResume } from "../resume";
import type { Resume } from "../resume";

export const meta = {
  slug: "acme-senior-fullstack", // becomes /resume/acme-senior-fullstack
  company: "Acme",
  role: "Senior Full-Stack Engineer",
  added: "2026-06-01",
  jdUrl: "https://...", // optional, for reference
};

export const resume: Resume = {
  ...baseResume,
  // Tailor honestly: a role-focused summary, reordered skills/bullets,
  // vocabulary aligned to the JD. Do not claim anything untrue.
  summary: baseResume.summary,
};
```

After adding a file, run `pnpm build` (or dev) and the new version appears at
its URL and in the `/resume/tailored` list.
