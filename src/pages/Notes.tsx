import { notes } from '../content/notes'
import useDocumentTitle from '../hooks/useDocumentTitle'

function Notes() {
  useDocumentTitle('Notes | Milo Coombs')

  return (
    <section>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.slug}>
            <strong>{note.title}</strong>
            <p>{note.summary}</p>
            <small>{note.publishedOn}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notes
