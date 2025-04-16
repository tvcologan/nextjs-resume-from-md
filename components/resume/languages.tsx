interface LanguagesProps {
  languages: Array<{
    language: string
    proficiency: string
  }>
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-800 font-medium">{lang.language}</span>
            <span className="text-gray-600">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
