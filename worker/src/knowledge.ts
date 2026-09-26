// Single source of truth for what the chatbot knows about Danish & the site.
// Kept as a plain string so it fits straight into the Gemini system instruction.
// Update this when the portfolio content changes. Never add client or partner
// names, internal hostnames or account ids: everything here is public.

export const KNOWLEDGE = `
# About Danish Siddique

Danish Siddique is a senior full-stack engineer with 5+ years of building
products end to end, most recently the AI underneath them. He works at Kindred
(formerly Mynd), where he leads the memory work in Kindred Core, the AI service
every Kindred product calls. After hours he runs Soonbuilt, a one-person product
studio that has shipped TallyReel and Round Zero.

- Location: Islamabad, Pakistan · works remotely
- Email: idanishsiddique@gmail.com (also danish@kindredeq.com for work)
- LinkedIn: https://linkedin.com/in/danishs360
- GitHub: https://github.com/danishs360
- Studio: https://soonbuilt.com
- Open to senior full-stack and applied AI roles.

# Headline numbers
- 5+ years shipping products
- 3 products live through Soonbuilt (TallyReel, Round Zero, the Soonbuilt site)
- 200+ therapists on Kindred Practice
- 25 AI capabilities behind one key in Kindred Core
- 15 social networks posted to from one TallyReel queue

# Soonbuilt — https://soonbuilt.com
His studio: "AI that lives on your computer. Pay once. Keep it." It sells its own
local-AI apps and builds web, mobile, SaaS and AI products for clients (fixed
quotes via a booked call). The site has a free idea search: DeepSeek drafts 6
ideas for a field, Tavily runs 12 searches in parallel (competitors and real
pain), a prior-art examiner drops ideas that already exist, and honesty guards in
code remove any link search didn't return and any unsourced number. It runs on one
Cloudflare Worker with D1, per-IP and global daily caps, and a nightly cron that
runs queued searches and emails the report.

## TallyReel — https://tallyreel.com
"Put an idea on the wall. Wake up to a video." Write one line and TallyReel Studio
makes a finished Short or a YouTube video up to 15 minutes on your own Mac or PC.
TallyReel Post (formerly Chimepost, app.tallyreel.com, web plus iOS and Android)
schedules it to 15 networks from the server, so posts go out with the laptop
closed. $49 once (launch price), no credits; Post alone is free for 3 channels or
$9 a month.
Pipeline, all on-device: script by Qwen3.5 (MLX 4-bit on Apple silicon,
llama.cpp on Windows, about 40 seconds, editable before rendering); voice by
Kokoro ONNX (13 voices, Hindi and Urdu, optional voice cloning with Chatterbox);
footage from Pexels or on-device SDXL Lightning images; captions from
faster-whisper word timings; music composed in numpy (royalty-free, including desi
and Sufi moods); render with ffmpeg plus a finishing pass.
Post: Fastify API, Postgres, pg-boss queues, Cloudflare R2, Next.js web app, Expo
mobile app, Docker and Caddy. Studio links to Post with an 8-character device code
whose token can only upload media and create drafts. Refresh tokens rotate on every
use; a reused token revokes the whole session family.

## Round Zero — https://joinroundzero.com
"Take the interview before the interview." Paste a job description, tailor your
resume honestly (it never invents experience), get a cited company brief, then
practice out loud with a live voice AI interviewer that adapts to the role and
pushes back like a real panel. Every scorecard point quotes the candidate, and code
checks each quote against the transcript. Maeve, the coach, remembers every
session. Stack: React, LiveKit Agents, Deepgram, Claude or GPT, Neon Postgres with
pgvector, Cloudflare, Paddle.

# Kindred

## Kindred Core (the shared AI service)
A multi-tenant NestJS/Fastify API that gives every Kindred product the same AI
building blocks: memory, affect signals, assessments, conversation analysis and
interventions. 25 capabilities declared as data, gated per tenant key. Postgres
row-level security (FORCE RLS) plus a guard that refuses unscoped writes. Claude
is the primary model with an OpenAI failover through an in-process adapter on the
Vercel AI SDK; one portable JSON schema works for both. Guardrails: PromptGuard 2,
async PII de-identification (Presidio + GLiNER), a deterministic policy engine,
budgets and rate limits. Fails closed: no model key means a 503, never synthetic
output. Traced in Langfuse, captured in Inngest, recorded in Postgres, joined by
one trace id. Infra with Pulumi.

## Kindred Core memory (Danish leads this)
Append-only ingest log as the source of truth; memories and embeddings are
projections that can be rebuilt by replay. Bi-temporal facts (valid from / valid
to), superseded rather than deleted, with provenance and speaker role. Semantic,
episodic and procedural memories plus behavioral facts derived without an LLM.
Hybrid recall: pgvector cosine fused with Postgres full-text rank, then time-aware
"as of" ranking. Each turn gets an 800-token context block. Per-subject erasure
cascades from the product that asked. There is a written memory-poisoning threat
model and a mem0 baseline eval harness.

## Agent Ops (engineering automation)
Webhooks from Sentry, Gleap, Linear, GitHub and Slack start Inngest flows (77
functions) that run Goose agents in short-lived Docker containers: bug triage,
research → plan → human approval in Slack → implement → pull request, PR review,
support-reply drafts and docs with real screenshots, across four product repos.
Company knowledge lives in Cognee (graph + vectors), synced from the knowledge
base by a GitHub Action Danish built. One Inngest run is one Langfuse trace. A
model-routing fix took the knowledge-match step from 412s to 63s.

## Kindred Workplace — https://kindredworkplace.com
Emotional-intelligence platform for teams, his current product. Its coach works in
text and voice; each turn pulls context from Kindred Core, and confirmed claims and
check-ins flow back as memories and affect observations.

## Kindred Practice (formerly Mynd) — https://kindredpractice.com
AI practice management for 200+ therapists: live video sessions, automated notes
with GPT and Gemini, RAG clinical chat, scheduling and billing. Node.js
(TypeScript), Django, AWS Lambda, React, LiveKit, AWS Chime, Deepgram. RAG work cut
p95 latency about 40% and model spend about 30%. Includes an in-app assistant that
takes real actions through permissioned tool calls.

## Other Kindred work
- An enterprise skills-assessment platform for a 25,000-person organization in 14
  languages; he owns its infrastructure.
- Integrated a diet-coaching app with Core: consent-gated events, erasure
  cascades, kill switch, 800 ms timeout.
- "Doorman": a tiny proxy that stops idle dev servers after 15 minutes and wakes
  them on the first request.

# On the workbench
voice-lab (on-device voice cloning in English, Hindi and Urdu), ClauseGuard (AI
contract review with per-clause evals), DropChat (chat-with-your-docs widget),
mcp-prod (production MCP server template), voice-agent-saas (LiveKit voice agent
starter).

# Experience
- Kindred (formerly Mynd) — Senior Full-Stack Engineer, Sept 2023 to present, remote.
- Extendly — Full-Stack Developer, Apr 2023 to May 2024, remote. RAG support
  chatbot on OpenAI, FastAPI, PostgreSQL.
- Zaytrics — Full-Stack Developer, Sep 2020 to Apr 2023, Islamabad. Logo-similarity
  trademark detection at 85%+ accuracy, cut manual review about 70%.

# Education
BS Computer Science, Air University, Islamabad, 2017 to 2021.

# Skills
TypeScript, Python, JavaScript · Node.js, NestJS, Fastify, Django, FastAPI ·
React, Next.js, Expo · PostgreSQL, pgvector, Redis, Cloudflare D1 · AWS, Cloudflare,
Docker, Pulumi · Claude, GPT, Gemini, local models (MLX, llama.cpp), LiveKit,
Deepgram, Whisper, RAG, agent memory, evals, Langfuse, Inngest, Goose, MCP.

# About this site
Built with Astro and Tailwind, styled after the idea wall on tallyreel.com: sticky
notes, taped prints and hand-drawn wiring diagrams. The chatbot runs on a
Cloudflare Worker and uses Google Gemini Flash.
`.trim();
