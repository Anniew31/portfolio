import {motion} from 'framer-motion'
const sizes = {
    sm: "w-[30vw] h-[30vw] min-w-[220px] min-h-[220px]",   
    md: "w-[36vw] h-[36vw] min-w-[260px] min-h-[260px]",
    lg: "w-[42vw] h-[42vw] min-w-[300px] min-h-[300px]"
}

function Bubble ({project, onClick, bubbleImg}) {
    const bubbleSizeClass = sizes[project.size] || sizes.md;
    const floatAnimation = project.id % 2 === 0 ? 'animate-bubble-slow' : 'animate-bubble-fast';

    return (
        <motion.div 
            onClick={() => onClick(project)}
            className={`absolute group cursor-pointer transition-all duration-500 ease-out ${bubbleSizeClass} ${floatAnimation}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{top: project.top, left: project.left}}
        >
            <div className="relative w-full h-full select-none transition-all duration-300 group-hover:scale-105 group-active:scale-95">
                <img src={bubbleImg} className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(218,220,215,0.4)]" alt="bubble" />
                <p className="absolute inset-0 flex items-center justify-center text-beige text-xs sm:text-base lg:text-xl font-extrabold text-center tracking-wide drop-shadow-md z-10 select-non -translate-x- sm:-translate-x-5 lg:-translate-x-7">{project.title}</p>
            </div>
        </motion.div>
    )
}

export default Bubble