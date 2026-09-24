# Portfolio review

## Recruiter perspective

- Name and engineering focus appear in the first viewport.
- All six runnable projects appear in the visual gallery before the shared workbench; each leads with its purpose.
- Primary demo actions and source links are adjacent.
- The four incomplete GitHub exports were recovered from original hosted source; source provenance and thumbnail origins are documented.
- No speculative employer, contact address, credentials, or resume content.

## Senior engineer perspective

- Reviewed implementation files, not only READMEs.
- Source links point to numerical, worker, rendering, polling, simulation, and estimation code.
- Model limits are explicitly distinguished from UI capabilities.
- Demos are pinned and bundled; scientific preview uses actual source data.
- Fixed the F1 chequered/red flag parsing bug across status, header, control badges, radio, and alerts; status regression tests pass.
- Gravity's existing mocked-DOM regression harness passes, including two real solver runs. It is not a WebGL visual test.

## Product design perspective

- Dark ink palette, acid-lime accents, large restrained typography, and a real trajectory visualization establish a project-led visual direction.
- Desktop plus 390px and 320px viewport review; responsive stack and narrow-screen control spacing.
- Semantic headings and links, skip navigation, keyboard tabs, focus treatment, pause control, and reduced-motion startup behavior.
- Technical details are progressive disclosures rather than walls of text.
- Demo applications launch in one shared frame with restart, close, fullscreen, and separate-tab options. Only one runtime mounts at a time.

## Verification and limits

- Portfolio TypeScript check and production build.
- Browser review of orbit tabs, pause/play, project navigation, expandable details, F1 screenshot, and F1 simulator.
- F1 production build plus three focused race-status tests.
- Nested demo asset paths corrected and checked.
- Browser WebGL is disabled in this environment: Gravity's full 3D rendering could not be visually certified. Its graceful failure state was observed; the portfolio's Canvas 2D preview was visually tested. A WebGL-enabled browser is required for the full lab.
- No real-phone touch testing or full screen-reader audit; no claim that all source projects have production-level test coverage.
- Live F1 APIs were not load-tested or used to validate external race facts.

## Six-project expansion verification

- Actual Fabric simulator: walkthrough, Explore, and pause control exercised; software renderer visible inside the portfolio iframe.
- Fort Collins: Green streets and Compare switch to a defined scenario and show the comparison slider, including in aerial fallback mode.
- Painted Worlds: fallback painting collection, search filtering to Lily Lake, and full artwork dialog exercised.
- Denver: full embedded data resolves into the footprint fallback; source interaction harness passes after extracting its documented runtime cache.
- Painted Worlds experience verification passes (settings, source-frame fitting, tour progress, collection filters).
- Fort Collins validator passes (geographic assets, scenario composition/negation, geometry orientation and protected buildings).
- Switching and closing were checked: the previous iframe is removed, with zero frames before a new launch.
- Browser lacks WebGL; GPU rendering of the three worlds is included but was not visually re-certified. Native fallbacks were observed.

- GitHub asset bundle restore tested in a clean folder: all 388 unpacked files match the published source byte-for-byte, with a successful cached second run. Dev/build invoke the Node-only restorer automatically.
