import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Me from './pages/Me'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
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
