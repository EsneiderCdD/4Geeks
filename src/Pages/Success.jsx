import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container">
      <h2>🎉 ¡Pago exitoso!</h2>
      <p>Gracias por tu compra. Recibirás un correo de confirmación pronto.</p>
      <Link to="/">Volver a inicio</Link>
    </div>
  );
};

export default Success;
