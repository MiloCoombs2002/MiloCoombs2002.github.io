import { notes } from '../../content/notes'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function Notes() {
  useDocumentTitle('Notes | Milo Coombs')

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Notes</h1>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.slug} className="rounded-lg border border-slate-200 p-3">
            <strong className="block text-slate-900">{note.title}</strong>
            <p className="mt-1 text-slate-700">{note.summary}</p>
            <small className="mt-1 block text-slate-500">{note.publishedOn}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notes
