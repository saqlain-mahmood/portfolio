# Saqlain Mahmood - Portfolio

A single-page developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion. Dark glassmorphism theme.

## Tech

- **React 19** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite` - config lives in `src/index.css`)
- **Framer Motion** (scroll/entrance animations)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # lint
```

## Editing content

Almost everything is data-driven - edit **`src/data.js`** to change your profile,
about, skills, projects, experience, education, and links. No JSX needed for content.

- **CV:** replace `public/cv.pdf`
- **Favicon:** `public/favicon.svg`
- **Accent colour / theme:** the design tokens at the top of `src/index.css`
- **Project links:** add `{ label, href, icon }` entries to a project's `links` array
  (`icon` can be `"github"`, `"download"`, or `"demo"`)

## Project structure

```
src/
  data.js              # all site content
  index.css            # Tailwind import + theme tokens + helpers
  App.jsx              # page layout
  components/          # Navbar, Hero, sections, shared bits (Reveal, Stagger, …)
```

## Deploy (Vercel)

Vercel auto-detects Vite (build `vite build`, output `dist`). Push to GitHub and
import the repo at vercel.com, or run `vercel` from this folder.
