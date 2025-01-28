import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
  return (
    <div style={{ backgroundColor: "#f3e9dd", color: "#5c4a37", minHeight: "100vh" }}>
      {/* Header Image */}
      <div className="text-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="Landing Header"
          className="img-fluid"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Title */}
      <div className="text-center mt-4">
        <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "3rem" }}>Psicoterapia Transpersonal</h1>
      </div>

      {/* Paragraph */}
      <div className="text-center mx-auto mt-3" style={{ maxWidth: "600px" }}>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.25rem" }}>
          Te acompaño en tu proceso de liberación, evolución y transformación.
        </p>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light mt-4" style={{ backgroundColor: "#e2d3c5" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#5c4a37", fontFamily: "'Merriweather', serif" }}>Servicios</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-dark me-2" style={{ backgroundColor: "#d1bfa6", borderColor: "#5c4a37" }}>
                  Terapia 1:1
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark" style={{ backgroundColor: "#d1bfa6", borderColor: "#5c4a37" }}>
                  Terapia grupal
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Inicio;