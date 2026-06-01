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
    `I'm writing about the Full Stack Software Engineer role on the team building the satellite control center for one of Europe's leading operators. What pulls me in is the operating environment: web applications that support real satellite operations, where reliability isn't a nice-to-have. I've spent my career building full-stack products from the database up to the screen, and the chance to do that for systems with that kind of stakes is exactly the work I want to be doing.`,
    `Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform, where I own delivery across React, Node.js (TypeScript), and Django, from system design through production. I architected an event-driven backend that powers live video, transcription, and chat in real time, scaled the platform to 200+ therapists and the clients they see, and built the interfaces and services on top of it. Working in healthcare drilled in the habits this role asks for: clean, modular code, tests at the unit, integration, and end-to-end level, and CI/CD pipelines that catch problems before they reach anyone.`,
    `My core stack is JavaScript and TypeScript with React and Node.js, and I work in Python 3, Docker, and branched Git workflows day to day. I haven't worked in Java or C++, but picking up a new language has never been the thing that slows me down, and I'd enjoy doing that here. I care a lot about clean design and clear boundaries between modules, so the team's interest in TDD and hexagonal architecture lines up well with how I already think.`,
    `English is my working language, written and spoken, and I'd welcome the chance to talk about where I could help GMV build for daily satellite operations. Thank you for taking the time to read this.`,
  ],
  closing: "Best regards,",
};
