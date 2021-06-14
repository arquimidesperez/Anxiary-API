import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/navbar.css';

export default function Navbar() {
  return (
    <nav className='NavigationBar'>
      <div className='NavSpacing'>
        <div className='DesktopNavbar'>
          <Link to="/" className='LinkCSS'>
            <i class="fas fa-home"/> HomePage </Link>
          <Link to="/newentry" className='LinkCSS'>
            <i class="fas fa-pencil-alt"/> New Entry </Link>
          <Link to="/pastentries" className='LinkCSS'>
            <i class="fas fa-hourglass-end"/> Past Entries </Link>
          <Link to="/moodtimeline" className='LinkCSS'>
            <i class="far fa-calendar-alt"/> Mood Timeline </Link>
        </div>

          <div className='MobileNavbar'>
            <button className='DropDownButton'> <i class="fas fa-bars"></i> </button>
              <div className='DropDownOptions'>

                <Link to="/" className='MobileLinkCSS'>
                  <i class="fas fa-home" /> HomePage </Link>
                <br />
                <Link to="/newentry" className='MobileLinkCSS'>
                  <i class="fas fa-pencil-alt" /> New Entry </Link>
                <br />            
                <Link to="/pastentries" className='MobileLinkCSS'>
                  <i class="fas fa-hourglass-end" /> Past Entries </Link>
                <br />            
                <Link to="/moodtimeline" className='MobileLinkCSS'>
                  <i class="far fa-calendar-alt" /> Mood Timeline </Link>
                
              </div>
          </div>
      </div>
    </nav>
  )
}