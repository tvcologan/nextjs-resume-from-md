import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ResumeLayout from "@/components/resume-layout"

export default async function Home() {
  // Read the resume.md file
  const resumeFilePath = path.join(process.cwd(), "data/resume.md")
  const source = fs.readFileSync(resumeFilePath, "utf8")

  // Parse frontmatter using gray-matter
  const { data: frontmatter, content } = matter(source)

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-md rounded-lg">
        <ResumeLayout frontmatter={frontmatter}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        </ResumeLayout>
      </div>
    </main>
  )
}
