# Medical Terpenes Landing Page

Pixel-focused responsive recreation of the provided desktop and mobile screenshots,
built with latest Next.js App Router + Tailwind CSS v4.

## Tech

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Static export via `output: "export"`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static site

```bash
npm run build
```

This generates a static site in `out/`.

## Project notes

- Main page: `src/app/page.tsx`
- Shared styles and design helpers: `src/app/globals.css`
- Static export config: `next.config.ts`
