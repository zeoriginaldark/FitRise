import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'membership',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: 'membership', message: '' });
      }, 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="page-transition animate-fade-in">
      {/* Header */}
      <section className="section-header" style={{ marginTop: '40px' }}>
        <h2>CONTACT <span className="gradient-text">US</span></h2>
        <p>Have questions about plans, personal training, or corporate discounts? Send us a message and our team will get right back to you.</p>
      </section>

      {/* Main Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        {/* Left Side: Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="glass-card" style={{ padding: '30px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Operating Hours
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Monday - Friday</span>
                <strong>5:00 AM - 11:00 PM</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Saturday</span>
                <strong>6:00 AM - 9:00 PM</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Sunday</span>
                <strong>7:00 AM - 8:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '30px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Location</div>
                <strong>742 Evergreen Terrace, Sector 4, Fitness Hub</strong>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>Phone Support</div>
                <strong>+1 (555) 123-4567</strong>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>General Email</div>
                <strong>info@fitrise.com</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card" style={{ padding: '36px', textAlign: 'left', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {isSubmitted ? (
            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(57, 255, 20, 0.1)', 
                border: '2px solid var(--accent-neon)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                color: 'var(--accent-neon)',
                marginBottom: '20px'
              }}>
                ✓
              </div>
              <h3 style={{ marginBottom: '10px' }}>MESSAGE SENT!</h3>
              <p>Thank you, {formData.name}. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="contact-name" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Your Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                  style={{ 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--bg-input)', 
                    border: '1px solid var(--border-light)', 
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-neon)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="contact-email" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="johndoe@example.com"
                  style={{ 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--bg-input)', 
                    border: '1px solid var(--border-light)', 
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-neon)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="contact-subject" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>I am interested in...</label>
                <select 
                  id="contact-subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  style={{ 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--bg-input)', 
                    border: '1px solid var(--border-light)', 
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="membership">Gym Membership Plans</option>
                  <option value="coaching">1-on-1 Personal Training</option>
                  <option value="nutrition">Nutrition & Meal Overhaul</option>
                  <option value="corporate">Corporate Packages</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="contact-message" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Your Message</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="4" 
                  placeholder="How can we help you?"
                  style={{ 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--bg-input)', 
                    border: '1px solid var(--border-light)', 
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-neon)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
