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
    `I'm writing about the Applied AI Engineer role in Barcelona. The framing is what pulled me in: building AI agents and agentic workflows into the foundation of the business, not bolting a demo onto the side. That's been my actual day-to-day for the last couple of years, and doing it for a chat-marketing platform that 1.5 million customers rely on, with relocation support to make the move, is exactly the kind of role I'm looking for next.`,
    `Most recently I've been at <span class="navy">Kindred</span> (formerly Mynd), a mental-health platform, where I build AI agents and the backend that runs them in TypeScript and Node.js. I shipped an in-app assistant that takes real actions through tool calls, with structured outputs, scoped permissions, and per-call guardrails to keep it safe in production. I also built agentic automation pipelines wired into our ticketing and incident tools, where a Sentry alert or a support ticket routes through agents that reproduce the problem, implement a fix, and open a reviewed pull request, handling 30+ a month.`,
    `I care about the parts that decide whether an agent survives real traffic: retries, idempotency, queues, evals, and monitoring. I deployed production RAG on pgvector with eval-driven iteration, cut p95 latency and LLM spend through prompt caching and model routing, and built the event-driven orchestration that ties LLMs to internal services and third-party APIs. Just as much, I work closely with product and domain experts to find the use cases worth building before writing any code, and I drive the work from discovery through rollout rather than handing it off.`,
    `I lean on tools like Claude Code and Cursor to move quickly, but the judgment stays mine, and I still read every line before it ships. I'd welcome the chance to talk about where I could help at Manychat, and I appreciate you taking the time to read this.`,
  ],
  closing: "Best regards,",
};
