import React from 'react';
import './AboutSection.css';

const aboutImage = 'https://img.freepik.com/photos-premium/cubes-brillants-noirs-briquettes-charbon-bois-pour-poele-feu-cheminee_124507-19491.jpg?w=1060';

function AboutUsSection() {
  return (
    <section className="about-section" style={{ backgroundImage: `url(${aboutImage})` }}>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          We are a trusted supplier of premium-quality charcoal briquettes for shisha and barbecue, serving international buyers with professionalism and commitment. Our mission is to deliver sustainable, eco-friendly, and high-performance briquettes tailored to meet the diverse needs of our global clients.
          With a focus on reliability and customer satisfaction, we ensure smooth and secure transactions, supported by a flexible and professional approach to every deal. Partnering with top-tier suppliers, we strive to build long-lasting relationships by exceeding expectations in every aspect of our service.
        </p>
        <div className="vision-mission">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a globally recognized and trusted leader in the export of sustainable charcoal briquettes, fostering innovation, environmental stewardship, and mutually beneficial partnerships.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver high-quality and sustainable charcoal briquettes that meet international standards while promoting environmentally responsible practices. We aim to build trust through transparency, professionalism, and customer-focused solutions, ensuring reliable service, competitive pricing, and timely delivery to support our clients' success in their markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
