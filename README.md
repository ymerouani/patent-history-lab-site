# French Patent History Lab Website

The official website of the French Patent History Lab at Lund University School of Economics and Management (LUSEM).

## Overview

The French Patent History Lab website serves as the digital hub for our research activities, showcasing our work on French historical patents, innovation studies, and the history of culture and technology. The site is built as a modern, static website using Astro 5.0 and Tailwind CSS.

**Design Inspiration:** This site draws structural and functional inspiration from the [Harvard digiTatti Lab](https://dh.itatti.harvard.edu), with plans to develop a unique aesthetic tailored to our patent history research focus.

## Tech Stack

- **Framework:** [Astro 5.0](https://astro.build/) - Modern static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language:** TypeScript
- **Content:** MDX for blog posts and documentation
- **Template:** Based on [AstroWind](https://github.com/arthelokyo/astrowind)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/         # Images, stylesheets
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content collections (projects, fellows, blog)
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Route pages
│   ├── config.yaml     # Site configuration
│   └── navigation.js   # Navigation menu structure
└── PROJECT_PROGRESS.md # Development progress tracking
```

## Development Progress

We are currently in the development phase, building out the site structure based on the Harvard DH Lab model. For detailed progress tracking, see [PROJECT_PROGRESS.md](./PROJECT_PROGRESS.md).

### Current Status

- ✅ Base infrastructure (Astro + Tailwind)
- ✅ Core page templates
- 🚧 Projects section (in development)
- 📝 Fellows/People section (planned)
- 📝 Funding sources page (planned)
- 📝 Enhanced homepage (planned)

## Configuration

The site is configured through `src/config.yaml`. Key configuration areas:

- **Site metadata:** Name, description, SEO settings
- **Navigation:** Menu structure and links
- **Blog settings:** Post display, categories, tags
- **Analytics:** Google Analytics integration (optional)
- **Theme:** Light/dark mode settings

## Adding Content

**NEW:** Content is now managed through Markdown files with a **Quarto-inspired structure**! See [CONTENT.md](./CONTENT.md) for detailed instructions.

### Quick Start

**Add a project:** Create `src/projects/posts/new-project.md`
```yaml
---
title: "Project Name"
description: "Brief description"
image: "https://example.com/image.jpg"
size: "medium"
order: 1
---

Full project description here...
```

**Add a fellow:** Create `src/fellows/posts/john-doe.md`
```yaml
---
name: "John Doe"
image: "https://example.com/john.jpg"
order: 1
---

Bio and research details here...
```

**Add a funder:** Create `src/funders/posts/new-funder.md`
```yaml
---
name: "Funder Name"
logo: "https://example.com/logo.png"
order: 3
---
```

**Edit content:** Just edit the markdown files in `src/projects/posts/`, `src/fellows/posts/`, or `src/funders/posts/`

**Delete content:** Remove the corresponding markdown file

That's it! The site automatically updates.

For detailed instructions, see [CONTENT.md](./CONTENT.md).

### Blog Posts

Blog posts support MDX format with frontmatter for metadata:
```yaml
---
title: "Post Title"
publishDate: 2026-01-27
category: "News"
author: "Author Name"
description: "Post description"
---
```

## Deployment

### Build Options

The site supports multiple deployment targets:
- **Static hosting:** GitHub Pages, Netlify, Vercel
- **University servers:** Can be deployed as static files
- **CDN:** Any CDN that supports static sites

### Deployment Steps

```bash
# Build the site
npm run build

# Deploy the ./dist/ folder to your hosting service
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is an internal project for the Patent History Lab. For questions or suggestions about the website, please contact the lab team.

## License

Copyright © 2026 French Patent History Lab, Lund University. All rights reserved.

---

**French Patent History Lab**
Lund University School of Economics and Management (LUSEM)

[https://french-patent-history-lab.lu.se](https://french-patent-history-lab.lu.se) *(placeholder URL)*
