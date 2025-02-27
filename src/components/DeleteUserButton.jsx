import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import "../styles/DeleteUserButton.css"; // " ; // Asegúrate de crear este archivo

const DeleteUserButton = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No hay token, redirigiendo...");
        navigate("/");
        return;
      }

      await axios.delete("/api/user/delete", {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.clear(); // Eliminamos la sesión del usuario
      alert("Cuenta eliminada con éxito.");
      navigate("/"); // Redirigir al home después de eliminar la cuenta
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
      alert("Hubo un problema al eliminar la cuenta.");
    }
  };

  return (
    <button className="delete-user-button" onClick={handleDelete}>
      Eliminar Cuenta
    </button>
  );
};

export default DeleteUserButton;
