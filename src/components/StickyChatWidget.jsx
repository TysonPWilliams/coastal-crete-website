import { useState } from 'react'

export function StickyChatWidget() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.email && !form.phone) {
        setError('Please provide either an email or phone number')
        return;
    }
    setError('');
    setSubmitted(true);
    await fetch('https://formspree.io/f/xeokpven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    // Here you would send the form data to your backend or email service
    // setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <button className="sticky-chat-btn" onClick={() => setOpen(true)} aria-label="Have a question?">
        <span className="chat-icon">💬</span>
        <span className="chat-label">Have a question?</span>
      </button>
      {open && (
        <div className="chat-modal-overlay" onClick={() => setOpen(false)}>
          <div className="chat-modal" onClick={e => e.stopPropagation()}>
            <button className="chat-modal-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
            <h3>Contact Us</h3>
            {submitted ? (
              <div className="chat-modal-success">Thank you! We'll be in touch soon.</div>
            ) : (
              <form className="chat-modal-form" onSubmit={handleSubmit} autoComplete="off">
                {error && <div className="chat-modal-error">{error}</div>}
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}  />
                <input type="tel" name="phone" placeholder="Your Phone" value={form.phone} onChange={handleChange}  />
                <textarea name="message" placeholder="How can we help?" value={form.message} onChange={handleChange} required />
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
} 