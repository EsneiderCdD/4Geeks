import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ConsultarUsuarios.css";
import userIcon from "../../gifs/search.gif"; // Asegúrate de tener un ícono representativo

const ConsultarUsuarios = () => {
  const navigate = useNavigate();

  return (
    <div className="consultar-usuarios-card" onClick={() => navigate("/admin/users")}>
      <img src={userIcon} alt="Consultar Usuarios" className="consultar-usuarios-image" />
      <h2 className="consultar-usuarios-title">Consultar Usuarios</h2>
      <p className="consultar-usuarios-description">
        Visualiza y gestiona la información de los usuarios registrados en la plataforma.
      </p>
    </div>
  );
};

export default ConsultarUsuarios;
