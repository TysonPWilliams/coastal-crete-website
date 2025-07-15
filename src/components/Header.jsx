import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { useChat } from './ChatContext'

const NAV_SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const { setOpen } = useChat()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120 // offset for sticky header
            let currentSection = 'home'
            for (const section of NAV_SECTIONS) {
                const el = document.getElementById(section.id)
                if (el) {
                    const top = el.offsetTop
                    if (scrollPosition >= top) {
                        currentSection = section.id
                    }
                }
            }
            setActiveSection(currentSection)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="header">
            <div className="header-container">
                <a href="#home" className="logo-container">
                    <img src={logo} alt="Coastal Crete" className="logo" />
                </a>
                <nav className="nav" aria-label="Main navigation">
                    <button
                        className={`menu-toggle${isMenuOpen ? ' open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-menu"
                    >
                        {!isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        )}
                    </button>
                    <ul
                        id="main-menu"
                        className={`nav-list${isMenuOpen ? ' open' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {NAV_SECTIONS.map(section => (
                            <li key={section.id}>
                                {section.id === 'contact' ? (
                                    <button
                                        className={`nav-link${activeSection === section.id ? ' active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setOpen(true)
                                        }}
                                    >
                                        {section.label}
                                    </button>
                                ) : (
                                    <a
                                        href={`#${section.id}`}
                                        className={`nav-link${activeSection === section.id ? ' active' : ''}`}
                                    >
                                        {section.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header-contact">
                    <a href="tel:0497820957" className="contact-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Call Now
                    </a>
                </div>
            </div>
        </header>
    )
}