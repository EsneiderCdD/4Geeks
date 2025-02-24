import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PagoServicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("http://localhost:5000/servicios"); // cual es la url para hacer el fetch?
        const data = await response.json();
        setServicios(data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };
    fetchServicios();
  }, []);

  const handleCheckout = async (priceId) => {
    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price_id: priceId }),
      });
      
      const data = await response.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Error al procesar el pago");
      }
    } catch (error) {
      console.error("Error en la solicitud de pago:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="container my-5 p-4" style={{ backgroundColor: "#F5DEB3", borderRadius: "12px" }}>
      <div className="row justify-content-center">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center shadow" style={{ backgroundColor: "#D2B48C", borderRadius: "12px" }}>
              <div className="card-body">
                <h4 className="card-title" style={{ fontFamily: "Georgia, serif" }}>{servicio.nombre}</h4>
                <p className="card-text">Realiza el pago de tu servicio fácilmente.</p>
                <h2>${servicio.precio}</h2>
                <button className="btn btn-dark" onClick={() => handleCheckout(servicio.price_id)}>Pagar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagoServicios;
