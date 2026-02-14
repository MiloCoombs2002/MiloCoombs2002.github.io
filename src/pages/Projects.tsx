import useDocumentTitle from '../hooks/useDocumentTitle'

const projects = [
  'example project',
]

function Projects() {
  useDocumentTitle('Projects | Milo Coombs')

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
