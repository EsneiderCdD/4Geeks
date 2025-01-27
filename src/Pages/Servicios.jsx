
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicios = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Psico Transpersonal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Terapia individual</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Terapia grupal</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Cards Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <p className="card-text">Este es el servicio 1, con una descripción breve de lo que ofrecemos.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <p className="card-text">Este es el servicio 2, detallando lo que hacemos y cómo ayudamos a nuestros clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
