# Portfolio review

## Recruiter perspective

- Name and engineering focus appear in the first viewport.
- Two runnable projects lead; each explains the experience before technical details.
- Primary demo actions and source links are adjacent.
- Four incomplete source exports are clearly separated and labeled; no fictional screenshots, stacks, or performance claims.
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
- Demo applications open separately, keeping the portfolio easy to return to.

## Verification and limits

- Portfolio TypeScript check and production build.
- Browser review of orbit tabs, pause/play, project navigation, expandable details, F1 screenshot, and F1 simulator.
- F1 production build plus three focused race-status tests.
- Nested demo asset paths corrected and checked.
- Browser WebGL is disabled in this environment: Gravity's full 3D rendering could not be visually certified. Its graceful failure state was observed; the portfolio's Canvas 2D preview was visually tested. A WebGL-enabled browser is required for the full lab.
- No real-phone touch testing or full screen-reader audit; no claim that all source projects have production-level test coverage.
- Live F1 APIs were not load-tested or used to validate external race facts.
