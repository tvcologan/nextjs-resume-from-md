interface ExperienceProps {
  experience: Array<{
    company: string
    position: string
    startDate: string
    endDate?: string
    description?: string
    achievements?: string[]
  }>
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Experience</h2>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-medium text-gray-800">{job.position}</h3>
              <span className="text-gray-600 text-sm md:text-base">
                {job.startDate} - {job.endDate || "Present"}
              </span>
            </div>
            <div className="text-gray-700 font-medium mb-2">{job.company}</div>
            {job.description && <p className="text-gray-700 mb-2">{job.description}</p>}

            {job.achievements && job.achievements.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
