// NavbarApp.jsx
import React from "react";
import "../../styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Sección izquierda con tres botones */}
      <div className="navbar-left">
        <button className="nav-button">Botón 1</button>
        <button className="nav-button">Botón 2</button>
        <button className="nav-button">Botón 3</button>
      </div>

      {/* Sección central con el texto */}
      <div className="navbar-center">Psicotranspersonal</div>

      {/* Sección derecha con tres botones */}
      <div className="navbar-right">
        <button className="nav-button">Botón A</button>
        <button className="nav-button">Botón B</button>
        <button className="nav-button">Botón C</button>
      </div>
    </nav>
  );
};

export default NavBar;
