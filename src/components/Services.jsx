import { Building2, Car, Hammer, Layers, Sparkles, Sun } from 'lucide-react';


const services = [
  {
    name: "Concrete Driveways",
    desc: "Durable, stylish driveways that boost your home's value and curb appeal.",
    Icon: Car,
  },
  {
    name: "Patios & Outdoor Areas",
    desc: "Transform your outdoor space with beautiful, functional concrete patios.",
    Icon: Sun,
  },
  {
    name: "Foundations",
    desc: "Strong, reliable foundations for new builds and extensions.",
    Icon: Layers,
  },
  {
    name: "Decorative Concrete",
    desc: "Stamped, colored, or exposed aggregate for a unique finish.",
    Icon: Sparkles,
  },
  {
    name: "Concrete Repairs",
    desc: "Restore and protect your concrete surfaces for years to come.",
    Icon: Hammer,
  },
  {
    name: "Commercial Concrete",
    desc: "Expert solutions for shops, warehouses, and commercial projects.",
    Icon: Building2,
  }
];

export function Services({ setShowQuoteModal }) {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Quality concrete solutions for every project. Explore what we offer below!</p>
      <div className="services-list">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-card-center">
              <service.Icon className="service-icon" />
              <h3 className="service-title">
                {service.name.toUpperCase()}
              </h3>
            </div>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="services-cta-wrapper">
        <button
          className="btn btn-primary services-cta"
          onClick={() => setShowQuoteModal(true)}
          type="button"
        >
          Get Free Quote
        </button>
      </div>
    </section>
  );
}