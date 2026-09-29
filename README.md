# Rakan's Birthday Website ❤️

## Run locally
1. Install Node.js (nodejs.org, LTS version)
2. In this folder:  `npm install`
3. Start:           `npm run dev`   (open the link it prints)
4. Build:           `npm run build` (output goes to `dist/`)

## Deploy to Vercel
**Easiest:** push this folder to a GitHub repo → vercel.com → Add New Project → import the repo → Deploy (settings are auto-detected).
**Or with the CLI:** `npm i -g vercel` → `vercel` → follow prompts → `vercel --prod`.
Send Rakan the link you get.

## What to edit (all in `src/config.js`)
- Name: `NAME`
- Photos + captions: `memories`   (image files are in `public/images/`)
- Safwa logo/photo: `STORY` (files `public/images/safwa-logo.jpg` and `safwa-place.jpg`)
- Arabic message: `arabicMessage`
- English message: `englishMessage`
- Timeline: `timeline` (add dates in `date`)
- "Click me" message / final screen: `surprise`, `finale`
- Songs: `songs` (YouTube video IDs)

To replace a photo, overwrite the file in `public/images/` with the same name, or change its path in `memories`.
