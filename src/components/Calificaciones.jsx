import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Calificaciones = () => {
  return (
    <div
      className="container-fluid p-3"
      style={{
        background: 'linear-gradient(135deg, #f1e2c6, #d3b79d, #c9a18b, #a88b72)',
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3">
        {/* Contenedor de imágenes */}
        <div className="d-flex flex-column me-4 mb-4 mb-md-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ceURTHBfmEO-_Ak92M27nEWGbYlpyLhraA&s"
            alt="Imagen 1"
            className="mb-2"
            style={{
              borderRadius: '15px',
              filter: 'blur(0px)', 
              width: '400px', 
              height: '250px', 
              border: '2mm solid #d3b79d', 
              backgroundColor: '#d3b79d', 
              marginLeft: '0cm' 
            }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihZpKTSGzYyJ4cbe3l-pPX36MH-45XYW7Yw&s"
            alt="Imagen 2"
            style={{
              borderRadius: '15px',
              filter: 'blur(0px)', 
              width: '400px', 
              height: '250px', 
              border: '2mm solid #d3b79d', 
              backgroundColor: '#d3b79d', 
              marginLeft: '3cm'
            }}
          />
        </div>

        {/* Contenedor de la tarjeta centrada */}
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '300%' }}>
          {/* Título encima de la tarjeta */}
          <h2 style={{ marginBottom: '2cm', color: '#5e524a' }}>CUÉNTANOS TU EXPERIENCIA</h2>

          {/* Tarjeta de Bootstrap */}
          <Card style={{ width: '520%', maxWidth: '26rem', backgroundColor: '#f1e2c6' }}>
            <Card.Body>
              {/* Título dentro de la tarjeta */}
              <Card.Title style={{ color: '#5e524a' }}>Fecha</Card.Title>

              {/* Estrellas de valoración */}
              <div className="d-flex align-items-center mb-4">
                <span style={{ color: '#a88b72', fontSize: '2rem' }}>★★★★★</span>
              </div>

              {/* Párrafo */}
              <Card.Text className="mb-4" style={{ color: '#6a5c52' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nulla amet nostrum quaerat sit eveniet distinctio animi facere, expedita minima illo asperiores suscipit a veritatis ratione, recusandae quisquam ducimus quam!
              </Card.Text>

              {/* Nombre */}
              <Card.Footer className="text-muted" style={{ backgroundColor: '#f1e2c6' }}>
                Nombre de clienta
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calificaciones;






