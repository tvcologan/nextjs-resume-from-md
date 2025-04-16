interface SkillsProps {
  skills: {
    technical?: string[]
    soft?: string[]
    tools?: string[]
  }
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.technical && skills.technical.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              {skills.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {skills.soft && skills.soft.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              {skills.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {skills.tools && skills.tools.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Tools & Technologies</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              {skills.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
