import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const handleCheckout = async (productId) => {
  const response = await fetch("http://localhost:5000/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product_id: productId }),  // Enviar el product_id
  });

  const data = await response.json();
  if (data.checkout_url) {
    window.location.href = data.checkout_url;  // Redirige a Stripe
  }
};


const PagoServicios = () => {
  return (
    <div className="container my-15 p-4" style={{backgroundColor: "#F5DEB3", borderRadius: "0px", width: "100%", marginLeft: "auto", marginRight: "auto", paddingLeft: "0", paddingRight: "0" }}>
      <div className="row justify-content-between">
        {["1:1 1 Sesion", "1:1 3 Sesiones", "1:1 6 Sesiones", "Grupal"].map((servicio, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center shadow" style={{ backgroundColor: "#D2B48C" }}>
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: "Georgia, serif" }}>{servicio}</h3>
                <p className="card-text">Realiza el pago de tu servicio de {servicio.toLowerCase()} fácilmente.</p>
                <h1>$1000</h1>
                <button className="btn btn-dark">Pagar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagoServicios;

