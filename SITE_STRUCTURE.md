# Site Structure Overview

This document provides a clear overview of what files and folders are actually used in the French Patent History Lab website.

---

## Active Files (What You Use)

### Pages (`src/pages/`)
```
src/pages/
├── index.astro          ✅ Your custom homepage
├── 404.astro            ✅ Error page
├── rss.xml.ts           ✅ RSS feed generator
├── privacy.md           ✅ Privacy policy
├── terms.md             ✅ Terms of service
└── [...blog]/           ✅ Blog functionality
    ├── [...page]/
    ├── [category]/
    └── index.astro
```

### Content Collections (`src/content/`)
```
src/content/
├── projects/            ✅ Project markdown files
│   ├── french-patent-database.md
│   ├── women-inventors.md
│   ├── patent-valuation.md
│   ├── cross-channel-innovation.md
│   ├── paris-exposition.md
│   └── regional-networks.md
├── fellows/             ✅ Fellow markdown files
│   ├── faustine-perrin.md
│   └── youssouf-merouani.md
└── funders/             ✅ Funder markdown files
    ├── handelsbanken.md
    └── naiss.md
```

### Configuration Files
```
src/
├── config.yaml          ✅ Site configuration
├── navigation.ts        ✅ Navigation menu
└── content/
    └── config.ts        ✅ Content collection schemas
```

---

## Archived Files (Not Used, But Available for Reference)

### `.template-archive/` Folder
Contains unused template files that were moved here. **Can be deleted later.**

See `.template-archive/README.md` for details.

Archived files include:
- Unused page templates (about, contact, pricing, services)
- Template variant directories (homes/, landing/)

---

## Clean Pages Directory

**Before cleanup:** ~15 files (many unused templates)
**After cleanup:** 6 files (all actively used)

Your pages directory is now much cleaner and easier to understand!

---

## What's Where?

| Want to... | Go to... |
|------------|----------|
| Edit the homepage | `src/pages/index.astro` |
| Add/edit projects | `src/content/projects/*.md` |
| Add/edit fellows | `src/content/fellows/*.md` |
| Add/edit funders | `src/content/funders/*.md` |
| Change site name/metadata | `src/config.yaml` |
| Change navigation menu | `src/navigation.ts` |
| Reference template code | `.template-archive/` folder |

---

*Last Updated: 2026-01-28*
