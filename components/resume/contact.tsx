import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react"

interface ContactProps {
  contact: {
    email?: string
    phone?: string
    location?: string
    website?: string
    linkedin?: string
    github?: string
  }
}

export function Contact({ contact }: ContactProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {contact.email && (
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-600 mr-2" />
            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
              {contact.email}
            </a>
          </div>
        )}

        {contact.phone && (
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-600 mr-2" />
            <a href={`tel:${contact.phone}`} className="text-gray-700">
              {contact.phone}
            </a>
          </div>
        )}

        {contact.location && (
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700">{contact.location}</span>
          </div>
        )}

        {contact.website && (
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-gray-600 mr-2" />
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {contact.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}

        {contact.linkedin && (
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 text-gray-600 mr-2" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        )}

        {contact.github && (
          <div className="flex items-center">
            <Github className="h-5 w-5 text-gray-600 mr-2" />
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
