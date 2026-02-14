import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Me from './pages/Me'
import Projects from './pages/Projects'
import Notes from './pages/Notes'

function App() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-5 p-6 md:grid-cols-[14rem_1fr]">
      <Navbar />
      <main className="rounded-xl border border-slate-200 bg-white p-5">
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
