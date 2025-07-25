import React from 'react';
import './AboutSection.css';

const headerImage = 'https://img.freepik.com/photos-premium/cubes-brillants-noirs-briquettes-charbon-bois-pour-poele-feu-cheminee_124507-19491.jpg?w=1060';



function HeaderInfo() {
  return (
    <section className="header-section" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-content" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>NUSANTARA EXPORT GROUP</h1>
        <h3 style={{ fontSize: '1.8rem' }}>Company Profile & Catalog</h3>
        <p style={{ fontSize: '1.1rem' }}>Jalan Ahmad Yani No. 11, Jatiwangi KAB. MAJALENGKA, JAWA BARAT, ID, 45454</p>
      </div>
    </section>
  );
}

export default HeaderInfo;
