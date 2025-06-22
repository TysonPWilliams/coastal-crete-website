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
            📞 Call Now
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