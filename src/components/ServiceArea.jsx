export function ServiceArea() {
  return (
    <section className="service-area-section" id="service-area">
      <div className="service-area-container">
        <h2 className="service-area-title">Where We Work</h2>
        <p className="service-area-desc">
          Proudly serving Shoalhaven, Nowra, Ulladulla, Huskisson, Vincentia, Berry, Jervis Bay, and surrounding towns.
        </p>
        <div className="service-area-map">
          <iframe
            title="Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217485.03967088446!2d150.53075025488295!3d-34.9608112827081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b148003b0002137%3A0x5017d681632e520!2sNowra%20NSW%202541!5e0!3m2!1sen!2sau!4v1750909225099!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '14px', marginTop: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="service-area-cta">
          <a href="#contact" className="btn btn-primary">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  )
} 