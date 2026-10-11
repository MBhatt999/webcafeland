
import React, { useState } from 'react';
import './Header.css';
import VideoModule from './VideoModule';

import logo from '../assets/images/webcafe-logo.png';
import heroImage from '../assets/images/webcafe-hero.png';

const Header = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo" aria-label="WebCafe home">
          <img src={logo} alt="WebCafe AI Logo" />
        </a>
      </nav>

      <div className="header-content">
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
            onClick={() => setIsVideoOpen(true)}
          >
            Get Started <span>→</span>
          </button>
        </div>

        <div className="header-right">
          <img
            src={heroImage}
            alt="WebCafe AI workspace illustration"
            className="hero-image"
          />
        </div>
      </div>

      <VideoModule
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </header>
  );
};

export default Header;
