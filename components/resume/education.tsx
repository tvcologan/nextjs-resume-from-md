interface EducationProps {
  education: Array<{
    institution: string
    degree: string
    field?: string
    startDate: string
    endDate?: string
    gpa?: string
    achievements?: string[]
  }>
}

export function Education({ education }: EducationProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-medium text-gray-800">{edu.institution}</h3>
              <span className="text-gray-600 text-sm md:text-base">
                {edu.startDate} - {edu.endDate || "Present"}
              </span>
            </div>
            <div className="text-gray-700 font-medium mb-2">
              {edu.degree}
              {edu.field ? `, ${edu.field}` : ""}
              {edu.gpa && ` (GPA: ${edu.gpa})`}
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                {edu.achievements.map((achievement, i) => (
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
