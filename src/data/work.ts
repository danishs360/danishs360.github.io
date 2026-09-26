// Everything the portfolio says about the work, in one place.
// `wiring` diagrams render with <Wiring>: columns of nodes plus edges between
// node ids. Keep client and partner names out of this file: it is public.

export type Tint = "peach" | "butter" | "mint" | "sky" | "lilac" | "white";

export interface WireNode {
  id: string;
  title: string;
  sub?: string;
  tint?: Tint;
  /** "note" is a sticky note; "box" is a plain white card for infra */
  kind?: "note" | "box";
}

export interface WireColumn {
  label: string;
  /** hand-written aside under the column label */
  aside?: string;
  /** draw the column as one grouped sheet (e.g. "inside Kindred Core") */
  group?: boolean;
  nodes: WireNode[];
}

export interface Wiring {
  id: string;
  tab: string;
  title: string;
  lede: string;
  columns: WireColumn[];
  edges: [from: string, to: string, style?: "dashed"][];
  foot?: string;
}

export interface Product {
  slug: string;
  name: string;
  kicker: string;
  line: string; // one-sentence pitch, in the hand
  body: string;
  url?: string;
  urlText?: string;
  status: "Live" | "Launching" | "In production" | "Building" | "Prototype" | "Current";
  tint: Tint;
  img?: string;
  imgAlt?: string;
  video?: { src: string; poster: string };
  stack: string[];
  facts: string[]; // short, verifiable engineering details
}

/* ---------------------------------------------------------------- products */

export const soonbuilt: Product = {
  slug: "soonbuilt",
  name: "Soonbuilt",
  kicker: "My studio",
  line: "A one-person studio that ships its own apps.",
  body: "The one-person product studio I run. It ships its own local-AI apps (TallyReel and Round Zero) and builds apps for clients. The site doubles as a live demo: type a field and an idea-search engine checks every idea against what already exists, keeps only the ones with an evidenced gap, and emails you a week-by-week build plan.",
  url: "https://soonbuilt.com",
  urlText: "soonbuilt.com",
  status: "Live",
  tint: "butter",
  img: "/media/soonbuilt/soonbuilt-site.png",
  imgAlt: "The Soonbuilt homepage: AI that lives on your computer. Pay once. Keep it.",
  stack: ["Astro", "Cloudflare Workers", "D1", "DeepSeek", "Tavily", "Resend"],
  facts: [
    "One Cloudflare Worker serves the site, streams search results as NDJSON and runs a nightly cron",
    "Honesty guards in code: a link shows only if search really returned it, and unsourced numbers are cut",
    "Spend control: salted IP hashes, per-IP and global daily caps, overflow queued in D1 and emailed overnight",
  ],
};

export const tallyreel: Product = {
  slug: "tallyreel",
  name: "TallyReel",
  kicker: "Soonbuilt product · Mac, Windows, web, iOS, Android",
  line: "One line in, a finished video out. $49 once.",
  body: "Write one line and TallyReel Studio turns it into a finished Short or a long YouTube video on your own computer: script, voice, footage, captions, music and render, all local. TallyReel Post (formerly Chimepost) then schedules it to 15 networks from our servers, so a 7:00 slot goes out with your laptop closed. $49 once, no credits.",
  url: "https://tallyreel.com",
  urlText: "tallyreel.com",
  status: "Live",
  tint: "peach",
  img: "/media/soonbuilt/tallyreel-studio.webp",
  imgAlt: "The TallyReel landing page: sticky-note ideas pinned next to the videos they became",
  video: { src: "/media/tallyreel/ocean-depth.mp4", poster: "/media/tallyreel/ocean-depth.jpg" },
  stack: ["Python", "Qwen3.5 on MLX / llama.cpp", "Kokoro", "Whisper", "ffmpeg", "Fastify", "pg-boss", "Next.js", "Expo", "R2"],
  facts: [
    "The whole video is made on-device: a 4-bit Qwen writes the script in about 40 seconds on an M-series Mac",
    "Music is composed in numpy per video, so every track is royalty-free, including tabla and sitar in Raag Yaman",
    "Studio links to Post with an 8-character device code; that token can only upload media and create drafts",
    "Refresh tokens rotate on every use, and a reused token revokes the whole session family",
  ],
};

export const roundZero: Product = {
  slug: "round-zero",
  name: "Round Zero",
  kicker: "Soonbuilt product · web",
  line: "Practice out loud before the round that counts.",
  body: "Job-search prep in one calm place. Paste a job description, tailor your resume honestly (nothing invented), get a cited company brief, then practice out loud with a live voice AI interviewer that adapts to the role, pushes back like a real panel and scores you with evidence. Maeve, the coach, remembers every session.",
  url: "https://joinroundzero.com",
  urlText: "joinroundzero.com",
  status: "Live",
  tint: "mint",
  img: "/media/soonbuilt/round-zero.webp",
  imgAlt: "The Round Zero homepage: practice the interview before it counts",
  stack: ["React", "LiveKit Agents", "Deepgram", "Claude / GPT", "Neon Postgres", "pgvector", "Cloudflare", "Paddle"],
  facts: [
    "Every scorecard point quotes the candidate, and code checks each quote against the transcript before it's shown",
    "Turn-taking waits while you think instead of cutting in on a pause",
    "In-interview coaching is limited to four triggers, so it helps without hijacking the round",
  ],
};

export const kindredCore: Product = {
  slug: "kindred-core",
  name: "Kindred Core",
  kicker: "Kindred · platform team",
  line: "One AI service every Kindred product can call.",
  body: "A multi-tenant API that gives every Kindred product the same AI building blocks: long-term memory, affect signals, assessments, conversation analysis and interventions, behind one key, one capability catalog and one set of guardrails. I lead its memory work and built much of the path products take into it.",
  status: "In production",
  tint: "sky",
  stack: ["NestJS", "Fastify", "Prisma", "Postgres 16", "pgvector", "Vercel AI SDK", "Claude", "Langfuse", "Inngest", "Pulumi"],
  facts: [
    "25 capabilities declared as data; each tenant key only reaches the ones it's granted",
    "Postgres row-level security with FORCE RLS, plus a Prisma guard that refuses any unscoped write",
    "Claude primary with an OpenAI failover; one portable JSON schema works for both, and zod stays the validator",
    "Fails closed everywhere: no model key means a 503, never synthetic output",
  ],
};

export const kindredMemory: Product = {
  slug: "kindred-memory",
  name: "Memory that can be rebuilt and forgotten",
  kicker: "Kindred Core · memory",
  line: "Supersede, don't delete. Rebuild by replay. Erase on request.",
  body: "The memory layer behind Kindred's AI coaches. Every observation lands in an append-only log; memories and embeddings are projections of that log, so the whole store can be rebuilt by replay. Facts are bi-temporal and superseded rather than overwritten, carry provenance and speaker role, and can be erased per subject when someone asks.",
  status: "In production",
  tint: "lilac",
  stack: ["Postgres", "pgvector", "text-embedding-3-small", "ts_rank_cd", "Claude Haiku", "Langfuse evals"],
  facts: [
    "Hybrid recall: pgvector cosine fused with Postgres full-text rank, then time-aware as-of ranking",
    "Each turn gets a pre-rendered 800-token context block; affect survives truncation longest",
    "Semantic, episodic and procedural memories, plus behavioral facts derived without an LLM",
    "A written threat model for memory poisoning, and a mem0 baseline harness in CI",
  ],
};

export const agentOps: Product = {
  slug: "agent-ops",
  name: "Agent Ops",
  kicker: "Kindred · engineering automation",
  line: "Incidents and tickets in. Reviewed pull requests out.",
  body: "The platform that runs Kindred's engineering agents across four product repos. Webhooks from Sentry, Gleap, Linear, GitHub and Slack start Inngest flows that spin up Goose agents in short-lived containers to triage bugs, research, plan, wait for a human to approve in Slack, implement and open the PR. They also review PRs, draft support replies and write docs with real screenshots.",
  status: "In production",
  tint: "butter",
  stack: ["Inngest", "Goose", "Docker", "Fastify", "Cognee", "Neo4j", "pgvector", "Langfuse", "React"],
  facts: [
    "77 Inngest functions; one Inngest run is one Langfuse trace, with Goose and knowledge spans inside",
    "A capability manifest and YAML policy decide what each agent may do in each repo",
    "Company knowledge syncs into a graph and vector store from a GitHub Action I built",
    "A model-routing fix took the knowledge-match step from 412s to 63s",
  ],
};

export const kindredPractice: Product = {
  slug: "kindred-practice",
  name: "Kindred Practice",
  kicker: "Kindred · formerly Mynd",
  line: "Practice management for therapists, with the paperwork done for them.",
  body: "AI practice management used by 200+ therapists: live video sessions, automated notes with GPT and Gemini, RAG-grounded clinical chat, scheduling and billing. Event-driven backend on Node, Django and AWS Lambda with LiveKit, AWS Chime and Deepgram behind the sessions.",
  url: "https://kindredpractice.com",
  urlText: "kindredpractice.com",
  status: "Live",
  tint: "mint",
  img: "/projects/kindred-practice.png",
  imgAlt: "Kindred Practice",
  stack: ["React", "Node.js", "Django", "AWS Lambda", "LiveKit", "Deepgram", "LangChain", "Inngest"],
  facts: [
    "RAG pipelines cut p95 latency about 40% and model spend about 30% via caching and routing",
    "An in-app assistant that takes real actions through permissioned tool calls",
  ],
};

export const kindredWorkplace: Product = {
  slug: "kindred-workplace",
  name: "Kindred Workplace",
  kicker: "Kindred · current product",
  line: "Emotional intelligence for teams, with a coach that remembers.",
  body: "An emotional-intelligence platform for teams. Its coach, Paige, works in text and voice; every turn pulls an assembled context from Kindred Core, and confirmed claims and check-ins flow back as memories and affect observations.",
  url: "https://kindredworkplace.com",
  urlText: "kindredworkplace.com",
  status: "Current",
  tint: "peach",
  img: "/projects/kindred-workplace.png",
  imgAlt: "Kindred Workplace",
  stack: ["React", "Node.js", "Django", "Kindred Core", "ElevenLabs"],
  facts: ["Core reads are advisory: if memory is slow or down, the coach still answers"],
};

export const flagship = [tallyreel, roundZero, soonbuilt, kindredCore];

export const kindredWork = [kindredCore, kindredMemory, agentOps, kindredWorkplace, kindredPractice];

export const moreKindred = [
  {
    name: "Enterprise skills platform",
    body: "Skills assessment for a 25,000-person organization in 14 languages: self, co-assessor and manager reviews, campaigns and role-scoped visibility. I own its infrastructure: a second domain, Sentry and scale-to-zero dev hosts.",
    stack: ["NestJS", "Next.js", "Postgres", "Redis", "SAML", "Pulumi"],
  },
  {
    name: "MedChefs × Core",
    body: "A Mediterranean-diet coaching app. I wired it to Core: consent-gated meal events, right-to-erasure that cascades into memory, a health check, a kill switch and an 800 ms timeout.",
    stack: ["Expo", "Supabase Edge Functions", "Inngest", "Core SDK"],
  },
  {
    name: "Doorman",
    body: "A tiny proxy that stops idle dev servers after 15 minutes and wakes them on the first real request. They used to run 24/7 at about 6% CPU. Rolled out across three products.",
    stack: ["Caddy", "EC2", "t4g.nano"],
  },
];

export const agents = [
  { tag: "Dev loop", title: "Sentry → pull request", desc: "Agents reproduce the incident in a sandboxed checkout and open a ready-to-review PR.", tint: "peach" as Tint },
  { tag: "Dev loop", title: "Ticket → plan → PR", desc: "Research, plan, a human approves in Slack, then the agent implements and opens the PR.", tint: "butter" as Tint },
  { tag: "Product AI", title: "In-app agent", desc: "Takes real actions inside the product through tool calls with scoped permissions and guardrails.", tint: "sky" as Tint },
  { tag: "Memory", title: "Coach memory", desc: "Bi-temporal, rebuildable, erasable memory with hybrid recall, shared by every Kindred coach.", tint: "lilac" as Tint },
  { tag: "Voice", title: "Live interviewer", desc: "LiveKit + Deepgram voice loop that adapts, pushes back and scores with quoted evidence.", tint: "mint" as Tint },
  { tag: "On-device", title: "Local video pipeline", desc: "Qwen, Kokoro, Whisper and ffmpeg on a laptop: one line in, finished video out.", tint: "peach" as Tint },
];

/* ------------------------------------------------------------------ reels */

export const reels = [
  { slug: "ocean-depth", niche: "Mind-blowing facts", idea: "How deep the ocean really is", dur: "0:38", tint: "peach" as Tint },
  { slug: "pompeii", niche: "Dark history", idea: "Pompeii's last 24 hours", dur: "0:31", tint: "butter" as Tint },
  { slug: "discipline", niche: "Motivation", idea: "Why discipline beats motivation", dur: "0:23", tint: "sky" as Tint },
  { slug: "apartment-door", niche: "Scary stories", idea: "A door in my apartment that wasn't there yesterday", dur: "0:24", tint: "lilac" as Tint },
  { slug: "immortal-animals", niche: "Animal facts", idea: "4 animals that never really die", dur: "0:36", tint: "mint" as Tint },
];

/* ----------------------------------------------------------------- wiring */

export const wirings: Wiring[] = [
  {
    id: "core",
    tab: "Kindred Core",
    title: "Kindred Core: one AI service, many products",
    lede: "Products never talk to a model directly. They call Core with a tenant key; Core checks what that key may do, applies guardrails, and routes to memory, affect or a model, with every call traced.",
    columns: [
      {
        label: "Who calls it",
        nodes: [
          { id: "c-wp", title: "Kindred Workplace", sub: "coach, text and voice", tint: "peach" },
          { id: "c-mc", title: "MedChefs", sub: "Edge Functions → SDK", tint: "mint" },
          { id: "c-pa", title: "Partner pilots", sub: "assess · analyze", tint: "butter" },
          { id: "c-ss", title: "Sessions service", sub: "transcripts → 24 signals", tint: "sky" },
          { id: "c-eh", title: "EHR connector", sub: "PHI stays on its own cluster", tint: "lilac" },
        ],
      },
      {
        label: "Inside Core",
        aside: "one key, 25 capabilities",
        group: true,
        nodes: [
          { id: "k-gate", title: "Capability gate", sub: "tenant key · RLS · budgets · rate limit", kind: "box" },
          { id: "k-guard", title: "Guardrails", sub: "PromptGuard 2 · de-id · policy engine", kind: "box" },
          { id: "k-mem", title: "Memory", sub: "bi-temporal log · hybrid recall", kind: "box" },
          { id: "k-aff", title: "Affect", sub: "ONNX, p50 57 ms, signal-or-abstain", kind: "box" },
          { id: "k-llm", title: "LLM adapter", sub: "Vercel AI SDK · portable schema", kind: "box" },
        ],
      },
      {
        label: "What it leans on",
        nodes: [
          { id: "o-cl", title: "Claude", sub: "Sonnet batch · Haiku per turn", kind: "box" },
          { id: "o-oa", title: "OpenAI", sub: "failover, 60s reset", kind: "box" },
          { id: "o-pg", title: "Postgres + pgvector", sub: "the record", kind: "box" },
          { id: "o-lf", title: "Langfuse", sub: "traces · prompts · evals", kind: "box" },
          { id: "o-in", title: "Inngest", sub: "capture · de-id jobs", kind: "box" },
        ],
      },
    ],
    edges: [
      ["c-wp", "k-gate"],
      ["c-mc", "k-gate"],
      ["c-pa", "k-gate"],
      ["c-ss", "k-gate"],
      ["c-eh", "c-ss", "dashed"],
      ["k-llm", "o-cl"],
      ["k-llm", "o-oa", "dashed"],
      ["k-mem", "o-pg"],
      ["k-gate", "o-lf", "dashed"],
      ["k-guard", "o-in", "dashed"],
    ],
    foot: "Every invocation joins across Postgres, Langfuse and Inngest by one trace id. Only de-identified scalars ever cross into Core.",
  },
  {
    id: "memory",
    tab: "Memory",
    title: "How a coach remembers",
    lede: "Writes come in on the left, recall goes out on the right. The log is the truth; everything else can be thrown away and rebuilt.",
    columns: [
      {
        label: "Write",
        nodes: [
          { id: "m-ev", title: "Something happens", sub: "a confirmed claim, a check-in, a meal", tint: "peach" },
          { id: "m-log", title: "Append-only log", sub: "memory_ingest_events", kind: "box" },
        ],
      },
      {
        label: "Derive",
        nodes: [
          { id: "m-ex", title: "LLM extraction", sub: "additive only · supersedes, never deletes", tint: "butter" },
          { id: "m-bh", title: "Behavioral facts", sub: "cadence, streaks, time of day, no LLM", tint: "mint" },
        ],
      },
      {
        label: "Store",
        nodes: [
          { id: "m-st", title: "Bi-temporal memories", sub: "valid_from / valid_to · provenance · speaker", kind: "box" },
          { id: "m-vec", title: "Embeddings", sub: "pgvector, 1536 dims", kind: "box" },
        ],
      },
      {
        label: "Recall",
        nodes: [
          { id: "m-rc", title: "Hybrid recall", sub: "cosine + full-text rank + as-of time", tint: "sky" },
          { id: "m-ctx", title: "Context block", sub: "top 8 facts · 800 tokens", tint: "lilac" },
        ],
      },
    ],
    edges: [
      ["m-ev", "m-log"],
      ["m-log", "m-ex"],
      ["m-log", "m-bh"],
      ["m-ex", "m-st"],
      ["m-bh", "m-st"],
      ["m-st", "m-vec"],
      ["m-vec", "m-rc"],
      ["m-st", "m-rc"],
      ["m-rc", "m-ctx"],
    ],
    foot: "memory.rebuild replays the log into fresh projections. memory.forget erases one subject and cascades from the product that asked.",
  },
  {
    id: "tallyreel",
    tab: "TallyReel",
    title: "TallyReel: a laptop studio and a posting queue",
    lede: "The expensive part, making the video, runs on the customer's own computer, so there's nothing to meter. Only posting runs on our servers.",
    columns: [
      {
        label: "You",
        nodes: [{ id: "t-idea", title: "One line", sub: "“How deep the ocean really is”", tint: "peach" }],
      },
      {
        label: "Studio, on your computer",
        aside: "no cloud needed",
        group: true,
        nodes: [
          { id: "t-scr", title: "Script", sub: "Qwen3.5, MLX or llama.cpp · you edit it", kind: "box" },
          { id: "t-voi", title: "Voice", sub: "Kokoro ONNX · or clone yours", kind: "box" },
          { id: "t-foo", title: "Footage", sub: "Pexels, or SDXL Lightning on-device", kind: "box" },
          { id: "t-cap", title: "Captions + music", sub: "Whisper word timings · numpy score", kind: "box" },
          { id: "t-ren", title: "Render", sub: "ffmpeg + grade, bloom, grain", kind: "box" },
        ],
      },
      {
        label: "Post, on our servers",
        group: true,
        nodes: [
          { id: "t-up", title: "Signed upload", sub: "device-code token → R2", kind: "box" },
          { id: "t-api", title: "Fastify + Postgres", sub: "drafts, slots, accounts", kind: "box" },
          { id: "t-q", title: "pg-boss queue", sub: "publish · retry · evergreen", kind: "box" },
        ],
      },
      {
        label: "Out",
        nodes: [
          { id: "t-net", title: "15 networks", sub: "TikTok, YouTube, Instagram, X…", tint: "butter" },
          { id: "t-app", title: "Web + phone app", sub: "Next.js · Expo", tint: "sky" },
        ],
      },
    ],
    edges: [
      ["t-idea", "t-scr"],
      ["t-scr", "t-voi"],
      ["t-voi", "t-foo"],
      ["t-foo", "t-cap"],
      ["t-cap", "t-ren"],
      ["t-ren", "t-up"],
      ["t-up", "t-api"],
      ["t-api", "t-q"],
      ["t-q", "t-net"],
      ["t-api", "t-app", "dashed"],
    ],
    foot: "About a minute and a half for a 30-second Short on an M-series Mac. Nothing posts unless you put it in a slot.",
  },
  {
    id: "roundzero",
    tab: "Round Zero",
    title: "Round Zero: a live interviewer that can't make things up",
    lede: "Prep is grounded in what you paste and what search returns; the interview is a real-time voice loop; the scorecard is checked against the transcript.",
    columns: [
      {
        label: "Prep",
        nodes: [
          { id: "r-jd", title: "Job description + resume", tint: "peach" },
          { id: "r-tai", title: "Honest tailoring", sub: "rewords, never invents", tint: "butter" },
          { id: "r-co", title: "Company brief", sub: "every claim cited", tint: "mint" },
        ],
      },
      {
        label: "The round",
        group: true,
        nodes: [
          { id: "r-lk", title: "LiveKit room", sub: "WebRTC in the browser", kind: "box" },
          { id: "r-stt", title: "Deepgram", sub: "streaming speech-to-text", kind: "box" },
          { id: "r-ag", title: "Interviewer agent", sub: "adapts, pushes back, waits for you", kind: "box" },
        ],
      },
      {
        label: "After",
        nodes: [
          { id: "r-sc", title: "Scorecard", sub: "each point quotes you, verified", tint: "sky" },
          { id: "r-mv", title: "Maeve remembers", sub: "trends across sessions · pgvector", tint: "lilac" },
        ],
      },
    ],
    edges: [
      ["r-jd", "r-tai"],
      ["r-jd", "r-co"],
      ["r-tai", "r-lk"],
      ["r-co", "r-ag"],
      ["r-lk", "r-stt"],
      ["r-stt", "r-ag"],
      ["r-ag", "r-sc"],
      ["r-sc", "r-mv"],
    ],
  },
  {
    id: "agentops",
    tab: "Agent Ops",
    title: "Agent Ops: from a Sentry alert to a pull request",
    lede: "Webhooks start durable flows; agents run in throwaway containers; a human approves the plan before any code is written.",
    columns: [
      {
        label: "Signals",
        nodes: [
          { id: "a-se", title: "Sentry", sub: "incidents", tint: "peach" },
          { id: "a-gl", title: "Gleap", sub: "user reports", tint: "butter" },
          { id: "a-li", title: "Linear + GitHub", sub: "tickets · PRs", tint: "sky" },
        ],
      },
      {
        label: "Orchestration",
        group: true,
        nodes: [
          { id: "a-in", title: "Inngest flows", sub: "77 functions · policy per repo", kind: "box" },
          { id: "a-go", title: "Goose agents", sub: "short-lived Docker containers", kind: "box" },
          { id: "a-kb", title: "Knowledge", sub: "Cognee: graph + vectors", kind: "box" },
        ],
      },
      {
        label: "Loop",
        nodes: [
          { id: "a-rp", title: "Research → plan", tint: "mint" },
          { id: "a-ok", title: "Human approves", sub: "in Slack", tint: "lilac" },
          { id: "a-pr", title: "Implement → PR", sub: "reviewed, then merged", tint: "peach" },
        ],
      },
    ],
    edges: [
      ["a-se", "a-in"],
      ["a-gl", "a-in"],
      ["a-li", "a-in"],
      ["a-in", "a-go"],
      ["a-kb", "a-go", "dashed"],
      ["a-go", "a-rp"],
      ["a-rp", "a-ok"],
      ["a-ok", "a-pr"],
    ],
    foot: "Each run is one Langfuse trace with the agent's steps nested inside. Sonnet writes code; cheaper models triage and read screenshots.",
  },
  {
    id: "soonbuilt",
    tab: "Soonbuilt",
    title: "Soonbuilt's idea search: checked before you build",
    lede: "Ideas are cheap for a model to invent. The engine's job is to throw away the ones that already exist, with proof.",
    columns: [
      {
        label: "In",
        nodes: [{ id: "s-f", title: "Your field", sub: "“dental clinics”", tint: "peach" }],
      },
      {
        label: "Engine",
        group: true,
        nodes: [
          { id: "s-d", title: "Draft 6 ideas", sub: "DeepSeek, JSON mode", kind: "box" },
          { id: "s-t", title: "12 searches in parallel", sub: "Tavily: competitors + real pain", kind: "box" },
          { id: "s-x", title: "Prior-art examiner", sub: "drops what's taken, keeps ≤3 gaps", kind: "box" },
          { id: "s-g", title: "Honesty guards", sub: "unreturned links + unsourced figures cut", kind: "box" },
        ],
      },
      {
        label: "Out",
        nodes: [
          { id: "s-r", title: "Report", sub: "streamed as it's found", tint: "butter" },
          { id: "s-p", title: "Build plan", sub: "2–16 weeks, emailed", tint: "mint" },
          { id: "s-q", title: "Over the cap?", sub: "queued in D1, run overnight", tint: "sky" },
        ],
      },
    ],
    edges: [
      ["s-f", "s-d"],
      ["s-d", "s-t"],
      ["s-t", "s-x"],
      ["s-x", "s-g"],
      ["s-g", "s-r"],
      ["s-r", "s-p"],
      ["s-f", "s-q", "dashed"],
    ],
  },
];
