import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const Register = () => {
  const [formData, setFormData] = useState({ // Conjunto estados iniciales
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_password: '',
    confirm_password: '', 
    user_phone: '',
    user_country: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => { // Manejo de cambios en cada input
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => { // -> Validaciones Front <-
    const newErrors = {};

    if (!formData.user_name.trim()) { // Nombre
      newErrors.user_name = 'El nombre es obligatorio.';
    }

    if (!formData.user_lastname.trim()) { // Apellido
      newErrors.user_lastname = 'El apellido es obligatorio.';
    }

    if (!formData.user_email.trim()) { // Email
      newErrors.user_email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'El correo no es válido.';
    }

    if (!formData.user_password.trim()) { // Contraseña
      newErrors.user_password = 'La contraseña es obligatoria.';
    } else if (formData.user_password.length < 5) {
      newErrors.user_password = 'La contraseña debe tener al menos 5 caracteres.';
    }

    if (!formData.confirm_password.trim()) { // Confirmar Contraseña
      newErrors.confirm_password = 'Por favor, confirma tu contraseña.';
    } else if (formData.confirm_password !== formData.user_password) {
      newErrors.confirm_password = 'Las contraseñas no coinciden.';
    }

    
    if (!formData.user_country.trim()) { // País
      newErrors.user_country = 'El país es obligatorio.';
    }

    // Teléfono es opcional (por ahora no esta validado) depende de requisitos posteriores.

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) return; 

    try {
      const response = await axios.post('/api/user/registro', {
        user_name: formData.user_name,
        user_lastname: formData.user_lastname,
        user_email: formData.user_email,
        user_password: formData.user_password,
        user_phone: formData.user_phone,
        user_country: formData.user_country
      });

      if (response.data.message === 'Usuario registrado exitosamente') {
        setMessage('Usuario registrado con éxito.');
      } else {
        setMessage(response.data.message || response.data);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Hubo un error al registrar el usuario.');
      }
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      backgroundColor: '#FEE2D7',  
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registro</h2>

      <form onSubmit={handleRegister}>

        {/* Nombre y Apellido */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>Nombre:</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              style={{ width: '100%', padding: '5px' }}
            />
            {errors.user_name && <p style={{ color: 'red' }}>{errors.user_name}</p>}
          </div>

          <div style={{ flex: 1, marginLeft: '10px' }}>
            <label>Apellido:</label>
            <input
              type="text"
              name="user_lastname"
              value={formData.user_lastname}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              style={{ width: '100%', padding: '5px' }}
            />
            {errors.user_lastname && <p style={{ color: 'red' }}>{errors.user_lastname}</p>}
          </div>
        </div>

        {/* Email y País */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>Correo:</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              style={{ width: '100%', padding: '5px' }}
            />
            {errors.user_email && <p style={{ color: 'red' }}>{errors.user_email}</p>}
          </div>

          <div style={{ flex: 1, marginLeft: '10px' }}>
            <label>País:</label>
            <input
              type="text"
              name="user_country"
              value={formData.user_country}
              onChange={handleChange}
              placeholder="Ingresa tu país"
              style={{ width: '100%', padding: '5px' }}
            />
            {errors.user_country && <p style={{ color: 'red' }}>{errors.user_country}</p>}
          </div>
        </div>

        {/* Teléfono y Contraseña */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>Teléfono:</label>
            <input
              type="text"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              placeholder="Ej: +56 912345678"
              style={{ width: '100%', padding: '5px' }}
            />
            {/* Falta por validar y estructurar mejor el telefono */}
          </div>

          <div style={{ flex: 1, marginLeft: '10px' }}>
            <label>Contraseña:</label>
            <input
              type="password"
              name="user_password"
              value={formData.user_password}
              onChange={handleChange}
              placeholder="Crea una contraseña"
              style={{ width: '100%', padding: '5px' }}
            />
            {errors.user_password && <p style={{ color: 'red' }}>{errors.user_password}</p>}
          </div>
        </div>

        {/* Confirmar Contraseña */}
        <div style={{ marginBottom: '15px' }}>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Repite tu contraseña"
            style={{ width: '100%', padding: '5px' }}
          />
          {errors.confirm_password && <p style={{ color: 'red' }}>{errors.confirm_password}</p>}
        </div>

        {/* Botón de Registrar */}
        <button
          type="submit"
          style={{
            backgroundColor: '#F3A29E',  // Color pastel para el botón
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F58B85'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F3A29E'}
        >
          Registrar
        </button>
      </form>

      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default Register;

