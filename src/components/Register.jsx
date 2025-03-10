import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import { motion } from "framer-motion";
import Login from './Login';
import CountrySelect from './CountrySelect';
import '../styles/Register.css';




const Register = () => {
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
  //Estado 
  const [showLogin, setShowLogin] = useState(false);

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true); // 🔹 Activar spinner

    if (!validate()) {
        setLoading(false); // 🔴 Desactivar spinner si hay errores
        return;
    }
   

    try {
      const response = await axios.post('/api/user/register', {
        user_name: formData.user_name,
        user_lastname: formData.user_lastname,
        user_email: formData.user_email,
        user_password: formData.user_password,
        user_phone: formData.user_phone,
        user_country: formData.user_country,
      });

      setMessage('Usuario registrado con éxito.');
    } catch (error) {
        console.error('Error en la solicitud:', error);
        setMessage(error.response?.data?.message || 'Hubo un error al registrar el usuario.');
    } finally {
        setLoading(false); // 🔴 Desactivar spinner siempre, éxito o error
    }
    };
    if (showLogin) {
        return <Login />;
    }

    
  return (
    <div
    style={{

        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F2D0A7",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        
        overflow: "hidden", // Evita que los botones se vean cuando salen
      }}
    >
      
  
      {/* Sección Derecha: Formulario con Animación */}
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{
    flex: 1,
    padding: "5px",
  }}
>
  <form onSubmit={handleRegister}>
    {/* Primera fila: Nombre y Apellido */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      {[
        { name: "user_name", placeholder: "Nombre", value: formData.user_name, error: errors.user_name },
        { name: "user_lastname", placeholder: "Apellido", value: formData.user_lastname, error: errors.user_lastname },
      ].map((input, index) => (
        <motion.div
          key={input.name}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ flex: 1 }}
        >
          <input
            type="text"
            name={input.name}
            value={input.value}
            onChange={handleChange}
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
    </div>

    {/* Segunda fila: Correo Electrónico (Ocupando toda la fila) */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ marginBottom: "15px" }}
    >
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "30px",
          border: "1px solid black",
          backgroundColor: "transparent",
        }}
      />
      {errors.user_email && <p style={{ color: "red" }}>{errors.user_email}</p>}
    </motion.div>

    {/* Tercera fila: País y Teléfono */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ flex: 0.4 }} // País menos extenso
      >
        <input
      type="text"
      name="user_country"
      value={formData.user_country}
      onChange={handleChange}
      placeholder="País"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "30px",
        border: "1px solid black",
        backgroundColor: "transparent",
      }}
    />
        {errors.user_country && <p style={{ color: "red" }}>{errors.user_country}</p>}
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ flex: 0.6 }} // Teléfono más extenso
      >
        <input
          type="text"
          name="user_phone"
          value={formData.user_phone}
          onChange={handleChange}
          placeholder="Teléfono"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "30px",
            border: "1px solid black",
            backgroundColor: "transparent",
          }}
        />
      </motion.div>
    </div>

    {/* Cuarta fila: Contraseña y Confirmar Contraseña */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      {[
        { name: "user_password", placeholder: "Contraseña", type: "password", value: formData.user_password, error: errors.user_password },
        { name: "confirm_password", placeholder: "Confirmar Contraseña", type: "password", value: formData.confirm_password, error: errors.confirm_password },
      ].map((input, index) => (
        <motion.div
          key={input.name}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          style={{ flex: 1 }}
        >
          <input
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={handleChange}
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
    </div>

    {/* Botones de Acción con Animación */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      style={{ display: "flex", gap: "20px", marginTop: "20px" }}
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
        Finalizar mi registro
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        
        type="button"
        style={{
          backgroundColor: "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "30px",
          cursor: "pointer",
          color: "#FFC7B9",
          fontWeight: "bold",
        }}
        onClick={() => setShowLogin(true)}
      >
        Ya tengo una cuenta
      </motion.button>
    </motion.div>
  </form>
  {loading && (
    <motion.div
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

  {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
</motion.div>



    </div>
  );
};  

export default Register;