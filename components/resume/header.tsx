interface HeaderProps {
  name: string
  title?: string
  summary?: string
}

export function Header({ name, title, summary }: HeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      {title && <h2 className="text-xl text-gray-600 mb-4">{title}</h2>}
      {summary && <p className="text-gray-700 max-w-2xl mx-auto">{summary}</p>}
    </div>
  )
}
