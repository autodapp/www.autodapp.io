import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

// Content authors drop post images next to index.md (e.g. ./cover.png).
// scripts/copy-blog-assets.mjs mirrors those files into public/blog/<slug>/,
// so relative markdown image paths need to be rewritten to match.
function rewriteRelativeImagePaths(markdown, slug) {
  return markdown.replace(
    /(!\[[^\]]*\]\()\.\/([^)]+)(\))/g,
    `$1/blog/${slug}/$2$3`
  )
}

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter(name => fs.statSync(path.join(postsDirectory, name)).isDirectory())
}

function readPostFrontmatter(slug) {
  const fullPath = path.join(postsDirectory, slug, "index.md")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return matter(fileContents)
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })
}

export function getSortedPostsMeta() {
  const posts = getPostSlugs().map(slug => {
    const { data, content } = readPostFrontmatter(slug)
    const excerpt = data.description || `${content.trim().slice(0, 160)}...`
    return { slug, excerpt, ...data }
  })

  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(post => ({ ...post, date: formatDate(post.date) }))
}

export async function getPostBySlug(slug) {
  const { data, content } = readPostFrontmatter(slug)
  const processed = await remark()
    .use(remarkHtml)
    .process(rewriteRelativeImagePaths(content, slug))

  return {
    slug,
    html: processed.toString(),
    excerpt: data.description || `${content.trim().slice(0, 160)}...`,
    ...data,
    date: formatDate(data.date),
  }
}

export function getAdjacentPosts(slug) {
  const posts = getSortedPostsMeta()
  const index = posts.findIndex(post => post.slug === slug)

  return {
    previous: index === posts.length - 1 ? null : posts[index + 1],
    next: index <= 0 ? null : posts[index - 1],
  }
}
