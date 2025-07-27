import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "A modern personal blog built with Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                  <Link href="/" className="text-2xl font-bold">
                    Personal Blog
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link href="/blog">
                      <Button variant="ghost">Blog</Button>
                    </Link>
                    <Link href="/create">
                      <Button variant="outline">Create Post</Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
