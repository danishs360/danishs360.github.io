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
    `I'm writing about the Staff Software Engineer (Full Stack) role in Bangkok. What pulled me in is the scope: owning complex systems end to end for a product that millions of travelers actually use, on a team drawn from all over the world. I've spent my career building full-stack products from the database up to the screen, and relocating to join an international engineering team like Agoda's is exactly the move I want to make next.`,
    `Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform, where I own delivery across React, Node.js (TypeScript), and Django, from system design through production. I architected an event-driven backend that powers live video, transcription, and chat in real time, scaled the platform to 200+ therapists and the clients they see, and built the AI features that sit on top of it. I'm comfortable being the person who takes the hard, ambiguous, end-to-end problems and sees them through.`,
    `I also care about lifting the team around me, which is a big part of a staff role. I authored the shared Cursor rules and Claude Code skills my team relies on, which cut new-hire ramp from weeks to days, and I work closely with Product and Design so what ships actually makes sense for users. I lean on AI tools to move faster, but I still read every line before it goes out.`,
    `My day-to-day has been TypeScript, Python, Node, and React rather than Java or Kotlin, but picking up a new stack has never been the thing that slows me down, and I'd enjoy doing exactly that here. I'd love to talk about how I can help Agoda build travel for the world, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
