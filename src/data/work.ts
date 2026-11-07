// Everything the portfolio says about the work, in one place.
// Write for results: the problem, what changed for people, what I built.
// It is public: only name clients and numbers that the resume (resume.ts) states.

export type Tint = "peach" | "butter" | "mint" | "sky" | "lilac" | "white";

export interface WireNode {
  id: string;
  title: string;
  sub?: string;
  tint?: Tint;
  /** "note" is a sticky note; "box" is a plain white card */
  kind?: "note" | "box";
}

export interface WireColumn {
  label: string;
  /** hand-written aside under the column label */
  aside?: string;
  /** draw the column as one grouped sheet */
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

export interface Result {
  value: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  kicker: string;
  line: string; // the promise, written on the sticky note
  role: string; // my part, in the hand
  problem: string; // the problem and what the product does about it
  results: Result[];
  built: string[]; // what I built, each one an outcome; may hold <b>
  url?: string;
  urlText?: string;
  status: "Live" | "Launching" | "In production" | "Building" | "Prototype" | "Current";
  tint: Tint;
  img?: string;
  imgAlt?: string;
  blankTitle?: string;
  blankList?: string[];
  stack: string[];
}

/* ------------------------------------------------------------ Kindred AI */

export const kindredWorkplace: Product = {
  slug: "kindred-workplace",
  name: "Kindred Workplace",
  kicker: "Kindred AI · emotional intelligence at work",
  line: "Measure how a team works together. Then help everyone get better at it.",
  role: "Senior Product Engineer · AI coach backend, Analyze, Voice ID, Slack and Teams",
  problem:
    "The costliest problems at work live between people: the six meetings that replace one honest conversation. Kindred Workplace measures emotional intelligence across a company and coaches every person to grow it, in the app, by voice, and inside Slack and Teams.",
  results: [
    { value: "8,300+", label: "people on the platform" },
    { value: "21", label: "companies using it" },
    { value: "90 min", label: "conversations Analyze turns into coaching feedback" },
  ],
  built: [
    "<b>A coach the team can trust.</b> The multi-agent backend behind Paige, the AI coach: a supervisor routes each message to specialist agents, replies stream back, and an eval suite of golden conversations alerts the team when quality drops.",
    "<b>Analyze.</b> Turns a recorded conversation of up to 90 minutes into coaching feedback.",
    "<b>Voice ID.</b> Recognises the member's own voice, with per-user usage limits that keep AI cost predictable, and consent and GDPR deletion built in.",
    "<b>Coaching where people already work.</b> Paige inside Slack and Microsoft Teams with scheduled check-ins, and the ElevenLabs voice agent connected securely to live product data.",
  ],
  url: "https://kindredworkplace.com",
  urlText: "kindredworkplace.com",
  status: "Current",
  tint: "sky",
  img: "/media/kindred/kindredworkplace-site.png",
  imgAlt: "Kindred Workplace: six meetings because no one could have one honest conversation",
  stack: ["TypeScript", "NestJS", "Postgres", "Claude", "ElevenLabs voice", "Slack & Teams"],
};

export const kindredPractice: Product = {
  slug: "kindred-practice",
  name: "Kindred Practice",
  kicker: "Kindred AI · formerly Mynd",
  line: "Therapists stay present with clients. The software handles the rest.",
  role: "Product and engineering owner · sessions, notes, scheduling, billing, AI",
  problem:
    "Therapists lose evenings to notes, scheduling and billing spread across a pile of tools. Kindred Practice puts sessions, clinical notes, calendar and payments in one place, with AI features that take on the paperwork. I own its product and engineering, working with product, design and clinical stakeholders.",
  results: [
    { value: "1,000+", label: "therapists run their practice on it" },
    { value: "61%", label: "lower monthly AWS production bill" },
    { value: "~40%", label: "faster AI answers at p95, with ~30% lower LLM spend" },
  ],
  built: [
    "<b>Therapy without leaving the app.</b> Live video sessions on LiveKit and AWS Chime, with Deepgram transcription.",
    "<b>The business side, handled.</b> Scheduling, billing and clinical notes in one place.",
    "<b>AI answers therapists can rely on.</b> Took retrieval (RAG) from prototype to production with eval-driven iteration, cutting p95 latency ~40% and LLM spend ~30% through prompt caching and model routing.",
    "<b>A leaner bill.</b> Cut the monthly AWS production bill 61% by right-sizing instances and removing idle, duplicated and over-provisioned resources.",
  ],
  url: "https://kindredpractice.com",
  urlText: "kindredpractice.com",
  status: "Live",
  tint: "mint",
  img: "/media/kindred/kindredpractice-site.png",
  imgAlt: "Kindred Practice: stay present with your clients, Kindred Practice handles the rest",
  stack: ["Django", "Node.js", "Postgres", "LiveKit video", "AWS Chime", "Deepgram", "AWS"],
};

export const kindredCore: Product = {
  slug: "kindred-core",
  name: "Kindred Core",
  kicker: "Kindred AI · shared AI platform",
  line: "Build an AI feature once, and every Kindred product gets it.",
  role: "Memory, speaker recognition, metering and evals",
  problem:
    "Every Kindred product and partner needs the same hard AI pieces: memory, voice, billing and safety checks. Kindred Core is the multi-tenant platform that does them once, properly, so each product can ship AI without starting from zero.",
  results: [
    { value: "~2×", label: "accuracy on time-sensitive memory questions" },
    { value: "24/24", label: "correct speaker decisions in testing" },
    { value: "24", label: "simulated personas in every pre-release review" },
  ],
  built: [
    "<b>Long-term memory.</b> AI agents remember what users shared and when it was true, with full erasure on request. Roughly doubled accuracy on time-sensitive questions.",
    "<b>The right speaker, every time.</b> Tuned speaker recognition on real production audio so it identifies the right person across different microphones: 24 of 24 correct decisions in testing.",
    "<b>Ready for partners.</b> Usage metering, billing credits and an audit log of every AI decision, with per-partner data rules and complete deletion of a person's records on request.",
    "<b>Tested before every release.</b> Automated checks that can block a bad release, plus model-graded quality reviews across 24 simulated user personas.",
  ],
  status: "In production",
  tint: "lilac",
  blankTitle: "what it gives every product",
  blankList: [
    "Memory that knows when a fact was true",
    "Speaker recognition across microphones",
    "Usage metering and billing credits",
    "Evals that can block a bad release",
  ],
  stack: ["NestJS", "Postgres", "pgvector", "Claude", "Langfuse", "Inngest"],
};

export const agentOps: Product = {
  slug: "agent-ops",
  name: "Agent Ops",
  kicker: "Kindred AI · engineering automation",
  line: "Bug reports in. Reviewed fixes out.",
  role: "Coding agents, support agent and team tooling",
  problem:
    "Engineers were losing time to triaging errors and small tickets. Agent Ops hands that work to AI agents that investigate and write a plan; a person approves the plan, the agent opens the fix as a pull request, and a review agent checks it.",
  results: [
    { value: "30+", label: "ready-to-review pull requests from agents each month" },
    { value: "Every", label: "plan approved by a person before code is written" },
    { value: "Days", label: "for new hires to ramp up, down from weeks" },
  ],
  built: [
    "<b>Error to pull request.</b> Coding agents turn Sentry errors and tickets into ready-to-review pull requests, with a human approving each plan and a review agent checking every PR.",
    "<b>Support that knows when to ask.</b> A support agent drafts customer replies and hands off to the team when unsure, and a pipeline keeps help articles up to date.",
    "<b>Safe by default.</b> A scanner blocks patient data and secrets from agent changes.",
    "<b>Shared ways of working.</b> The Claude Code skills and Cursor rules the engineering team builds with, cutting new-hire ramp from weeks to days.",
  ],
  status: "In production",
  tint: "butter",
  blankTitle: "what it does for the team",
  blankList: ["Turns errors into fixes", "Drafts support replies", "Keeps help articles current", "Blocks patient data and secrets"],
  stack: ["Claude", "Claude Code", "Cursor", "Sentry", "Inngest", "Langfuse"],
};

export const moreKindred = [
  {
    name: "Stellantis Skills Platform",
    body: "Multi-rater skill assessments for 25,000+ employees in 14 languages. Delivered SAML single sign-on and manager-based permissions, and set up AWS production with idle servers sleeping to cut cost.",
  },
  {
    name: "Medimap",
    body: "Walk-in clinic finder covering 4,200+ clinics across six provinces. Rebuilt the platform after acquisition on Next.js and Payload CMS and launched online booking; revenue and users each grew 15% in two months.",
  },
];

/* ------------------------------------------------------- side projects */

export const tallyreel: Product = {
  slug: "tallyreel",
  name: "TallyReel",
  kicker: "Side project · web, iOS, Android, Mac, Windows",
  line: "One line in, a finished video out, scheduled to 15 networks.",
  role: "Side project · design, build, launch",
  problem:
    "Posting short video every day means a script, a voice, footage, captions and a schedule across a dozen apps. TallyReel turns one line into a finished short video and schedules it to 15 social networks, from the web, a phone, a desktop app, or straight from Claude and ChatGPT.",
  results: [
    { value: "15", label: "social networks it schedules to" },
    { value: "52", label: "tools in its remote MCP server for Claude and ChatGPT" },
    { value: "3", label: "autonomy levels for the in-app AI agent" },
  ],
  built: [
    "<b>One line to a finished video.</b> Script, voice, footage and captions from a single line, then scheduled to TikTok, YouTube, Instagram and 12 more networks.",
    "<b>Wherever you are.</b> Web (Next.js), iOS and Android (Expo), and a Mac and Windows desktop app.",
    "<b>Works inside Claude and ChatGPT.</b> A remote MCP server with 52 tools and OAuth, so people can create, schedule and review videos from their AI assistant.",
    "<b>An agent you set the leash on.</b> An in-app AI agent with three autonomy levels, and per-video GPU cost tracking on Modal.",
  ],
  url: "https://tallyreel.com",
  urlText: "tallyreel.com",
  status: "Live",
  tint: "peach",
  img: "/media/soonbuilt/tallyreel-studio.webp",
  imgAlt: "The TallyReel site: sticky-note ideas pinned beside the videos they became",
  stack: ["Next.js", "Expo", "MCP", "OAuth", "Modal"],
};

export const roundZero: Product = {
  slug: "round-zero",
  name: "Round Zero",
  kicker: "Side project · web",
  line: "Practice out loud before the round that counts.",
  role: "Side project · design, build, launch",
  problem:
    "Most interview prep is a question bank; almost nothing lets you rehearse the real conversation. Round Zero is a live AI voice interviewer that adapts its follow-up questions as you answer, scores you against a rubric for the role and level, and runs coding rounds too.",
  results: [
    { value: "Live", label: "voice interviews that adapt follow-ups in real time" },
    { value: "By level", label: "role-specific rubrics calibrated by seniority" },
    { value: "Coding", label: "rounds as well as conversation" },
  ],
  built: [
    "<b>A real interviewer, by voice.</b> Built on LiveKit, it listens and adapts its follow-up questions in real time.",
    "<b>Fair scoring.</b> Answers are scored against role-specific rubrics calibrated by seniority.",
    "<b>Coding rounds.</b> Practice the technical part of the loop, not just the talking.",
  ],
  url: "https://joinroundzero.com",
  urlText: "joinroundzero.com",
  status: "Live",
  tint: "mint",
  img: "/media/soonbuilt/round-zero.webp",
  imgAlt: "The Round Zero homepage: practice the interview before it counts",
  stack: ["LiveKit", "Voice AI", "LLM evals"],
};

/** Smaller side projects, shown as cards. */
export const sideProjects = [
  {
    name: "Blurt",
    url: "https://blurt.soonbuilt.com",
    urlText: "blurt.soonbuilt.com",
    body: "Hold a key and talk, and clean text appears wherever you type, with on-device speech recognition in Rust for Mac and Windows.",
    tint: "sky" as Tint,
  },
  {
    name: "Maina",
    url: "https://maina.soonbuilt.com",
    urlText: "maina.soonbuilt.com",
    body: "Voice cloning from 30 seconds of speech in English, Hindi and Urdu, with a built-in AI watermark and evals for word error rate and speaker similarity.",
    tint: "lilac" as Tint,
  },
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
    id: "practice",
    tab: "Kindred Practice",
    title: "Kindred Practice: from booking to a signed note",
    lede: "A client books, the session happens on video, and by the time the therapist closes the tab a draft note is waiting.",
    columns: [
      {
        label: "People",
        nodes: [
          { id: "p-cl", title: "Client", sub: "books, joins, pays", tint: "peach" },
          { id: "p-th", title: "Therapist", sub: "runs the practice", tint: "mint" },
        ],
      },
      {
        label: "The session",
        group: true,
        nodes: [
          { id: "p-bk", title: "Booking + reminders", sub: "scheduling and reminders", kind: "box" },
          { id: "p-vd", title: "Video room", sub: "live video on LiveKit and AWS Chime", kind: "box" },
          { id: "p-tx", title: "Transcript", sub: "speech to text with Deepgram", kind: "box" },
        ],
      },
      {
        label: "AI does the paperwork",
        aside: "Paige",
        group: true,
        nodes: [
          { id: "p-nt", title: "Draft note", sub: "in the therapist's own template", kind: "box" },
          { id: "p-pg", title: "Ask Paige", sub: "“what did we cover last month?”", kind: "box" },
        ],
      },
      {
        label: "The business",
        nodes: [
          { id: "p-bl", title: "Billing", sub: "invoices and payments", tint: "butter" },
          { id: "p-sg", title: "Review + sign", sub: "the therapist has the final say", tint: "sky" },
        ],
      },
    ],
    edges: [
      ["p-cl", "p-bk"],
      ["p-th", "p-vd"],
      ["p-bk", "p-vd"],
      ["p-vd", "p-tx"],
      ["p-tx", "p-nt"],
      ["p-nt", "p-pg"],
      ["p-nt", "p-sg"],
      ["p-bk", "p-bl", "dashed"],
    ],
  },
  {
    id: "workplace",
    tab: "Kindred Workplace",
    title: "Kindred Workplace: measure, then grow",
    lede: "People are measured where they are, coached by an AI that remembers them, and companies see the change.",
    columns: [
      {
        label: "Where people are",
        nodes: [
          { id: "w-app", title: "The app", sub: "web and phone", tint: "sky" },
          { id: "w-sl", title: "Slack + Teams", sub: "coaching in the flow of work", tint: "lilac" },
          { id: "w-rec", title: "A real conversation", sub: "recorded, with consent", tint: "peach" },
        ],
      },
      {
        label: "Measure",
        group: true,
        nodes: [
          { id: "w-eq", title: "EQ assessment", sub: "an emotional intelligence profile", kind: "box" },
          { id: "w-an", title: "Analyze", sub: "recordings up to 90 minutes", kind: "box" },
          { id: "w-360", title: "360 feedback", sub: "from peers, in rounds", kind: "box" },
        ],
      },
      {
        label: "Grow",
        aside: "Paige remembers you",
        group: true,
        nodes: [
          { id: "w-pg", title: "Paige, the coach", sub: "chat and voice", kind: "box" },
          { id: "w-nd", title: "Nudges + to-dos", sub: "small steps each week", kind: "box" },
        ],
      },
      {
        label: "For the company",
        nodes: [
          { id: "w-tm", title: "Team reports", sub: "where the team stands", tint: "mint" },
          { id: "w-ad", title: "Adoption dashboards", sub: "who's engaged, who's stuck", tint: "butter" },
        ],
      },
    ],
    edges: [
      ["w-app", "w-eq"],
      ["w-rec", "w-an"],
      ["w-eq", "w-pg"],
      ["w-an", "w-pg"],
      ["w-360", "w-pg"],
      ["w-sl", "w-pg", "dashed"],
      ["w-pg", "w-nd"],
      ["w-eq", "w-tm", "dashed"],
      ["w-nd", "w-ad"],
    ],
  },
  {
    id: "core",
    tab: "Kindred Core",
    title: "Kindred Core: the AI every product shares",
    lede: "Products don't each build their own memory, voice and billing. They ask Core, and Core answers the same careful way for all of them.",
    columns: [
      {
        label: "Products",
        nodes: [
          { id: "c-wp", title: "Kindred products", sub: "Workplace, Practice and more", tint: "sky" },
          { id: "c-pa", title: "Partner companies", sub: "each with its own data rules", tint: "butter" },
        ],
      },
      {
        label: "Kindred Core",
        group: true,
        nodes: [
          { id: "k-mem", title: "Memory", sub: "what was shared, and when it was true", kind: "box" },
          { id: "k-spk", title: "Speaker recognition", sub: "the right person, any microphone", kind: "box" },
          { id: "k-bill", title: "Metering + credits", sub: "usage and billing per partner", kind: "box" },
          { id: "k-del", title: "Erasure", sub: "a person's records deleted on request", kind: "box" },
        ],
      },
      {
        label: "Always on",
        nodes: [
          { id: "o-au", title: "Audit log", sub: "every AI decision recorded", tint: "lilac" },
          { id: "o-ev", title: "Evals", sub: "can block a bad release", tint: "peach" },
        ],
      },
    ],
    edges: [
      ["c-wp", "k-mem"],
      ["c-pa", "k-bill"],
      ["k-mem", "o-au", "dashed"],
      ["k-bill", "o-au", "dashed"],
      ["k-spk", "o-ev", "dashed"],
    ],
  },
  {
    id: "tallyreel",
    tab: "TallyReel",
    title: "TallyReel: one line in, posted everywhere",
    lede: "Start from the app, the desktop, or your AI assistant. TallyReel makes the video and posts it on schedule.",
    columns: [
      {
        label: "You",
        nodes: [{ id: "t-idea", title: "One line", sub: "“How deep the ocean really is”", tint: "peach" }],
      },
      {
        label: "Where you ask",
        group: true,
        nodes: [
          { id: "t-app", title: "Web, phone, desktop", sub: "Next.js, Expo, Mac and Windows", kind: "box" },
          { id: "t-mcp", title: "Claude or ChatGPT", sub: "remote MCP server, 52 tools, OAuth", kind: "box" },
          { id: "t-agt", title: "In-app agent", sub: "three autonomy levels", kind: "box" },
        ],
      },
      {
        label: "Make",
        group: true,
        nodes: [
          { id: "t-ren", title: "The video", sub: "script, voice, footage, captions", kind: "box" },
          { id: "t-gpu", title: "GPU cost per video", sub: "tracked on Modal", kind: "box" },
        ],
      },
      {
        label: "Out",
        nodes: [{ id: "t-net", title: "15 networks", sub: "TikTok, YouTube, Instagram…", tint: "butter" }],
      },
    ],
    edges: [
      ["t-idea", "t-app"],
      ["t-idea", "t-mcp"],
      ["t-app", "t-ren"],
      ["t-mcp", "t-ren"],
      ["t-agt", "t-ren"],
      ["t-ren", "t-gpu", "dashed"],
      ["t-ren", "t-net"],
    ],
  },
  {
    id: "roundzero",
    tab: "Round Zero",
    title: "Round Zero: a live interviewer that adapts",
    lede: "Pick the role and level; the interview happens by voice; you're scored against a rubric made for that role.",
    columns: [
      {
        label: "Set up",
        nodes: [
          { id: "r-jd", title: "Role + seniority", tint: "peach" },
          { id: "r-ru", title: "Rubric", sub: "role-specific, calibrated by level", tint: "butter" },
        ],
      },
      {
        label: "The interview",
        group: true,
        nodes: [
          { id: "r-lk", title: "You speak", sub: "live voice on LiveKit", kind: "box" },
          { id: "r-ag", title: "The interviewer", sub: "adapts follow-ups in real time", kind: "box" },
          { id: "r-cd", title: "Coding round", sub: "the technical part, too", kind: "box" },
        ],
      },
      {
        label: "After",
        nodes: [{ id: "r-sc", title: "Scorecard", sub: "scored against the rubric", tint: "sky" }],
      },
    ],
    edges: [
      ["r-jd", "r-ru"],
      ["r-jd", "r-ag"],
      ["r-lk", "r-ag"],
      ["r-ag", "r-sc"],
      ["r-cd", "r-sc"],
      ["r-ru", "r-sc", "dashed"],
    ],
  },
  {
    id: "agentops",
    tab: "Agent Ops",
    title: "Agent Ops: from an error to a reviewed fix",
    lede: "Agents do the digging and the first draft; people make the call.",
    columns: [
      {
        label: "Something breaks",
        nodes: [
          { id: "a-se", title: "A Sentry error", tint: "peach" },
          { id: "a-li", title: "A ticket", tint: "sky" },
        ],
      },
      {
        label: "Agents",
        group: true,
        nodes: [
          { id: "a-go", title: "Investigate", sub: "read the code, write a plan", kind: "box" },
          { id: "a-kb", title: "Safety scan", sub: "blocks patient data and secrets", kind: "box" },
        ],
      },
      {
        label: "Loop",
        nodes: [
          { id: "a-ok", title: "A person approves", sub: "the plan, before any code", tint: "lilac" },
          { id: "a-pr", title: "Pull request", sub: "checked by a review agent", tint: "mint" },
        ],
      },
    ],
    edges: [
      ["a-se", "a-go"],
      ["a-li", "a-go"],
      ["a-go", "a-ok"],
      ["a-ok", "a-pr"],
      ["a-kb", "a-pr", "dashed"],
    ],
  },
];
