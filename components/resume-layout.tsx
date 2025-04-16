import type React from "react"
import { Contact } from "./resume/contact"
import { Education } from "./resume/education"
import { Experience } from "./resume/experience"
import { Header } from "./resume/header"
import { Projects } from "./resume/projects"
import { Skills } from "./resume/skills"
import { Certifications } from "./resume/certifications"
import { Languages } from "./resume/languages"
import { Interests } from "./resume/interests"

interface ResumeLayoutProps {
  children: React.ReactNode
  frontmatter: any
}

export default function ResumeLayout({ children, frontmatter }: ResumeLayoutProps) {
  return (
    <div className="py-8 px-6">
      {frontmatter.name && <Header name={frontmatter.name} title={frontmatter.title} summary={frontmatter.summary} />}

      {frontmatter.contact && Object.values(frontmatter.contact).some((value) => value) && (
        <Contact contact={frontmatter.contact} />
      )}

      {frontmatter.experience && frontmatter.experience.length > 0 && (
        <Experience experience={frontmatter.experience} />
      )}

      {frontmatter.education && frontmatter.education.length > 0 && <Education education={frontmatter.education} />}

      {frontmatter.skills && Object.values(frontmatter.skills).some((value) => value && value.length > 0) && (
        <Skills skills={frontmatter.skills} />
      )}

      {frontmatter.projects && frontmatter.projects.length > 0 && <Projects projects={frontmatter.projects} />}

      {frontmatter.certifications && frontmatter.certifications.length > 0 && (
        <Certifications certifications={frontmatter.certifications} />
      )}

      {frontmatter.languages && frontmatter.languages.length > 0 && <Languages languages={frontmatter.languages} />}

      {frontmatter.interests && frontmatter.interests.length > 0 && <Interests interests={frontmatter.interests} />}

      <div className="mt-8">{children}</div>
    </div>
  )
}
