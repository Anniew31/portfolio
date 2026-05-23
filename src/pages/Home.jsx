import profilePic from '../assets/images/pfp.png'
import ship from '../assets/images/ship.png'
import turtle from '../assets/images/turtle.png'
import bubble from '../assets/images/bubble.png'
import fish from '../assets/images/fish.png'
import coral_right from '../assets/images/coral_right.png'
import coral_left from '../assets/images/coral_left.png'
import github_logo from '../assets/logos/github.png'
import email from '../assets/logos/email.png'
import linkedin_logo from '../assets/logos/linkedin.png'
import { useState } from 'react'
import Bubble from '../components/Bubble'
import projects from '../data/projects'

function Home() {
    const [selectedProject, setSelectedProject] = useState(null)
    const leftColumn = projects.filter((_, i) => i % 2 === 0)
    const rightColumn = projects.filter((_, i) => i % 2 !== 0)

    return (
        <main className = "min-h-screen bg-navy">
            <section className = "home-bg relative flex items-center justify-center pt-32 pb-32 min-h-[70vh]">
                <img src={ship} className="hidden lg:block absolute bottom-40 right-5 w-80 opacity-70" alt="Ship" />
                <img src={turtle} className="hidden md:block absolute bottom-30 left-5 w-50 opacity-100" alt="Turtle" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl px-6">
                    <img src={profilePic} className="w-60 h-60 md:w-80 md:h-80 rounded-2xl object-contain shrink-0" alt="Profile" />
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-beige text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide md:whitespace-nowrap">ANNIE WENG</h1>
                        <p className="text-beige text-base md:text-lg mt-4">Computer Science Sophomore</p>
                        <p className="text-beige text-sm mt-2 max-w-md font-medium leading-relaxed">
                            I'm a sophomore studying computer science with an AI minor at Cornell University.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative bg-navy min-h-[900px] py-16 overflow-hidden">
                <h2 className="text-beige text-3xl font-bold tracking-wide mb-12 max-w-7xl mx-auto px-12 md:px-20">
                    Projects
                </h2>
                <div className="relative max-w-7xl h-[800px] mx-auto px-6">
                    <div className="relative w-full h-full">
                        {projects.map(project => (
                            <Bubble key={project.id} project={project} onClick={setSelectedProject} bubbleImg={bubble} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home