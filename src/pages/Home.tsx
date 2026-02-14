import useDocumentTitle from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('Home | Milo Coombs')

  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to my site. This is the default route.</p>
    </section>
  )
}

export default Home
