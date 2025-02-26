import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { body } from "framer-motion/client";

const PagoServicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("http://localhost:2000/stripe/get_products"); // cual es la url para hacer el fetch?
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
      const body = JSON.stringify({ price_id: priceId });
      console.log("Body enviado:", body);
      const response = await fetch("http://localhost:2000/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        
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
          <div key={servicio.product_id} className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center shadow" style={{ backgroundColor: "#D2B48C", borderRadius: "12px" }}>
              <div className="card-body">
                <div><img src={servicio.images} alt={servicio.name} className="img-fluid rounded-3xl mb-3"/></div>
                <h4 className="card-title" style={{ fontFamily: "Georgia, serif" }}>{servicio.name}</h4>
                <h2>${servicio.price}</h2>
                <button className="btn btn-dark mt-3" onClick={() => handleCheckout(servicio.price_id)}>Pagar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagoServicios;
