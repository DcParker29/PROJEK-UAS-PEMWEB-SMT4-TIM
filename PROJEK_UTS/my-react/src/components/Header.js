import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Nusantara Export Group</div>
      <nav className="nav-menu">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Product</NavLink>
        <NavLink to="/trends" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tren</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tentang Kami</NavLink>
      </nav>
      <button className="btn-signup">Daftar</button>
    </header>
  );
}

export default Header;
