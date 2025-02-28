import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "./Avatar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx"

import { Modal } from "react-bootstrap"; // 🔹 AGREGADO POR NEIDER

const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('access_token'));
  const [avatar, setAvatar] = useState(sessionStorage.getItem('user_avatar') || '');
  const dropdownRef = useRef(null);


  const [showLogin, setShowLogin] = useState(false); // 🔹 AGREGADO POR NEIDER
  const [showRegister, setShowRegister] = useState(false); // 🔹 AGREGADO POR NEIDER
  
  useEffect(() => {
       // Cerrar el dropdown al salir de la zona
    const handleMouseLeave = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget)) {
        setIsOpen(false);
      }
      setIsOpen(false);
    };

    // Verificar sesión al montar el componente
    const verifySession = async () => {
      const token = sessionStorage.getItem('access_token');
      if (!token) {
        handleLogout();
        return;
      }

      try {
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          handleLogout(); // 🔹 Si el token no es válido, cerrar sesión
        }
      } catch (error) {
        console.error("Error verificando sesión:", error);
        handleLogout();
      }
    };

    // Actualizar el avatar al recibir el evento
    const handleAvatarChange = () => {
      setAvatar(sessionStorage.getItem('user_avatar') || '');
      setIsLoggedIn(!!sessionStorage.getItem('access_token'));
    };

    // Agregar event listeners
    window.addEventListener("avatarChange", handleAvatarChange);    

    // 🔹 Ejecutar verificación de sesión al montar el componente
    verifySession(); 

    if (dropdownRef.current) {
      dropdownRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    // Limpieza: Eliminar event listeners al desmontar el componente
    return () => {
      window.removeEventListener("avatarChange", handleAvatarChange);

      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }

    };
  }, []);

  const closeMenuWithDelay = () => {
    setIsClosing(true); // Activa la animación de cierre
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false); // Asegura que la animación no quede activa
    }, 300); // Duración igual al CSS (0.3s)
  };

  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("user_avatar");

    setIsLoggedIn(false);
    setAvatar('');

    window.dispatchEvent(new Event("avatarChange")); // 🔹 Notificar a la UI que cambió el estado
  };

  return (
    <nav className="navbar p-3 d-flex justify-content-between" style={{ backgroundColor: '#d2b48c' }}>
      {/* Logo en el lado izquierdo */}
      <div>
        <img src="/imagenes/PT.webp" alt="Logo" style={{ height: '64px' }} />
      </div>

      {/* Botones de Iniciar Sesión y Registrarse */} {/* 🔹 AGREGADO POR NEIDER */}
      {!isLoggedIn && (   
        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark" onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
          <button className="btn btn-outline-dark" onClick={() => setShowRegister(true)}>Registrarse</button>
        </div>
      )}


      {/* Dropdown en el lado derecho */}
      <div ref={dropdownRef} className="dropdown d-flex align-items-center gap-2 position-relative">
        <Avatar key={avatar} />
        
        <button 
          className="btn"  
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          data-bs-toggle="dropdown-menu"
          aria-expanded={isOpen}
          style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#a67b5b" }} />
        </button>
        <ul 
          className={`dropdown-menu  ${isOpen ? "show dropdown-animate" : "dropdown-animate-hide"}`} 
          style={{ top: "100%",  right: "0", backgroundColor: '#f4e1c6', position: "absolute", maxWidth: 'auto' }}
          onMouseLeave={() => setIsOpen(false)}
        >
          {!isLoggedIn ? (
            <>
              <li><a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>Iniciar Sesión</a></li>
              <li><a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>Registrarse</a></li>
            </>
          ) : 
          (
            <>
              <li><a href="#" className="dropdown-item" style={{ color: '#8b5e3b' }}>Modificar Datos</a></li>
              <li><button onClick={handleLogout} className="dropdown-item" style={{ color: '#8b5e3b' }}>Cerrar Sesión</button></li>
            </>
          )}
        </ul>


          {/* Modal de Iniciar Sesión */} {/* 🔹 AGREGADO POR NEIDER */}
        <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
        </Modal>

        {/* Modal de Registrarse */}
        <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Register />
          </Modal.Body>
        </Modal>





      </div>

      
    </nav>
  );
};

export default NavbarApp;