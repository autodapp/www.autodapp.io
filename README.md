# AutoDapp

Built with [Next.js](https://nextjs.org/).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

Blog posts live in `content/blog/<slug>/index.md`. Any non-markdown file
next to a post (e.g. an image referenced as `./cover.png`) is copied into
`public/blog/<slug>/` automatically before `dev`/`build` via
`scripts/copy-blog-assets.mjs`.
