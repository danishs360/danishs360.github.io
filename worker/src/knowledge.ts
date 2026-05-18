// Single source of truth for what the chatbot knows about Danish & the site.
// Kept as a plain string so it fits straight into the Gemini system instruction.
// Update this when the portfolio content changes.

export const KNOWLEDGE = `
# About Danish Siddique

Danish Siddique is a Senior Software Engineer with 5+ years of experience building
AI-driven SaaS products end-to-end. He currently leads engineering on Kindred
Workplace and ships AI tooling across the organization at Kindred (formerly Mynd).

- Location: Remote
- Email: idanishsiddique@gmail.com (also danish@kindredeq.com for work)
- LinkedIn: https://linkedin.com/in/sudodanish
- Portfolio: this site

He designs and ships AI-driven products end-to-end — from LLM agent systems and
RAG infrastructure to high-throughput full-stack platforms serving 1,000+ users
in production.

# Headline stats
- 5+ years of experience
- 1,000+ users in production (Kindred Practice)
- 10+ AI agents shipped
- ~70% manual review reduced (Zaytrics trademark-detection ML system)

# Current focus — Kindred Workplace
Leading engineering on an emotional-intelligence platform for teams. Full-stack
systems, real-time features, and embedded AI that makes the product useful
day-to-day. Site: https://kindredworkplace.com

In parallel, driving AI tooling adoption across the organization:
- Developer-loop automations (Sentry & Gleap → pull request via Goose agents)
- An in-app universal AI agent
- Shared RAG infrastructure used across products

# AI & automation projects (production)

## Sentry → GitHub pull request
Goose agents subscribe to Sentry incidents, reproduce them in a sandboxed
checkout, and open a ready-to-review pull request with the proposed fix.
Closes the loop from incident to merged change without an engineer
hand-writing the patch.
Stack: Goose, Sentry, GitHub Actions.

## Gleap ticket → GitHub pull request
User-reported issues from Gleap are routed to Goose agents that scope the
change, implement the fix, and open a draft pull request — engineers review
and merge.
Stack: Goose, Gleap, LLM agents.

## Universal in-app AI agent
A conversational agent capable of executing any action available within the
product — not just retrieving information, but operating on it. Built on
tool-use, structured outputs, fine-grained permissions, and guardrails on
every call.
Stack: LangChain, tool use, Inngest.

## Production RAG pipelines
Multiple production RAG systems — clinical context for therapists,
customer-support grounding, internal knowledge — built on vector search,
deliberate chunking strategies, and eval-driven iteration.
Stack: Vector search, PostgreSQL, OpenAI / Gemini.

## RAG-powered customer support chatbot (Extendly)
Contextual customer-support chatbot built with OpenAI, FastAPI, and
PostgreSQL. Improved response accuracy and significantly reduced manual
support load by grounding answers in customer-specific documentation.

# Selected products

## Kindred Practice (formerly Mynd) — https://kindredpractice.com
AI-powered practice management platform for therapists. Video sessions,
automated note-taking with GPT and Gemini, RAG-based clinical chat, multi-agent
workflows via LangChain and Inngest, scheduling, billing. Built on Node.js
(TypeScript), Django, AWS Lambda, and React. 1,000+ users in production.

## Kindred Workplace — https://kindredworkplace.com
Emotional-intelligence platform for teams. Currently leading engineering across
full-stack systems, real-time features, and embedded AI.

## Medimap — https://medimap.ca
Healthcare platform helping patients find nearby walk-in clinics, urgent care
centers, and other providers in real time.

## KindlMedia Chat System
Custom real-time chat system supporting direct communication between clients
and businesses, with reliable delivery and live presence.

# Earlier work

## Trademark Infringement Detection (Zaytrics)
ML-based logo similarity system. ~85% accuracy, reduced manual review effort
by ~70%.

# Experience timeline

## Senior Full-Stack Engineer at Kindred (formerly Mynd) — Sept 2023 to Present (Remote)
- Currently leading engineering on Kindred Workplace.
- Built and led Kindred Practice powering 1,000+ users with unified scheduling,
  billing, and clinical documentation.
- Shipped Sentry → PR and Gleap → PR developer-loop automations via Goose agents.
- Built universal in-app AI agent with tool use and guardrails.
- Multiple RAG pipelines with vector search and eval-driven iteration.
- AI-powered note-taking using GPT, Gemini, LangChain, Inngest.
- Event-driven backend with Node.js (TypeScript), Django, AWS Lambda — low-latency,
  thousands of concurrent sessions.
- Front-ends with React, Chakra UI, Tailwind CSS.
- Real-time comms via LiveKit, AWS Chime, Deepgram for video, transcription, chat.

## Full-Stack Developer at Extendly — Apr 2023 to May 2024 (Remote, Canada)
- RAG-powered chatbot for customer support: OpenAI, FastAPI, PostgreSQL.
- Cross-platform React interfaces.
- AWS Lambda serverless integrations for SaaS automation.

## Full-Stack Developer at Zaytrics — Sep 2020 to Apr 2023 (Islamabad, Pakistan)
- ML-based trademark infringement detection: ~85% accuracy, ~70% review reduction.
- Apps with Node.js, React, Flask, PostgreSQL for legal & marketing automation.
- Refactored PostgreSQL and MongoDB for query performance and scalability.

# Education
- BS Computer Science, Air University, Islamabad — Sept 2017 to Jun 2021

# Skills

Languages: TypeScript, Python, JavaScript
Frameworks: Node.js, Django, Flask, React, Vue, FastAPI, Fastify
Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Elasticsearch
Cloud: AWS, GCP
AI & Automation: GPT, Gemini, LangChain, LLM agents, RAG, Vector search,
                 Inngest, Goose, Deepgram

# About this site
This portfolio site is built with Astro and TailwindCSS (daisyUI theme).
It has pages for Home, Projects, CV, and a Blog. The chatbot you're talking
to runs on a Cloudflare Worker and uses Google Gemini Flash.
`.trim();
