import Footer from "../components/Footer"
import ExpCard from "../components/ExpCard"
import experiences from '../data/experience.js'
import activities from "../data/activities"

function Resume() {
    return (
        <main className="bg-navy min-h w-full p-6 md:p-10 flex flex-col font-sans antialiased">
            <div className="flex flex-col gap-4 items-center justify-center mb-12">
                {experiences.map(exp => (
                    <ExpCard key={exp.id} experience={exp}/>
                ))}
            </div>
            <Footer />
        </main>
    )
}

export default Resume