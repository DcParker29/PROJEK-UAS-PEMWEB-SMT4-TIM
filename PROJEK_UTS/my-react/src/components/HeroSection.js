import React from 'react';
import './HeroSection.css';

const sofaImage = 'https://images.unsplash.com/photo-1618220868897-3a7a3a7a3a7a?auto=format&fit=crop&w=800&q=80';

function HeroSection() {
  return (
    <section className="hero-section">
      <img src={sofaImage} alt="Sofa Oranye" className="hero-sofa" />
      <div className="hero-text">
        <button className="btn-play" aria-label="Play Video">
          ▶
        </button>
        <h1>DESAIN FURNITURE</h1>
      </div>
    </section>
  );
}

export default HeroSection;
