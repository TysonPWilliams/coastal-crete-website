import React from 'react';
import { Building2, Car, Hammer, Icon, Layers, LayoutDashboard, Sparkles, Sun } from 'lucide-react';

// Placeholder SVGs for each service (replace with your own if desired)
// const DrivewaySVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><rect x="6" y="36" width="36" height="6" rx="2" fill="#3b82f6"/><rect x="10" y="6" width="28" height="28" rx="6" fill="#e0e7ef"/><rect x="18" y="14" width="12" height="12" rx="3" fill="#1e3a8a"/></svg>
// );
// const PatioSVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="32" width="32" height="8" rx="2" fill="#3b82f6"/><rect x="12" y="8" width="24" height="20" rx="5" fill="#e0e7ef"/><rect x="18" y="14" width="12" height="8" rx="2" fill="#1e3a8a"/></svg>
// );
// const FoundationSVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="36" width="32" height="6" rx="2" fill="#3b82f6"/><rect x="14" y="10" width="20" height="20" rx="4" fill="#e0e7ef"/><rect x="20" y="16" width="8" height="8" rx="2" fill="#1e3a8a"/></svg>
// );
// const DecorativeSVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#e0e7ef"/><circle cx="24" cy="24" r="12" fill="#3b82f6"/><circle cx="24" cy="24" r="6" fill="#1e3a8a"/></svg>
// );
// const RepairsSVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><rect x="10" y="36" width="28" height="6" rx="2" fill="#3b82f6"/><rect x="14" y="10" width="20" height="20" rx="4" fill="#e0e7ef"/><rect x="22" y="18" width="4" height="8" rx="2" fill="#1e3a8a"/></svg>
// );
// const CommercialSVG = () => (
//   <svg className="service-svg" viewBox="0 0 48 48" fill="none"><rect x="8" y="36" width="32" height="6" rx="2" fill="#3b82f6"/><rect x="12" y="8" width="24" height="20" rx="5" fill="#e0e7ef"/><rect x="18" y="14" width="12" height="8" rx="2" fill="#1e3a8a"/></svg>
// );

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