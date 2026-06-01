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
    `I'm writing about the Frontend Software Engineer role in Paris. Doctolib is the rare match where the domain and the work line up exactly with what I've spent my career on: I've worked in healthcare technology for years, and I build React and TypeScript frontends for a living. Building products that real patients and health professionals depend on, where getting it right actually matters, is the work I want to keep doing.`,
    `Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform used by 200+ therapists and the thousands of clients they see. I build the interfaces people touch every day in React and TypeScript, from live video sessions to scheduling and billing, backed by Node.js and Django when I need them. Healthcare taught me to treat performance, testing, and clarity as part of the job rather than polish, and I lean on a testing culture I actually trust, with Playwright and Jest, to keep shipping confidently.`,
    `I do my best work alongside product managers and designers rather than in isolation, and I like sharing what I learn, whether that's through pair programming or the shared conventions and tooling I wrote for my current team that cut new-hire ramp from weeks to days. I care about a "user first" mindset because in healthcare the user is often having a hard day, and the interface should not make it harder.`,
    `My core is frontend React and TypeScript rather than Rails, Kotlin, or Swift, but I'm full-stack by background and picking up a new part of the stack has never slowed me down. I'd welcome the chance to talk about where I could help Doctolib build the healthcare we all want, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
