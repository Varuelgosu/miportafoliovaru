import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
         Mi Portafolio
      </Link>
      <ul className="navbar-menu">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/cuaderno">Cuaderno</NavLink></li>
        <li><NavLink to="/proyectos">Proyectos</NavLink></li>
        <li><NavLink to="/sobre-mi">Sobre mí</NavLink></li>
        <li><NavLink to="/reflexion-final">Reflexión final</NavLink></li>
        <li><NavLink to="/bibliografia">Bibliografía</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;