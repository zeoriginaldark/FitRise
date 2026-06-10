import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Smooth scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileOpen(false);
  }, [activePage]);

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {/* Background ambient lighting blooms for premium premium look */}
      <div className="bg-ambient-light ambient-1"></div>
      <div className="bg-ambient-light ambient-2"></div>

      {/* Fixed Header / Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo" onClick={() => handleNavigate('home')}>
            <span className="logo-icon">⚡</span>
            <span>FIT<span className="highlight-green">RISE</span></span>
          </div>

          {/* Toggle button for mobile navigation */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
            <li>
              <span 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavigate('home')}
              >
                Home
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'products' ? 'active' : ''}`}
                onClick={() => handleNavigate('products')}
              >
                Products & Pricing
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavigate('about')}
              >
                About Us
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavigate('contact')}
              >
                Contact
              </span>
            </li>
            
            {/* Mobile-only CTA */}
            {isMobileOpen && (
              <li style={{ marginTop: '16px', width: '100%' }}>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => handleNavigate('contact')}
                >
                  Join Now
                </button>
              </li>
            )}
          </ul>

          {/* Desktop-only CTA */}
          <div className="nav-cta">
            <button className="btn btn-primary" onClick={() => handleNavigate('contact')}>
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main page content area */}
      <main className="main-content">
        <div key={activePage} className="page-transition">
          {renderPage()}
        </div>
      </main>

      {/* Site Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent-neon)' }}>⚡</span> FITRISE
            </h3>
            <p>
              We provide elite training programs, high-end equipment, and custom nutrition plans to push you beyond your limits.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => handleNavigate('home')}>Home</a></li>
              <li><a onClick={() => handleNavigate('products')}>Membership Plans</a></li>
              <li><a onClick={() => handleNavigate('about')}>About Us</a></li>
              <li><a onClick={() => handleNavigate('contact')}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li><a onClick={() => handleNavigate('home')}>Strength Training</a></li>
              <li><a onClick={() => handleNavigate('home')}>Cardio & HIIT</a></li>
              <li><a onClick={() => handleNavigate('home')}>Nutrition Coaching</a></li>
              <li><a onClick={() => handleNavigate('home')}>Group Fitness</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '12px' }}>742 Evergreen Terrace, Sector 4, Fitness Hub</li>
              <li style={{ marginBottom: '12px' }}>+1 (555) 123-4567</li>
              <li>info@fitrise.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FitRise Gym. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color='var(--accent-neon)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>Privacy Policy</a>
            <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color='var(--accent-neon)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
