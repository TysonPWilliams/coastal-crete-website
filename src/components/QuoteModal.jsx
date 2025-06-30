import { useState } from 'react';

export function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xeokpven', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose} aria-label="Close modal">×</button>
        {submitted ? (
          <div className="quote-modal-success">
            <h3>Thank you!</h3>
            <p>Your request has been received. We'll be in touch soon to discuss your project and provide a free quote.</p>
          </div>
        ) : (
          <>
            <h3 className="quote-modal-title">Get Your <span className="highlight">Free Quote</span></h3>
            <p className="quote-modal-subtext">Fill out the form below and our team will contact you for a fast, no-obligation quote. <span style={{ color: '#10b981', fontWeight: 600 }}>100% Free.</span></p>
            <form className="quote-modal-form" onSubmit={handleSubmit} autoComplete="off">
              {error && <div className="quote-modal-error">{error}</div>}
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
              <input type="text" name="location" placeholder="Location (optional)" value={form.location} onChange={handleChange} />
              <textarea name="details" placeholder="Tell us about your project (e.g. driveway, patio, repairs, etc.)" value={form.details} onChange={handleChange} rows={4} required />
              <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Request Free Quote'}</button>
              <div className="quote-modal-privacy">🔒 Your information is kept private and never shared.</div>
            </form>
          </>
        )}
      </div>
    </div>
  );
} 