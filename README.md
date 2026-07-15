# Nolan Young Portfolio

Nolan Young’s one-page professional portfolio. It is a static React application that presents software development, integration, automation, AI workflow, analytics, infrastructure, and technical leadership work. The production site is published with GitHub Pages at [nolanyoungg.github.io/Nolan-Young-Portfolio](https://nolanyoungg.github.io/Nolan-Young-Portfolio/).

## How the repository is built

The app is built as a client-side React single page:

1. `src/main.tsx` creates the React root and loads the global stylesheet.
2. `src/App.tsx` controls the initial splash overlay and assembles the portfolio sections in page order.
3. Each section is a component under `src/components/` and imports its own ordinary CSS file.
4. `src/data/portfolio.ts` stores the navigation labels, metrics, case studies, capabilities, experience, and principles rendered by the page.
5. Vite compiles TypeScript, bundles JavaScript/CSS/assets, and writes the deployable static site to `dist/`.

There is no server, database, API route, or runtime environment required in production. GitHub Pages serves the generated files from `dist/`.

### Local commands

```bash
npm install
npm run dev
```

Vite prints the local address; in this project it normally includes the GitHub Pages base path:

```text
http://127.0.0.1:5173/Nolan-Young-Portfolio/
```

Run the checks used before deployment:

```bash
npm run lint
npm run build
```

Use `npm run preview` to serve the production build locally after `npm run build`.

## Framework and libraries

| Tool | Purpose |
| --- | --- |
| React 19 | Component rendering and state management. |
| TypeScript | Type-safe application code. |
| Vite | Local development server and production bundler. |
| Framer Motion | Entry animations, in-view motion, scroll progress, and splash fade-out. |
| Lottie React | Displays the JSON animation used by the splash screen. |
| Lucide React | Accessible SVG icons used throughout the portfolio. |
| ESLint | Static code-quality checks. |
| GitHub Actions + GitHub Pages | Continuous build and static-site deployment. |

Styling uses ordinary CSS only. Tailwind is not installed or configured. Each styled component owns a `.css` file beside its `.tsx` file, while `src/index.css` contains only global base styles, theme tokens, and reduced-motion behavior.

## Project structure

```text
.
├── .github/workflows/deploy.yml     # GitHub Pages workflow
├── public/                          # Files copied to the deployed site as-is
│   ├── Nolan-Young-Resume.pdf
│   └── favicon.svg
├── src/
│   ├── assets/lottie/               # Source animation data
│   │   └── splashAnimation.json
│   ├── components/                  # One directory per component
│   ├── data/portfolio.ts            # Portfolio content data
│   ├── App.tsx                      # Page composition and splash timer
│   ├── index.css                    # Global theme/base CSS
│   └── main.tsx                     # React entry point
├── index.html
├── package.json
└── vite.config.ts                   # Vite + GitHub Pages base path
```

## Components

Every component follows this pattern:

```text
src/components/ComponentName/
├── ComponentName.tsx
└── ComponentName.css
```

Behavior-only components can omit the CSS file. The existing splash component retains its established lowercase folder name: `src/components/splashScreen/`.

| Component | Responsibility |
| --- | --- |
| `AnimatedCounter` | Animates metrics when they enter the viewport and respects reduced-motion preferences. |
| `Background` | Fixed gradient, grid, and ambient glow behind the page. |
| `Capabilities` | Capability cards sourced from `portfolio.ts`. |
| `Contact` | Contact links and résumé call-to-action. |
| `Experience` | Career timeline and education panel. |
| `Hero` | Introductory section, profile metrics, calls to action, and glitch panel. |
| `Impact` | Measured business outcomes and animated metric cards. |
| `LetterGlitch` | Canvas-based animated character effect used by the hero. |
| `Navbar` | Desktop/mobile navigation, active-section tracking, and light/dark theme switch. |
| `Principles` | Engineering-principles grid. |
| `ScrollProgress` | Framer Motion scroll-position indicator. |
| `SectionHeader` | Reusable eyebrow, heading, and supporting copy block. |
| `SelectedWorkV2` | Case-study cards sourced from `portfolio.ts`. |
| `splashScreen/SplashScreen` | Full-screen Lottie overlay shown for 2000 ms when the app first loads. |

### Updating content

Most text and repeated content belongs in `src/data/portfolio.ts`. Update that file for navigation labels, metrics, capability descriptions, case studies, experience records, or principles. Update a component directly only when changing layout, markup, interaction, or a component-specific call to action.

The résumé is served from `public/Nolan-Young-Resume.pdf`. Access it through `import.meta.env.BASE_URL` in React so links work on the GitHub Pages project URL.

## Adding a component

1. Create a component directory with a descriptive PascalCase name:

   ```text
   src/components/Testimonial/Testimonial.tsx
   src/components/Testimonial/Testimonial.css
   ```

2. Import the CSS from the component and use semantic, component-prefixed class names:

   ```tsx
   import './Testimonial.css'

   export function Testimonial() {
     return <section className="testimonial">...</section>
   }
   ```

3. Add styles only to `Testimonial.css`; do not add one-off section styles to `index.css`.
4. Import and render the component in `src/App.tsx` at the required point in the page order.
5. If it needs a navigation link, add the section `id` and a matching entry to `navItems` in `src/data/portfolio.ts`.
6. Run `npm run lint` and `npm run build` before committing.

## Splash screen behavior

`App.tsx` starts with `showSplash` set to `true` and starts a 1000 ms timer after mount. During that interval, only `SplashScreen` is rendered. It uses `useLottie` with `src/assets/lottie/splashAnimation.json`, a stable responsive square animation region capped at 50vh, and the bundled Agustina typeface. When the timer completes, the splash unmounts and the portfolio mounts normally.

## GitHub Pages workflow

The workflow is `.github/workflows/deploy.yml`. It runs whenever a commit is pushed to `main`, or manually from the Actions tab.

1. GitHub checks out the repository.
2. It installs Node.js 22 and restores the npm cache.
3. `npm ci` installs exactly the versions pinned in `package-lock.json`.
4. `npm run build` validates TypeScript and produces `dist/`.
5. The workflow uploads `dist/` as the GitHub Pages artifact.
6. The deploy job publishes that artifact to GitHub Pages.

The Vite `base` setting is `/Nolan-Young-Portfolio/`. Keep it aligned with the repository name unless the site moves to a custom domain or a different Pages project path.

To publish a change:

```bash
git status
npm run lint
npm run build
git add .
git commit -m "Describe the change"
git push origin main
```

Then open the repository’s **Actions** tab and confirm the latest `Deploy to GitHub Pages` workflow completes successfully. GitHub Pages should be configured with **Settings → Pages → Source: GitHub Actions**.

## Maintenance guidelines

- Keep global reset, tokens, and page-wide theme rules in `src/index.css`.
- Keep visual rules co-located with the component they style.
- Prefer `src/data/portfolio.ts` for content changes instead of duplicating content in JSX.
- Keep assets only when imported by source code or intentionally served from `public/`.
- Do not commit `dist/` or `node_modules/`.
- Verify the initial splash, desktop/mobile navigation, theme switch, resume link, and section anchors after meaningful visual changes.
