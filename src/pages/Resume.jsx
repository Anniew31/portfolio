import Footer from "../components/Footer"
import ExpCard from "../components/ExpCard"
import experiences from '../data/experience.js'
import activities from "../data/activities"
import education from "../data/education.js"
import EduCard from "../components/EduCard.jsx"

function Resume() {
    return (
        <main className="bg-navy min-h-screen w-full flex flex-col items-center justify-start font-sans antialiased px-6 py-12 md:px-6">
            <div className="w-full max-w-6xl flex flex-col gap-10">
                <section className="flex flex-col gap-8">
                    <h2 className="text-white/95 font-extrabold text-2xl uppercase tracking-wider border-b border-white/10 pb-3">Professional Experience</h2>
                    <div className="flex flex-col gap-8">
                        {experiences.map(exp => (
                            <ExpCard key={exp.id} experience={exp}/>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-8">
                    <h2 className="text-white/95 font-extrabold text-2xl uppercase tracking-wider border-b border-white/10 pb-3">Extracurricular Activities</h2>
                    <div className="flex flex-col gap-8">
                        {activities.map(act => (
                            <ExpCard key={act.id} experience={act}/>
                        ))}
                    </div>
                </section> 
                <section className="flex flex-col gap-8">
                    <h2 className="text-white font-extrabold text-2xl uppercase tracking-wider border-b border-white/10 pb-3">Education</h2>
                    <div className="flex flex-col gap-6">
                        {education.map((edu, index) => (
                            <EduCard
                                key={edu.id} 
                                edu={edu} 
                                isLast={index === education.length - 1}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <div className="mt-16 w-full">
                <Footer />
            </div>
        </main>
    )
}

export default Resume