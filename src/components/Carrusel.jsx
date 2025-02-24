import Carousel from 'react-bootstrap/Carousel';

function MiCarrusel() {
  return (
    <div style={{ backgroundColor: '#F4E1C1', padding: '10px' }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img
              className="d-block"
              style={{ width: '40%', marginBottom: '10px' }}
              src="/imagenes/Imagen taza.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Avanza</h5>
              <p>Para ti y por ti.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img
              className="d-block"
              style={{ width: '30%', marginBottom: '10px' }}
              src="/imagenes/flores.png"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h5 style={{color: 'white'}}>Florece</h5>
            <p style={{ color: 'white' }}>Se tu propio florecimiento.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img
              className="d-block"
              style={{ width: '30%', marginBottom: '10px' }}
              src="/imagenes/espacio.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5 style={{color: 'white'}}>Tu espacio</h5>
              <p style={{ color: 'white' }}>Armoniza tu espacio.</p>

            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MiCarrusel;
























































































 