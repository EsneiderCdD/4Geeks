import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e2d3c5" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "#5c4a37", fontFamily: "'Merriweather', serif" }}>
          Psico Transpersonal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex">
            <button className="btn btn-outline-dark me-2" style={{ backgroundColor: "#d1bfa6", borderColor: "#5c4a37" }}>Iniciar sesión</button>
            <button className="btn btn-outline-dark me-2" style={{ backgroundColor: "#d1bfa6", borderColor: "#5c4a37" }}>Cerrar sesión</button>
            <button className="btn btn-outline-dark" style={{ backgroundColor: "#d1bfa6", borderColor: "#5c4a37" }}>Registrarse</button>
          </div>
        </div>
      </div>
    </nav>
  );
};







export default NavbarApp;
