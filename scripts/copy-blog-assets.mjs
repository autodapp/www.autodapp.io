// Mirrors non-markdown files from content/blog/<slug>/ into public/blog/<slug>/
// so relative image links in post markdown resolve to a real static path.
import fs from "fs"
import path from "path"

const contentDir = path.join(process.cwd(), "content/blog")
const publicDir = path.join(process.cwd(), "public/blog")

for (const slug of fs.readdirSync(contentDir)) {
  const slugDir = path.join(contentDir, slug)
  if (!fs.statSync(slugDir).isDirectory()) continue

  const targetDir = path.join(publicDir, slug)
  fs.mkdirSync(targetDir, { recursive: true })

  for (const file of fs.readdirSync(slugDir)) {
    if (file === "index.md") continue
    fs.copyFileSync(path.join(slugDir, file), path.join(targetDir, file))
  }
}
