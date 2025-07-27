"use server"

import fs from "fs"
import path from "path"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const date = formData.get("date") as string
    const description = formData.get("description") as string
    const author = formData.get("author") as string
    const content = formData.get("content") as string
    const tagsJson = formData.get("tags") as string

    let tags: string[] = []
    try {
      tags = JSON.parse(tagsJson)
    } catch {
      tags = []
    }

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    // Create frontmatter
    const frontmatter = `---
title: ${title}
date: ${date}
description: ${description}
author: ${author}
tags: ${JSON.stringify(tags)}
---

${content}`

    // Write file to contents directory
    const contentsDir = path.join(process.cwd(), "contents")
    const filePath = path.join(contentsDir, `${slug}.md`)

    // Ensure contents directory exists
    if (!fs.existsSync(contentsDir)) {
      fs.mkdirSync(contentsDir, { recursive: true })
    }

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return {
        success: false,
        error: "A post with this title already exists",
      }
    }

    // Write the file
    fs.writeFileSync(filePath, frontmatter, "utf8")

    // Revalidate the blog pages
    revalidatePath("/blog")
    revalidatePath("/")

    return {
      success: true,
      slug,
    }
  } catch (error) {
    console.error("Error creating post:", error)
    return {
      success: false,
      error: "Failed to create post",
    }
  }
}
