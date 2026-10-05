# Vercel deployment

Production domain: https://mattvildibill.com
Source: https://github.com/mattvildibill/matt-vildibill-portfolio
Production branch: `main`.

`vercel.json` records the framework, build and output settings. This repository is connected to its own Vercel project; retain that Git connection. Vercel builds each push to `main`; other branches receive previews. No manual asset copy or Sites publishing is needed. The production branch is `main`. Migration was completed on September 29, 2026; Vercel reported successful deployments for all seven repositories.

Use Node.js 24. Run `npm ci` when a lockfile is present, then `npm run build`. No application secrets or database are required. Never commit `.env` files or Vercel credentials.

The portfolio opens each application directly on its own custom domain in a new browser tab. Each project owns its runtime and assets. The gallery is server-rendered and uses native expandable engineering notes; no project iframes or simulation runtimes are loaded into the portfolio. Original project attributions and model boundaries are retained.

Existing ChatGPT-hosted versions have not been deleted or redirected. They remain active in Sites for existing shared links. New updates should be made in these GitHub repositories and deployed by Vercel; the legacy copies are retained for compatibility. If redirects are later installed on old hosts, preserve paths and query parameters.

## Repository and domain map

| Repository | Domain |
|---|---|
| `matt-vildibill-portfolio` | `mattvildibill.com` |
| `gravity-unscripted` | `gravity.mattvildibill.com` |
| `fabric-reality-lab` | `fabric.mattvildibill.com` |
| `denver-spire-explorer` | `denver.mattvildibill.com` |
| `fort-collins-worlds` | `fort-collins.mattvildibill.com` |
| `painted-worlds` | `painted.mattvildibill.com` |
| `F1-live-tracker` | `f1.mattvildibill.com` |

`www.mattvildibill.com` belongs to the portfolio project and uses a permanent 308 redirect to `mattvildibill.com`. The apex already delegates DNS to Vercel nameservers. Verify the exact domain configuration in Vercel; do not replace mail or verification records.

The old `/demos/<project>/...` paths on the portfolio origin redirect to the corresponding project domain. The historical Sites hosts remain independent until their own redirects are deliberately published. Sites reports them active; direct verification requests from this environment returned HTTP 403, so access from previously shared links was not independently confirmed.

## Maintaining production

1. Clone the relevant GitHub repository. Make changes on a feature branch and run its documented build/check commands.
2. Push the branch for a Vercel preview. Review the result before merging.
3. Merge into `main`; Vercel builds and updates that project automatically. No upload from ChatGPT is required.
4. If a release causes a regression, revert the Git commit. Vercel will deploy the revert. Its Instant Rollback can restore a previously working deployment while a fix is prepared.

The portfolio project contains the gallery and preview images. It does not contain copies of the six applications. Edit `app/projects.ts` to change their descriptions, source links or production URLs. All live-project links open the standalone custom domain in a new tab.

DNS is managed by the existing Vercel nameservers. The apex and six subdomains are attached to their corresponding Production environments. `www` uses a Vercel 308 redirect to the apex, preserving paths and query parameters. No registrar changes, paid upgrade, application secrets or database were needed for this migration. Existing mail and verification records were not altered.

## Migration verification (September 29, 2026)

- All seven GitHub commits received successful Vercel deployment statuses.
- The apex and all six project subdomains returned HTTP 200 over verified HTTPS.
- `www` returned 308 to the apex, including a path/query-string check. Legacy `/demos/...` redirects preserve the destination path and query string.
- All six application shells opened inside the portfolio; closing removes the iframe. Fort Collins scenarios, the Painted Worlds original-art gallery and the F1 simulator were exercised.
- Sample city geometry, aerial imagery, painting textures, the Gravity worker and the Fabric offline bundle returned successfully with correct content types.
- The verification browser has WebGL disabled. It exercised the non-WebGL fallback states; hardware-accelerated 3D rendering and real-device frame rates are not certified by this check.
- F1 live mode depends on its upstream data services; simulation mode opens without API calls.

Only the six project repositories in the table and `matt-vildibill-portfolio` were modified for this migration.
