function ExpCard({experience}) {
    return (
        <main>
            <h1 className="text-white font-bold text-2xl mb-8">Professional Experience</h1>
            <div className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <img 
                    src={experience.logo || ''} 
                    className="w-40 h-32 rounded-xl object-cover shrink-0 bg-white/10" 
                    alt={experience.title} 
                />
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <div className="flex gap-2 items-baseline">
                            <h3 className="inline text-white/95 font-bold text-lg mb-2">{experience.title}</h3>
                            <h3 className="inline text-white/95 font-bold text-lg mb-2"> — </h3>
                            <h3 className="inline text-white/95 font-bold text-lg mb-2">{experience.company}</h3>
                        </div>
                        <p className="text-beige/90 text-sm leading-relaxed">{experience.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ExpCard