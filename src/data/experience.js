import bny from '../assets/logos/bny.png'
import musashi from '../assets/logos/musashi.png'

const experiences = [
    {
        id: 2,
        title: "AI Engineering Intern",
        org: "Musashi",
        logo: musashi,
        start: "May 2026",
        end: "Present", 
        description: "Contributed across multiple repositories at Musashi, a prediction markets intelligence platform, resolving 14 bugs in a TypeScript API to improve reliability and data accuracy. Built a live Python paper trading terminal to simulate real-time trading strategies without financial risk. Developed and smoke-tested the Musashi MCP server, running structured test suites to surface bugs and gaps in the data pipeline before release. Worked closely with engineering to ship features across the MusashiBot organization, gaining hands-on experience with production debugging, API design, and financial data systems."
    },
    {
        id: 1,
        title: "IT Support Technician",
        org: "Brooklyn Navy Yard",
        logo: bny,
        start: "October 2023",
        end: "June 2025",
        description: "Provided hands-on technical support to over 200 users across a large commercial and industrial campus, diagnosing and resolving a wide range of hardware and software issues under real-world production conditions. Tracked and managed support tickets through Jira, ensuring issues were logged, prioritized, and resolved efficiently. Monitored and maintained systems to ensure consistent performance and minimal downtime, developing strong troubleshooting instincts and the ability to communicate technical solutions clearly to non-technical users."
    }

]

export default experiences