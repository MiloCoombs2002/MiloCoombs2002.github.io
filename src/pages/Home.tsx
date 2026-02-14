import useDocumentTitle from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('Home | Milo Coombs')

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Home</h1>
      <p className="text-slate-700">Welcome to my site. This is the default route.</p>
    </section>
  )
}

export default Home
