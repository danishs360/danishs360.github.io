import type { Letter } from "../coverLetter";

export const meta = {
  slug: "gmv-space-fullstack",
  company: "GMV",
  role: "Full Stack Software Engineer (Space · Satellite Control Centers)",
  added: "2026-06-01",
  jdUrl: "https://www.gmv.com",
};

export const letter: Letter = {
  recipient: ["Hiring Team", "GMV · Space"],
  salutation: "Dear GMV Hiring Team,",
  paragraphs: [
    `I'm writing about the Full Stack Software Engineer role on the team building the satellite control center for one of Europe's leading operators. What pulls me in is the operating environment: web applications that support real satellite operations, where reliability isn't a nice-to-have. I've spent six years building full-stack products from the database up to the screen, and the chance to do that for systems with those stakes is exactly the work I want to be doing.`,
    `I'm a senior product engineer at <span class="navy">Kindred AI</span>, working in TypeScript, React, Node.js and Python on products used by 1,000+ therapists, 8,300+ people at 21 companies and 25,000+ Stellantis employees. I own Kindred Practice from system design through production, helped deliver the Stellantis skills platform with single sign-on and manager-based permissions, and right-sized our AWS production setup to cut the monthly bill by 61%. Working in healthcare drilled in the habits this role asks for: clear boundaries, careful releases, and automated checks that can stop a bad release before it reaches anyone, which is what the evaluation system I helped build at Kindred does for our AI features.`,
    `My core stack is JavaScript and TypeScript with React and Node.js, and I work with Python, Docker, GitHub Actions and branched Git workflows day to day. I haven't worked in Java or C++, but picking up a new language has never been the thing that slows me down, and I'd enjoy doing that here. I care a lot about clean design and clear boundaries between modules, so the team's interest in TDD and hexagonal architecture is something I'd be glad to learn from and grow into.`,
    `English is my working language, written and spoken, and I'd welcome the chance to talk about where I could help GMV build for daily satellite operations. Thank you for taking the time to read this.`,
  ],
  closing: "Best regards,",
};
