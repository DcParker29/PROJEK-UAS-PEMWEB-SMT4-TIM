import React from 'react';
import './DropTableSection.css';

const tableBlackImage = 'https://images.unsplash.com/photo-1505692794403-0a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80';

function DropTableSection() {
  return (
    <section className="drop-table-section">
      <div className="drop-table-text">
        <h2>Meja Drop</h2>
        <em>Edisi Hitam</em>
        <p>
          Ini adalah fakta yang sudah lama diketahui bahwa pembaca akan terganggu oleh isi yang dapat dibaca. Ini adalah fakta yang sudah lama diketahui bahwa pembaca akan terganggu oleh isi yang dapat dibaca. Ini adalah fakta yang sudah lama diketahui bahwa pembaca akan terganggu oleh isi yang dapat dibaca.
        </p>
        <button className="btn-view-product">Lihat Produk</button>
      </div>
      <img src={tableBlackImage} alt="Meja Hitam" className="drop-table-img" />
    </section>
  );
}

export default DropTableSection;
