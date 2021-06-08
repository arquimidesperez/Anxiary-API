import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/navbar.css';

export default function Navbar() {
  return (
    <nav className='NavigationBar'>
      <div className='NavSpacing'>
      <Link to="/" className='LinkCSS a'>HomePage </Link>
      <Link to="/newentry" className='LinkCSS a'>New Entry  </Link>
      <Link to="/pastentries" className='LinkCSS a'>Past Entries  </Link>
      <Link to="/moodtimeline" className='LinkCSS'>Mood Timeline  </Link>
      </div>
    </nav>
  )
}