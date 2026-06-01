---
title: "Graph memory and the token tax nobody is paying attention to"
description: "Stuffing an LLM's whole memory into every prompt is the most expensive habit in agent engineering. Here is how the memory crowd is fixing it, and the four-way retrieval I keep reaching for."
pubDate: "Jun 01 2026"
heroImage: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=1600&q=80&auto=format&fit=crop"
tags: ["ai", "memory", "llm", "rag"]
---

Here is a thing that quietly burns money in almost every agent I have looked at this year: the memory.

Not the model. Not the tools. The memory. Specifically, the habit of taking everything an agent has ever learned about a user, and pasting all of it into the context window on every single turn, just in case some of it is relevant. It usually isn't. But you pay for all of it anyway, every request, forever.

I want to walk through why that is such a bad deal, what the people actually building memory systems are doing about it, and the retrieval shape I have landed on myself, which honestly is not all that different from what the good systems are converging on.

## The token tax

Let's make it concrete. Say your agent remembers 200 facts about a user. Preferences, past decisions, what they tried that didn't work, the name of their dog. Each fact is small. But 200 of them, dumped into the prompt as a wall of context, is roughly 4,600 tokens on the low end. Every turn.

Now retrieve instead. Pull the five facts that actually matter for *this* question, and you are sending something like 130 tokens. Same answer quality, a fraction of the bill. The mem0 team published numbers on this in their 2026 token playbook and the gap is not subtle: production retrieval runs at around 7,000 tokens per call with recall above 91 percent, against 25,000 to well over 100,000 tokens for the full-context approach. Three to four times cheaper, sometimes more, for the same output.

That is the whole game. You are not trying to give the model *more* memory. You are trying to give it *less*, but the right less. The question is no longer "how do I store everything," it is "how do I find the handful of things this query actually needs before I spend a token on the model."

So the interesting work has moved one layer up the stack, into retrieval.

## How the memory crowd is solving it

Memory stopped being a side feature this year and turned into its own category, with real benchmarks and real vendors fighting over them. A few worth knowing:

- **Zep / Graphiti.** This is the one most people mean when they say "graph memory." Graphiti is an open-source engine that builds a *temporal* knowledge graph out of your conversations: entities, the relationships between them, and facts that each carry a validity window. So it doesn't just know "Kendra likes Adidas," it knows she liked Adidas *as of March 2026* and switched later, and it can answer questions about either point in time. In the Deep Memory Retrieval benchmark Zep edged out MemGPT, 94.8 against 93.4, and it is especially strong on the temporally messy questions that flat storage gets wrong.
- **Mem0.** The community favorite, and the one publishing the loudest efficiency numbers. Their token-efficient algorithm hits 92.5 on LoCoMo while spending under 7,000 tokens a call, roughly 90 percent fewer than dumping full context. They also ship a graph variant (Mem0g) that trades a little latency for better relational recall.
- **Letta and Cognee.** Letta is the production descendant of MemGPT, treating memory as an OS-style managed resource the agent pages in and out. Cognee leans hard into the graph-plus-vector hybrid. Different philosophies, same underlying bet: memory is a dedicated component sitting beside the model, not a blob you cram into the prompt.

The common thread, and the part I find genuinely clarifying, is that none of the good systems rely on a single way of finding things. Graphiti's search, for example, runs semantic embeddings, keyword (BM25) matching, and graph traversal, then fuses the rankings together with reciprocal rank fusion before anything reaches the model. Three different lenses on "what is relevant," reconciled into one short list.

That last point is what I want to build on, because it is exactly where my own thinking ended up.

## The four-way retrieval I keep reaching for

When I sketch a memory layer from scratch, I don't think of retrieval as one search. I think of it as four searches running in parallel, each answering a different definition of "relevant," and then a merge step at the end. None of them is sufficient alone. Together they cover for each other's blind spots.

**1. Lexical match.** The boring, literal one. Does the memory contain the actual words in the query? BM25 or a plain keyword index. It looks primitive next to embeddings, but it is the thing that reliably catches exact names, error codes, SKUs, and proper nouns that semantic search smears into "close enough." You want this when precision on a specific token matters.

**2. Semantic match.** The embeddings. Find memories that *mean* something similar even when they share no words. "The user gets frustrated by long onboarding" should surface for a query about "why did they churn," even though not a word overlaps. This is the lens everyone starts with, and on its own it is good but quietly lossy, it misses exact strings and it has no idea two things are *connected* unless they happen to sound alike.

**3. Linkage.** This is the one people skip, and it is the whole reason graphs exist. Some memories are relevant *not* because they match the query, semantically or otherwise, but because they are linked to a memory that does. If the query pulls up "user switched to the Pro plan," the fact "user previously hit the seat limit on Team" might share zero vocabulary and low semantic similarity, but it is one hop away in the graph and it is exactly the context the model needs. You only get this if your memories know about each other. Walk the edges from your top hits and pull in the neighbors.

**4. Temporal.** Did this happen inside a window that matters? Recent memories usually deserve more weight, but it is broader than recency. If the query is about a session yesterday, the facts created yesterday are relevant *because* of when they happened, independent of what they say. A timestamp filter, or a recency boost, catches the context that the other three lenses would rank too low simply because it is short or generic.

Run all four at once. Each returns a ranked candidate list. Then you fuse them, reciprocal rank fusion is the cheap and surprisingly effective default, optionally rerank against the query, and keep the top handful. *That* small set is what goes to the model.

It maps almost one to one onto the multi-signal stacks the production systems are now shipping (mem0 describes vector, graph traversal, temporal, and metadata filtering as four legs of the same stool), which I take as a good sign rather than a coincidence. When independent people building the same thing arrive at the same shape, the shape is usually right.

## Why this is the part worth getting right

The reason I keep coming back to retrieval, rather than to fancier storage or bigger models, is that this is where the leverage actually is. The model is a fixed cost you mostly can't move. The storage is cheap. But the retrieval step decides how many tokens you spend on *every single request for the life of the agent*, and it decides whether the model is reasoning over the right context or drowning in noise. Get it wrong in the cheap direction and the agent forgets things it should know. Get it wrong in the expensive direction and you are paying a tax on every turn for context the model never uses.

Four searches, four definitions of relevance, fused into a short list. It is not a complicated idea. But it is the difference between an agent that remembers well and one that just remembers expensively.

If you are building anything with memory right now, that is where I would spend your attention.

Danish Siddique
