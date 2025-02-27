import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import "../styles/ModifyUser.css";

const ModifyUser = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("No hay sesión activa.");
        return;
      }

      const response = await axios.put(
        "api/user/modify",
        { new_password: newPassword, new_phone: newPhone },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message);
      setError("");
      setTimeout(() => navigate("/user"), 2000); // Redirige después de modificar
    } catch (err) {
      setError("Error al modificar los datos.");
      setMessage("");
    }
  };

  return (
    <div className="modify-user-container">
      <h2>Modificar Datos</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nueva Contraseña:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Ingresa nueva contraseña"
          />
        </label>
        <label>
          Nuevo Teléfono:
          <input
            type="text"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="Ingresa nuevo teléfono"
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ModifyUser;
