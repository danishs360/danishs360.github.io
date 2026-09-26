// Everything the portfolio says about the work, in one place.
// Write for results: the problem, what changed for people, what I built.
// Keep client and partner names out of this file: it is public.

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

/* ------------------------------------------------------------ Kindred */

export const kindredWorkplace: Product = {
  slug: "kindred-workplace",
  name: "Kindred Workplace",
  kicker: "Kindred · emotional intelligence at work",
  line: "Measure how a team works together. Then help everyone get better at it.",
  role: "Senior engineer · AI coach, conversation analysis, integrations, production",
  problem:
    "The costliest problems at work live between people: the six meetings that replace one honest conversation. Kindred Workplace measures emotional intelligence across a company and coaches every person to grow it, in the app, by voice, and inside Slack and Teams.",
  results: [
    { value: "8,300+", label: "people on the platform" },
    { value: "21", label: "companies using it" },
    { value: "2,400+", label: "people with an EQ profile" },
  ],
  built: [
    "<b>Analyze, from scratch.</b> Upload or record a real conversation and see how you showed up, speaker by speaker, mapped to your EQ profile. Handles recordings up to 90 minutes.",
    "<b>A coach people can trust.</b> Made Paige, the AI coach, remember context and send useful nudges, and put quality checks and failure monitoring behind every release.",
    "<b>Coaching where people already work.</b> Paige inside Slack and Microsoft Teams, so growth happens in the flow of work, not in another tab.",
    "<b>Growth for the business.</b> Partner referral codes and commissions, adoption dashboards for admins, and the path from free trial to paid for companies.",
    "<b>Production that holds up.</b> Took the platform live on AWS with staging, automatic deploys, alarms and product analytics.",
  ],
  url: "https://kindredworkplace.com",
  urlText: "kindredworkplace.com",
  status: "Current",
  tint: "sky",
  img: "/media/kindred/kindredworkplace-site.png",
  imgAlt: "Kindred Workplace: six meetings because no one could have one honest conversation",
  stack: ["React", "NestJS", "Postgres", "ElevenLabs voice", "Slack & Teams", "AWS"],
};

export const kindredPractice: Product = {
  slug: "kindred-practice",
  name: "Kindred Practice",
  kicker: "Kindred · formerly Mynd",
  line: "Therapists stay present with clients. The software handles the rest.",
  role: "Top contributor for three years · sessions, AI notes, scheduling, billing",
  problem:
    "Therapists lose evenings to notes, scheduling and billing spread across a pile of tools. Kindred Practice puts sessions, notes, calendar and payments in one place, and Paige, its AI partner, does the writing.",
  results: [
    { value: "200+", label: "therapists run their practice on it" },
    { value: "#1", label: "contributor, 4,400+ commits over 3 years" },
    { value: "~40%", label: "faster AI answers, with ~30% lower AI costs" },
  ],
  built: [
    "<b>Therapy without leaving the app.</b> Video sessions with a waiting room, guest join, consent and recording.",
    "<b>Notes that write themselves.</b> Each session is transcribed and drafted into the therapist's own note template, ready to review and sign.",
    "<b>Paige, the AI partner.</b> Therapists ask about past sessions in plain language and get answers grounded in their own history.",
    "<b>The business side, handled.</b> Calendar sync, a booking widget, reminders, subscriptions, invoices and no-show fees.",
    "<b>Less paperwork up front.</b> An AI form builder and e-signed intake forms, plus the move from Mynd to the Kindred Practice brand.",
  ],
  url: "https://kindredpractice.com",
  urlText: "kindredpractice.com",
  status: "Live",
  tint: "mint",
  img: "/media/kindred/kindredpractice-site.png",
  imgAlt: "Kindred Practice: stay present with your clients, Kindred Practice handles the rest",
  stack: ["React", "Django", "Node.js", "LiveKit video", "Deepgram", "Gemini & GPT", "Stripe"],
};

export const kindredCore: Product = {
  slug: "kindred-core",
  name: "Kindred Core",
  kicker: "Kindred · shared AI platform",
  line: "Build an AI feature once, and every Kindred product gets it.",
  role: "Lead on memory · product integrations",
  problem:
    "Every Kindred product was rebuilding the same hard AI pieces: memory, safety and model access. Kindred Core does them once, properly, so product teams can ship AI coaching without starting from zero.",
  results: [
    { value: "1", label: "memory every Kindred coach shares" },
    { value: "2", label: "AI providers, with automatic failover" },
    { value: "100%", label: "of AI calls traced and replayable" },
  ],
  built: [
    "<b>Memory for every coach.</b> It remembers what matters, updates facts when life changes instead of piling up contradictions, and forgets a person completely when they ask.",
    "<b>Products plugged in.</b> Connected Kindred Workplace's coach and a diet-coaching app, with consent and deletion flowing all the way through.",
    "<b>Safe by default.</b> Private details are scrubbed, each product only reaches what it's allowed to, and it fails safely rather than making something up.",
    "<b>Cheaper to run.</b> Idle development servers now sleep and wake on the first request instead of running all day.",
  ],
  status: "In production",
  tint: "lilac",
  blankTitle: "what it gives every product",
  blankList: [
    "A coach that remembers each person",
    "Emotion and conversation signals",
    "Assessments and scoring",
    "One safe door to Claude and GPT",
  ],
  stack: ["NestJS", "Postgres", "pgvector", "Claude", "Langfuse", "Inngest"],
};

export const agentOps: Product = {
  slug: "agent-ops",
  name: "Agent Ops",
  kicker: "Kindred · engineering automation",
  line: "Bug reports in. Reviewed fixes out.",
  role: "Built the agent workflows and knowledge sync",
  problem:
    "Engineers were losing mornings to triaging alerts and small tickets. Agent Ops hands that work to AI agents that investigate, write a plan, wait for a human to approve it, then open the fix as a pull request.",
  results: [
    { value: "30+", label: "incidents and tickets fixed by agents each month" },
    { value: "4", label: "product teams it works for" },
    { value: "6×", label: "faster answers from company knowledge" },
  ],
  built: [
    "<b>Alert to pull request.</b> Crashes and user reports go straight to an agent that reproduces the problem and proposes a fix.",
    "<b>A human stays in charge.</b> Agents research and plan first; nothing is written until someone approves it in Slack.",
    "<b>Agents that know the company.</b> A sync that keeps company docs and help articles in the agents' knowledge base.",
  ],
  status: "In production",
  tint: "butter",
  blankTitle: "what it does for the team",
  blankList: ["Triages new bugs", "Plans and ships small fixes", "Reviews pull requests", "Drafts support replies"],
  stack: ["Inngest", "Goose agents", "Docker", "Claude", "Langfuse"],
};

export const moreKindred = [
  {
    name: "Enterprise skills platform",
    body: "Skills assessments for a 25,000-person organization in 14 languages. I run its infrastructure.",
  },
  {
    name: "Diet-coaching app on Core",
    body: "Connected a nutrition coaching app to Kindred Core so its coach remembers meals, with consent and deletion built in.",
  },
  {
    name: "Test automation",
    body: "End-to-end browser tests and deploy checks for Kindred Practice, so releases stop breaking what already works.",
  },
];

/* ---------------------------------------------------------- Soonbuilt */

export const tallyreel: Product = {
  slug: "tallyreel",
  name: "TallyReel",
  kicker: "Soonbuilt · Mac, Windows, web, phone",
  line: "One line in, a finished video out. $49 once.",
  role: "Solo · design, build, launch",
  problem:
    "Short-form video tools charge every month and meter you in credits. TallyReel makes the whole video on your own computer, script to voice to captions to music, then posts it to your channels at the time you pick, even with your laptop closed.",
  results: [
    { value: "~90s", label: "from one line to a finished Short on a Mac" },
    { value: "15", label: "social networks it posts to" },
    { value: "$0", label: "per video after one $49 purchase" },
  ],
  built: [
    "<b>A studio that runs offline.</b> Script, voice, footage, captions and an original music track, all generated on the customer's own machine.",
    "<b>You stay in control.</b> Read and edit the script before anything renders, or bring your own.",
    "<b>Posting that runs itself.</b> Pin a video to a time slot and it goes out to TikTok, YouTube, Instagram and 12 more, from the web or a phone app.",
    "<b>Made for more than English.</b> Hindi and Urdu narration, and desi and Sufi music moods.",
  ],
  url: "https://tallyreel.com",
  urlText: "tallyreel.com",
  status: "Live",
  tint: "peach",
  img: "/media/soonbuilt/tallyreel-studio.webp",
  imgAlt: "The TallyReel site: sticky-note ideas pinned beside the videos they became",
  stack: ["Python", "on-device AI", "ffmpeg", "Fastify", "Next.js", "Expo"],
};

export const roundZero: Product = {
  slug: "round-zero",
  name: "Round Zero",
  kicker: "Soonbuilt · web",
  line: "Practice out loud before the round that counts.",
  role: "Solo · design, build, launch",
  problem:
    "Interview prep is question banks and resume puffery; almost nothing lets you rehearse the real conversation. Round Zero tailors your resume honestly, briefs you on the company, then interviews you by voice and shows you exactly where the answer broke.",
  results: [
    { value: "Live", label: "voice interviews that adapt and push back" },
    { value: "100%", label: "of scorecard quotes checked against what you said" },
    { value: "0", label: "invented resume claims; it only rewords" },
  ],
  built: [
    "<b>A real interviewer, by voice.</b> It adapts to the role, pushes back like a panel, and waits while you think.",
    "<b>Feedback you can trust.</b> Every point on the scorecard quotes you, and it's verified against the transcript before you see it.",
    "<b>One calm place for the search.</b> Tailored resumes, cited company research, application tracking and progress over time, with a coach that remembers.",
  ],
  url: "https://joinroundzero.com",
  urlText: "joinroundzero.com",
  status: "Live",
  tint: "mint",
  img: "/media/soonbuilt/round-zero.webp",
  imgAlt: "The Round Zero homepage: practice the interview before it counts",
  stack: ["React", "LiveKit", "Deepgram", "Claude & GPT", "Postgres", "Cloudflare"],
};

export const soonbuilt: Product = {
  slug: "soonbuilt",
  name: "Soonbuilt",
  kicker: "My studio",
  line: "A one-person studio that ships its own apps.",
  role: "Founder",
  problem:
    "Soonbuilt makes AI apps that run on the customer's own computer (pay once, keep it) and builds apps for clients. Its free idea search checks every idea against what already exists before anyone spends a cent building it.",
  results: [
    { value: "3", label: "products launched in 2026" },
    { value: "≤3", label: "ideas kept per search, each with proof of a gap" },
  ],
  built: [
    "<b>An honest idea search.</b> It researches the web, throws out ideas that already exist, and never shows a link or number it can't source.",
    "<b>A plan, not just a list.</b> Pick an idea and get a week-by-week build plan by email.",
    "<b>Built to stay cheap.</b> Daily limits keep costs flat; overflow searches run overnight and arrive by email.",
  ],
  url: "https://soonbuilt.com",
  urlText: "soonbuilt.com",
  status: "Live",
  tint: "butter",
  img: "/media/soonbuilt/soonbuilt-site.png",
  imgAlt: "The Soonbuilt homepage: AI that lives on your computer. Pay once. Keep it.",
  stack: ["Astro", "Cloudflare Workers", "DeepSeek", "Web search"],
};

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
          { id: "p-bk", title: "Booking + reminders", sub: "calendar sync, texts and emails", kind: "box" },
          { id: "p-vd", title: "Video room", sub: "waiting room, consent, recording", kind: "box" },
          { id: "p-tx", title: "Transcript", sub: "speech to text", kind: "box" },
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
          { id: "p-bl", title: "Billing", sub: "subscriptions, invoices, no-show fees", tint: "butter" },
          { id: "p-sg", title: "Review + sign", sub: "notes stay encrypted", tint: "sky" },
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
          { id: "w-rec", title: "A real conversation", sub: "uploaded or recorded", tint: "peach" },
        ],
      },
      {
        label: "Measure",
        group: true,
        nodes: [
          { id: "w-eq", title: "EQ assessment", sub: "15 elements of emotional intelligence", kind: "box" },
          { id: "w-an", title: "Analyze", sub: "how each person showed up", kind: "box" },
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
    lede: "Products don't each build their own memory and safety. They ask Core, and Core answers the same careful way for all of them.",
    columns: [
      {
        label: "Products",
        nodes: [
          { id: "c-wp", title: "Kindred Workplace", sub: "coach memory", tint: "sky" },
          { id: "c-mc", title: "Diet-coaching app", sub: "remembers meals", tint: "mint" },
          { id: "c-pa", title: "Partner pilots", sub: "assessments", tint: "butter" },
        ],
      },
      {
        label: "Kindred Core",
        group: true,
        nodes: [
          { id: "k-gate", title: "Access", sub: "each product gets only what it's allowed", kind: "box" },
          { id: "k-safe", title: "Safety", sub: "private details scrubbed, fails safely", kind: "box" },
          { id: "k-mem", title: "Memory", sub: "remembers, updates, forgets on request", kind: "box" },
          { id: "k-llm", title: "Models", sub: "Claude first, OpenAI as backup", kind: "box" },
        ],
      },
      {
        label: "Always on",
        nodes: [
          { id: "o-tr", title: "Tracing", sub: "every AI call can be replayed", tint: "lilac" },
          { id: "o-ev", title: "Quality checks", sub: "run before every release", tint: "peach" },
        ],
      },
    ],
    edges: [
      ["c-wp", "k-gate"],
      ["c-mc", "k-gate"],
      ["c-pa", "k-gate"],
      ["k-gate", "o-tr", "dashed"],
      ["k-llm", "o-ev", "dashed"],
    ],
  },
  {
    id: "tallyreel",
    tab: "TallyReel",
    title: "TallyReel: made on your laptop, posted from the cloud",
    lede: "The expensive part, making the video, runs on the customer's own computer, so there's nothing to meter. Only posting runs on a server.",
    columns: [
      {
        label: "You",
        nodes: [{ id: "t-idea", title: "One line", sub: "“How deep the ocean really is”", tint: "peach" }],
      },
      {
        label: "On your computer",
        aside: "no cloud needed",
        group: true,
        nodes: [
          { id: "t-scr", title: "Script", sub: "written in ~40s, you can edit it", kind: "box" },
          { id: "t-voi", title: "Voice", sub: "13 voices, or your own", kind: "box" },
          { id: "t-foo", title: "Footage + captions", sub: "word-by-word highlights", kind: "box" },
          { id: "t-ren", title: "Music + render", sub: "an original track every time", kind: "box" },
        ],
      },
      {
        label: "Posting",
        group: true,
        nodes: [
          { id: "t-q", title: "Your week", sub: "pin a video to a time slot", kind: "box" },
          { id: "t-app", title: "Web + phone app", sub: "approve drafts anywhere", kind: "box" },
        ],
      },
      {
        label: "Out",
        nodes: [{ id: "t-net", title: "15 networks", sub: "TikTok, YouTube, Instagram…", tint: "butter" }],
      },
    ],
    edges: [
      ["t-idea", "t-scr"],
      ["t-scr", "t-voi"],
      ["t-voi", "t-foo"],
      ["t-foo", "t-ren"],
      ["t-ren", "t-q"],
      ["t-q", "t-app"],
      ["t-q", "t-net"],
    ],
  },
  {
    id: "roundzero",
    tab: "Round Zero",
    title: "Round Zero: a live interviewer that can't make things up",
    lede: "Prep is grounded in what you paste and what search finds; the interview happens by voice; the feedback is checked against what you said.",
    columns: [
      {
        label: "Prep",
        nodes: [
          { id: "r-jd", title: "Job + resume", tint: "peach" },
          { id: "r-tai", title: "Honest tailoring", sub: "rewords, never invents", tint: "butter" },
          { id: "r-co", title: "Company brief", sub: "every claim cited", tint: "mint" },
        ],
      },
      {
        label: "The interview",
        group: true,
        nodes: [
          { id: "r-lk", title: "You speak", sub: "live, in the browser", kind: "box" },
          { id: "r-ag", title: "The interviewer", sub: "adapts, pushes back, waits for you", kind: "box" },
        ],
      },
      {
        label: "After",
        nodes: [
          { id: "r-sc", title: "Scorecard", sub: "each point quotes you, verified", tint: "sky" },
          { id: "r-mv", title: "Coach remembers", sub: "progress across sessions", tint: "lilac" },
        ],
      },
    ],
    edges: [
      ["r-jd", "r-tai"],
      ["r-jd", "r-co"],
      ["r-tai", "r-lk"],
      ["r-co", "r-ag"],
      ["r-lk", "r-ag"],
      ["r-ag", "r-sc"],
      ["r-sc", "r-mv"],
    ],
  },
  {
    id: "agentops",
    tab: "Agent Ops",
    title: "Agent Ops: from a bug report to a reviewed fix",
    lede: "Agents do the digging and the first draft; people make the call.",
    columns: [
      {
        label: "Something breaks",
        nodes: [
          { id: "a-se", title: "A crash alert", tint: "peach" },
          { id: "a-gl", title: "A user report", tint: "butter" },
          { id: "a-li", title: "A small ticket", tint: "sky" },
        ],
      },
      {
        label: "Agents",
        group: true,
        nodes: [
          { id: "a-go", title: "Investigate", sub: "reproduce it, read the code", kind: "box" },
          { id: "a-kb", title: "Company knowledge", sub: "docs and help articles", kind: "box" },
        ],
      },
      {
        label: "Loop",
        nodes: [
          { id: "a-rp", title: "Plan", tint: "mint" },
          { id: "a-ok", title: "A human approves", sub: "in Slack", tint: "lilac" },
          { id: "a-pr", title: "Fix, as a pull request", sub: "reviewed, then merged", tint: "peach" },
        ],
      },
    ],
    edges: [
      ["a-se", "a-go"],
      ["a-gl", "a-go"],
      ["a-li", "a-go"],
      ["a-kb", "a-go", "dashed"],
      ["a-go", "a-rp"],
      ["a-rp", "a-ok"],
      ["a-ok", "a-pr"],
    ],
  },
];
