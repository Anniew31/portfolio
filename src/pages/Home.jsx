import profilePic from '../assets/images/pfp.png'
import ship from '../assets/images/ship.png'
import turtle from '../assets/images/turtle.png'
import bubble from '../assets/images/bubble.png'
import github_logo from '../assets/logos/github.png'
import email from '../assets/logos/email.png'
import linkedin_logo from '../assets/logos/linkedin.png'
import { useState } from 'react'
import Bubble from '../components/Bubble'
import projects from '../data/projects'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

function Home() {
    const [selectedProject, setSelectedProject] = useState(null)
    const leftColumn = projects.filter((_, i) => i % 2 === 0)
    const rightColumn = projects.filter((_, i) => i % 2 !== 0)

    return (
        <main className="min-h-screen bg-[#0a1128]">
            <section className="relative flex items-center justify-center pt-32 pb-32 min-h-[70vh] bg-gradient-to-b from-[#111e38] to-[#0a1128]">
                <img src={ship} className="hidden lg:block absolute bottom-40 right-5 w-80 opacity-70 animate-float" alt="Ship" />
                <img src={turtle} className="hidden md:block absolute bottom-30 left-5 w-50 opacity-100 animate-float" alt="Turtle" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl px-6">
                    <img src={profilePic} className="w-60 h-60 md:w-80 md:h-80 rounded-2xl object-contain shrink-0" alt="Profile" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"> ANNIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">WENG</span></h1>
                        <p className="text-cyan-300 font-mono text-xs md:text-sm uppercase tracking-[0.2em] mt-4">// Computer Science Student @ Cornell</p>
                        <p className="text-beige text-sm mt-2 max-w-md font-medium leading-relaxed">
                            I'm a student studying computer science with an AI minor at Cornell University.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative bg-navy min-h-[900px] py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-12 md:px-20 mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                        <div>
                            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                            <p className="text-slate-400 text-sm mt-2">Click on each bubble to explore each project.</p>
                        </div>
                        <p className="text-xs font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1.5 rounded-full backdrop-blur-sm self-start md:self-auto">
                            Check out "Projects" in the navbar for a different layout
                        </p>
                    </div>
                </div>
                <div className="relative max-w-7xl h-[800px] mx-auto px-6">
                    <div className="relative w-full h-full">
                        <div className="relative w-full h-full">
                            {projects
                                .filter(project => project.featured === "yes")
                                .map(project => (
                                    <Bubble key={project.id} project={project} onClick={setSelectedProject} bubbleImg={bubble} />
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <ProjectCard project={selectedProject} onClose={() => setSelectedProject(null)} />
            <Footer/>
        </main>
    )
}

export default Home