import React from 'react';
import './AboutSection.css';

const valuesImage = 'https://img.freepik.com/photos-premium/cubes-brillants-noirs-briquettes-charbon-bois-pour-poele-feu-cheminee_124507-19491.jpg?w=1060';

function ValuesSection() {
  return (
    <section className="values-section" style={{ backgroundImage: `url(${valuesImage})` }}>
      <div className="values-content">
        <h1>Our Values</h1>
        <p>
          We uphold integrity in every aspect of our business, ensuring honesty, transparency, and trust in all our dealings. With a strong commitment, we prioritize fulfilling our promises and exceeding client expectations. Through continuous innovation, we strive to enhance our products, processes, and services to meet the ever-changing needs of the market. Above all, we are dedicated to delivering exceptional quality, ensuring that our charcoal briquettes meet the highest standards of performance and sustainability.
        </p>
      </div>
    </section>
  );
}

export default ValuesSection;
