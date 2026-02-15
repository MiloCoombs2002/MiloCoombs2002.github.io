import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link, Navigate, useParams } from 'react-router-dom'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { projects } from './projects.data'

function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((entry) => entry.id === id)

  useDocumentTitle(project ? `${project.name} | Projects | Milo Coombs` : 'Project Not Found | Milo Coombs')

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="space-y-4">
      <p>
        <Link to="/projects" className="inline-flex items-center gap-1 text-slate-600 underline underline-offset-2">
          <ArrowLeft size={14} aria-hidden="true" />
          <span>back to projects</span>
        </Link>
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">{project.name}</h1>
      <p className="text-sm text-slate-500">{project.date}</p>
      <article className="space-y-2 text-slate-700 [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:border-l-2 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-slate-300 [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:px-3 [&_th]:py-2 [&_ul]:space-y-1">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
      </article>
    </section>
  )
}

export default ProjectDetail
