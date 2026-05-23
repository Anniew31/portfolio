const sizes = {
    sm: "w-[30vw] h-[30vw] min-w-[220px] min-h-[220px]",   
    md: "w-[36vw] h-[36vw] min-w-[260px] min-h-[260px]",
    lg: "w-[42vw] h-[42vw] min-w-[300px] min-h-[300px]"
}

function Bubble ({project, onClick, bubbleImg}) {
    const bubbleSizeClass = sizes[project.size] || sizes.md;

    return (
        <div 
            onClick={() => onClick(project)}
            className={`absolute cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 ${bubbleSizeClass}`}
            style={{top: project.top, left: project.left}}
        >
            <div className="relative w-full h-full overflow-hidden rounded-full">
                <img src={bubbleImg} className="w-full h-full object-contain" alt="bubble" />
                <p className="absolute inset-0 flex items-center justify-center text-beige text-xs sm:text-base lg:text-xl font-extrabold text-center tracking-wide drop-shadow-md z-10 select-non -translate-x-3 sm:-translate-x-5 lg:-translate-x-7">
                    {project.title}
                </p>
            </div>
        </div>
    )
}

export default Bubble