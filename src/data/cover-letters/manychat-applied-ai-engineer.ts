import type { Letter } from "../coverLetter";

export const meta = {
  slug: "manychat-applied-ai-engineer",
  company: "Manychat",
  role: "Applied AI Engineer (AI Agents & Workflow Automation)",
  added: "2026-06-01",
  jdUrl: "https://manychat.com/careers",
};

export const letter: Letter = {
  recipient: ["Hiring Team", "Manychat · Barcelona"],
  salutation: "Dear Manychat Hiring Team,",
  paragraphs: [
    `I'm writing about the Applied AI Engineer role in Barcelona. The framing is what pulled me in: building AI agents and agentic workflows into the foundation of the business, not bolting a demo onto the side. That's been my day-to-day for the last couple of years, and doing it for a chat-marketing platform that 1.5 million customers rely on, with relocation support to make the move, is exactly the kind of role I'm looking for next.`,
    `I'm a senior product engineer at <span class="navy">Kindred AI</span>, where I build AI agents and the backend that runs them, mostly in TypeScript and Node.js. I built the multi-agent backend behind Paige, our AI coach used by 8,300+ people at 21 companies: a supervisor routes each message to specialist agents, replies stream back, and a suite of golden conversations alerts the team when quality drops. We've since taken Paige into Slack and Microsoft Teams with scheduled check-ins. On the automation side, our coding agents turn Sentry errors and tickets into 30+ ready-to-review pull requests a month, with a person approving every plan and a review agent checking each PR, and a support agent drafts customer replies and hands off to the team when it isn't sure.`,
    `I care about the parts that decide whether an agent holds up with real users. I built long-term memory that lets our agents remember what people shared and when it was true, which roughly doubled accuracy on time-sensitive questions, and an evaluation system that can block a bad release. Taking RAG to production, prompt caching and model routing cut p95 latency by about 40% and LLM spend by about 30%. Just as much, I work closely with product and domain experts to find the use cases worth building before writing any code.`,
    `I'd welcome the chance to talk about where I could help at Manychat, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
