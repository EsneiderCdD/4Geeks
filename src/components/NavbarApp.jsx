import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar p-3 d-flex justify-content-end" style={{ backgroundColor: '#d2b48c' }}>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          data-bs-toggle="dropdown"
          aria-expanded={isOpen}
          style={{ backgroundColor: '#a67b5b', color: 'white' }}
        >
          INICIO
        </button>
        <ul 
          className={`dropdown-menu ${isOpen ? "show" : ""}`} 
          style={{ right: 0, left: "auto", backgroundColor: '#f4e1c6' }}
        >
          <li>
            <a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>
              REGISTRO
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>
              INICIAR SESION
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>
              CERRAR CESION
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarApp;



