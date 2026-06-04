---
title: "How we cut our LLM bill about 30% without making the product worse"
description: "Three levers that actually moved our token spend: caching what repeats, routing to the right size of model, and sending less in the first place."
pubDate: "Jun 02 2026"
heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop"
tags: ["ai", "llm", "cost", "engineering"]
---

The LLM bill is the line item nobody watches until it gets embarrassing.

It creeps up quietly. You ship a feature, it works, usage grows, and one day someone on the finance side asks why model spend doubled in a quarter. That happened to us. Here is what actually brought the number back down, and roughly what each piece was worth.

We cut spend by about 30 percent and p95 latency by about 40 percent over a few weeks. None of it required a smarter model or a worse product. Most of it was just deciding to stop being wasteful.

## Cache what repeats

The single biggest win was prompt caching. Look at a typical agent request and a huge fraction of it is identical on every call: the system prompt, the tool definitions, the few-shot examples, the chunk of retrieved context you reuse across a conversation. You were paying full price to re-send all of it on every turn.

Most providers now let you cache that stable prefix and charge a small fraction to read it back. The trick is ordering. Put the stuff that never changes at the front of the prompt and the volatile, per-request stuff at the end, so the cached prefix stays intact. That one change took a real bite out of the bill on its own, and it made responses faster because the model is not re-reading the same preamble every time.

## Route to the right size of model

The second win was admitting that most requests do not need the flagship model. A lot of what an agent does is easy: classify this, extract that, decide which tool to call, summarize a short passage. A small fast model handles those fine.

So we put a cheap classifier in front and send the easy traffic to a smaller model, reserving the expensive one for requests that genuinely need the reasoning. The split surprised me. The majority of real traffic was the easy kind, which means the majority of it never needed to touch the pricey model at all. Routing was worth almost as much as caching.

## Send less in the first place

The third lever is the one people skip because it feels like premature optimization. It is not. Every token you put in the prompt you pay for on every call for the life of the feature. Stuffing the whole knowledge base or the entire chat history into context, just in case, is the most expensive habit in the stack.

Retrieve the few things the request actually needs instead of dumping everything. Trim the system prompt that grew by accretion over six months. Drop the three few-shot examples you no longer need now that the model is better. Smaller prompts are cheaper, and more often than not the answers get better too, because the model is not wading through noise.

## What did not move the needle

Being honest about the misses: chasing token counts on rare code paths was a waste of an afternoon. So was pricing out a provider switch to save a few percent. The wins came from the boring structural stuff, not cleverness.

If your model spend is climbing, do not start by shopping for a cheaper model. Start by measuring where the tokens actually go. Mine were going to context I was needlessly re-sending, on a model bigger than the job required. Fix those two and the bill mostly takes care of itself.

Danish Siddique
