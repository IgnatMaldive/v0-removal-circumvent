import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g., to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium my-2">{children}</h3>,
    p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside ml-4 my-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside ml-4 my-2">{children}</ol>,
    li: ({ children }) => <li className="my-1">{children}</li>,
    a: ({ children, href }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
    pre: ({ children }) => <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4">{children}</pre>,
    img: (props) => <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...(props as ImageProps)} />,
    ...components,
  }
}
