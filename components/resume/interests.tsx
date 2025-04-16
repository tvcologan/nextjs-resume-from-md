interface InterestsProps {
  interests: string[]
}

export function Interests({ interests }: InterestsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            {interest}
          </span>
        ))}
      </div>
    </div>
  )
}
