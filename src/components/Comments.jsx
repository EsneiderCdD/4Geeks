import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/api/comments");
        setComments(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error obteniendo comentarios:", err);
        setError("No se pudieron cargar los comentarios.");
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", textAlign: "center" }}>
      <h2>Comentarios</h2>

      {loading && <p>Cargando comentarios...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Evaluación</th>
              <th>Comentario</th>
              <th>Fecha</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Comments;
