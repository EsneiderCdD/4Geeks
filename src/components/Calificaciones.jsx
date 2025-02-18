import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Calificaciones = () => {
  return (
    <div
      className="container-fluid p-3"
      style={{
        background: 'linear-gradient(135deg, #f5e0d7, #f2d9b3)', 
      }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
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
              border: '2mm solid #f2d9b3', 
              backgroundColor: '#f2d9b3', 
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
              border: '2mm solid #f2d9b3', 
              backgroundColor: '#f2d9b3', 
            }}
          />
        </div>

        {/* Contenedor de la tarjeta centrada */}
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '300%' }}>
          {/* Título encima de la tarjeta */}
          <h2 style={{ marginBottom: '2cm', color: '#4e4a46' }}>Contanos tu experiencia</h2>

          {/* Tarjeta de Bootstrap */}
          <Card style={{ width: '400%', maxWidth: '20rem', backgroundColor: '#f5e0d7' }}>
            <Card.Body>
              {/* Título dentro de la tarjeta */}
              <Card.Title style={{ color: '#4e4a46' }}>Fecha</Card.Title>

              {/* Estrellas de valoración */}
              <div className="d-flex align-items-center mb-4">
                <span style={{ color: '#f3c28c' }}>★★★★★</span>
              </div>

              {/* Párrafo */}
              <Card.Text className="mb-4" style={{ color: '#6a5c52' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nulla amet nostrum quaerat sit eveniet distinctio animi facere, expedita minima illo asperiores suscipit a veritatis ratione, recusandae quisquam ducimus quam!
              </Card.Text>

              {/* Nombre */}
              <Card.Footer className="text-muted" style={{ backgroundColor: '#f5e0d7' }}>
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




