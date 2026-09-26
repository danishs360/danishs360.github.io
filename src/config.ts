// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://danishs360.github.io";

export const SITE_TITLE = "Danish Siddique · Full-Stack Engineer & Agentic AI";

export const SITE_DESCRIPTION =
  "Senior full-stack engineer. At Kindred I lead memory in Kindred Core, the AI service every product calls. Through my studio Soonbuilt I shipped TallyReel and Round Zero.";

export const SITE_AUTHOR = "Danish Siddique";

export const SITE_EMAIL = "idanishsiddique@gmail.com";

export const SITE_LOCALE = "en_US";

export const SOCIAL = {
  github: "https://github.com/danishs360",
  linkedin: "https://linkedin.com/in/danishs360",
} as const;

export const PAGE_SEO = {
  projects: {
    title: "Work · Danish Siddique",
    description:
      "Kindred Workplace, Kindred Practice, TallyReel and Round Zero: what each product does for people, what Danish built, and how it works.",
  },
  blog: {
    title: "Blog · Danish Siddique",
    description:
      "Writing on AI engineering, LLM agents, RAG, evals, and building products that hold up in production.",
  },
  resume: {
    title: "Resume · Danish Siddique",
    description:
      "Resume of Danish Siddique — senior full-stack engineer specializing in agentic AI, React, TypeScript, Node.js, and production LLM systems.",
  },
  contact: {
    title: "Contact · Danish Siddique",
    description:
      "Get in touch with Danish Siddique for senior full-stack, applied AI, and product engineering roles.",
  },
} as const;

export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;
