import useDocumentTitle from '../hooks/useDocumentTitle'

const projects = ['example project']

function Projects() {
  useDocumentTitle('Projects | Milo Coombs')

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <ul className="list-disc space-y-1 pl-5 text-slate-700">
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
