import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Countries.js</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link to="/countries" className="nav-link">Countries</Link></li>
          <li className="nav-item"><Link to="/continents" className="nav-link">Continents</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;