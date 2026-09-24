# Matt Vildibill — Interactive Systems

[Open the portfolio](https://matt-vildibill.boldfacecupid58.chatgpt.site)

A personal portfolio built around inspectable software: numerical simulation, data interfaces, and explorable environments.

## Run

Node.js 22.13+ (Node 24 recommended).

```sh
corepack pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm exec tsc --noEmit
pnpm build
```

The first `pnpm dev` or `pnpm build` automatically restores the remaining world assets from the checked-in `demo-assets/` bundles. No asset download or access to the original Sites is required. `pnpm setup:demos` can restore them explicitly. Checksums are verified, and existing modified files are preserved.

React, TypeScript, Vinext/Vite, and Cloudflare Workers. The portfolio does not require API keys or a database. The included F1 application's live mode uses external APIs; its default simulator runs locally.

## Project content

- **Gravity, Unscripted:** animated portfolio preview from the repository's actual saved trajectory data; full laboratory bundled at `/demos/gravity/index.html`.
- **F1 Live Tracker:** actual application screenshot and bundled simulator at `/demos/f1/index.html`.
- **Fabric Reality Lab:** standalone network simulator with guided experiments.
- **Denver Spire Explorer:** GIS-based walk/fly city explorer.
- **Fort Collins Worlds:** geographic city and rule-based scenario comparison.
- **Painted Worlds:** nine authored worlds and a 61-painting garden collection.

All six can be launched inside the portfolio. The four initially incomplete GitHub exports were recovered from their corresponding original hosted source; see [recovery notes](docs/RECOVERY.md).

See [source provenance](docs/SOURCES.md) for exact source revisions, local integration changes, and asset attribution. See [review notes](docs/REVIEW.md) for verification and limits.

## Structure

- `app/gallery.tsx` — on-demand iframe lifecycle, project selection, fullscreen and restart
- `app/projects.ts` — source-grounded descriptions and model boundaries
- `app/page.tsx` — portfolio content, evidence links, and semantic structure
- `app/orbit.tsx` — Canvas 2D trajectory viewer; Radix-based tabs, pause/play, reduced-motion support
- `app/globals.css` — responsive editorial design
- `public/data/orbits.json` — selected saved trajectories
- `public/demos/` — pinned application snapshots
- `public/images/f1-preview.webp` — actual F1 simulator screenshot

The portfolio is intentionally self-contained so its six demos do not depend on another deployment's permissions or URL stability. Snapshots are not automatically synchronized with upstream repositories. The original six repositories are the only project sources used.

## Publishing

`pnpm build` produces Cloudflare-compatible output. Sites publication is handled separately from GitHub source storage; this repository is not an automatic deployment pipeline. The public repository's hosting manifest intentionally omits deployment identity. Use a new Site identity to publish your own copy.

No blanket license is assigned to copied project assets. Third-party notices are preserved in `public/demos/gravity/` and bundled dependency licenses remain applicable. Public visibility alone is not a redistribution license.
