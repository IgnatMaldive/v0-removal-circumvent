import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Github, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A personal space where I share thoughts, tutorials, and insights about web development, technology, and
          everything in between.
        </p>
        <Link href="/blog">
          <Button size="lg" className="text-lg px-8 py-3">
            <BookOpen className="mr-2 h-5 w-5" />
            Read My Blog
          </Button>
        </Link>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Easy Content Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Write posts in Markdown format and store them in the contents/ directory. Simple, version-controlled, and
              developer-friendly.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Github className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>GitHub Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Automated deployment pipeline that builds and deploys your blog whenever you push new content to your
              repository.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Fast & Modern</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built with Next.js, Tailwind CSS, and modern web technologies for optimal performance and user experience.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
