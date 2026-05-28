import Footer from "../components/Footer"
import profilePic from '../assets/images/round_pfp.png'
import location from '../assets/images/location.png'
import email from '../assets/logos/email.png'
import github_logo from '../assets/logos/github.png'
import linkedin_logo from '../assets/logos/linkedin.png'
import resume from '../assets/Resume.pdf'
import { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectDesc'
import ProjectModal from "../components/ProjectCard"

const categories = ["All", "Games", "Web Development", "Other"]

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [selectedProject, setSelectedProject] = useState(null)
    const filtered = projects.filter(p => {
        if (activeCategory === "All") return true
        if (activeCategory === "Games") return p.category === "games"
        if (activeCategory === "Web Development") return p.category === "web"
        if (activeCategory === "Other") return p.category === "other"
    })
    return (
        <main className="min-h-screen bg-navy w-full flex flex-col items-center justify-between font-sans antialiased pt-12 pb-0">
            <div className="w-full max-w-7xl h-auto md:h-[85vh] bg-box-blue/30 border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row">
                <aside className="w-full md:w-72 shrink-0 border-b md:border-b-0 md:border-r border-white/20 p-6 sm:p-8 flex flex-col items-center md:overflow-y-auto custom-scrollbar">
                    <img src={profilePic} className="w-40 h-40 rounded-full object-cover shadow-md" alt="Profile" />  
                    <h2 className="mt-8 text-beige text-3xl font-bold">Annie Weng</h2>
                    <p className="mt-2 text-beige text-sm">CS Major & AI Minor</p>
                    <p className="mt-2 text-beige/80 text-xs text-center">Currently a sophomore at Cornell University interested in all things tech</p>
                    <div className="mt-3 flex items-center gap-2 mt-2">
                        <img src={location} className="w-5 h-5 object-cover" alt="Location Icon" />  
                        <span className="text-beige text-xs">New York City, NY</span>
                    </div>
                    <div className="w-full border-t border-white/20 my-5" />
                    <div className="flex flex-col gap-4.5 items-start justify-start w-full max-w-fit mx-auto">
                        <a href="mailto:aw899@cornell.edu" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-6 flex justify-center items-center shrink-0">
                                <img src={email} className="w-6 h-6 object-contain -ml-1.5" alt="Email" />
                            </div>
                            <span className="text-beige text-xs">aw899@cornell.edu</span>
                        </a>
                        <a href="https://github.com/Anniew31" target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-6 flex justify-center items-center shrink-0">
                                <img src={github_logo} className="w-6 h-6 object-contain" alt="GitHub" />
                            </div>
                            <span className="text-beige text-xs">github.com/Anniew31</span>
                        </a>
                        <a href="https://www.linkedin.com/in/annie-weng-42b323276/" target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-6 flex justify-center items-center shrink-0">
                            <img src={linkedin_logo} className="w-6 h-6 object-contain rounded-sm" alt="LinkedIn" />
                            </div>
                            <span className="text-beige text-xs">linkedin.com/in/annie-weng</span>
                        </a>
                    </div> 
                    <a 
                        href={resume} 
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 md:mt-auto mb-2 w-full max-w-[200px] py-2.5 bg-white/10 hover:bg-white text-white hover:text-navy text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/10 shadow-md flex justify-center items-center text-center"
                    >
                        View Resume
                    </a>
                </aside>
                <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-black/5 flex flex-col justify-start gap-4 custom-scrollbar">
                    <div className="flex flex-wrap gap-2.5">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300 border
                                    ${activeCategory === cat 
                                        ? 'bg-white/15 text-white border-white/30 shadow-sm shadow-black/20 backdrop-blur-md' 
                                        : 'bg-transparent text-beige/70 border-transparent hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}        
                    </div>
                    <div className="w-full border-b border-white/20 mb-6"></div>
                    <div className="flex flex-col gap-4">
                        {filtered.map(project => (
                            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                        ))}
                    </div>
                </div>    
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            <div className="mt-16 w-full">
                <Footer />
            </div>
        </main>
    )
}

export default Projects