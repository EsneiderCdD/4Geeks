import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axiosConfig';
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  // Función para validar los campos
  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 5) {
      newErrors.password = 'La contraseña debe tener al menos 5 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función de autenticación con el backend
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!validate()) return; // Si hay errores, no enviamos la solicitud

    try {
      const response = await axios.post('/api/auth/login', {
        user_email: email,
        user_password: password,
      });

      console.log('Token recibido:', response.data.access_token);

      if (response.data && response.data.access_token) {
        setMessage(`Inicio de sesión exitoso: Bienvenido ${response.data.user.name} ${response.data.user.lastname}`);
        localStorage.setItem('access_token', response.data.access_token);
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
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFC7B9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      {/* Sección Izquierda: Texto de invitación */}
      <div style={{ flex: 1, marginRight: "50px", marginLeft: "37px" }}>
        
        <p style={{ fontSize: "1.4rem", lineHeight: "1", color: "black" }}>
          Ingresa tu cuenta
        </p>
      </div>

      {/* Sección Derecha: Formulario con Animación */}
      

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          flex: 1,
          padding: "40px",
        }}
      >

            
        <form onSubmit={handleLogin}>
          {/* Campos de Entrada */}
          <div>
            <h2>
                Login
            </h2>
            
          </div>


          {[
            { name: "email", placeholder: "Correo electrónico", value: email, setter: setEmail, error: errors.email },
            { name: "password", placeholder: "Contraseña", type: "password", value: password, setter: setPassword, error: errors.password },
          ].map((input, index) => (
            <motion.div
              key={input.name}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ marginBottom: "15px" }}
            >
              <input
                type={input.type || "text"}
                name={input.name}
                value={input.value}
                onChange={(e) => input.setter(e.target.value)}
                placeholder={input.placeholder}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "30px",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                }}
              />
              {input.error && <p style={{ color: "red" }}>{input.error}</p>}
            </motion.div>
          ))}

          {/* Botón de Iniciar Sesión */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                backgroundColor: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                color: "#FFC7B9",
                fontWeight: "bold",
              }}
            >
              Iniciar sesión
            </motion.button>
          </motion.div>
        </form>

        {/* Enlace a Registro */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" style={{ color: '#F58B85', textDecoration: 'none', fontWeight: 'bold' }}>
              Regístrate aquí
            </Link>
          </p>
        </div>

        {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
      </motion.div>
    </div>
  );
};

export default Login;