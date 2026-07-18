import { siteMetadata } from "../lib/site-metadata"

export default function Bio() {
  const { author, social } = siteMetadata

  return (
    <p className="flex mb-10">
      Written by <strong className="mx-1">{author.name}</strong>{" "}
      {author.summary}{" "}
      <a
        href={`https://twitter.com/${social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1"
      >
        Follow us on Twitter
      </a>
    </p>
  )
}
