import arrow from '../assets/images/arrow.png'

function CertCard ({cert}) {
    return (
        <a
            href={cert.credentialUrl}
            target="_blank"
            rel = "noopener noreferrer"
            className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 group shadow-sm w-full"
        >
            <img
                src={cert.logo} 
                className="w-12 h-12 rounded-xl object-contain bg-white/5 border border-white/10 p-2.5 shrink-0" 
                alt={`${cert.issuer} Logo`}
            />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                    <span className="text-beige/40 text-[10px] font-mono uppercase tracking-widest">{cert.issuer}</span>
                    <span className="text-beige/20 text-[10px] select-none">•</span>
                    <span className="text-beige/40 text-[10px] font-mono uppercase tracking-widest">{cert.date.replace("Issued: ", "")}</span>
                </div>
                <h3 className="text-white font-extrabold text-base tracking-tight mt-0.5 group-hover:text-beige transition-colors duration-200 truncate">{cert.title}</h3>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-beige/30 bg-white/[0.02] border border-white/5 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    ID: <span className="text-beige/50 font-sans tracking-normal select-all">{cert.credentialId}</span>
                </div>
            </div>
            <div className="text-beige/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0">
                <img
                    src={arrow}
                    className="w-4 h-4 object-contain brightness-200 invert-[0.1]" 
                    alt="arrow"
                />
            </div>
        </a>
    )

}

export default CertCard