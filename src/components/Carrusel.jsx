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
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MiCarrusel;
























































































 