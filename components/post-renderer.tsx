"use client"

// Correct import: Use MDXRemote from 'next-mdx-remote' for client-side rendering
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import { useMDXComponents } from "@/components/mdx-components"
import Link from "next/link"

interface PostRendererProps {
  mdxSource: MDXRemoteSerializeResult
  frontmatter: {
    title: string
    date: string
    [key: string]: any // Allow other frontmatter properties
  }
}

export function PostRenderer({ mdxSource, frontmatter }: PostRendererProps) {
  const components = useMDXComponents({}) // Get default MDX components

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="prose prose-gray dark:prose-invert mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold mb-2">{frontmatter.title}</h1>
          <p className="text-gray-600 text-lg">
            Published on{" "}
            {new Date(frontmatter.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>
        {/* MDXRemote expects the serialized source directly */}
        <MDXRemote {...mdxSource} components={components} />
      </article>
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-blue-600 hover:underline text-lg">
          ← Back to all posts
        </Link>
      </div>
    </main>
  )
}
