import critter_sim from '../assets/demos/critter_sim.mp4'
import little_lemon from '../assets/demos/little_lemon.mp4'

const projects = [
    {
        id: 1, 
        title: "Bananaship", 
        size: "md", 
        top: "-5%", 
        left: "10%",
        description: "A fully re-imagined take on the classic Battleship game, built in OCaml with a whimsical banana-and-raccoon theme. Features two distinct play modes: a terminal-based interface for a lightweight command-line experience, and a polished GUI built with TSDL featuring custom sprites, animated hit and miss feedback, and integrated background music. Players take turns on a shared local session, strategically placing bananas and launching attacks on their opponent's grid. Engineered the core game logic in a functional programming paradigm with clean separation of game state, rendering, and input handling.",
        technologies: ["OCaml", "TDSL"],
        github: "https://github.coecis.cornell.edu/aw899/Wizards-Racoon"
    },
    {
        id: 2, 
        title: "Critter Simulator", 
        size: "lg", 
        top: "0%", 
        left: "45%",
        description: "A full-stack simulation engine built in Java that models an evolving ecosystem of programmable artificial life forms. Designed a custom language parser and interpreter from scratch to process critter-specific instructions, enabling complex behavioral logic to execute in real time. Built a responsive JavaFX GUI for live visualization of the simulation world, and architected a multithreaded client-server backend capable of handling concurrent connections from multiple clients simultaneously — allowing the simulation state to be observed and manipulated across sessions.",
        technologies: ["Java", "JavaFX", "Figma"],
        demo: critter_sim,
        github: "Private"
    },
    {
        id: 3, 
        title: "Little Lemon", 
        size: "lg", 
        top: "40%", 
        left: "15%",
        description: "A fully responsive restaurant website built for a fictional Chicago-based Mediterranean eatery. Designed and implemented a multi-page site featuring an interactive table reservation system, dynamic menu displays, and smooth navigation — all optimized for both desktop and mobile viewports. Built with a component-based React architecture for clean, reusable UI, and styled with custom CSS to closely match a real-world client brief.",
        technologies: ["JavaScript", "React", "HTML", "CSS"],
        demo: little_lemon,
        github: "https://github.com/Anniew31/LittleLemon"
    },
    {
        id: 4, 
        title: "RoboCup", 
        size: "md", 
        top: "50%", 
        left: "55%",
        description: "Built a full-stack robot soccer simulation engine from scratch, featuring a multi-agent AI system where autonomous robots compete in real-time matches. Engineered a behavior tree strategy system with attacker/defender/supporter roles, and a physics-accurate dribbler mechanic modeled after real SSL RoboCup robots. The full game experience includes a referee system with halves, overtime, scoring, and procedurally generated crowd audio — all rendered in a custom pixel-art HUD.",
        technologies: ["Python", "PyMunk", "PyGame"],
        github: "https://github.com/KengLL/robocup"
    }
]

export default projects