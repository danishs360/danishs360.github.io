// Single source of truth for what the chatbot knows about Danish & the site.
// Kept as a plain string so it fits straight into the system prompt.
// Update this when the resume (src/data/resume.ts) changes. Only state what the
// resume states; never add internal hostnames or account ids: everything here is public.

export const KNOWLEDGE = `
# About Danish Siddique

Danish Siddique is a Senior Product Engineer focused on AI products, with 6 years
of turning real user problems into AI products that run in production. He works
across the whole lifecycle: shaping the problem with product and design, building
the agents, backend, apps and infrastructure, and owning reliability and cost
after launch. He works at Kindred AI (kindredeq.com) on products used by 1,000+
therapists, 8,300+ people at 21 companies and 25,000+ Stellantis employees. His
focus is the gap between an AI demo and a product people trust: evals, memory,
guardrails, latency and cost. Outside work he builds independent side projects
(published under the Soonbuilt name): TallyReel, Round Zero, Blurt and Maina.

- Location: Islamabad, Pakistan · works remotely
- Email: idanishsiddique@gmail.com
- Website: https://danishsiddique.com
- LinkedIn: https://linkedin.com/in/danishs360
- GitHub: https://github.com/danishs360
- Open to senior product engineering roles on AI products.

# Headline results
- 1,000+ therapists on Kindred Practice, where he is product and engineering owner
- 8,300+ people across 21 companies on Kindred Workplace
- 25,000+ employees in 14 languages on the Stellantis Skills Platform
- Cut the monthly AWS production bill for Kindred Practice by 61%
- ~40% lower p95 latency and ~30% lower LLM spend on Kindred Practice's RAG
- 30+ ready-to-review pull requests a month from the coding agents he built
- Roughly doubled long-term memory accuracy on time-sensitive questions
- 24 of 24 correct speaker-recognition decisions in testing
- Medimap: revenue and users each grew 15% in the two months after relaunch

# Experience

## Kindred AI (kindredeq.com) — Senior Product Engineer, Sep 2023 to present, remote
Stack: TypeScript, Python, Node.js, NestJS, Django, PostgreSQL/pgvector, AWS,
Pulumi, Inngest, LiveKit, ElevenLabs, Deepgram, Claude, Langfuse.

### Kindred Workplace — https://kindredworkplace.com
Emotional-intelligence coaching for companies, used by 8,300+ people across 21
companies. Danish built the multi-agent backend behind Paige, the AI coach: a
supervisor that routes each message to specialist agents, streamed replies, and an
eval suite of golden conversations that alerts the team when quality drops. He
shipped Analyze, which turns recorded conversations of up to 90 minutes into
coaching feedback, and Voice ID, which recognises the member's own voice, with
per-user usage limits to keep AI cost predictable and consent and GDPR deletion
built in. He took Paige into Slack and Microsoft Teams with scheduled check-ins,
and connected the ElevenLabs voice agent to live product data securely.

### Kindred Practice (formerly Mynd) — https://kindredpractice.com
Practice management for therapists, grown to 1,000+ therapists. Danish is product
and engineering owner, working with product, design and clinical stakeholders:
scheduling, billing, clinical notes, live video sessions (LiveKit, AWS Chime,
Deepgram) and AI features. He took RAG from prototype to production with
eval-driven iteration, cutting p95 latency ~40% and LLM spend ~30% through prompt
caching and model routing, and cut the monthly AWS production bill by 61% by
right-sizing instances and removing idle, duplicated and over-provisioned
resources.

### Agent Ops (engineering automation)
Coding agents that turn Sentry errors and tickets into ready-to-review pull
requests, 30+ a month, with a human approving each plan and a review agent checking
every PR. A support agent that drafts customer replies and hands off to the team
when unsure, a pipeline that keeps help articles up to date, and a scanner that
blocks patient data and secrets from agent changes. He also wrote the shared Claude
Code skills and Cursor rules the engineering team builds with, cutting new-hire
ramp from weeks to days.

### Kindred Core (multi-tenant AI platform shared by every Kindred product and partner)
- Long-term memory that lets AI agents remember what users shared and when it was
  true, with full erasure on request. Roughly doubled accuracy on time-sensitive
  questions.
- Speaker recognition tuned on real production audio so it identifies the right
  person across different microphones: 24 of 24 correct decisions in testing.
- Usage metering, billing credits and an audit log of every AI decision for partner
  companies, with per-partner data rules and complete deletion of a person's
  records on request.
- An evaluation system that tests AI behaviour before every release: automated
  checks that can block a bad release, plus model-graded quality reviews across 24
  simulated user personas.

### Medimap — https://medimap.ca
4,200+ walk-in clinics across six provinces. Rebuilt the platform after
acquisition on Next.js and Payload CMS and launched online booking. Revenue and
users each grew 15% in two months.

### Stellantis Skills Platform
25,000+ employees, 14 languages. Delivered multi-rater skill assessments, SAML
single sign-on and manager-based permissions, and set up AWS production with idle
servers sleeping to cut cost.

## Extendly (extendly.com) — Full-Stack Developer, Apr 2023 to May 2024, remote
Built a retrieval-backed support assistant on OpenAI, FastAPI and PostgreSQL that
answered 500–600 tickets a day from the product knowledge base. Built the
customer-facing React apps and a serverless AWS Lambda layer that syncs GoHighLevel
with third-party tools.

## Zaytrics (zaytrics.com) — Full-Stack Developer, Sep 2020 to Apr 2023, Islamabad
Built a computer-vision system that detects trademark infringement in logos at 85%+
accuracy, fed by a Selenium data pipeline, removing roughly 70% of the legal team's
manual review. Redesigned PostgreSQL and MongoDB schemas to restore query
performance as data grew.

# Side projects (independent products, not a job)

## TallyReel — https://tallyreel.com
AI video creation and social scheduling. Turns one line into a finished short video
and schedules it to 15 social networks, across web (Next.js), iOS and Android (Expo)
and a Mac and Windows desktop app. Includes a remote MCP server with 52 tools and
OAuth so Claude and ChatGPT users can create, schedule and review videos, and an
in-app AI agent with three autonomy levels and per-video GPU cost tracking on Modal.

## Round Zero — https://joinroundzero.com
AI interview practice. A live AI voice interviewer on LiveKit that adapts follow-up
questions in real time, scores answers against role-specific rubrics calibrated by
seniority, and runs coding rounds.

## Blurt — https://blurt.soonbuilt.com
Hold a key and talk, and clean text appears wherever you type, with on-device speech
recognition in Rust for Mac and Windows.

## Maina — https://maina.soonbuilt.com
Voice cloning from 30 seconds of speech in English, Hindi and Urdu, with a built-in
AI watermark and evals for word error rate and speaker similarity.

# Education
BS Computer Science, Air University, Islamabad, Sep 2017 to Jun 2021. Final-year
research: deep-learning segmentation of the liver and liver tumors in abdominal CT
scans.

# Skills
- Languages: TypeScript, JavaScript, Python, Rust, SQL
- AI and LLMs: Claude, OpenAI, Gemini, DeepSeek, Claude Agent SDK, LangChain, MCP,
  RAG, graph RAG, multi-agent systems, tool calling, agent memory, LLM evals, Langfuse
- Voice and ML: LiveKit, ElevenLabs, Deepgram, Whisper, speaker recognition,
  computer vision, MLX, llama.cpp, ONNX
- Frontend and mobile: React, Next.js, Expo, React Native, Tailwind CSS, TanStack Query
- Backend and data: Node.js, NestJS, Fastify, FastAPI, Django, PostgreSQL, pgvector,
  MongoDB, DynamoDB, Redis, Elasticsearch, Inngest
- Cloud and DevOps: AWS, Azure, GCP, Cloudflare, Modal, Docker, Pulumi, GitHub
  Actions, CI/CD, Sentry, Jest
- Auth and billing: SAML SSO, WorkOS, Clerk, RBAC, multi-tenancy, Stripe,
  RevenueCat, HIPAA, GDPR
- AI dev tools: Claude Code, Cursor, Codex, GitHub Copilot

# About this site
https://danishsiddique.com. Built with Astro and Tailwind, styled after the idea
wall on tallyreel.com: sticky notes, taped prints and hand-drawn wiring diagrams.
The sample videos are real, unedited TallyReel renders. The chatbot runs on a
Cloudflare Worker.
`.trim();
