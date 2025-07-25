import React from 'react';
import './ModernArtSection.css';

const chairBlueImage = 'https://images.unsplash.com/photo-1582582494703-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80';
const chairOrangeImage = 'https://images.unsplash.com/photo-1598300055767-2a2a2a2a2a2a?auto=format&fit=crop&w=400&q=80';

function ModernArtSection() {
  return (
    <section className="modern-art-section">
      <h2>Seni Modern</h2>
      <p>
        Ini adalah fakta yang sudah lama diketahui bahwa pembaca akan terganggu oleh isi yang dapat dibaca.
      </p>
      <button className="btn-view-all">Lihat Semua</button>
      <div className="chairs">
        <img src={chairBlueImage} alt="Kursi Biru" className="chair-img" />
        <img src={chairOrangeImage} alt="Kursi Oranye" className="chair-img" />
      </div>
    </section>
  );
}

export default ModernArtSection;
