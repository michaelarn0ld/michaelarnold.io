---
title: "Building a Second Brain in Bash: Why Hierarchical Folders Fail"
description: "Why nested folder structures collapse under their own weight, and how a minimal CLI slip-box keeps ideas connected."
pubDate: 2025-12-20
tags: ["engineering"]
---

Most note-taking setups fail for the same reason: they require you to predict the future.

You create a folder called `projects/` or `cloud-architecture/`, drop three notes inside, and feel organized. Six months later, you have sixty folders, half of them nested four levels deep, and you spend more time agonizing over where a note belongs than actually writing down the thought. Standard hierarchical folders confine your thoughts to the arbitrary title you picked on day one.

When I wanted a system that actually scaled over years without maintenance overhead, I scrapped folders entirely and implemented a Niklas Luhmann-style Zettelkasten in plain text.

## The Problem with Folder Trees

Standard hierarchical note-taking suffers from two structural flaws:

1. **Folder boundaries isolate context**: When you write a  note on concurrency in Go, in the moment you might think that note is relevant to distributed systems, performance tuning, and technical interview prep. Well, if it lives inside `interviews/algorithms/`, you lose its connection to the other branches; the association to performance tuning or distributed systems is lost to the ether.
2. **Taxonomy fatigue**: As your library grows, the folder tree becomes fragile. Reorganizing folders breaks your flow and produces orphan notes you will never open again.

A Zettelkasten solves this by replacing hierarchy with **hypertext**, the same model that makes the web work. Instead of filing notes away into drawers, you link them together.

## The Anatomy of a Zettel

In my setup, notes live in a single flat directory structure. Every note (a *zettel*) is uniquely identified by its creation timestamp: `YYYYMMDDHHMM`.

A zettel must obey three simple rules:
- **Atomic**: It covers a single idea, typically under one page.
- **Immutable ID**: Identified only by the date and time it was written.
- **Explicit Links & Tags**: It links to related zettel IDs and includes tags for topic discovery.

A typical note looks like this:

```markdown
# Title
|-- Objective or thesis

|-- ## Core Insight
|---- Explanation, tradeoffs, or code snippet

|-- ## Related
|---- [202110010028](../202110010028) - What's a Container?
|---- [202110010145](../202110010145) - Containers vs Kubernetes

|-- ## Tags
|---- #containers #linux #distributed-systems
```

## Automating the Slip-Box with `zet`

I don't use Notion, Obsidian, or Roam. I don't want a heavy Electron app or proprietary database format between me and my thoughts. 

I wrote a small Bash script called `zet` that lives in my shell environment. When I want to capture a thought, I run:

```bash
zet "Title of the Note"
```

The script:
1. Generates the timestamped directory (`202609061830/`).
2. Scaffolds a template `README.md` with the title, structure, and current date.
3. Opens the file in Vim immediately.

Once saved, an automated script crawls the zettel collection and parses the `#tags` section to generate an inverted index:

```json
{
  "tag": "distributed-systems",
  "zettels": [
    {
      "zettel_id": "202401080238",
      "title": "Technical Interview: System Design"
    }
  ]
}
```

This inverted index powers fast tag searching and CLI traversal. Searching across years of thoughts is instant because everything is just plain text, `grep`, and JSON.

## The Takeaway

Good software design favors small, composable primitives over monolithic abstractions. Your knowledge base should work the same way. 

By stripping away the overhead of taxonomy and relying on flat hypertext, my Zettelkasten has grown to hundreds of interconnected ideas over five years without falling into disorganization. The value of a note isn't where it lives, it's how easily it connects to everything else you know.
