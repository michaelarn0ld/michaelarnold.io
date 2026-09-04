---
title: "Hello, world"
description: "First post on the new site — why I rebuilt it with Astro."
pubDate: 2026-09-02
tags: ["engineering", "life"]
---

This is the first post on the rebuilt site. It's written in **Markdown**, and
Astro renders it into a styled page at build time — no server required.

## Why Astro

- Posts are just Markdown files in `src/content/blog/`.
- Photos get optimized automatically at build time.
- The whole thing deploys as static files to Netlify for free.

## Photos embed inline too

Drop an image next to the post and reference it — Astro optimizes it just like
the gallery:

![Golden hour over the point](./hello-world-sunset.jpg)

## Code looks fine too

```ts
function greet(name: string): string {
  return `hello, ${name}`;
}
```

More soon.
