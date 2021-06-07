import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className='NavigationBar'>
      <div className='NavSpacing'>
      <Link to="/homepage" className='LinkCSS a'>Homepage</Link>
      <Link to="/secondpage" className='LinkCSS'>Secondpage</Link>
      </div>
    </nav>
  )
}