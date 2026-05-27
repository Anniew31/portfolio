import cmsx from '../assets/logos/cmsx.png'
import cup from '../assets/logos/cup.png'
import brh from '../assets/logos/brh.png'
import { compareByDepth } from 'framer-motion'

const activities = [
    {
        id: 1,
        title: "Software Engineer",
        org: "CMSX",
        logo: cmsx,
        start: "March 2026",
        end: "Present",
        description: "Contributing to the development and maintenance of CMSX, Cornell University's internal course management and grading platform actively used across over 140 courses. Working within a production-scale Java and TypeScript codebase built on Jakarta EE and JPA, serving thousands of students and faculty. Focused on refactoring legacy code to improve readability, modularity, and long-term scalability — gaining hands-on experience navigating and contributing to a large, real-world enterprise software system in a collaborative engineering environment."
    },
    {
        id: 2,
        title: "Software Engineer",
        org: "Cup Robotics",
        logo: cup,
        start: "March 2026",
        end: "Present",
        description: "Part of Cornell's student-led robotics project team of over 70 members, focused on designing and building innovative robotics and embedded systems. Contributing to the software subteam by developing simulation and decision-making systems in Python, leveraging Pymunk for physics simulation and behavior trees to govern autonomous robot actions including shooting, passing, and dynamic repositioning."
    },
    {
        id: 3,
        title: "UI/UX Designer ",
        org: "BigRed//Hacks",
        logo: brh,
        start: "Nov 2025",
        end: "Present",
        description: "Designing and prototyping web experiences for BigRed//Hacks, Cornell University's student-run hackathon organization drawing 400+ participants each fall. Responsible for crafting the visual look including the main hackathon website, organization home page, and marketing materials such as Instagram graphics and promotional flyers. Working end-to-end in Figma from initial wireframes to polished, production-ready designs."
    }
]

export default activities