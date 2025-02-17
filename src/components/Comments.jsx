import React, { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';

const Comments = () => {
  const [commentText, setCommentText] = useState('');
  const [calification, setCalification] = useState(''); 
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState('');
  const fetchComments = async () => { //    Obtener los comentarios
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);


  const handleCommentSubmit = async (e) => {   // Enviar un comentario
    e.preventDefault();
    setMessage('');

    
    if (!commentText.trim() || !calification.trim()) { // Validación(es)
      setMessage('Por favor, ingresa un comentario y una calificación.');
      return;
    }

    const token = localStorage.getItem('access_token'); // Recupera el Token
    if (!token) {
      setMessage('Debes iniciar sesión para comentar.');
      return;
    }

    try {
      const response = await axios.post('/api/comments', 
        { 
          calification, 
          comment: commentText 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage(response.data.message || 'Comentario enviado con éxito.');
      setCommentText('');
      setCalification(''); 
      fetchComments(); // Refrescar la lista de comentarios
    } catch (error) {
      console.error('Error al enviar comentario:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Hubo un error al enviar el comentario.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center', padding: '20px', backgroundColor: '#E7F5E1', borderRadius: '8px' }}>
      <h2>Comentarios</h2>
      {/* Formulario para enviar comentario */}
      <form onSubmit={handleCommentSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Calificación (1-5):</label>
          <input 
            type="number"
            name="calification"
            value={calification}
            onChange={(e) => setCalification(e.target.value)}
            min="1"
            max="5"
            placeholder="Ingresa un número del 1 al 5"
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Comentario:</label>
          <textarea
            name="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
            style={{ width: '100%', padding: '8px', borderRadius: '4px', resize: 'vertical' }}
          />
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: '#8EC5FC',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6BB9F0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#8EC5FC')}
        >
          Enviar Comentario
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* Lista de comentarios */}
      <div style={{ textAlign: 'left' }}>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{c.name} dice:</p>
              <p style={{ margin: '0' }}>{c.comment}</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.8em', color: '#555' }}>Calificación: {c.calification} | {c.comment_date}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;