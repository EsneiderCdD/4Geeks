import React, { useState } from 'react';

const Logout = () => {
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    
    sessionStorage.removeItem('access_token'); // Borrar Token
    setMessage('Sesión cerrada. Por favor, inicie sesión nuevamente.');
    // Opcional: Puedo forzar un refresh de la página con window.location.reload()
    // window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: '#FF6B6B',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FF4C4C')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF6B6B')}
      >
        Cerrar Sesión
      </button>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default Logout;

