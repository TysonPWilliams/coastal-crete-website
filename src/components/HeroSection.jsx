import { useState, useEffect } from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds
    
    return () => clearInterval(interval)
  }, [images.length])

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="hero" id="home">
      {/* Background Slideshow */}
      <div className="hero-slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Modern Navigation Controls */}
      <div className="slideshow-controls">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentImageIndex + 1) / images.length) * 100}%` }}
            />
          </div>
          <div className="slide-counter">
            <span className="current-slide">{currentImageIndex + 1}</span>
            <span className="total-slides">/ {images.length}</span>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="nav-arrows">
          <button 
            className="nav-arrow prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="nav-arrow next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="slide-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator-fill" />
            </button>
          ))}
        </div>
      </div>
      
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            The Foundation of Excellence for
            <span className="highlight"> Your Shoalhaven Project</span>
          </h1>
          <p className="hero-subtitle">
            From stylish driveways that enhance your property’s value to high-strength commercial 
            foundations built to last, our master craftsmen deliver exceptional results that blend 
            precision with design.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Free Quotes</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
            <a href="tel:0497 820 957" className="btn btn-secondary">Call Now</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <h3>Why Choose Coastal Crete?</h3>
            <ul>
                <li>🏆 15+ Years of Proven Expertise</li>
                <li>🌟 Trusted Local Professionals</li>
                <li>⚡ Reliable, On-Time Project Completion</li>
                <li>💎 Only The Highest-Grade Materials</li>
                <li>🛡️ Peace of Mind: Fully Insured</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat">
          <div className="stat-number">20+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">Customer Satisfaction</div>
        </div>
      </div>
    </section>
  )
}

