import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Me from './pages/Me'
import Projects from './pages/Projects'
import Notes from './pages/Notes'

function App() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 items-start gap-5 p-4 md:grid-cols-[14rem_minmax(0,1fr)_14rem] md:p-6">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl p-2 md:p-5 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
