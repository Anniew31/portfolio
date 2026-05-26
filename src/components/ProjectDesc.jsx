function ProjectDesc({project, onClick }) {
    return (
        <div 
            onClick={() => onClick(project)} 
            className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
            <img 
                src={project.thumbnail || ''} 
                className="w-40 h-32 rounded-xl object-cover shrink-0 bg-white/10" 
                alt={project.title} 
            />
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-beige/70 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-white/10 text-beige text-xs px-3 py-1 rounded-md border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectDesc