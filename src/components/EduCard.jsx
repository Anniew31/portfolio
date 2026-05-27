function EduCard({edu, isLast}) {
    return (
        <div className="relative flex items-start gap-8 mb-8 pl-10 group">
            {!isLast && (
                <div className="absolute left-[15px] top-15 bottom-[-125px] w-[2px] bg-beige/80" />
            )}
            <div className="absolute left-[8px] top-15 w-4 h-4 rounded-full border-2 border-white/30 bg-navy z-10 " />
            <div className="flex-1 flex flex-col sm:flex-row gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-sm">
                <img 
                    src={edu.logo} 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain shrink-0 bg-white/5 border border-white/10 p-2" 
                    alt={`${edu.school} Logo`} 
                />
                <div className="flex flex-col justify-center flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <h3 className="text-white font-extrabold text-lg tracking-tight">{edu.school}</h3>
                        <span className="text-beige/40 font-medium text-sm select-none hidden sm:inline">—</span>
                        <span className="text-beige/80 text-xs font-medium sm:text-sm">{edu.location}</span>
                    </div>
                    <p className="mt-1.5 text-white/90 text-sm font-medium tracking-wide">{edu.degree}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="text-beige/40 text-[11px] font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">{edu.date}</span>
                        <span className="text-beige/40 text-[11px] font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5">GPA: {edu.gpa}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EduCard