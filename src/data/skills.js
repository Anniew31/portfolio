import python from '../assets/skills_images/python.png'
import java from '../assets/skills_images/java.png'
import javascript from '../assets/skills_images/javascript.png'
import typescript from '../assets/skills_images/typescript.png'
import html from '../assets/skills_images/html.png'
import ocaml from '../assets/skills_images/ocaml.png'
import css from '../assets/skills_images/css.png'
import react from '../assets/skills_images/react.png'
import javafx from '../assets/skills_images/javafx.png'
import pandas from '../assets/skills_images/pandas.png'
import github from '../assets/logos/github.png'
import lang from '../assets/skills_images/lang.png'
import library from '../assets/skills_images/library.png'
import tool from '../assets/skills_images/tool.png'
import git from '../assets/skills_images/git.png'
import intellij from '../assets/skills_images/intellij.png'
import vscode from '../assets/skills_images/vscode.png'
import docker from '../assets/skills_images/docker.png'
import other from '../assets/skills_images/other.png'
import autocad from '../assets/skills_images/autocad.png'
import figma from '../assets/skills_images/figma.png'
import latex from '../assets/skills_images/latex.png'
import microsoft from '../assets/skills_images/microsoft.png'
import google from '../assets/logos/google.png'

const skills = [
    {
        id: "languages",
        title: "Languages",
        image: lang,
        skills :[
            { name: "Python", logo: python }, 
            { name: "Java", logo: java },
            { name: "JavaScript", logo: javascript },
            { name: "TypeScript", logo: typescript },
            { name: "HTML", logo: html },
            { name: "CSS", logo: css },
            { name: "OCaml", logo: ocaml }

        ]
    },
    {
        id: "frameworks",
        title: "Frameworks & Libraries",
        image: library,
        skills :[
            { name: "React", logo: react },
            { name: "JavaFX", logo: javafx },
            { name: "TSDL", logo: null }, 
            { name: "Pymunk", logo: null },
            { name: "Pandas", logo: pandas }
        ]
    },
    {
        id: "tools",
        title: "Developer Tools",
        image: tool,
        skills: [
            { name: "Git", logo: git },
            { name: "Github", logo: github },
            { name: "VSCode", logo: vscode },
            { name: "IntelliJ", logo: intellij },
            { name: "Docker", logo: docker }
        ]
    },
    {
        id: "other",
        title: "Other",
        image: other,
        skills: [
            { name: "AutoCAD", logo: autocad },
            { name: "Figma", logo: figma },
            { name: "LaTeX", logo: latex },
            { name: "Microsoft Suite", logo: microsoft },
            { name: "Google Suite", logo: google }
        ]
    }
]

export default skills