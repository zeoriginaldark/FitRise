import React from 'react';

export default function Home({ onNavigate }) {
  const pillars = [
    {
      title: "Strength Training",
      description: "Build raw strength, increase muscle mass, and improve bone density with custom weightlifting programs tailored to your profile.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="highlight-primary">
          <path d="M6.5 6.5h11" />
          <path d="M6.5 17.5h11" />
          <path d="m3 10 3-3 3 3" />
          <path d="m3 14 3 3 3-3" />
          <path d="m15 10 3-3 3 3" />
          <path d="m15 14 3 3 3-3" />
          <path d="M12 4v16" />
        </svg>
      )
    },
    {
      title: "Cardio & HIIT",
      description: "Boost your metabolic rate, melt fat, and improve cardiovascular performance with our guided high-intensity interval classes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="highlight-secondary">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: "Nutrition Coaching",
      description: "Fuel your body for performance. Get customizable meal plans and one-on-one nutrition advice tailored to your personal goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="highlight-primary">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Group Fitness",
      description: "Connect and elevate together. Join our high-energy classes including Yoga, Pilates, Spinning, Zumba, and Box-Fit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="highlight-secondary">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <div className="page-transition animate-fade-in">
      {/* Hero Section */}
      <section className="section hero-section" style={{ padding: '80px 0 60px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '24px' }}>
          PUSH BEYOND <br />
          YOUR <span className="gradient-text">LIMITS</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          At FitRise, we design personalized workout routines, custom nutrition strategies, and provide expert coaching to help you achieve your ultimate training potential.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => onNavigate('products')}>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('about')}>
            Learn More
          </button>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="section pillars-section">
        <div className="section-header">
          <h2>OUR CORE <span className="gradient-text">METHODOLOGY</span></h2>
          <p>We design every program around proven pillars of fitness, custom workout structures, and tailored nutrition.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {pillars.map((pillar, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-light)' }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '8px' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.95rem', textAlign: 'left' }}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="section cta-section" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-secondary))', border: '1px solid var(--border-light)', padding: '80px 40px', textAlign: 'center', marginTop: '40px' }}>
        {/* Subtle decorative circles */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 143, 61, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        <h2 style={{ marginBottom: '16px' }}>ARE YOU READY TO <span className="highlight-primary">RISE</span>?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px', color: 'var(--text-secondary)' }}>
          Start your transformation journey today. Get your custom training and nutrition plan, join our community, and reach heights you never thought possible.
        </p>
        <button className="btn btn-accent" onClick={() => onNavigate('contact')}>
          Join FitRise Today
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </section>
    </div>
  );
}
