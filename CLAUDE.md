# CLAUDE.md

Source for **aryansach.dev**. A Vite + React SPA, deployed by **Vercel on every push to `main`**. This repo is public, so a push goes live immediately and every file here is readable by anyone.

## Content

All site copy lives in `src/lib/portfolio-data.ts`. Aryan keeps the source of truth for his facts outside this repo. Only put things on the site that already appear on his resume or LinkedIn. When in doubt, leave it out and ask.

Keep this file and commit messages generic. Don't describe personal details here, even to say they're excluded.

## The old blog (`/old`)

Aryan's old blog ("My Thoughts on Life and Minecraft"), kept as a memory bank.
- Posts: `src/lib/old-posts.json`, generated from an archived WordPress dump by `scripts/extract-posts.js`. The script needs `WP_SQL` and `HIDDEN_POSTS_FILE`, both kept outside this repo. Ask Aryan for their locations.
- Route: `/old/*` → `src/OldApp.tsx` → `src/components/old-site/` (lazy-loaded). `old.aryansach.dev` redirects here (see `src/main.tsx`).
- Images that survived: `public/old/uploads/`. `PostDetail` hides any image that fails to load.
- Never copy the WordPress backup into this repo.
- `vercel.json` rewrites every path to `/` so deep links work.

## Commands

`npm run dev` (port 8080) · `npm run build` · `npx vite preview` to check the production build locally.
