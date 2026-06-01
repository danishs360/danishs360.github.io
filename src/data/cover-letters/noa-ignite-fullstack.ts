import type { Letter } from "../coverLetter";

export const meta = {
  slug: "noa-ignite-fullstack",
  company: "NoA Ignite",
  role: "Senior Full-Stack Web Developer",
  added: "2026-06-01",
};

export const letter: Letter = {
  recipient: ["Hiring Team", "NoA Ignite · Copenhagen"],
  salutation: "Dear NoA Ignite Team,",
  paragraphs: [
    `I'm writing about the Senior Full-Stack Web Developer role. Next.js, React, and TypeScript are where I spend most of my time, and the way you describe the job, owning not just the code but the whole system around it, from architecture to performance, security, and deployment, is exactly how I like to work. Relocating to Copenhagen for a team like yours is something I'd be genuinely glad to do.`,
    `Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform, where I own delivery across Next.js/React, Node.js (TypeScript), and Django, from system design through production. I built and scaled it to 200+ therapists and the clients they see, architected the event-driven backend behind its real-time video and chat, and cut p95 response times by around 40% by being deliberate about rendering, caching, and data fetching. I care a lot about web apps that stay fast and maintainable as they grow.`,
    `The senior parts of the role appeal to me just as much as the building. I authored the shared standards my team builds against, our Cursor rules and Claude Code skills, which cut new-hire ramp from weeks to days, and I'm used to explaining technical trade-offs to non-engineers since I work closely with product and design on what to build and why. Acting as a technical advisor to clients across different industries sounds like work I'd enjoy.`,
    `I also lean on AI tools like Claude Code and Cursor to move quickly, but I still read every line before it ships. I'd love to talk about how I can help shape your Next.js practice, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
