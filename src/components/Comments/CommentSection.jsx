import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [evaluation, setEvaluation] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/api/comments/");
        setComments(response.data);
      } catch (err) {
        console.error("Error obteniendo comentarios:", err);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const token = localStorage.getItem("accessToken"); // Obtener token
    if (!token) {
      setError("Debes iniciar sesión para comentar.");
      return;
    }

    try {
      await axios.post(
        "/api/comments/create",
        {
          evaluation,
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Enviar token en headers
          },
        }
      );

      setNewComment("");
      setEvaluation(0);
      window.location.reload();
    } catch (err) {
      console.error("Error al enviar comentario:", err);
      setError("Hubo un problema al enviar el comentario.");
    }
  };

  return (
    <div className="comment-section">
      <h2>Comentarios</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
          required
        />
        <input
          type="number"
          value={evaluation}
          onChange={(e) => setEvaluation(e.target.value)}
          min="1"
          max="5"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p><strong>{comment.name}:</strong> {comment.comment}</p>
            <p>Calificación: {comment.evaluation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
