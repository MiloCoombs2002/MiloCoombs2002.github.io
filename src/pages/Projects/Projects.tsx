import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { projects } from './projects.data'

function Projects() {
  useDocumentTitle('Projects | Milo Coombs')

  return (
    <section className="space-y-3">
      <h1 className="font-['Georgia'] text-8xl font-base tracking-tight pb-4">Projects</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-slate-400">
            <Link to={`/projects/${project.id}`} className="block no-underline">
              <strong className="block text-slate-900">{project.name}</strong>
              <small className="mt-1 inline-flex items-center gap-4 text-slate-500">
                <span>{project.date}</span>
                <span className="inline-flex items-center gap-1">
                  <BookOpen size={14} aria-hidden="true" />
                  <span>{project.readTime}</span>
                </span>
              </small>
              <p className="mt-3 text-slate-700">{project.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
