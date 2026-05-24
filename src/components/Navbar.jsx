import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className = "flex justify-between items-center px-8 py-4 sticky top-0 z-50 backdrop-blur-md bg-[#273344] border-b border-white/5">
      <span className = "text-white font-bold text-lg">Annie Weng</span>
      <div className = "flex gap-8">
        <Link to="/" className = "text-gray-300 hover:text-white transition-colors">Home</Link>
        <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
        <Link to="/resume" className="text-gray-300 hover:text-white transition-colors">Resume</Link>
      </div>
    </nav>
  )
}

export default Navbar