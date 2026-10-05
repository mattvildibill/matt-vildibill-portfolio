# Matt Vildibill — Interactive Systems

Personal portfolio built with Next.js, React, and TypeScript. Six independent applications open directly on their custom domains, in their own browser tabs.

## Development

Node.js 24.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

`app/projects.ts` owns the project catalog, GitHub links, and permanent live URLs. `app/gallery.tsx` is a server-rendered gallery with native expandable engineering notes. No application runtimes, iframes, or world assets are loaded into the portfolio.

See [deployment architecture](docs/DEPLOYMENT.md).
