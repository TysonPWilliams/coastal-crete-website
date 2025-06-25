import { useState } from 'react'

export function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    
    const testimonials = [
        {
            name: "Sarah Mitchell",
            rating: 5,
            text: "Coastal Crete did an amazing job on our driveway. Professional, punctual, and the quality is outstanding. Highly recommend!",
            date: "2024",
            project: "Driveway Installation",
            color: "#3b82f6"
        },
        {
            name: "Michael Thompson",
            rating: 5,
            text: "Excellent workmanship and attention to detail. Our new concrete patio looks fantastic and was completed on time and within budget.",
            date: "2024",
            project: "Patio Construction",
            color: "#10b981"
        },
        {
            name: "Lisa Chen",
            rating: 5,
            text: "The team at Coastal Crete is incredibly professional. They transformed our outdoor space with beautiful concrete work. Very happy with the results!",
            date: "2024",
            project: "Outdoor Living Space",
            color: "#f59e42"
        },
        {
            name: "David Wilson",
            rating: 5,
            text: "Outstanding service from start to finish. The concrete foundation for our extension is rock solid. Great communication throughout the project.",
            date: "2024",
            project: "Foundation Work",
            color: "#6366f1"
        },
        {
            name: "Emma Rodriguez",
            rating: 5,
            text: "Coastal Crete delivered exactly what we wanted. The decorative concrete work on our pool surround is absolutely stunning. Highly professional team!",
            date: "2024",
            project: "Pool Surround",
            color: "#ef4444"
        }
    ]

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => 
            prev === testimonials.length - 1 ? 0 : prev + 1
        )
    }

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                ★
            </span>
        ))
    }

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-background">
                <div className="testimonials-pattern"></div>
            </div>
            
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">
                        What Our Customers Say
                    </h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it - hear from our satisfied customers across the Shoalhaven region
                    </p>
                    <div className="testimonials-stats">
                        <div className="testimonial-stat">
                            <div className="stat-number">5.0</div>
                            <div className="stat-label">Average Rating</div>
                            <div className="stat-stars">★★★★★</div>
                        </div>
                        <div className="testimonial-stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="testimonial-stat">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>

                <div className="testimonials-content">
                    <div className="testimonials-carousel">
                        <div className="testimonial-card active">
                            <div className="testimonial-header">
                                <div className="testimonial-rating">
                                    {renderStars(testimonials[activeTestimonial].rating)}
                                </div>
                                <div className="testimonial-project">
                                    {testimonials[activeTestimonial].project}
                                </div>
                            </div>
                            
                            <blockquote className="testimonial-text">
                                "{testimonials[activeTestimonial].text}"
                            </blockquote>
                            
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <div className="author-avatar" style={{backgroundColor: testimonials[activeTestimonial].color}}>
                                        {getInitials(testimonials[activeTestimonial].name)}
                                    </div>
                                    <div className="author-name">
                                        {testimonials[activeTestimonial].name}
                                    </div>
                                    <div className="author-location">
                                        Shoalhaven Region
                                    </div>
                                </div>
                                <div className="testimonial-date">
                                    {testimonials[activeTestimonial].date}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials-navigation">
                        <button 
                            className="nav-btn prev-btn"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            ‹
                        </button>
                        
                        <div className="testimonial-indicators">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                                    onClick={() => setActiveTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                >
                                    <div className="indicator-fill" />
                                </button>
                            ))}
                        </div>
                        
                        <button 
                            className="nav-btn next-btn"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            ›
                        </button>
                    </div>
                </div>

                <div className="testimonials-cta">
                    <div className="cta-content">
                        <h3>Ready to Start Your Project?</h3>
                        <p>Join hundreds of satisfied customers who trust Coastal Crete for their concrete needs</p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
                            <a 
                                href="https://www.facebook.com/CoastalCretePtyLtd/reviews" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary facebook-btn"
                            >
                                <span className="facebook-logo" aria-label="Facebook">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#1877F3"/>
                                        <path d="M15.36 8.26H13.5V7.13C13.5 6.7 13.8 6.6 14.01 6.6H15.33V4.5H13.5C11.57 4.5 11.5 6.02 11.5 7.13V8.26H10V10.5H11.5V16.5H13.5V10.5H15.09L15.36 8.26Z" fill="#fff"/>
                                    </svg>
                                </span>
                                View All Reviews
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}