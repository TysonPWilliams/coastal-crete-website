// import { useState } from 'react'
// import logo from '../assets/logo-coastal-crete.png'

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo-container">
//           <img src={logo} alt="Coastal Crete" className="logo" />
//           <span className="company-name">Coastal Crete</span>
//         </div>
        
//         <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
//           <ul className="nav-list">
//             <li><a href="#home" className="nav-link">Home</a></li>
//             <li><a href="#services" className="nav-link">Services</a></li>
//             <li><a href="#projects" className="nav-link">Projects</a></li>
//             <li><a href="#about" className="nav-link">About</a></li>
//             <li><a href="#contact" className="nav-link">Contact</a></li>
//           </ul>
//         </nav>

//         <div className="header-contact">
//           <a href="tel:0497 820 957" className="contact-button">
//             📞 Call Now
//           </a>
//         </div>

//         <button 
//           className="menu-toggle"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </div>
//     </header>
//   )
// }

import { useState } from 'react'
import logo from '../assets/logo.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo-container">
          <img src={logo} alt="Coastal Crete" className="logo" />
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="header-contact">
          <a href="tel:0497820957" className="contact-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Now
          </a>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}