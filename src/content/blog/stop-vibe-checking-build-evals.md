---
title: "Stop vibe-checking your AI. Build the evals."
description: "If the only way you know your AI feature works is that it felt right in the demo, you do not actually know it works. Here is how to start measuring."
pubDate: "Jun 04 2026"
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop"
tags: ["ai", "evals", "llm", "testing"]
---

The most common way teams check an AI feature is to try it a few times, nod, and ship. I have done it. It feels fine right up until the prompt tweak that fixed one case quietly breaks five others you never re-tested.

That is vibe-checking, and it does not survive past the first week of real use. The fix is evals, and they are less work to start than people assume.

## What an eval actually is

An eval is a test suite for output that is not deterministic. You cannot assert `output === expected` when the model can phrase the same correct answer ten different ways. So instead you collect a set of inputs, define what a good answer looks like for each one, and score the model against that definition. Then you run it on every prompt change, every model swap, every retrieval tweak.

That is the whole idea. It is unit testing for a component that refuses to be exact, and it turns "I think that made it better" into a number you can actually look at.

## Start embarrassingly small

People stall because they picture a thousand labeled examples. You do not need that. Twenty to fifty cases is enough to start catching regressions, and you almost certainly already have them: the questions that come up most in production, the support tickets where the AI got it wrong, the edge cases that have bitten you before.

Write those down with the answer you wanted. That tiny set beats no set by a wide margin. Then grow it the natural way: every time the feature fails in production, add that case to the eval before you fix it. Your suite becomes a record of every mistake the system is no longer allowed to make.

## LLM-as-judge, and where it bites

For open-ended output there is no string to match against, so the common move is to have a model grade the answer against a rubric. It works, and it scales, but it has sharp edges worth knowing.

The judge has biases. It tends to reward longer, more confident answers even when a short one was correct. It often prefers responses written in its own style. It can be lenient, waving through answers a human would reject. So pin it down. Give it a specific rubric instead of "is this good," ask for a score with a reason, and version the judge prompt like any other code. Most importantly, calibrate it: hand-label a sample yourself and check that the judge agrees with you before you trust it on the rest.

## Why this changes how you work

Once you have an eval set, tuning stops being guesswork. You change the chunking strategy, run the suite, and watch the retrieval score move. You swap to a cheaper model and see in one number whether quality actually held. RAG pipelines especially come alive here, because every knob, chunk size, retrieval depth, reranking, becomes something you can measure instead of argue about.

The demo will always look good. You picked the inputs. The eval is the thing that tells you whether the feature is good when you are not the one holding the keyboard. Build it early, keep it small, and grow it with every bug. It is the cheapest confidence you will ever buy.

Danish Siddique
