import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const DeleteUser = () => {
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage('');

    const token = localStorage.getItem('access_token'); // Recuperar el token JWT del almacenamiento local
    console.log('Token en DeleteUser:', token);
    if (!token) {
      setMessage('Debes iniciar sesión para eliminar tu cuenta.');
      return;
    }

    try {
      const response = await axios.delete('/api/user/delete', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message || 'Cuenta eliminada exitosamente.');
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('No se pudo eliminar la cuenta.');
      }
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      backgroundColor: '#FEE2D7',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Eliminar Cuenta</h2>
      <p>Esta acción eliminará tu cuenta permanentemente.</p>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#F3A29E',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F58B85'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F3A29E'}
      >
        Eliminar Cuenta
      </button>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default DeleteUser;