# Matt Vildibill — Interactive Systems

Personal portfolio built with Next.js, React and TypeScript. The existing visual design and project descriptions are preserved; interactive applications now deploy independently from their own repositories.

## Development

Node.js 24.

```sh
npm ci
npm run dev
npm run build
```

`app/projects.ts` owns the project catalog, GitHub links and permanent live URLs. `app/gallery.tsx` mounts only the selected project and unmounts it on close. Project runtimes and world assets are not duplicated in this repository.

See [deployment architecture](docs/DEPLOYMENT.md). The migration branch is prepared for Vercel; domains are production-ready only after the Vercel deployment and HTTPS checks complete.
