function ExpCard({experience}) {
    return (
        <main>
            <div className="flex flex-col sm:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                <img 
                    src={experience.logo || ''} 
                    className="w-40 h-32 rounded-xl object-contain shrink-0 bg-white/10" 
                    alt={experience.title} 
                />
                <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <h3 className="text-white/90 font-extrabold text-lg tracking-tight">{experience.title}</h3>
                            <span className="text-beige/100 font-medium text-sm select-none">—</span>
                            <h4 className="text-beige font-semibold text-base opacity-90">{experience.org}</h4>
                        </div>
                        <div className="mt-1.5 flex items-center gap-1.5 text-beige text-[11px] font-mono uppercase tracking-wider mb-2">
                            <span>{experience.start}</span>
                            <span className="select-none text-beige">—</span>
                            <span>{experience.end}</span>
                        </div>
                        <p className="mt-3 text-beige/85 text-sm leading-relaxed antialiased font-normal">{experience.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ExpCard