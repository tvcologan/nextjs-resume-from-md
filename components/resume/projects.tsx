import { ExternalLink, Github } from "lucide-react"

interface ProjectsProps {
  projects: Array<{
    name: string
    description: string
    technologies?: string[]
    link?: string
    github?: string
  }>
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium text-gray-800">{project.name}</h3>
              <div className="flex space-x-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-700 mb-2">{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
