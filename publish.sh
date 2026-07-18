#!/bin/bash
set -e

# Production build + start for the Next.js app.
# This project no longer builds a static export deployed via gh-pages;
# host it on any Node-capable platform (e.g. Vercel) by running:
#   npm run build && npm run start

npm run build
npm run start
