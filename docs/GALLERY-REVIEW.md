# Gallery-first portfolio review — 2026-09-24

## Changes

- Removed the gravity hero and its automatic animation from the landing page. Six project cards now lead the page; all six fit the reviewed desktop opening and 390/320 × 844 narrow layouts.
- Images launch applications immediately. Project titles retain access to factual technical details and source links.
- Replaced the constrained inline iframe and browser-dependent fullscreen control with a full-window Radix dialog. The viewer has a persistent close button, restart and separate-tab links, keyboard dismissal, focus restoration, and scroll locking. Only one application is mounted; closing removes its iframe.
- Added a small, same-origin integration adapter and stylesheet. Hints describe the actual fallback in use. Nested app dialogs retain their Escape behavior. Gravity initialization failure shows a retry/download panel instead of inactive controls and placeholder evidence.
- Fort Collins fallback no longer constructs terrain meshes, buildings, trees, street furniture, lighting, and animated traffic that its 2D renderer cannot use. The geographic collider data and scenario behavior remain available; the WebGL construction branch is retained.
- Denver fallback retry button now has readable contrast. Fort Collins scenario inputs and presets are more usable on phones.
- F1 playback buttons and form controls have larger touch targets, muted text has stronger contrast, and mobile cockpit panels stack vertically with scrollable standings instead of collapsing under the tyre panel.

## Browser checks

Desktop viewport approximately 1363 × 936; narrow layouts rendered in 390- and 320-pixel iframes at 844 pixels high. These are responsive-layout checks, not physical-phone tests.

- Fabric: opened walkthrough, entered the lab, observed changing simulation results, and paused playback. Desktop full-window layout and narrow layout inspected.
- Denver: footprint map, landmark list, fallback explanation and retry contrast inspected, including narrow width.
- Fort Collins: initialization, Green streets, Compare and its divider verified at desktop and narrow width after the fallback change.
- Painted Worlds: searched Lily, observed 1 of 61 results, and opened the full Lily Lake artwork on desktop and 320-pixel layout.
- Gravity: observed the WebGL initialization failure and verified the concise retry/download screen at desktop and 320-pixel width.
- F1: started simulation, observed laps and timing updates, opened telemetry, inspected mobile playback controls, and verified stacked mobile standings after the layout correction.
- Closing an application removes the iframe (count 0) and restores focus to its launch button. The gallery loads with no active application.

## Performance evidence and limits

The cloud test browser cannot create a WebGL context. Fabric's software renderer, the Denver map, Fort Collins aerial view, and Painted Worlds art gallery were reviewed. GPU rendering, frame pacing of the 3D worlds, and Gravity's full laboratory were not certified.

A temporary, same-origin performance harness sampled 180 visible-tab requestAnimationFrame callback intervals after 60 warm-up callbacks for the optimized Fort Collins aerial fallback at 1200 × 760. Median interval: 16.7 ms; 95th percentile: 16.8 ms; maximum: 33.4 ms. No observed long tasks exceeded 50 ms. These are a short browser responsiveness sample, not GPU frame-rate measurements or a guarantee on other devices. The temporary harness is excluded from the shipped site.

Source review confirmed existing pixel-ratio limits and hidden-document guards in the city/world rendering paths. The portfolio itself does not run background demos or an animated hero. F1 simulator mode avoids live API requests; upstream live-service performance was not tested.

## Final perspective review

Recruiter: the opening communicates the breadth of six projects before any interaction, with short descriptions and direct launch paths.

Engineer: technical details and provenance remain accessible; integration logic is isolated from project descriptions; initialization and graphics limitations are explicit. TypeScript and production build are the release checks.

Designer: consistent image cards, compact introduction, readable labels, persistent viewer exit, generous application space, and responsive layouts. Dense F1 data tables retain horizontal scrolling where needed; panels stack vertically on phones.
