import React from 'react';
import './AboutSection.css';

const headerImage = 'https://images.freeimages.com/images/large-previews/c19/bbq-charcoal-briquettes-1321131.jpg';

function HeaderInfoUpdated() {
  return (
    <section className="header-section" style={{ backgroundImage: `url(${headerImage})` }}>
       <div className="header-content" style={{ 
           textAlign: 'center', 
           backgroundColor: 'rgb(254, 253, 253)', 
           padding: '2rem', 
           borderRadius: '0.5rem',
           maxWidth: '800px',
           margin: '0 auto'}}>

      </div>

    </section>
  );
}

export default HeaderInfoUpdated;
