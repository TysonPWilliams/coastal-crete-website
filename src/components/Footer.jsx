import { useState } from 'react'
import logo from '../assets/logo1.png';
import tysonWLogoWhite from '../assets/tysonWLogoWhite.png';
import { QuoteModal } from './QuoteModal.jsx'

export function Footer({ setShowQuoteModal }) {
    return (
        <footer className="footer">
            <div className="footer-background">
                <div className="footer-pattern"></div>
            </div>

            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Coastal Crete" />
                            {/* <h3>Coastal Crete</h3> */}
                        </div>
                        <p className="footer-description">
                            Your trusted concrete specialists on the South Coast. Delivering quality workmanship and professional service with every project.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/CoastalCretePtyLtd" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/coastal_crete/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.646 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.602.388 3.623 1.367 2.645 2.345 2.387 3.515 2.33 4.796.014 5.741 0 6.149 0 12s.014 6.259.072 7.548c.058 1.281.316 2.451 1.295 3.43.979.978 2.149 1.237 3.43 1.295 1.289.058 1.698.072 7.548.072s6.259-.014 7.548-.072c1.281-.058 2.451-.316 3.43-1.295.978-.979 1.237-2.149 1.295-3.43.058-1.289.072-1.698.072-7.548s-.014-6.259-.072-7.548c-.058-1.281-.316-2.451-1.295-3.43C21.451.316 20.281.058 19 .001 17.711-.056 17.302-.07 12-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Concrete Driveways</a></li>
                                <li><a href="#services">Patios & Outdoor Areas</a></li>
                                <li><a href="#services">Foundations</a></li>
                                <li><a href="#services">Decorative Concrete</a></li>
                                <li><a href="#services">Concrete Repairs</a></li>
                                <li><a href="#services">Commercial Concrete</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Service Areas</h4>
                            <ul>
                                <li>Jervis Bay</li>
                                <li>Shoalhaven</li>
                                <li>Nowra</li>
                                <li>Ulladulla</li>
                                <li>Huskisson</li>
                                <li>Vincentia</li>
                                <li>Berry</li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Contact</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <a href="tel:0497820957">Call for Quote</a>
                                </div>
                                <div className="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <a href="mailto:info@coastalcrete.com.au">info@coastalcrete.com.au</a>
                                </div>
                                <div className="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Shoalhaven, NSW</span>
                                </div>
                                <div className="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                    <span>Mon-Fri: 7AM-5PM<br />Weekend: By Appointment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="footer-legal">
                        <p>&copy; 2025 Coastal Crete Pty Ltd. All rights reserved.</p>
                        <p>Licensed & Insured | ABN: XXX XXX XXX</p>
                    </div>
                    <div className="footer-tysonw" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '8px' }}>
                        <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 500, letterSpacing: '0.01em' }}>
                            Website made by
                        </span>
                        <a href="https://tysonwilliams.dev" target="_blank" rel="noopener noreferrer" title="Need a website? Visit Tyson Williams Web Design" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <img src={tysonWLogoWhite} alt="Website by Tyson Williams" style={{ height: '22px', width: 'auto', display: 'block' }} />
                        </a>
                    </div>
                    <div className="footer-cta">
                        <button
                            className='btn btn-primary'
                            onClick={() => setShowQuoteModal(true)}
                            type='button'
                        >
                            Get Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
} 