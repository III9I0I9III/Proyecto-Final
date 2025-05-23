// src/Components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          UDB
        </Link>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Nuevo Ingreso
          </Link>
          <Link to="/menu" className="navbar-link" onClick={() => setIsOpen(false)}>
            Menú
          </Link>
          <Link to="/matematica" className="navbar-link" onClick={() => setIsOpen(false)}>
            Matemática
          </Link>
          <Link to="/lenguaje" className="navbar-link" onClick={() => setIsOpen(false)}>
            Lenguaje
          </Link>
          <Link to="/naturales" className="navbar-link" onClick={() => setIsOpen(false)}>
            Naturales
          </Link>
          <Link to="/sociales" className="navbar-link" onClick={() => setIsOpen(false)}>
            Sociales
          </Link>
          {user && (
            <button className="logout-button" onClick={onLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
