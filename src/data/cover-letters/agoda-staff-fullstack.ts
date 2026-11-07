import type { Letter } from "../coverLetter";

export const meta = {
  slug: "agoda-staff-fullstack",
  company: "Agoda",
  role: "Staff Software Engineer (Full Stack)",
  added: "2026-06-01",
  jdUrl: "https://careersatagoda.com",
};

export const letter: Letter = {
  recipient: ["Hiring Team", "Agoda · Bangkok"],
  salutation: "Dear Agoda Hiring Team,",
  paragraphs: [
    `I'm writing about the Staff Software Engineer (Full Stack) role in Bangkok. What pulled me in is the scope: owning complex systems end to end for a product that millions of travelers actually use, on a team drawn from all over the world. I've spent six years building full-stack products from the database up to the screen, and relocating to join an international engineering team like Agoda's is exactly the move I want to make next.`,
    `I'm a senior product engineer at <span class="navy">Kindred AI</span>, where I work across React, Next.js, Node.js, NestJS, Django and AWS, from system design through production. I'm the product and engineering owner of Kindred Practice, which grew to 1,000+ therapists while I worked with product, design and clinical colleagues on scheduling, billing, clinical notes and live video sessions. I've also delivered the Stellantis skills platform for 25,000+ employees in 14 languages, with SAML single sign-on and manager-based permissions, and rebuilt Medimap on Next.js, after which revenue and users each grew 15% in two months. On the infrastructure side, right-sizing and cleaning up our AWS production setup cut the monthly bill by 61%.`,
    `Lifting the team around me matters to me, and I know it's a big part of a staff role. I wrote the shared Claude Code skills and Cursor rules our engineers build with, which cut new-hire ramp from weeks to days, and I helped set up coding agents that turn Sentry errors and tickets into 30+ reviewed pull requests a month, with a person approving every plan.`,
    `My day-to-day has been TypeScript, Python, Node.js and React rather than Java or Kotlin, but picking up a new stack has never been the thing that slows me down, and I'd enjoy doing exactly that here. I'd love to talk about how I can help Agoda, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
