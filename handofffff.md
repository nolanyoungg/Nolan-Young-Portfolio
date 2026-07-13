# Nolan Portfolio Project Handoff

This document exists so Nolan, Codex, or another developer can reopen this project later and immediately understand what was built, where it lives, how it deploys, and how to maintain it.

## Current Status

The portfolio project has been created, built, committed, pushed to GitHub, and configured for GitHub Pages deployment.

Local project path:

```text
/Users/nolany/codex/nolan-portfolio-wow
```

GitHub repository:

```text
https://github.com/nolanyoungg/nolan-portfolio-wow
```

Expected GitHub Pages URL:

```text
https://nolanyoungg.github.io/nolan-portfolio-wow/
```

The project is a polished one-page portfolio for Nolan Young. It presents Nolan as a full-stack software developer, web platform engineer, automation builder, AI integration specialist, and technical/IT leader.

## Stack

The project uses:

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- GitHub Actions
- GitHub Pages

There is no backend. This is a static frontend app that builds into a `dist/` folder and deploys through GitHub Pages.

## Important Commands

Start local development:

```bash
cd /Users/nolany/codex/nolan-portfolio-wow
npm run dev
```

Open the local site at the URL Vite prints, usually:

```text
http://localhost:5173/
```

or:

```text
http://127.0.0.1:5173/
```

Stop the dev server:

```text
Control + C
```

Run a production build:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Commit and push changes:

```bash
git status
git add .
git commit -m "Update portfolio"
git push
```

Pull changes made on GitHub into the local machine:

```bash
git pull
```

## Git And Deployment

The repo remote is:

```text
origin https://github.com/nolanyoungg/nolan-portfolio-wow.git
```

The project deploys through this workflow:

```text
.github/workflows/deploy.yml
```

Deployment behavior:

- Pushing to the `main` branch triggers GitHub Actions.
- GitHub Actions runs `npm ci`.
- It runs `npm run build`.
- It uploads the `dist/` folder as a GitHub Pages artifact.
- GitHub Pages serves the built site.

GitHub Pages should be configured in the repo settings:

```text
Settings > Pages > Build and deployment > Source: GitHub Actions
```

If the live site does not update after a push, check:

```text
GitHub repo > Actions > Deploy to GitHub Pages
```

Look for failed workflow runs. The most likely causes are TypeScript errors, lint/build errors, or a malformed JSX edit.

## GitHub Authentication Notes

Nolan pushed using the GitHub username:

```text
nolanyoungg
```

GitHub no longer accepts account passwords for Git pushes over HTTPS. Use a GitHub Personal Access Token as the password when prompted.

The token needs these scopes for this repo:

- `repo`
- `workflow`

The `workflow` scope is required because the project contains:

```text
.github/workflows/deploy.yml
```

If GitHub says a workflow file cannot be pushed, update the token to include `workflow`.

If macOS caches a bad or old token, erase it:

```bash
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase
```

Then push again and paste the updated token.

## Project Structure

High-level project structure:

```text
nolan-portfolio-wow/
  .github/
    workflows/
      deploy.yml
  notes/
    PROJECT_HANDOFF.md
  public/
    favicon.svg
  src/
    components/
    data/
      portfolio.ts
    App.tsx
    index.css
    main.tsx
  index.html
  package.json
  vite.config.ts
```

Core app entry points:

- `src/main.tsx` mounts the React app.
- `src/App.tsx` assembles the page sections.
- `src/index.css` contains Tailwind import and global base styling.
- `vite.config.ts` configures Vite, React, Tailwind, and GitHub Pages asset behavior.

## Most Important File For Content Updates

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

This file contains structured arrays for:

- Navigation items
- Impact metrics
- Featured projects
- AI capabilities
- AI workflow steps
- Skill categories
- Experience timeline
- Technical philosophy principles

If Nolan wants to change text, metrics, project descriptions, skills, or experience bullets, start with this file.

## Component Guide

The app is intentionally componentized. Each major section has its own component.

### `src/App.tsx`

Assembles the page in order:

1. `ScrollProgress`
2. `BackgroundEffects`
3. `Navbar`
4. `Hero`
5. `ImpactMetrics`
6. `FeaturedProjects`
7. `AISystems`
8. `SkillMatrix`
9. `ExperienceTimeline`
10. `TechnicalPhilosophy`
11. `Contact`

Change section order here if the page flow needs to change.

### `src/components/Navbar.tsx`

Controls the sticky/floating navigation.

Features:

- Desktop nav links
- Mobile hamburger menu
- Active section scroll spy
- Smooth anchor navigation through section IDs

If a new section is added, also update `navItems` in `src/data/portfolio.ts`.

### `src/components/Hero.tsx`

Controls the above-the-fold hero.

Includes:

- Nolan Young identity
- Full-stack headline
- Web platform engineer line
- Automation and AI integration specialist line
- CTA buttons
- Built-with strip
- Animated terminal/code panel
- Hero metrics
- Resume link

The resume link uses:

```ts
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`
```

This is important for GitHub Pages. Do not change it back to `/resume.pdf` unless the site is deployed at the root of a custom domain.

### `src/components/ImpactMetrics.tsx`

Displays the metric dashboard.

Metrics come from:

```text
src/data/portfolio.ts
```

Uses `AnimatedCounter` for scroll-triggered numbers.

### `src/components/FeaturedProjects.tsx`

Renders the featured project grid.

Project data comes from:

```text
src/data/portfolio.ts
```

Each project card is rendered by:

```text
src/components/ProjectCard.tsx
```

### `src/components/AISystems.tsx`

Renders the AI systems section.

Includes:

- AI capability cards
- Business workflow framing
- A flow diagram:

```text
Customer question -> AI answer attempt -> knowledge base lookup -> service routing -> human handoff -> ticket/workflow creation -> internal follow-up
```

The capabilities and flow steps come from:

```text
src/data/portfolio.ts
```

### `src/components/SkillMatrix.tsx`

Displays skill categories and technology pills.

Skill groups come from:

```text
src/data/portfolio.ts
```

### `src/components/ExperienceTimeline.tsx`

Displays experience and education.

Experience data comes from:

```text
src/data/portfolio.ts
```

Education is currently hardcoded in the component:

```text
Computer Science A.S.
SUNY Adirondack
September 2022 to May 2024
```

Relevant coursework:

- Data Structures and Objects in C++
- Computer Systems
- Calculus I and II
- Linear Algebra
- Discrete Mathematics

### `src/components/TechnicalPhilosophy.tsx`

Displays Nolan's engineering principles.

Principles come from:

```text
src/data/portfolio.ts
```

### `src/components/Contact.tsx`

Displays the final contact CTA and about paragraph.

Includes:

- Email link
- Location
- GitHub placeholder
- LinkedIn placeholder
- Resume download button

Current email:

```text
nolanyoung7@yahoo.com
```

Current location:

```text
Queensbury, NY
```

The GitHub and LinkedIn URLs are placeholders and should be replaced later.

### `src/components/BackgroundEffects.tsx`

Controls visual background effects:

- Deep navy/cyan radial gradients
- Subtle animated grid
- Soft blue glow elements
- Cursor/spotlight effect

This is mostly visual. Be careful with heavy animation changes here.

### `src/components/AnimatedCounter.tsx`

Reusable metric counter.

Uses Framer Motion and respects reduced-motion preferences through `MotionConfig` in `App.tsx`.

## Current Portfolio Content

Identity:

- Name: Nolan Young
- Location: Queensbury, NY
- Headline: Full-Stack Software Developer | Web Platform Engineer | Automation & AI Integration Specialist

Positioning:

```text
I build scalable web platforms, custom APIs, automation systems, and AI-powered workflows that turn messy business operations into clean, reliable software.
```

Actual metrics used:

- 90% fewer sync errors
- 60% lead growth
- $7.5M+ added revenue impact
- 150+ devices managed
- 99.9% uptime

Featured projects:

- eCommerce + Backend Inventory Sync System
- High-Converting WordPress / WooCommerce Platform
- AI Chatbot & Customer Support Automation
- Internal AI Agent for Employee Workflow Reduction
- Analytics Migration & Tracking Architecture
- Enterprise IT Management & Security Operations

Experience:

- Full Stack Developer & IT Director, Grasshopper Gardens, February 2024 to Present
- Project Manager, Young's Home Improvement, June 2017 to Present
- Landscape Engineer, Grasshopper Gardens, November 2023 to February 2024

Education:

- Computer Science A.S., SUNY Adirondack, September 2022 to May 2024

## How To Change Content

For simple text changes:

1. Open `src/data/portfolio.ts`.
2. Edit the relevant item.
3. Run `npm run dev` to preview.
4. Run `npm run build` to verify.
5. Commit and push.

Example:

```bash
cd /Users/nolany/codex/nolan-portfolio-wow
npm run dev
```

Then edit:

```text
src/data/portfolio.ts
```

After confirming the site looks right:

```bash
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

## How To Change GitHub Or LinkedIn Links

Edit:

```text
src/components/Contact.tsx
```

Find the placeholder URLs:

```tsx
href="https://github.com/"
href="https://www.linkedin.com/"
```

Replace them with Nolan's actual profile URLs.

Then:

```bash
npm run build
git add .
git commit -m "Update contact links"
git push
```

## How To Add The Resume PDF

Add Nolan's actual resume PDF at:

```text
public/resume.pdf
```

The filename should be exactly:

```text
resume.pdf
```

The download buttons already point to that file using GitHub Pages-safe paths.

Then:

```bash
git add public/resume.pdf
git commit -m "Add resume PDF"
git push
```

## How To Edit Directly On GitHub

This is safe for small text updates.

Go to:

```text
https://github.com/nolanyoungg/nolan-portfolio-wow
```

Then open:

```text
src/data/portfolio.ts
```

Click the pencil icon and edit the file.

Commit directly to `main`.

GitHub Pages will rebuild automatically.

After editing on GitHub, sync the local copy:

```bash
cd /Users/nolany/codex/nolan-portfolio-wow
git pull
```

Important: if code is edited directly on GitHub and a TypeScript syntax error is introduced, the deploy can fail. For bigger changes, edit locally and run `npm run build` before pushing.

## Design Direction

The visual direction is premium blue software portfolio:

- Deep navy background
- Electric blue and cyan accents
- Glassmorphism cards
- Subtle gradients
- Animated blue grid
- Soft glow effects
- Technical terminal/card visuals
- Professional SaaS-like layout
- Responsive one-page structure

The design should stay professional and technical. Avoid turning it into a generic resume page, a childish animation-heavy page, or a basic Bootstrap-style layout.

## Accessibility And Performance Notes

The project uses:

- Semantic section structure
- Real anchor links
- Keyboard-accessible links/buttons
- Sufficient color contrast for the dark palette
- Reduced-motion support through Framer Motion's `MotionConfig`
- Lightweight CSS gradients instead of large image backgrounds

Before pushing meaningful design changes, run:

```bash
npm run build
npm run lint
```

## Vite And GitHub Pages Asset Notes

`vite.config.ts` currently includes:

```ts
base: './'
```

This makes built assets work under a GitHub Pages project URL like:

```text
https://nolanyoungg.github.io/nolan-portfolio-wow/
```

Do not remove this without testing deployment.

The favicon path in `index.html` uses:

```html
%BASE_URL%favicon.svg
```

This is also GitHub Pages-friendly.

## Known Placeholders

These should be replaced later:

- GitHub profile URL in `src/components/Contact.tsx`
- LinkedIn profile URL in `src/components/Contact.tsx`
- Actual resume PDF at `public/resume.pdf`

No phone number is displayed. This was intentional.

## If A Future Codex Session Opens This Project

Start by reading this file:

```text
notes/PROJECT_HANDOFF.md
```

Then inspect:

```bash
cd /Users/nolany/codex/nolan-portfolio-wow
git status --short
git log --oneline -5
```

If the user asks for content changes, start with:

```text
src/data/portfolio.ts
```

If the user asks for visual or layout changes, inspect the relevant component in:

```text
src/components/
```

Always run:

```bash
npm run build
```

before pushing.

## Recommended Change Workflow

For any future update:

```bash
cd /Users/nolany/codex/nolan-portfolio-wow
git pull
npm run dev
```

Make edits.

Then verify:

```bash
npm run build
npm run lint
```

Commit and push:

```bash
git status
git add .
git commit -m "Clear description of change"
git push
```

GitHub Pages will update automatically after the workflow completes.
