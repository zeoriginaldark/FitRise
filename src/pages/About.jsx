import React from 'react';

export default function About() {
  const values = [
    {
      title: "Science-Backed",
      description: "Our coaching methods are rooted in exercise science and kinesiology, ensuring safe, progressive, and efficient growth.",
      color: "var(--accent-primary)"
    },
    {
      title: "Radical Inclusivity",
      description: "No matter your starting point—complete novice or professional athlete—you have a place and a support structure here.",
      color: "var(--accent-secondary)"
    },
    {
      title: "Community First",
      description: "We host regular social events, group challenges, and workshops because we believe that training is better when shared.",
      color: "var(--accent-primary)"
    }
  ];

  const trainers = [
    {
      name: "Arun Thapa",
      role: "Head of Strength & Conditioning",
      bio: "15+ years experience. Former national-level powerlifter specializing in compound lifting and hypertrophy trained in Kathmandu.",
      specialty: "Powerlifting & Hypertrophy",
      avatar: "💪"
    },
    {
      name: "Pooja Sharma",
      role: "Lead HIIT & Athletic Coach",
      bio: "Master's in Sports Science from Tribhuvan University. Passionate about metabolic conditioning, mobility, and agility training.",
      specialty: "HIIT & Conditioning",
      avatar: "⚡"
    },
    {
      name: "Rajesh Gurung",
      role: "Nutrition Specialist",
      bio: "Registered Dietitian with expertise in South Asian nutrition. Helps clients fuel correctly with local Nepali ingredients.",
      specialty: "Sports Dietetics & Local Nutrition",
      avatar: "🥗"
    }
  ];

  return (
    <div className="page-transition animate-fade-in">
      {/* Brand Story */}
      <section className="section" style={{ marginTop: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '20px' }}>OUR <span className="gradient-text">STORY</span></h2>
            <p style={{ marginBottom: '16px', textAlign: 'left' }}>
              Founded in 2020, FitRise was born out of a simple realization: training should be personalized, scientific, and goal-oriented. We set out to replace generic gym memberships with highly custom workout blueprints and structured nutrition coaching.
            </p>
            <p style={{ marginBottom: '24px', textAlign: 'left' }}>
              We combine advanced exercise physiology, tailored nutritional engineering, and continuous coaching. By focusing on individual bio-metrics, we build structures where real, lasting physical transformations occur.
            </p>
            <div style={{ padding: '20px', borderLeft: '3px solid var(--accent-primary)', backgroundColor: 'var(--bg-secondary)', borderRadius: '0 8px 8px 0' }}>
              <p style={{ fontStyle: 'italic', fontWeight: '500', color: 'var(--text-primary)', textAlign: 'left' }}>
                "Our mission is to empower individuals to rise above physical and mental limitations through personalized workout programming, precision meal plans, and expert coaching."
              </p>
            </div>
          </div>
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-secondary))' }}>
            <div style={{ fontSize: '3rem' }}>🏋️‍♂️</div>
            <h3 style={{ color: 'var(--accent-primary)' }}>THE FITRISE WAY</h3>
            <p style={{ fontSize: '0.95rem' }}>
              We don't sell gym access. We provide customized workout and nutrition plans that serve as blueprints for a stronger, more resilient life.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '60px 0' }}>
        <div className="section-header">
          <h2>OUR CORE <span className="gradient-text">VALUES</span></h2>
          <p>The foundations that guide every program, coaching session, and community event we run.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {values.map((val, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'left' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: val.color, marginBottom: '16px' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{val.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', padding: '60px 0' }}>
        <div className="section-header">
          <h2>MEET THE <span className="gradient-text">COACHES</span></h2>
          <p>Certified trainers who are passionate about teaching, correcting form, and pushing you forward.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {trainers.map((trainer, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 24px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '20px'
              }}>
                {trainer.avatar}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{trainer.name}</h3>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px'
              }}>
                {trainer.role}
              </div>

              <p style={{ fontSize: '0.9rem', marginBottom: '20px', flexGrow: 1 }}>{trainer.bio}</p>

              <div style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-secondary)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)'
              }}>
                Specialty: <strong>{trainer.specialty}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
