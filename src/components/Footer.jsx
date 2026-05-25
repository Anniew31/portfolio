import linkedin from '../assets/logos/linkedin.png'
import github from '../assets/logos/github.png'
import email from '../assets/logos/email.png'

function Footer() {
    return (
        <footer className="bg-[#273344] py-4 flex flex-col items-center gap-4">
            <p className="text-beige text-xs font-mono uppercase tracking-[0.2em] opacity-80">Contacts</p>
            <div className="flex gap-8 items-center justify-center">
                <a 
                href="https://linkedin.com/in/annie-weng-42b323276/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center w-8 h-8 transition-transform duration-200 hover:scale-110">
                    <img src={linkedin} className="max-w-full max-h-full object-contain" alt="LinkedIn" />
                </a>
                <a 
                    href="https://github.com/Anniew31" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-8 h-8 transition-transform duration-200 hover:scale-110"
                >
                    <img src={github} className="max-w-full max-h-full object-contain" alt="GitHub" />
                </a>
                <a 
                    href="mailto:aw899@cornell.edu" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-8 h-8 transition-transform duration-200 hover:scale-110 -translate-y-[3px]"
                >
                    <img src={email} className="max-w-full max-h-full object-contain" alt="Email" />
                </a>
            </div>
        </footer>
    )
}

export default Footer