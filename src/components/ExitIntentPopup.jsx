import { useEffect, useState } from 'react';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Exit intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Time-based (15 seconds)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('exitIntentShown')) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }, 15000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
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
  };

  if (!show) return null;

  return (
    <div className="exit-popup-overlay" onClick={() => setShow(false)}>
      <div className="exit-popup" onClick={e => e.stopPropagation()}>
        <button className="exit-popup-close" onClick={() => setShow(false)} aria-label="Close popup">×</button>
        <h3 className="exit-popup-title">Get a <span className="highlight">Free Site Assessment</span></h3>
        <p className="exit-popup-desc">Enter your details and <span className="exit-popup-bold">we'll contact you</span> for a <span className="exit-popup-green">free, no-obligation site assessment</span>.</p>
        {submitted ? (
          <div className="exit-popup-success">Thank you! We'll be in touch soon.</div>
        ) : (
          <form className="exit-popup-form" onSubmit={handleSubmit} autoComplete="off">
            {error && <div className="exit-popup-error">{error}</div>}
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">Claim Offer</button>
          </form>
        )}
      </div>
    </div>
  );
} 