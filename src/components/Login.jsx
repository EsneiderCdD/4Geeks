import React from 'react';
import { useState } from 'react';

import axios from '../api/axiosConfig';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


import '../styles/Login.css';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


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
    
    setLoading(true);

    if (!validate()) {
      setLoading(false);
      return;
    }
    

    try {
      const response = await axios.post('/api/auth/login', {
        user_email: email,
        user_password: password,
      });
  
      const token = response.data.access_token;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userRole", response.data.user.role);
  
      if (response.data.user.role === "admin") {
        navigate('/admin');  
      } else if (response.data.user.role === "user") { 
        navigate('/user');  
      } else {
        setMessage(`Bienvenido ${response.data.user.name} ${response.data.user.lastname}`);
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('user_avatar', response.data.user.avatar);
        setTimeout(() => {
          window.dispatchEvent(new Event("avatarChange"));
        }, 100);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setMessage(error.response?.data?.message || 'No se pudo conectar con el servidor.');
    } finally {
      setLoading(false); // 🔴 Desactivar estado de carga siempre, éxito o error
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F2D0A7",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      

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
            {loading && (
           
           
           <motion.div /* CREADO POR NEIDER  */


              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="spinner"></div> {/* 🔹 Spinner animado */}
            </motion.div>
          )}

          </motion.div>
        </form>


        {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
      </motion.div>
    </div>
  );
};

export default Login;