import React from 'react';

export default function Products({ onNavigate }) {
  const plans = [
    {
      name: "Starter Plan",
      price: "NPR 999",
      period: "month",
      description: "Perfect for individuals looking for structured, standard workout and meal templates.",
      features: [
        "Personalized weekly workout template",
        "Standard recipe & meal guides",
        "1 Free monthly progress check-in",
        "Access to FitRise mobile tracking app",
        "Standard community group access"
      ],
      isPopular: false,
      btnClass: "btn-secondary"
    },
    {
      name: "Elite Plan",
      price: "NPR 1,999",
      period: "month",
      description: "Our signature tier. Designed for dedicated trainees seeking fully customized training and meal plans.",
      features: [
        "Fully custom weekly workout plans",
        "Tailored meal plans & macro targets",
        "Weekly plan adjustments & feedback",
        "Priority chat support with your coach",
        "Video form analysis & feedback",
        "FitRise tracking app premium access"
      ],
      isPopular: true,
      btnClass: "btn-primary"
    },
    {
      name: "VIP Club",
      price: "NPR 2,999",
      period: "month",
      description: "All-inclusive premium coaching. Direct daily feedback and tailored plans for elite performance.",
      features: [
        "All Elite Plan features included",
        "Daily 1-on-1 chat & call with coach",
        "Daily customized workout adjustments",
        "Daily customized meal & supplement plans",
        "Bi-weekly 1-on-1 video reviews",
        "Custom plan optimization for travel"
      ],
      isPopular: false,
      btnClass: "btn-accent"
    }
  ];

  const packages = [
    {
      title: "1-on-1 Personal Coaching",
      price: "NPR 9,999",
      description: "A bundle of 10 private training sessions with a certified coach tailored for maximum results.",
      perks: ["Custom workout plans", "Form analysis & adjustment", "Weekly progress checkins"]
    },
    {
      title: "12-Week Nutrition Overhaul",
      price: "NPR 4,999",
      description: "A complete dietary blueprint designed by certified sports nutritionists for muscle gain or fat loss.",
      perks: ["Macro/calorie breakdown", "Easy-to-cook recipe guides", "Weekly food log audits"]
    },
    {
      title: "FitRise Merch Pack",
      price: "NPR 2,499",
      description: "Represent the community in and out of the gym with our performance athletic wear bundle.",
      perks: ["1x FitRise Premium Hoodie", "1x Stainless Steel Shaker", "1x Elite Lifting Straps"]
    }
  ];

  return (
    <div className="page-transition animate-fade-in">
      {/* Page Header */}
      <section className="section-header" style={{ marginTop: '40px' }}>
        <h2>TRAINING & <span className="gradient-text">NUTRITION PLANS</span></h2>
        <p>Choose the level of personalization and plan details that match your lifestyle and fitness ambitions. Start training today.</p>
      </section>

      {/* Pricing Cards Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderColor: plan.isPopular ? 'var(--accent-primary)' : 'var(--border-light)',
              boxShadow: plan.isPopular ? '0 10px 40px rgba(255, 143, 61, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            {plan.isPopular && (
              <span style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--accent-primary)',
                color: '#000',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Most Popular
              </span>
            )}

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px', height: '45px' }}>{plan.description}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '4px' }}>/{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`btn ${plan.btnClass}`} style={{ width: '100%' }} onClick={() => onNavigate('contact')}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </section>

      {/* Specialty Packages Header */}
      <section className="section-header">
        <h2>SPECIALIZED <span className="gradient-text">INTENSIVES</span></h2>
        <p>In addition to our monthly plans, we offer deep-dive individual coaching intensives.</p>
      </section>

      {/* Specialty Packages Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {packages.map((pkg, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left', padding: '24px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{pkg.title}</h3>
                <span style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>{pkg.price}</span>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{pkg.description}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {pkg.perks.map((perk, pIndex) => (
                  <li key={pIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-secondary)' }}></span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', padding: '10px 20px', fontSize: '0.85rem' }} onClick={() => onNavigate('contact')}>
              Inquire Package
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
