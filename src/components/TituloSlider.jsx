import React from 'react';

const TituloSlider = () => {
  return (
    <div style={{
      width: '100%', 
      height: '2cm', 
      backgroundColor: 'rgb(211, 175, 141)', // tono pastel tierra
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '8px'
    }}>
      <h1 style={{
        margin: 0,
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5em'
      }}>
        VIVE SANO , VIVE FELIZ !
      </h1>
    </div>
  );
};

export default TituloSlider;
