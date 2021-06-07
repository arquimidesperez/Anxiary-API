import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <li>
        <Link to="/homepage">Homepage</Link>
      </li>
    </nav>
  )
}