import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig.js";
import "../../styles/UserList.css"; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken"); 
        if (!token) {
          console.error("No hay token, redirigiendo...");
          navigate("/");
          return;
        }

        const response = await axios.get("api/user/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error obteniendo usuarios:", err);
        setError("No se pudieron cargar los usuarios.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  // Si no es admin, lo sacamos de la página
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="user-list-container">
      <h2>Lista de Usuarios</h2>
      <button className="back-button" onClick={() => navigate("/admin")}>
        Volver al Panel
      </button>

      {loading && <p className="loading">Cargando usuarios...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
