
import React from 'react';
import './Header.css';

import logo from '../assets/images/webcafe-logo.png';
import heroImage from '../assets/images/webcafe-hero.png';

const Header = () => {
  return (
    <header className="header">
      {/* Website logo */}
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="WebCafe AI Logo" />
        </a>
      </nav>

      {/* Main hero section */}
      <div className="header-content">
        {/* Left side: text and button */}
        <div className="header-left">
          <h1>
            Build smarter
            <br />
            with AI.
          </h1>

          <p>
            Your go-to solution for AI-driven
            web applications.
          </p>

          <button
            className="primary-button"
            onClick={() => {
              alert('Welcome to WebCafe AI!');
            }}
          >
            Get Started <span>→</span>
          </button>
        </div>

        {/* Right side: hero illustration */}
        <div className="header-right">
          <img
            src={heroImage}
            alt="WebCafe AI workspace illustration"
            className="hero-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
