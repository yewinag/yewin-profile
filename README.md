# Yewin — Personal Portfolio

A minimal, dark-themed portfolio for a Senior Frontend Engineer. Built for recruiters in Singapore and Thailand.

## Stack

- **Next.js 15+** (App Router)
- **Tailwind CSS 4**
- **shadcn/ui**
- **Framer Motion**
- **Lucide Icons**
- **MDX** (blog)
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Content

Edit the data files in `src/lib/data/`:

| File | Content |
|------|---------|
| `site.ts` | Name, tagline, links, availability |
| `experience.ts` | Work history |
| `projects.ts` | Featured projects |
| `skills.ts` | Technical skills |

## Blog

Add MDX posts to `content/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
description: "Short description"
date: "2025-06-15"
---

Your content here...
```

Posts appear at `/blog`.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy — no env vars required

Or use the CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/              # Pages & layout
├── components/
│   ├── layout/       # Header, Footer, Section
│   ├── sections/     # Hero, About, Experience, etc.
│   ├── motion/       # Framer Motion wrappers
│   └── ui/           # shadcn/ui components
└── lib/
    ├── data/         # Portfolio content
    └── blog.ts       # MDX blog utilities
content/
└── blog/             # MDX blog posts
```
