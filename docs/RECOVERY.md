# Recovered project implementations

The initial portfolio inspected all six authorized GitHub repositories. Four exports contained only a README. The follow-up recovered their full implementations from the corresponding original hosted Sites, without accessing other GitHub repositories.

| Application | Original source revision | Bundled runtime |
| --- | --- | --- |
| Fabric Reality Lab | 4459eb119ed3450e4d3ef34f5897871ccd9df44f | `public/demos/fabric/index.html` |
| Denver Spire Explorer | f28328c46dafe21d9b202c1c7da976ad8be75f39 | `public/demos/denver/` |
| Fort Collins Worlds | ea782d587e4f9b3d3ac935b696b264a889b497da | `public/demos/fort-collins/` |
| Painted Worlds | 3d5b7c4a0d02448c313f434309fd66993c06abd4 | `public/demos/painted/` |

## Integration

All six applications load on demand into a single same-origin iframe. Switching or closing destroys the previous frame, freeing its runtime and graphics context. A separate-tab link and fullscreen control provide more space. There are no third-party embeds or authentication requirements for the bundled applications. F1 live feeds remain external.

Fabric's standalone download link is rebased. Painted Worlds' root-relative stylesheet, module, image and manifest paths are rebased to `/demos/painted/`. Denver and Fort Collins already use relative runtime assets. The original hosted applications and their access settings are unchanged.

The larger world assets are served only when requested by their respective applications; they are not imported into the portfolio JavaScript bundle. The entire runtime collection is intentionally checked in so a clone can run without access to the original Sites.

## Evidence and images

- Fabric: source simulator, topology, policies, catalogs, guided tour and software scene renderer; thumbnail is a browser screenshot of the actual simulator.
- Denver: source viewer, exploration, realism, forest, shell, README and navigation tests. Thumbnail is a crop of the actual footprint fallback map. Building geometry is inferred from GIS, not photogrammetry.
- Fort Collins: authored application, scenario interpreter, fallback, validator and source data. Thumbnail is the original project's `qa/results/aerial-after.jpg`, a geometry render rather than a browser capture.
- Painted Worlds: authored world geometry, source-fidelity modules, reference data, experience settings and verification scripts. Thumbnail is the first rendered view from `source/references/v9/review/lily-lake-phone-shader-review.jpg`, not a generated replacement. The original 61-image collection, nine world environments and garden remain intact.
- Gravity: card art is an orbit illustration; the hero uses the actual saved trajectories described in SOURCES.md.

Third-party licenses and in-app geographic attribution are retained. The four README-only GitHub repositories remain unchanged; their runnable snapshots are accessible through the portfolio repository's Demo implementation links.

## GitHub asset packaging

Some runtime files are checked in directly; the remaining 388 files are stored in 22 ordered gzip parts under `demo-assets/`. The Node-only restore script verifies each part and file with SHA-256, restores relative paths, and caches completion. Dev and build invoke it automatically. The published Site uses the identical unpacked bytes; bundling changes repository storage only. No external service or original Site access is required to restore the assets.
