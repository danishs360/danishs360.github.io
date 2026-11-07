import type { Letter } from "../coverLetter";

export const meta = {
  slug: "doctolib-frontend",
  company: "Doctolib",
  role: "Frontend Software Engineer (React / TypeScript)",
  added: "2026-06-01",
  jdUrl: "https://careers.doctolib.com",
};

export const letter: Letter = {
  recipient: ["Hiring Team", "Doctolib · Levallois-Perret"],
  salutation: "Dear Doctolib Hiring Team,",
  paragraphs: [
    `I'm writing about the Frontend Software Engineer role in Paris. Doctolib is the rare match where the domain and the work line up with what I've spent my career on: I've worked in healthcare technology for years, and I build products in React, Next.js and TypeScript. Building things that patients and health professionals depend on, where getting it right actually matters, is the work I want to keep doing.`,
    `I'm a senior product engineer at <span class="navy">Kindred AI</span>, where I'm the product and engineering owner of Kindred Practice, the platform 1,000+ therapists use for scheduling, billing, clinical notes and live video sessions. Our team also rebuilt Medimap (4,200+ walk-in clinics across six provinces) on Next.js and launched online booking; revenue and users each grew 15% in the two months after. Healthcare taught me to treat clarity, reliability and careful releases as part of the job rather than polish.`,
    `I do my best work alongside product managers and designers rather than in isolation, and at Kindred that has also meant working closely with clinicians so what we ship fits how they actually work. I like sharing what I learn, too: I wrote the shared Claude Code skills and Cursor rules our engineers build with, which cut new-hire ramp from weeks to days. A "user first" mindset matters to me because in healthcare the user is often having a hard day, and the interface should not make it harder.`,
    `My core is React and TypeScript rather than Rails, Kotlin or Swift, but I'm full-stack by background and picking up a new part of the stack has never slowed me down. I'd welcome the chance to talk about where I could help Doctolib, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
