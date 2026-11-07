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
    `I'm writing about the Senior Full-Stack Web Developer role. Next.js, React and TypeScript are where I spend most of my time, and the way you describe the job, owning not just the code but the whole system around it, from architecture to performance, security and deployment, is exactly how I like to work. Relocating to Copenhagen for a team like yours is something I'd be genuinely glad to do.`,
    `I'm a senior product engineer at <span class="navy">Kindred AI</span> with six years of shipping production web applications. Our team rebuilt Medimap (4,200+ walk-in clinics) on Next.js and Payload CMS and launched online booking; revenue and users each grew 15% in two months. I also helped deliver the Stellantis skills platform for 25,000+ employees in 14 languages, with SAML single sign-on and manager-based permissions, and I'm the product and engineering owner of Kindred Practice, which grew to 1,000+ therapists. Right-sizing our AWS production setup cut the monthly bill by 61%.`,
    `The senior parts of the role appeal to me just as much as the building. I wrote the shared Claude Code skills and Cursor rules our engineers build with, which cut new-hire ramp from weeks to days, and I'm used to explaining technical trade-offs to non-engineers since I work closely with product, design and clinical colleagues on what to build and why. Acting as a technical advisor to clients across different industries sounds like work I'd enjoy.`,
    `I'd love to talk about how I can help shape your Next.js practice, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
