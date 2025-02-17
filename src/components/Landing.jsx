import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const Landing = () => {
  // Copiamos la lógica de Register (estados, validaciones, etc.)
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'El nombre es obligatorio.';
    }

    if (!formData.user_lastname.trim()) {
      newErrors.user_lastname = 'El apellido es obligatorio.';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'El correo no es válido.';
    }

    if (!formData.user_password.trim()) {
      newErrors.user_password = 'La contraseña es obligatoria.';
    } else if (formData.user_password.length < 5) {
      newErrors.user_password = 'La contraseña debe tener al menos 5 caracteres.';
    }

    if (!formData.confirm_password.trim()) {
      newErrors.confirm_password = 'Por favor, confirma tu contraseña.';
    } else if (formData.confirm_password !== formData.user_password) {
      newErrors.confirm_password = 'Las contraseñas no coinciden.';
    }

    if (!formData.user_country.trim()) {
      newErrors.user_country = 'El país es obligatorio.';
    }

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
        user_country: formData.user_country,
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
    <div 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FFC7B9', // Fondo principal
        display: 'flex', // Para colocar texto a la izquierda y formulario a la derecha
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px'
      }}
    >
      {/* Sección Izquierda: Texto de invitación */}
      <div style={{ flex: 1, marginRight: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#4E4039' }}>
          Únete a nuestra comunidad
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#5C5048' }}>
          Empieza tu proceso de cambio con nuestras terapias virtuales y presenciales.
          Queremos acompañarte en tu camino de transformación personal. 
          ¿Listo para dar el primer paso?
        </p>
      </div>

      {/* Sección Derecha: Formulario */}
      <div 
        style={{
          flex: 1,
         
          padding: '40px',
          
        }}
      >
        <form onSubmit={handleRegister}>
          {/* Nombre y Apellido en una sola fila */}
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Nombre"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black', backgroundColor: 'transparent' }}   
              />
              {errors.user_name && <p style={{ color: 'red' }}>{errors.user_name}</p>}
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <input
                type="text"
                name="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
                placeholder="Apellido"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black', backgroundColor: 'transparent' }}
              />
              {errors.user_lastname && <p style={{ color: 'red' }}>{errors.user_lastname}</p>}
            </div>
          </div>

          {/* Email y País en una sola fila */}
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid blach', backgroundColor: 'transparent' }}
              />
              {errors.user_email && <p style={{ color: 'red' }}>{errors.user_email}</p>}
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <input
                type="text"
                name="user_country"
                value={formData.user_country}
                onChange={handleChange}
                placeholder="País"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black' , backgroundColor: 'transparent' }}
              />
              {errors.user_country && <p style={{ color: 'red' }}>{errors.user_country}</p>}
            </div>
          </div>

          {/* Teléfono y Contraseña en una sola fila */}
          <div style={{ display: 'flex', marginBottom: '15px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <input
                type="text"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                placeholder="Teléfono"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black', backgroundColor: 'transparent' }}
              />
              {/* Sin validación adicional por ahora */}
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <input
                type="password"
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                placeholder="Contraseña"
                style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black', backgroundColor: 'transparent' }}
              />
              {errors.user_password && <p style={{ color: 'red' }}>{errors.user_password}</p>}
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              style={{ width: '100%', padding: '10px', borderRadius: '30px', border: '1px solid black', backgroundColor: 'transparent' }}
            />
            {errors.confirm_password && <p style={{ color: 'red' }}>{errors.confirm_password}</p>}
          </div>

          {/* Botones de Acción */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <button
              type="submit"
              style={{
                backgroundColor: 'black',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                color: '#FFC7B9',
                fontWeight: 'bold'
              }}
            >
              Registrarse
            </button>
            <button
              type="button"
              style={{
                backgroundColor: 'black',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                color: '#FFC7B9',
                fontWeight: 'bold'
              }}
              onClick={() => alert('Aquí iría la lógica de iniciar sesión')}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Landing;
