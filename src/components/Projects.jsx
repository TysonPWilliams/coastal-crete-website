import { useState, useEffect, useRef } from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/IMG_2066.jpg'
import pic10 from '../assets/IMG_2090.jpg'
import pic11 from '../assets/IMG_2280.jpg'
import pic12 from '../assets/IMG_3129.jpg'
import pic13 from '../assets/IMG_3388.jpg'
import pic14 from '../assets/IMG_3389.jpg'
import pic15 from '../assets/IMG_3771.jpg'
import pic16 from '../assets/IMG_3868.jpg'
import pic17 from '../assets/IMG_4253.JPG'
import pic18 from '../assets/IMG_5910.jpg'
import pic19 from '../assets/IMG_6448.jpg'
import pic20 from '../assets/IMG_9795.jpg'
import pic21 from '../assets/IMG_9796.jpg'
import pic22 from '../assets/IMG_9871.jpg'
import pic0 from '../assets/IMG_0695.jpg'
import pic23 from '../assets/IMG_1157.jpg'

const images = [pic0, pic23, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, ]

export function Projects() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const goTo = idx => {
    if (idx === current) return
    setCurrent(idx)
  }
  const next = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }
  const prevImg = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c === images.length - 1 ? 0 : c + 1))
    }, 7000)
    return () => clearInterval(intervalRef.current)
  }, [isPaused])

  // 3D carousel logic: show prev, current, next
  const getPosition = idx => {
    if (idx === current) return 'center'
    if ((idx === (current - 1 + images.length) % images.length)) return 'left'
    if ((idx === (current + 1) % images.length)) return 'right'
    return 'hidden'
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Recent Projects</h2>
        <p className="projects-subtitle">See the quality and variety of our work across Shoalhaven and the South Coast</p>
        <div 
          className="projects-carousel projects-carousel-3d" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-3d-track">
            {images.map((img, idx) => {
              const pos = getPosition(idx)
              return (
                <div
                  key={idx}
                  className={`project-3d-card ${pos}`}
                  style={{ backgroundImage: `url(${img})` }}
                  aria-hidden={pos === 'hidden'}
                >
                  {/* Optionally overlay project info here */}
                </div>
              )
            })}
          </div>
          <button className="carousel-arrow prev" onClick={prevImg} aria-label="Previous project">&#9664;</button>
          <button className="carousel-arrow next" onClick={next} aria-label="Next project">&#9654;</button>
          <div className="carousel-indicators">
            {images.map((_, idx) => (
              <button 
                key={idx} 
                className={`carousel-indicator${idx === current ? ' active' : ''}`} 
                onClick={() => goTo(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 