import React, { useState } from "react";
import Landing2 from "./Landing2";
import Login2 from "./Login2";
import { motion, AnimatePresence } from "framer-motion";

const LoginRegister = () => {
  const [view, setView] = useState("home");
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigation = (newView) => {
    setTransitioning(true);
    setTimeout(() => {
      setView(newView);
      setTransitioning(false);
    }, 500); // Tiempo de animación
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
        overflow: "hidden", // Evita que los botones se vean cuando salen
      }}
    >
      {/* Sección Izquierda: Texto de invitación */}
      <div style={{ flex: 1, marginRight: "50px", marginLeft: "37px" }}>
        {view === "home" && (
          <>
            <h1 style={{ fontSize: "1.4rem", marginBottom: "50px", color: "black" }}>
              Conecta contigo y con quienes comparten este camino
            </h1>
            <p style={{ fontSize: "3.2rem", lineHeight: "1", color: "black" }}>
              ¿Listo para dar el primer paso?
              Explora un camino de autoconocimiento y crecimiento con terapias diseñadas para ti.
            </p>
          </>
        )}
        {view === "landing2" && <Landing2 />}
        {view === "login2" && <Login2 />}
      </div>

      {/* Sección Derecha: Botones de navegación */}
      <AnimatePresence>
        {view === "home" && !transitioning && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {/* Botón Registro */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigation("landing2")}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: 300, opacity: 0, transition: { duration: 0.5 } }} // Se mueve fuera de la pantalla
              style={{
                padding: "15px 30px",
                fontSize: "1.2rem",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#73020C",
                color: "#FFC7B9",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
            >
              Iniciar ahora
            </motion.button>

            {/* Botón Login */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigation("login2")}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: -300, opacity: 0, transition: { duration: 0.5 } }} // Se mueve fuera en dirección contraria
              style={{
                padding: "15px 30px",
                fontSize: "1.2rem",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#240207",
                color: "#FFC7B9",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
            >
              Continuar mi viaje
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginRegister;
