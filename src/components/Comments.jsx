import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/api/comments");
        setComments(response.data);
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
        setError("No se pudieron cargar los comentarios.");
      }
    };
    fetchComments();
  }, []);

  {/* Inicio - Función para eliminar comentario */}
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("No tienes permiso para eliminar comentarios.");
        return;
      }
      
      await axios.delete("/api/comments/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { id },
      });
      
      setComments(comments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error("Error al eliminar comentario:", error);
      alert("Hubo un problema al eliminar el comentario.");
    }
  };
  {/* Fin - Función para eliminar comentario */}

  return (
    <div>
      <h2>Lista de Comentarios</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Evaluación</th>
            <th>Comentario</th>
            <th>Fecha</th>
            <th>Acciones</th> {/* Nueva columna para eliminar */}
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.name}</td>
              <td>{comment.lastname}</td>
              <td>{comment.evaluation}</td>
              <td>{comment.comment}</td>
              <td>{comment.comment_date}</td>
              <td>
                {/* Botón para eliminar comentario */}
                <button onClick={() => handleDelete(comment.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
