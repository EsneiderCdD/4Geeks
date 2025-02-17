import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => { //->Validar los campos<-
    const newErrors = {};

    if (!email.trim()) { // ->Email
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!password.trim()) { // ->Password
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 5) {
      newErrors.password = 'La contraseña debe tener al menos 5 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) return; // Confirmación de errores

    try {
      const response = await axios.post('/api/user/login', {
        user_email: email,
        user_password: password,
      });
      // Codigo para confirmar Token recibido en consola:
      // console.log('Token recibido:', response.data.access_token);
      
      if (response.data && response.data.access_token) {
        setMessage(`Inicio de sesión exitoso: Bienvenido ${response.data.user.name} ${response.data.user.lastname}`);
         localStorage.setItem('access_token', response.data.access_token); // Guardar en localStorage.
      } else {
        setMessage(response.data.message || 'Error desconocido.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('No se pudo conectar con el servidor.');
      }
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      backgroundColor: '#F9E8D8', 
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
          <input 
            type="password"
            name="user_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button
          type="submit"
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
          Iniciar sesión
        </button>
      </form>
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default Login;
