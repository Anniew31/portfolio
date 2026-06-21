import { motion, AnimatePresence } from 'framer-motion'
import github from '../assets/logos/github.png'

function ProjectCard({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed top-1/2 left-1/2 bg-box-blue border border-white/10 rounded-2xl p-6 md:p-8 z-50 w-[92%] max-w-3xl shadow-2xl overflow-y-auto max-h-[90vh]"
                        initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                        exit={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <button 
                            onClick={onClose} 
                            className="absolute top-4 right-4 text-beige/70 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-6 pr-6">{project.title}</h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start mb-6 pb-6 border-b border-white/5">
                            <div className="w-full md:w-1/2 h-85 shrink-0">
                                {project.demo ? (
                                    <video
                                        src={project.demo}
                                        className="w-full h-full rounded-xl object-cover"
                                        controls
                                        controlsList="nodownload"
                                    />
                                ) : project.live ? (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="relative block w-full h-full rounded-xl overflow-hidden group"
                                    >
                                        <img 
                                            src={project.thumbnail} 
                                            className="w-full h-full object-cover" 
                                            alt={project.title} 
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white font-bold text-sm flex items-center gap-2">
                                                🔗 View Live Demo
                                            </span>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center">
                                        <span className="text-beige/30 text-xs">No preview</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-beige text-sm md:text-base leading-relaxed w-full md:w-1/2">{project.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-beige/60 font-mono text-xs uppercase tracking-wider">Technologies Used:</span>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {project.technologies.map(tech => (
                                        <span 
                                            key={tech} 
                                            className="bg-white/5 border border-white/10 text-beige text-xs font-medium px-3 py-1 rounded-md tracking-wide shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.live && !project.demo && (
                                    <p className="text-beige/50 text-xs italic mt-1">
                                        Please be patient — it may take a moment to spin up on first load.
                                    </p>
                                )}
                            </div>
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center justify-center w-10 h-10 transition-transform duration-200 hover:scale-110 self-end sm:self-auto shrink-0"
                            >
                                <img src={github} className="max-w-full max-h-full object-contain filter drop-shadow-md" alt="GitHub" />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ProjectCard