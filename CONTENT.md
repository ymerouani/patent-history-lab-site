# Content Management Guide

The French Patent History Lab website uses **Astro content collections** with a **Quarto-inspired** directory structure. Each section has its own directory with an `index.md` and a `posts/` subfolder for content files.

---

## Directory Structure (Quarto-Style)

```
src/
├── projects/
│   ├── index.md          # Section overview
│   └── posts/            # Individual project files
│       ├── french-patent-database.md
│       ├── women-inventors.md
│       ├── patent-valuation.md
│       ├── cross-channel-innovation.md
│       ├── paris-exposition.md
│       └── regional-networks.md
├── fellows/
│   ├── index.md          # Section overview
│   └── posts/            # Individual fellow files
│       ├── faustine-perrin.md
│       └── youssouf-merouani.md
└── funders/
    ├── index.md          # Section overview
    └── posts/            # Individual funder files
        ├── handelsbanken.md
        └── naiss.md
```

---

## Why This Structure?

✅ **Clear separation** - Projects, fellows, and funders are in separate folders
✅ **Quarto-like** - Familiar organization for academic/research sites
✅ **Scalable** - Easy to add new sections (e.g., `publications/`, `data/`)
✅ **No mixing** - Never confuse a fellow file with a project file
✅ **Section index** - Each section can have its own overview/intro

---

## Adding a New Project

### Step 1: Create the Markdown File

Create a new file in `src/projects/posts/` (e.g., `new-project.md`):

```yaml
---
title: "Project Title"
description: "Brief description for the project card"
image: "https://example.com/image.jpg"
size: "medium"
order: 7
---

Full project description goes here. This will appear in the modal when someone clicks on the project card.
```

### Step 2: Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Project name |
| `description` | string | ✅ Yes | Short description for card |
| `image` | string | ✅ Yes | Image URL |
| `size` | enum | ✅ Yes | `small`, `medium`, or `large` |
| `order` | number | Optional | Display order |

---

## Adding a New Fellow

### Step 1: Create the Markdown File

Create a new file in `src/fellows/posts/` (e.g., `john-doe.md`):

```yaml
---
name: "John Doe"
image: "https://example.com/john-doe.jpg"
order: 3
---

Biography and research details here...
```

### Step 2: Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Fellow's full name |
| `image` | string | ✅ Yes | Headshot image URL |
| `order` | number | Optional | Display order |

---

## Adding a New Funder

### Step 1: Create the Markdown File

Create a new file in `src/funders/posts/` (e.g., `new-funder.md`):

```yaml
---
name: "Funder Name"
logo: "https://example.com/logo.png"
order: 3
---
```

### Step 2: Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Funder's name |
| `logo` | string | ✅ Yes | Logo image URL |
| `order` | number | Optional | Display order |

---

## Editing Existing Content

Find the `.md` file in the appropriate section's `posts/` folder:
- **Projects:** `src/projects/posts/`
- **Fellows:** `src/fellows/posts/`
- **Funders:** `src/funders/posts/`

Open it in any text editor, edit, and save. The site updates automatically!

---

## Deleting Content

Simply delete the `.md` file from the appropriate `posts/` folder. That's it!

---

## Adding a New Section

Want to add publications, data, or working papers?

### Example: Add a Publications Section

1. **Create directory:**
   ```bash
   mkdir -p src/publications/posts
   ```

2. **Create index.md:**
   ```yaml
   ---
   title: "Publications"
   ---
   # Publications
   Our research papers and articles.
   ```

3. **Update `src/content/config.ts`:**
   ```typescript
   const publicationCollection = defineCollection({
     loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/publications/posts' }),
     schema: z.object({
       title: z.string(),
       authors: z.string(),
       year: z.number(),
       journal: z.string().optional(),
       doi: z.string().optional(),
       order: z.number().optional(),
     }),
   });

   export const collections = {
     // ... existing collections
     publications: publicationCollection,
   };
   ```

4. **Add publications:**
   Create files in `src/publications/posts/`

---

## Technical Details

**Content Collections Config:** `src/content/config.ts`
**Base Paths:**
- Projects: `src/projects/posts/`
- Fellows: `src/fellows/posts/`
- Funders: `src/funders/posts/`

**Homepage:** `src/pages/index.astro` - Queries collections and renders content

---

*Last Updated: 2026-01-28*
