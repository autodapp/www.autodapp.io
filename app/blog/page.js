import Link from "next/link"
import Bio from "../../components/bio"
import { getSortedPostsMeta } from "../../lib/posts"

export const metadata = {
  title: "All posts",
}

export default function BlogIndexPage() {
  const posts = getSortedPostsMeta()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Bio />
      {posts.map(post => (
        <article key={post.slug} className="mb-10">
          <header>
            <h3 className="mb-2 text-xl font-semibold">
              <Link className="shadow-none" href={`/blog/${post.slug}`}>
                {post.title || post.slug}
              </Link>
            </h3>
            <small className="text-gray-500">{post.date}</small>
          </header>
          <section>
            <p>{post.excerpt}</p>
          </section>
        </article>
      ))}
    </div>
  )
}
