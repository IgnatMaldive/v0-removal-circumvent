import { getPostData, getAllPostSlugs } from "@/lib/posts"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{postData.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {new Date(postData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            {postData.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {postData.author}
              </div>
            )}
          </div>

          {postData.tags && postData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {postData.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>
      </div>

      <article
        className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-pre:bg-gray-900 prose-pre:text-gray-100"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />

      <div className="mt-12 pt-8 border-t">
        <Link href="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Button>
        </Link>
      </div>
    </div>
  )
}
