import { Award, ExternalLink } from "lucide-react"

interface CertificationsProps {
  certifications: Array<{
    name: string
    issuer: string
    date: string
    link?: string
  }>
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start">
            <Award className="h-5 w-5 text-gray-600 mr-3 mt-1" />
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-medium text-gray-800 mr-2">{cert.name}</h3>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View Certificate</span>
                  </a>
                )}
              </div>
              <div className="text-gray-700">
                {cert.issuer} • {cert.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
