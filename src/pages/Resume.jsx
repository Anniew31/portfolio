import Footer from "../components/Footer"
import ExpCard from "../components/ExpCard"
import experiences from '../data/experience.js'
import activities from "../data/activities"
import education from "../data/education.js"
import EduCard from "../components/EduCard.jsx"
import certificates from "../data/certificates.js"
import CertCard from "../components/CertCard.jsx"
import skills from '../data/skills.js'

function Resume() {
    return (
        <main className="bg-navy min-h-screen w-full flex flex-col items-center justify-between font-sans antialiased pt-12 pb-0">
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
                <section className="flex flex-col gap-8">
                    <h2 className="text-white font-extrabold text-2xl uppercase tracking-wider border-b border-white/10 pb-3">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {skills.map((category) => (
                            <div key={category.id} className="flex flex-col gap-4">
                                <div className="flex items-center gap-2.5">
                                    <img 
                                        src={category.image}
                                        className="w-4"
                                    >
                                    </img>
                                    <h3 className="text-white/90 font-bold text-lg tracking-wide">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <div 
                                            key={idx} 
                                            className="flex items-center gap-2 bg-[#0b1329]/50 border border-white/10 rounded-full py-1.5 px-3.5 shadow-sm backdrop-blur-sm select-none hover:border-white/20 hover:bg-[#111c3a] transition-all duration-200"
                                        >
                                            {skill.logo && (
                                                <img 
                                                    src={skill.logo} 
                                                    alt={`${skill.name} Icon`} 
                                                    className="w-3.5 h-3.5 object-contain shrink-0"
                                                />
                                            )}
                                            <span className="text-beige/90 text-xs font-semibold tracking-wide">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-8">
                    <h2 className="text-white font-extrabold text-2xl uppercase tracking-wider border-b border-white/10 pb-3">Certificates</h2>
                    <div className="flex flex-col gap-6">
                        {certificates.map(cert => (
                            <CertCard key={cert.id} cert={cert} />
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