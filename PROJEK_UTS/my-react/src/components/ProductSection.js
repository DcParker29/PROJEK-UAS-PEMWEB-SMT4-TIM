import React, { useEffect, useState } from 'react';
import './ProductSection.css';

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/get_products.php') // Ubah sesuai lokasi API-mu
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Gagal mengambil data:', err));
  }, []);

  return (
    <section className="product-section">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-info">
            <h2>{product.nama_product}</h2>
            <ul>
              <li><span className="label">Weight</span><span className="value">{product.weight}</span></li>
              <li><span className="label">Ash Content</span><span className="value">{product.ash_content}</span></li>
              <li><span className="label">Total Moisture</span><span className="value">{product.total_moisture}</span></li>
              <li><span className="label">Gross Calorific Value</span><span className="value">{product.gross_calorific_value}</span></li>
              <li><span className="label">Burning Time</span><span className="value">{product.burning_time}</span></li>
              <li><span className="label">Packaging</span><span className="value">{product.packaging}</span></li>
              <li><span className="label">Size</span><span className="value">{product.size}</span></li>
              <li><span className="label">Shape</span><span className="value">{product.shape}</span></li>
            </ul>
          </div>
          <div className="product-image">
            <img src={product.image_url || "https://via.placeholder.com/200"} alt={product.nama_product} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductSection;
