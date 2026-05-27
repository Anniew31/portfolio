import Footer from "../components/Footer"
import ExpCard from "../components/ExpCard"
import experiences from '../data/experience.js'
import activities from "../data/activities"
import education from "../data/education.js"
import EduCard from "../components/EduCard.jsx"
import certificates from "../data/certificates.js"
import CertCard from "../components/CertCard.jsx"

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