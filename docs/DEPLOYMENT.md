# Deployment

Production: https://mattvildibill.com

The portfolio and each application have independent Vercel projects connected to their GitHub repositories. Production uses `main`; changes on another branch can be reviewed before merging. This document describes the intended deployment architecture, not a claim that a new deployment has been performed.

| Repository | Domain |
| --- | --- |
| `matt-vildibill-portfolio` | `mattvildibill.com` |
| `painted-worlds` | `painted.mattvildibill.com` |
| `fabric-reality-lab` | `fabric.mattvildibill.com` |
| `gravity-unscripted` | `gravity.mattvildibill.com` |
| `denver-spire-explorer` | `denver.mattvildibill.com` |
| `F1-live-tracker` | `f1.mattvildibill.com` |
| `fort-collins-worlds` | `fort-collins.mattvildibill.com` |

## Portfolio delivery

Use Node.js 24, `npm ci`, and `npm run build`. The portfolio is server-rendered; each app opens in a separate tab. No iframe, world assets, simulation runtime, application secret or database is loaded into the gallery.

`vercel.json` retains the `www` to apex redirect and the old `/demos/<project>/...` redirects to each application's domain. Paths and query parameters need to survive compatibility redirects. Keep existing mail and verification records when managing DNS.

## Updating

1. Make changes on a branch and run the documented checks.
2. Check the preview, including mobile layout and the project launch links.
3. Merge to `main` when ready; the configured Git integration builds that repository.
4. If needed, revert the relevant commit or use the host's deployment rollback. Do not overwrite unrelated local changes.

The portfolio's new launch links should be released after, or alongside, the app changes that support them:

- Painted: `/?view=collection`; `/#lily-lake` for a painting walk.
- F1: `/?mode=demo&panel=tower&time=120`, explicitly synthetic and paused.
- Fort Collins: `/?preset=green` for the Green streets scenario.
- Denver: `/?view=map` for the 2D overview.

Check the relevant project's README for its complete sharing/state contract. A portfolio change does not deploy or update an app automatically.

Legacy hosted copies may still serve old shared links. Their compatibility/security allowances belong to the individual projects; do not remove them by a global text replacement. No live DNS or hosting change is required by the local portfolio implementation.
