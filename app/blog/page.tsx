import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, User } from "lucide-react"

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">My Personal Blog</h1>
        <p className="text-xl text-muted-foreground">Thoughts, tutorials, and insights on web development</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {allPostsData.map(({ slug, date, title, description, author, tags }) => (
          <Card key={slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                {author && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {author}
                  </div>
                )}
              </div>
              <CardTitle className="text-2xl">
                <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
                  {title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              <Link href={`/blog/${slug}`} className="text-primary hover:underline font-medium">
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
