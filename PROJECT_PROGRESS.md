# Patent History Lab - Website Development Progress

**Inspiration:** [Harvard digiTatti Lab](https://dh.itatti.harvard.edu)

**Goal:** Replicate the structure and functionality of the Harvard DH website, then develop a differential aesthetic for the Patent History Lab at Lund University.

---

## Overview

This document tracks the development progress of the Patent History Lab website. The site is built using the AstroWind template (Astro 5.0 + Tailwind CSS) and closely follows the Harvard Digital Humanities Lab structure.

**Current Status:** Core site structure complete with custom digiTatti-inspired design

---

## Section Implementation Status

### ✅ COMPLETED (Phase 1 - Foundation)

#### 1. Base Infrastructure
- [x] AstroWind template installed and configured
- [x] Astro 5.0 + Tailwind CSS setup
- [x] Basic project structure in place
- [x] Custom navigation configuration

#### 2. Homepage - Main Sections
- [x] **Hero Section**
  - [x] Animated fleur-de-lis logo with SVG animation
  - [x] Large lab name display ("Patent History Lab")
  - [x] Tagline/subtitle: "the Lund University research lab for French historical patents"
  - [x] Smooth scroll indicator
  - [x] Fixed position logo in corner

- [x] **About/Mission Section**
  - [x] Mission statement text
  - [x] Center-aligned, narrow column layout (digiTatti style)
  - [x] Full viewport height (100vh)

- [x] **Projects Section**
  - [x] Masonry-style grid layout (small/medium/large items)
  - [x] 6 projects with images
  - [x] Grayscale to color hover effect
  - [x] Modal system for project details
  - [x] Responsive design (3 breakpoints)

- [x] **Fellows Section**
  - [x] Circular headshot images
  - [x] 2 fellows currently listed (Faustine Perrin, Youssouf Merouani)
  - [x] Modal system for detailed bios
  - [x] Drop cap styling in modal bios (digiTatti style)
  - [x] Responsive layout

- [x] **Funders Section**
  - [x] 2 funders with logos (Handelsbanken, NAISS)
  - [x] Grid layout with bordered cards
  - [x] Grayscale logos
  - [x] Light background section

- [x] **Contact Section**
  - [x] Contact form with fields (Name, Email, Subject, Message)
  - [x] Subject dropdown (General, Collaboration, Data Access, Media)
  - [x] Form submission handler (alert feedback)
  - [x] Physical address information
  - [x] Lab name and department details

- [x] **Footer**
  - [x] Fleur-de-lis logo
  - [x] Department and university info
  - [x] Copyright notice
  - [x] Proper spacing and styling

#### 3. Design System (digiTatti-inspired)
- [x] Custom fonts (Roboto, Source Code Pro, Baskerville)
- [x] Monospace body font (Source Code Pro)
- [x] Section title styling with bottom border
- [x] Modal system with backdrop
- [x] Custom form styling
- [x] Responsive breakpoints
- [x] Grayscale image effects with color on hover

#### 4. Interactive Elements
- [x] Smooth scrolling navigation
- [x] Modal system for projects and fellows
- [x] Form submission handling
- [x] Hover effects on project images
- [x] SVG animation on hero logo

#### 5. Responsive Design
- [x] Mobile breakpoints (768px, 575px)
- [x] Responsive project grid (3 columns → 2 → 1)
- [x] Responsive fellow grid (4 columns → 2)
- [x] Responsive typography
- [x] Responsive modal sizing

---

### 📋 TO DO - OPTIONAL ENHANCEMENTS

#### Potential Improvements
- [ ] **Add keyboard navigation for modals** (ESC to close, focus management)
- [ ] **Add loading states for images**
- [ ] **Improve form feedback** (replace alert with inline message)
- [ ] **Add form validation**
- [ ] **Add analytics tracking**
- [ ] **SEO meta tags optimization**
- [ ] **Open Graph tags for social sharing**
- [ ] **Add favicon** (beyond default)

---

### 📋 TO DO - FUTURE PHASES

#### Phase 2: Content Management (Optional)
**Note:** Current implementation uses hardcoded HTML. Consider if data-driven approach is needed.

- [ ] **Create Projects Content Collection**
  - [ ] Set up Astro content collection schema
  - [ ] Move project data to markdown/JSON files
  - [ ] Generate project modals dynamically
  - [ ] Easier to add/edit projects

- [ ] **Create Fellows Content Collection**
  - [ ] Set up Astro content collection schema
  - [ ] Move fellow data to markdown/JSON files
  - [ ] Generate fellow modals dynamically
  - [ ] Add fields for: title, email, research interests, etc.

#### Phase 3: Additional Features (Optional)
- [ ] **Blog/News Section**
  - [ ] Already have blog from template
  - [ ] Could add news about publications, conferences, etc.
  - [ ] RSS feed already configured

- [ ] **Publications/Working Papers**
  - [ ] List of research papers
  - [ ] Download links or DOI links
  - [ ] Citation information

- [ ] **Data/Downloads Section**
  - [ ] Patent databases
  - [ ] Code repositories
  - [ ] Documentation

- [ ] **Search Functionality**
  - [ ] Search across projects
  - [ ] Search across fellows
  - [ ] Search blog posts

#### Phase 4: Differential Aesthetic (Future)
**Note:** Address after core functionality is complete and you're ready to differentiate from digiTatti style

- [ ] Develop unique Patent History Lab visual identity
- [ ] Patent/innovation-themed design elements
- [ ] Custom illustrations or icons
- [ ] Interactive data visualizations
- [ ] Patent timeline or network visualizations
- [ ] Unique color scheme
- [ ] Alternative typography pairing

---

## Technical Implementation Notes

### Current Architecture
- **Single-page site** with anchor navigation (#projects, #fellows, etc.)
- **Modal-based** for detailed content (not separate pages)
- **Hardcoded content** in HTML (not database-driven)
- **Custom CSS** in `<style>` block in index.astro
- **Vanilla JavaScript** for interactions (no frameworks)

### Content Currently Hardcoded
**Projects (6):**
1. French Patent Database 1791-1900
2. Women Inventors in France
3. Patent Valuation Methods
4. Cross-Channel Innovation
5. Paris Exposition Universelle
6. Regional Innovation Networks

**Fellows (2):**
1. Faustine Perrin - Associate Professor
2. Youssouf Merouani - PhD candidate/researcher

**Funders (2):**
1. Handelsbankens forskningsstiftelser
2. NAISS (National Academic Infrastructure for Supercomputing)

---

## Design Decisions Made

### Typography
- **Body:** Source Code Pro (monospace) - academic, technical feel
- **Headings:** Roboto (sans-serif) - clean, modern
- **Special:** Baskerville (serif) - drop cap in bios (classic academic feel)

### Color Scheme (digiTatti-inspired)
- **Primary:** Black (#1a1a1a)
- **Background:** White (#ffffff) and light gray (#fafafa)
- **Text:** Grayscale with muted tones
- **Accents:** Color revealed on hover (grayscale → color)

### Layout Patterns
- **Section titles:** Large text with bottom border
- **Projects:** Masonry grid with variable tile sizes
- **Fellows:** Circular photos in row
- **Funders:** Grid of logo cards
- **Modals:** Centered, ample whitespace

---

## Next Steps Options

### Option A: Content Polish
- [ ] Review and refine project descriptions
- [ ] Add more projects/fellows as needed
- [ ] Update images with actual project/team photos
- [ ] Add more funders as needed

### Option B: Technical Improvements
- [ ] Add keyboard navigation for accessibility
- [ ] Improve form submission (backend integration)
- [ ] Add analytics
- [ ] Optimize images and performance

### Option C: Content Management System
- [ ] Convert to content collections (if you plan to add many projects/fellows)
- [ ] Create admin interface for easy updates
- [ ] Add search/filtering capabilities

### Option D: New Features
- [ ] Add publications section
- [ ] Add data downloads section
- [ ] Add blog for news/updates
- [ ] Add interactive visualizations

### Option E: Launch Preparation
- [ ] Deploy to production
- [ ] Set up domain
- [ ] Configure SSL
- [ ] Test thoroughly
- [ ] Announce launch

---

## Questions for Future Development

1. **Are you happy with the current hardcoded approach?** Or do you need a CMS for frequent updates?
2. **Do you want to integrate the contact form** with a backend service (Formspree, Netlify Forms, etc.)?
3. **Should we add analytics?** (Google Analytics, Plausible, etc.)
4. **Do you need a blog/news section?** Or is the static homepage sufficient?
5. **When are you planning to launch?** This helps prioritize features
6. **Where will the site be hosted?** (Lund servers, Netlify, Vercel, etc.)
7. **Do you have actual project images** to replace the Unsplash placeholders?
8. **Any additional fellows** to add beyond the current two?

---

## Deployment Checklist

- [x] Core content added (projects, fellows, about, funders, contact)
- [ ] Replace placeholder images with actual photos
- [ ] All links tested
- [x] Mobile responsive (basic implementation)
- [ ] Accessibility audit (keyboard navigation, ARIA labels)
- [ ] SEO meta tags optimization
- [ ] Analytics configured (if desired)
- [ ] Contact form backend integration
- [ ] Browser compatibility testing
- [ ] Performance optimization
- [ ] Final content review
- [ ] Deploy to production
- [ ] Domain configured
- [ ] SSL certificate configured

---

*Last Updated: 2026-01-28*
*Status: Phase 1 complete, core site structure functional*
