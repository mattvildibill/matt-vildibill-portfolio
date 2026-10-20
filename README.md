# Matt Vildibill · Interactive projects

My personal portfolio: network and gravity simulations, an F1 dashboard, two city explorers, and an archive of my mom’s paintings. Each project runs on its own domain. The portfolio stays a small, server-rendered page with direct launch links and optional build notes.

## Development

Use Node.js 24.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

The gallery, contact links and native details work without JavaScript. No database, account, API key or project runtime is needed to load this page.

## Editing the portfolio

- `app/projects.ts`: project order, descriptions, launch URLs, source links and implementation notes.
- `app/gallery.tsx`: project cards and native expandable details.
- `app/page.tsx`: introduction and contact links.
- `app/portfolio.css`: responsive layout and visual styles.
- `public/images/`: actual project captures used as previews.

Artwork belongs to its original artist; the painting project distinguishes the preserved originals from its interpreted scenery. Each project retains its own data and third-party credits. Development uses AI-assisted tools; the implementation and validation are available in the project repositories.

Email, LinkedIn and GitHub appear together in the header. The footer links to this site's source. There is no resume download or contact-form service.

See [deployment](docs/DEPLOYMENT.md) and [sources and preview provenance](docs/SOURCES.md).
