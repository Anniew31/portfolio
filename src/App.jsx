import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App