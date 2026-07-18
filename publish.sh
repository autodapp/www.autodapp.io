#!/bin/bash
set -e

# Static export build for the Next.js app (output: "export" in next.config.js).
# The build writes static files to ./out, deployable to any static host
# (GitHub Pages, S3, Vercel, etc). To preview the export locally:
#   pnpm run build && pnpm run start

pnpm run build
