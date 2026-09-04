# michaelarnold.io

Personal site for Michael Arnold: a home/bio page, a blog, and a photo gallery.
Built with **Astro 5** (static output), hand-written CSS (no framework), and
deployed to **Netlify**. Photos and post images are optimized at build time, so
you drop in full-resolution files and Astro produces responsive, compressed
versions automatically.

## Quick start

```bash
npm install        # first time on a machine
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the built dist/ locally
```

Node 20+ is required (Netlify uses Node 20; see `netlify.toml`).

## Deploy

Deployment is automatic: **push to `main` and Netlify rebuilds and deploys**
`www.michaelarnold.io`. There is no manual deploy step.

```bash
git add -A && git commit -m "..." && git push origin main
```

Auth to GitHub on a new machine is over **SSH** (an `id_ed25519_github` key added
to the GitHub account). If SSH is not set up, generate a key, add the public key
to GitHub → Settings → SSH keys, and set the remote:
`git remote set-url origin git@github.com:michaelarn0ld/michaelarnold.io.git`.

## Project layout

```
src/
  pages/
    index.astro          Home page (bio: "Who I am Professionally" / "Otherwise")
    blog/
      index.astro        Blog list + topic/date filtering + pagination
      [...slug].astro    Renders a single blog post from Markdown
    photos.astro         Photo gallery + filtering + pagination + hover captions
  content/
    blog/                One Markdown file per post (+ any images for that post)
  data/
    photoMeta.json       Caption / tags / date for each gallery photo
  assets/
    photos/              Gallery photo files (optimized at build time)
  components/
    Nav.astro            Top nav (Home / Blog / Photos)
    FilterBar.astro      Topic chips + date-range inputs + Reset
    Pagination.astro     Prev / Next arrows + page indicator
  layouts/
    BaseLayout.astro     HTML shell, <head>, footer, global CSS import
  scripts/
    collectionFilter.ts  Client-side filter + pagination (shared by blog & photos)
  styles/
    global.css           All styling (dark theme; CSS variables in :root)
  content.config.ts      Blog content collection schema (title/description/date/tags)
public/
  me.jpg                 Profile photo shown on the home page
  pgp                    PGP key served at /pgp
netlify.toml             Build command + publish dir + Node version
```

## Common tasks

### Add a blog post

Create `src/content/blog/<slug>.md`. The filename (minus `.md`) is the URL:
`my-trip.md` → `/blog/my-trip/`. Required frontmatter:

```markdown
---
title: "My Post Title"
description: "One-line summary shown in the blog list."
pubDate: 2026-09-15
tags: ["engineering", "travel"]
---

Body in **Markdown**. Headings, lists, links, and code blocks all work.
```

- `pubDate` drives sort order (newest first) and the date filter. Use `YYYY-MM-DD`.
- `tags` populate the topic chips automatically. `description` is optional.

**Embed an image in a post:** drop the image next to the `.md` file in
`src/content/blog/` and reference it with a relative path — Astro optimizes it:

```markdown
![Alt text](./my-photo.jpg)
```

### Add gallery photos

1. Drop the image file(s) into `src/assets/photos/`.
   **Use a lowercase extension** (`.jpg`, `.jpeg`, `.png`) — uppercase `.JPG`
   will not be picked up by the gallery. Give it a clean, URL-friendly name
   (e.g. `diamond-head.jpg`).
2. Add an entry to `src/data/photoMeta.json`, keyed by the filename **without
   its extension**:

```json
"diamond-head": {
  "caption": "Diamond Head",
  "tags": ["travel", "hawaii"],
  "date": "2026-09-04"
}
```

- `caption` is shown over the photo (fades away on hover).
- `tags` populate the topic chips. `date` drives sort order and the date filter.
- A photo with no matching entry still shows, but with a blank caption, no tags,
  and no date — so always add the entry.

To **remove** a photo: delete the file from `src/assets/photos/` and its entry
from `photoMeta.json`.

### Change the profile photo

Replace `public/me.jpg` with the new image (keep the filename `me.jpg`), or
update the `src="/me.jpg"` reference in `src/pages/index.astro`.

### Edit the bio / home page

All home-page text lives in `src/pages/index.astro` (the subtitle under the name,
the "Who I am Professionally" and "Who I am Otherwise" sections, and the contact
email).

### Adjust filtering / pagination

- Items per page: the `data-page-size` attribute on the `<section data-filterable>`
  element in `src/pages/blog/index.astro` and `src/pages/photos.astro`.
- Filter/pagination logic is in `src/scripts/collectionFilter.ts`. Topic matching
  is OR (an item shows if it has any selected tag); the date range is inclusive.

## Notes & gotchas

- **Styling** is plain CSS in `src/styles/global.css`. The dark theme colors are
  CSS variables in `:root` (`--bg`, `--text`, `--muted`, `--border`, `--link`).
- Filtering/pagination is progressive enhancement: with JavaScript disabled the
  full list still renders (good for SEO). The CSS rule `[data-item][hidden]` is
  what actually hides filtered/paged-out items — do not remove it.
- Images are optimized at build time via `sharp`. The first build after adding
  many/large photos is slower; later builds reuse the cache.
- Always run `npm run build` before pushing to catch errors locally; Netlify runs
  the same command.
```
