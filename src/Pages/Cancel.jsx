import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container">
      <h2>❌ Pago cancelado</h2>
      <p>No te preocupes, puedes volver a intentarlo cuando estés listo.</p>
      <Link to="/">Volver a inicio</Link>
    </div>
  );
};

export default Cancel;
