# Portfolio Chat Worker

Tiny Cloudflare Worker that powers the chatbot on the portfolio site. Takes a
chat history, calls Groq (Llama 3.3 70B) with a baked-in knowledge base about
Danish, returns a reply.

No LangChain. No vector store. Just a system prompt + the conversation.

## What's here

- [src/index.ts](src/index.ts) — request handler, CORS, Gemini call.
- [src/knowledge.ts](src/knowledge.ts) — the knowledge base baked into the
  system prompt. **Edit this when the portfolio content changes.**
- [wrangler.toml](wrangler.toml) — Worker config.

## One-time setup

1. Get a free Groq API key: https://console.groq.com/keys (no card needed)
2. Install the worker deps:
   ```bash
   cd worker
   pnpm install
   ```
3. Set the API key as a Worker secret:
   ```bash
   pnpm wrangler secret put GROQ_API_KEY
   # paste the key when prompted
   ```
   (For local dev only, you can instead put `GROQ_API_KEY=...` in
   `worker/.dev.vars`.)

## Run locally

```bash
cd worker
pnpm dev
# → http://localhost:8787
```

Then in the portfolio root, set `PUBLIC_CHAT_API_URL=http://localhost:8787`
in `.env` and run `pnpm dev` for the Astro site.

## Deploy

```bash
cd worker
pnpm deploy
```

First deploy will prompt you to log in to Cloudflare. The URL will be
`https://portfolio-chat.<your-subdomain>.workers.dev` — copy it into the
portfolio's `PUBLIC_CHAT_API_URL` env var (for GitHub Pages, add it as a
build-time secret in your Actions workflow).

## Lock down CORS (recommended after first deploy)

Uncomment the `[vars]` section in [wrangler.toml](wrangler.toml) with your
real origins, then `pnpm deploy` again:

```toml
[vars]
ALLOWED_ORIGINS = "https://danishs360.github.io,http://localhost:4321"
```

## Free-tier limits

Cloudflare Workers free tier: 100,000 requests/day.
Groq free tier: 30 requests/min, 14,400/day for Llama 3.3 70B — see
https://console.groq.com/docs/rate-limits.
