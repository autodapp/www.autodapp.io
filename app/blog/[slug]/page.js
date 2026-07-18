import Link from "next/link"
import { notFound } from "next/navigation"
import Bio from "../../../components/bio"
import {
  getAdjacentPosts,
  getPostBySlug,
  getPostSlugs,
} from "../../../lib/posts"

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }))
}

async function loadPost(slug) {
  try {
    return await getPostBySlug(slug)
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await loadPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description || post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await loadPost(slug)
  if (!post) notFound()

  const { previous, next } = getAdjacentPosts(slug)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article>
        <header>
          <h1 className="mt-4 mb-0 text-3xl font-bold">{post.title}</h1>
          <p className="block mb-4 text-sm text-gray-500">{post.date}</p>
        </header>
        <section
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr className="mb-8" />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul className="flex flex-wrap justify-between list-none p-0">
          <li>
            {previous && (
              <Link href={`/blog/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={`/blog/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}
