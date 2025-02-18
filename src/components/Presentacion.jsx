const Presentacion = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', 
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    padding: '30px',
    backgroundColor: '#F4EDE4',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const textContainerStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    color: '#6D4C41',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'center', 
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpoWSi1dRcZYTrlzbPb0zmfhh5SBbG2fFg&s" 
        alt="Imagen de presentación"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <h2 style={{ color: '#8D6E63' }}>PSICOTERAPIA TRANSPERSONAL</h2>
        <p>
          La terapia psicotranspersonal es un enfoque que integra la psicología tradicional con aspectos espirituales y de expansión de la conciencia. Su objetivo es no solo aliviar el sufrimiento emocional, sino también facilitar el autoconocimiento profundo y la conexión con un sentido trascendental de la vida.
        </p>
        <p>
          A través de técnicas como la meditación, la respiración consciente, el trabajo con sueños y la integración de la sombra, se busca equilibrar la mente, las emociones y la esencia más profunda del ser.
        </p>
        <p>
          Es un camino hacia el bienestar integral, donde la sanación se convierte en un proceso de expansión personal y espiritual.
        </p>
      </div>
    </div>
  );
};

export default Presentacion;



