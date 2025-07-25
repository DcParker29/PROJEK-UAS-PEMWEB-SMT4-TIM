import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModernArtSection from './components/ModernArtSection';
import DropTableSection from './components/DropTableSection';
import AboutSection from './components/AboutSection';
import Product from './pages/Product';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/product" element={<Product />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/modern-art" element={<ModernArtSection />} />
          <Route path="/drop-table" element={<DropTableSection />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
