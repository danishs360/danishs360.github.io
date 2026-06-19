---
title: "Take the interview before the interview: why I built Round Zero"
description: "Interview prep is full of question banks and resume puffery. Almost nothing simulates the actual conversation. Here's the gap I kept seeing — and the product I shipped to close it."
pubDate: "Jun 19 2026"
heroImage: "https://joinroundzero.com/og-image.png"
tags: ["career", "interview-prep", "ai", "round-zero"]
---

A few months ago a friend texted me forty minutes before a panel interview. She'd read every Glassdoor thread. She'd memorized STAR stories. She had a PDF of "50 most common questions" open on her laptop.

She still sounded like she'd never said any of it out loud.

That's the moment Round Zero clicked for me. Not because she wasn't prepared — she was *over*-prepared in all the wrong ways. She'd consumed content. She hadn't rehearsed the thing that actually happens in the room: someone listens, pushes back, waits in silence while you think, and scores you on what you *said*, not what you meant.

So I built the thing I wished existed for her. It's called [Round Zero](https://joinroundzero.com). Tagline: **take the interview before the interview.**

## The prep that doesn't prepare you

The job search has no shortage of tools. Question banks. Resume templates. LinkedIn coaches. Courses that promise you'll "crush behavioral interviews" if you watch twelve hours of slides.

Most of it shares a quiet lie: that knowing the right answer in your head is the same as delivering it under pressure.

It isn't.

Reading a STAR example and *saying* one out loud are different skills. Reading a job description and *tailoring your resume honestly* is different from running it through a tool that invents bullet points you never earned. Researching a company by skimming the About page is different from walking in able to reference how they interview, what they care about right now, and why your specific experience maps to *this* role.

And none of the passive stuff replicates the hardest part: a live conversation where your answer is vague and nobody rescues you.

That's especially true now that more employers run AI screening rounds before a human ever joins the call. One-way video. Fixed rubrics. No follow-up to pull the real story out of you. If a point isn't in the words you say, it doesn't get scored.

The market solved "give people more content." It barely touched "give people a rehearsal that feels real."

## What I wanted instead

I'm a full-stack engineer. I spend my days building AI products — voice agents, RAG pipelines, tools that take real actions inside real apps. When I started sketching Round Zero, I had a short list of non-negotiables. Not feature ideas. *Principles.*

**Honest over impressive.** Resume tailoring should surface what's already in your experience and make the overlap with the job description visible. It should never invent a promotion, a metric, or a skill you don't have. Plenty of tools puff you up. That might get you past a filter. It gets you destroyed in the interview.

**Live over static.** An interview is a conversation. You need something that listens, adapts, asks the follow-up you'd get from a real panel, and sits in the silence while you think. Not a chatbot that spits encouragement. Not a multiple-choice quiz. A voice session that pushes back when you're hand-wavy.

**Evidence over vibes.** "You did great!" is useless if you can't point to the sentence where you buried the lede. Feedback should cite what you actually said, score against a rubric, and track improvement over time — so you see yourself getting better instead of guessing.

**One calm place for the whole search.** Paste a job description once. Tailor the resume. Research the company with sources you can trust. Practice the interview. Track where you've applied. Don't duct-tape five tabs together every time you find a role you care about.

That was the spec. Everything in Round Zero flows from it.

## What Round Zero actually does

You paste a job description. That's the input. From there, Round Zero builds a prep session around *that specific role*.

### Honest resume tailoring

Round Zero reshapes your resume to the JD using only what's already there. Every change is shown. Nothing is invented. If you "worked on API improvements," it might help you rephrase that as "reduced API latency by 40% via query batching" — *if* that's what you actually did. If you led a project, it helps you emphasize scope and outcome without turning you into someone you're not.

You see the match score. You approve the edits. You own what's on the page.

### Company research you can use

Before you talk to anyone, you get a cited brief: the business, the team, how they tend to interview, what's happening in their world right now. Built from sources you choose, not a hallucinated Wikipedia summary. Useful for "why this company" and for connecting your stories to what they actually care about.

### A live AI interview — not a question bank

This is the core. You practice with a voice AI interviewer that adapts to the role, asks behavioral and role-specific questions, and pushes back when your answer is thin. Just like a real screen.

Talk to it. Ramble. Recover. Finish a thought. Get scored the moment you're done — with feedback tied to evidence, not a generic "great job."

There's text mode too if you don't have a mic handy. Same AI. Same scoring.

### Maeve, your coach

Maeve remembers every interview you've done and every resume you've tailored. She gets sharper over time. Ask her how to answer "why this role" and she'll connect it to something the company announced last week. Ask what to fix from your last session and she'll point to the moment you rushed through the numbers.

Advice that compounds beats a fresh chatbot every time.

### Built for the whole search

- **Score trends** — every interview tracked so you see improvement, not just a single number.
- **Application tracker** — kanban board for your pipeline so you don't lose track of where you stand.
- **Resume history** — every tailored version saved. Go back to any one.

## Why I thought I could build this

Round Zero isn't my first time shipping AI in production. At [Kindred](https://kindredpractice.com) (formerly Mynd), a mental-health platform used by hundreds of therapists, I built live video sessions, RAG grounded in real clinical context, in-app agents that take actions on a user's behalf, and the infrastructure that keeps all of it reliable under real load.

Round Zero reuses a lot of what I already know how to do well: real-time voice on LiveKit and Deepgram, tool-calling agents that stay inside guardrails, RAG that retrieves the right context instead of dumping the whole corpus into a prompt, Postgres underneath, eval-driven iteration so the coaching actually gets sharper instead of just *feeling* smarter.

The hard part wasn't the stack. The hard part was resisting the easy versions.

The easy version is a question bank with a chat UI slapped on top. The easy version is a resume tool that invents experience so the match score looks pretty. The easy version is feedback that says "you've got this" no matter what you said.

I didn't want the easy version. I wanted the thing that makes the real interview feel familiar — because you already did it once, out loud, with something that pushed back.

## Who it's for

Round Zero is for anyone who has a real interview coming up and suspects their prep is too passive.

Product managers rehearsing panel rounds. Engineers relocating and interviewing across time zones. New grads who've read every guide but never heard themselves answer "tell me about yourself" without cringing. People facing AI screening rounds where structure and clarity matter more than charm.

It's also for people who are tired of tools that treat the job search like a performance you fake your way through. If you want to walk in knowing the company, knowing your resume is honest, and knowing you've already survived a conversation like the one you're about to have — that's who I built this for.

## Early access, real usage

We launched Round Zero in early access at [joinroundzero.com](https://joinroundzero.com). Thousands of practice interviews have already been run through the platform. Resumes tailored. Score trends climbing. The average score lift across sessions is meaningful — not because we inflate numbers, but because repetition with real feedback compounds.

The free plan is actually free: voice interviews, resume tailoring, company research, application tracking, and scoring. No card required. You can be in a practice session in under three minutes.

I'm not claiming Round Zero replaces human interviewers or fixes every unfair thing about hiring. AI screens have real limitations. Bias exists. You can't control the whole system.

You *can* control whether you walk in having already done the conversation once.

## Take the interview before the interview

That's the whole idea. Not more content. Not more anxiety. A calm place to paste the JD, tighten your story honestly, learn the company, and practice out loud until the real thing feels like déjà vu.

If you're searching right now — or you know someone who is — try it. Run one session before it counts.

**[Get started free at joinroundzero.com →](https://joinroundzero.com)**

---

*Danish Siddique is a senior full-stack engineer and the builder of [Round Zero](https://joinroundzero.com). He writes about AI, agents, and building products that hold up in production at [danishs360.github.io](https://danishs360.github.io).*
