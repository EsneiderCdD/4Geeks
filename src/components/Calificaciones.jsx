import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {motion} from 'framer-motion';

const Calificaciones = () => {
  const [comentarios, setComentarios] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0); // Controla cuántas tarjetas se ven

  useEffect(() => {
      const fetchComentarios = async () => {
        try {
          const response = await fetch("https://proyecto-final-backend-fawn.vercel.app/api/comments"); // cual es la url para hacer el fetch?
          const data = await response.json();
          setComentarios(data);
        } catch (error) {
          console.error("Error al obtener los Comentarios:", error);
        }
      };
      fetchComentarios();
    }, []);

    useEffect(() => {
      if (comentarios.length > 0) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % comentarios.length);
        }, 5000);
        
        return () => clearInterval(interval);
      }
    }, [comentarios]);

    return (
      <div
        className="container-fluid p-5"
        style={{
          background: 'linear-gradient(135deg, #f5e0d7, #f2d9b3)',
        }}
      >
        <div className="row">
          {/* DIV: Contenedor de imágenes */}
          <div className="col-md-5 d-flex flex-column align-items-center">
            <img
              src="/imagenes/grupo.png"
              alt="Imagen 1"
              className="mb-3"
              style={{
                borderRadius: '15px',
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                backgroundColor: '#f2d9b3',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
  
          {/* DIV: Contenedor de título y comentarios */}
          <div className="col-md-7 text-center">
            {/* Título */}
            <h2 className="mb-5" style={{ color: '#5e524a', fontSize: '2.5rem', fontWeight: 'bold' }}>
              CUÉNTANOS TU EXPERIENCIA
            </h2>
  
            {/* Contenedor de las tarjetas */}
            <div className="row justify-content-center">
              {comentarios.length > 0 ? (
                comentarios.slice(currentIndex, currentIndex + 1).map((comentario) => (
                  <motion.div 
                    key={comentario.comment_id}
                    className="col-md-5 col-sm-6 mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="shadow" style={{ backgroundColor: '#e6d5b8', borderRadius: '12px', width: '300px' }}>
                      <Card.Body className="text-center pb-0">
                        
                        
                        <div className="mb-3" style={{ color: '#b58e82', fontSize: '1.5rem', textAlign: 'left' }}>
                          {"⭐".repeat(comentario.evaluation)}
                        </div>
      
                        <Card.Text style={{ color: '#6a5c52', fontStyle: 'italic', textAlign: 'center', fontSize: '1.1rem' }}>
                          "{comentario.comment}"
                        </Card.Text>
                        <Card.Title style={{ color: '#5e524a', fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'right' }}>
                          {comentario.name}
                        </Card.Title>
      
                        <Card.Footer className="text-muted" style={{ backgroundColor: '#e6d5b8', fontSize: '0.9rem', textAlign: 'right' }}> 
                          {new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(comentario.comment_date))}
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <p style={{ textAlign: 'center', color: '#6a5c52' }}>No hay comentarios aún.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calificaciones;