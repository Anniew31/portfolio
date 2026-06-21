import critter_sim from '../assets/demos/critter_sim.mp4'
import little_lemon from '../assets/demos/little_lemon.mp4'
import bananaship from '../assets/demos/bananaship.mp4'
import critter_thubmnail from '../assets/thumbnails/critter.png'
import banana_thumbnail from '../assets/thumbnails/bananaship.png'
import lemon_thumbnail from '../assets/thumbnails/lemon.png'
import jobagent_thumbnail from '../assets/thumbnails/jobagent.png'

const projects = [
    {
        id: 4, 
        title: "Job Agent", 
        size: "md", 
        top: "50%", 
        left: "55%",
        category: "web",
        thumbnail: jobagent_thumbnail,
        description: "A full-stack AI-powered platform that automates job application prep. Built a FastAPI and PostgreSQL backend to manage job listings and user data, paired with a Next.js frontend for a clean, responsive interface. Integrated an LLM pipeline that scores job postings against a user's profile for fit and automatically tailors resume content to match each role's requirements — cutting down the manual work of customizing applications one by one. Deployed the backend on Render and the frontend on Vercel for a fully live, production-style deployment.",
        technologies: ["Python", "TypeScript", "FastAPI", "PostgreSQL", "Next.js", "LLM"],
        live: "https://job-agent-pipeline.vercel.app/",
        github: "https://github.com/Anniew31/job-agent"
    },
    {
        id: 2, 
        title: "Critter Simulator", 
        size: "lg", 
        top: "0%", 
        left: "45%",
        category: "games",
        thumbnail: critter_thubmnail,
        description: "A full-stack simulation engine built in Java that models an evolving ecosystem of programmable artificial life forms. Designed a custom language parser and interpreter from scratch to process critter-specific instructions, enabling complex behavioral logic to execute in real time. Built a responsive JavaFX GUI for live visualization of the simulation world, and architected a multithreaded client-server backend capable of handling concurrent connections from multiple clients simultaneously — allowing the simulation state to be observed and manipulated across sessions.",
        technologies: ["Java", "JavaFX", "Figma"],
        demo: critter_sim,
        github: "Private"
    },
    {
        id: 1, 
        title: "Bananaship", 
        size: "md", 
        top: "-5%", 
        left: "10%",
        category: "games",
        thumbnail: banana_thumbnail,
        description: "A fully re-imagined take on the classic Battleship game, built in OCaml with a whimsical banana-and-raccoon theme. Features two distinct play modes: a terminal-based interface for a lightweight command-line experience, and a polished GUI built with TSDL featuring custom sprites, animated hit and miss feedback, and integrated background music. Players take turns on a shared local session, strategically placing bananas and launching attacks on their opponent's grid. Engineered the core game logic in a functional programming paradigm with clean separation of game state, rendering, and input handling.",
        technologies: ["OCaml", "TDSL"],
        demo: bananaship,
        github: "https://github.coecis.cornell.edu/aw899/Wizards-Racoon"
    },
    {
        id: 3, 
        title: "Little Lemon", 
        size: "lg", 
        top: "40%", 
        left: "15%",
        category: "web",
        thumbnail: lemon_thumbnail,
        description: "A fully responsive restaurant website built for a fictional Chicago-based Mediterranean eatery. Designed and implemented a multi-page site featuring an interactive table reservation system, dynamic menu displays, and smooth navigation — all optimized for both desktop and mobile viewports. Built with a component-based React architecture for clean, reusable UI, and styled with custom CSS to closely match a real-world client brief.",
        technologies: ["JavaScript", "React", "HTML", "CSS"],
        demo: little_lemon,
        github: "https://github.com/Anniew31/LittleLemon"
    }
]

export default projects