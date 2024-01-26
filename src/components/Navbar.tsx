
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/data">Data</Link>
        </li>
        <li className="navbar-item">
          <Link to="/images">Images</Link>
        </li>
        <li className="navbar-item">
          <Link to="/audio">Audio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
