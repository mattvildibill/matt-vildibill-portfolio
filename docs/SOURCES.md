# Source provenance

Inspected 2026-09-24. Only the six repositories authorized for this project were inspected.

| Repository | Inspected revision | Evidence |
| --- | --- | --- |
| mattvildibill/gravity-unscripted | c59f5f1ab44ccba6a450574901e174b506227d76 | Runtime modules, datasets, README, source notes, regression harness |
| mattvildibill/F1-live-tracker | fc268aa1afb13b44830de42558ad46bda4def0ff | React components, hooks, simulator, data utilities, README, package/build config |
| mattvildibill/fabric-reality-lab | 1012577226693575b37c28b3ab6455eecdc610ef | One README; no other branches or implementation |
| mattvildibill/denver-spire-explorer | ca6b570879edf27168c1f63dcb15972fa7e8f5fc | One README; no other branches or implementation |
| mattvildibill/fort-collins-worlds | e79aa177039adb8cbf09e083780367401e272c82 | One README; no other branches or implementation |
| mattvildibill/painted-worlds | 069be5c2ff9ff973a6b225060de7f24089c0dbb5 | One README; no other branches or implementation |

## Integration

Gravity's `dist/` is authored runtime source, as its README explicitly notes. Its local copy changes only root-relative asset, import-map, download, worker, and data paths to `/demos/gravity/`. The original source repository remains unchanged. `public/data/orbits.json` is a subset of the original saved DOP853 trajectory data; the portfolio renders its 2D coordinates with approximate animation between saved frames. It does not claim to perform a new solver calculation.

F1 is built with `npm ci` and `npm run build -- --base=/demos/f1/`. During review, the substring `red flag` was found inside `chequered flag`, causing incorrect stoppage states and badges. Whole-word matching and a completion reset were committed to the allowed F1 repository in **3cde5f2225bef3878ed17ed028655ade8b83639c**, with three regression tests. This corrected revision is the portfolio's bundled F1 source.

The F1 preview is a real screenshot of that simulator at lap 28, not live timing or a generated mockup. Its data should not be treated as authenticated historical results. The F1 API and authentication requirements were not independently verified; portfolio copy makes no free-live-access promise.

## Claim-to-code map

- Gravity adaptive solver: `dist/physics.mjs`
- Gravity tighter rerun: `dist/solver-worker.mjs`
- Gravity view modes: `dist/scene.mjs`
- Gravity guided/watch flow: `dist/app.mjs`
- F1 polling and fallbacks: `src/hooks/useOpenF1.ts`
- F1 deterministic fixtures: `src/mocks/australianGP2026.ts`
- F1 cumulative lap-time simulation: `src/hooks/useRaceSimulator.ts`
- F1 estimated ERS: `src/hooks/useErsEstimator.ts`
- F1 championship feed: `src/hooks/useJolpica.ts`

Gravity documents ChatGPT-assisted development. No employment history, impact metrics, adoption counts, or unaided-authorship claims were invented. The four README-only projects are presented explicitly as descriptions, not verified implementations.
