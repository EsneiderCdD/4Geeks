import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const UpdateUser = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!newPassword.trim()) {
      newErrors.newPassword = 'La nueva contraseña es obligatoria.';
    } else if (newPassword.length < 5) {
      newErrors.newPassword = 'La contraseña debe tener al menos 5 caracteres.';
    }
    // El teléfono es opcional, pero si quiero validarlo, aqui seria su validación.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleModify = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) return;

    const token = sessionStorage.getItem('access_token'); // Recuperar sessionStorage
    if (!token) {
      setMessage('Debes iniciar sesión para modificar tus datos.');
      return;
    }

    try {
      const response = await axios.put('/api/user/modify', 
        { new_password: newPassword, new_phone: newPhone },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setMessage(response.data.message || 'Datos modificados con éxito');
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('No se pudo modificar la cuenta.');
      }
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      backgroundColor: '#E8F0FE',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Modificar Cuenta</h2>
      <form onSubmit={handleModify}>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nueva Contraseña:</label>
          <input 
            type="password"
            name="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
          {errors.newPassword && <p style={{ color: 'red' }}>{errors.newPassword}</p>}
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nuevo Teléfono (opcional):</label>
          <input 
            type="text"
            name="new_phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
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
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6BB9F0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8EC5FC'}
        >
          Modificar Datos
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default UpdateUser;
