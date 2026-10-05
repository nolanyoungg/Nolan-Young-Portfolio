# Projects

`Projects.tsx` renders `#projects` between Impact and Selected Work. Its visual reference is the [Magic UI portfolio's My Projects section](https://portfolio-magicui.vercel.app/#projects), inspected on October 5, 2026.

The component uses the reference's 624px content width, two-column grid from 640px, 12px gaps and corner radii, 192px video panels, 24px card padding, Geist typeface, outlined technology tags, and subtle hover ring. Its entrance uses a 6px upward offset and blur, a 0.4-second ease-out transition, and 0.05-second card staggering. Entrances run once as content enters view. The section uses the portfolio's existing theme colors and lets its blue page background show through.

## Replace the samples

Edit `src/data/projects.ts`. The four current projects are explicitly fictional sample concepts, with original animated UI demos rather than footage of completed client projects.

- Replace the title, period, description, and technology tags.
- Set `video` and `poster` to paths relative to `public/`.
- Website and Source chips always appear on every card. They are disabled with a coming-soon tooltip until their URLs are supplied.
- Add `website` to activate the Website chip and link the video/title arrow to that website. Without it, the video/title arrow opens the local MP4 in a new tab.
- Add `source` to activate the Source chip linking to a real repository.

Paths use `import.meta.env.BASE_URL`, so the media also works under the GitHub Pages project path. No external video service is required.

## Playback and accessibility

Previews are silent, loop inline, and start when visible. They pause offscreen and when the browser tab is hidden. Each card has a play/pause button available on hover, keyboard focus, and touch. Reduced-motion users initially see static posters and can explicitly play a preview. Keyboard focus also reveals the card outline and playback control. A failed video retains its poster and displays a short status.

## Regenerate the media

The four 960×600, eight-second H.264 MP4s and WebP posters live in `public/videos/projects/`. Their original drawing/animation source is `scripts/generate-project-previews.py`.

```powershell
python -m pip install Pillow imageio-ffmpeg
python scripts/generate-project-previews.py
```

Python and these packages are optional authoring tools. `npm run build` uses the checked-in assets directly. The generator uses Segoe UI on Windows or DejaVu Sans on Linux, with a Pillow fallback. It creates silent UI animation with no third-party footage, remote images, or APIs.

Geist is locally bundled in `src/assets/fonts/GeistLatin.woff2`. Its SIL Open Font License is included in `public/licenses/Geist-OFL.txt` so it also ships with the production build.

```powershell
npm run format:check
npm run lint
npm run build
```
