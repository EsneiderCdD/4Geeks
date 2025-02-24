import React, { useEffect, useState } from "react";

const DescripcionServicios = ({ imagen, titulo, texto, invertido }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: invertido ? "row-reverse" : "row",
        alignItems: "center",
        gap: "20px",
        padding: "5px",
        backgroundColor: "#E6D5C6",
        borderRadius: "10px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        marginTop:"5%",
        
      }}
    >
      <img
        src={imagen}
        alt="Imagen"
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "5px",
          objectFit: "cover",
          marginTop:"5%"
          
        }}
      />
      <div>
        <h2 style={{ color: "#5D4037", margin: "0"}}>{titulo}</h2>
        <p style={{ color: "#795548", margin: "5px 0" }}>{texto}</p>
      </div>
    </div>
  );
};

const Contenedor = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", pading: "5%" }}>
      <DescripcionServicios
        imagen="/public/imagenes/cuerpo.png"
        titulo="Terapia 1:1"
        texto="La terapia psicotranspersonal individual es un enfoque que integra la psicología con aspectos espirituales y filosóficos para promover un crecimiento más allá de la identidad personal. A través de técnicas como la meditación, la respiración consciente y el trabajo con estados expandidos de conciencia, busca trascender el ego y facilitar una transformación profunda. En el contexto individual, esta terapia se adapta a las necesidades específicas de cada persona, ayudándola a explorar su mundo interior, resolver bloqueos emocionales y conectar con su propósito de vida. A diferencia de la psicología convencional, no solo se enfoca en resolver conflictos internos, sino en integrar experiencias místicas o espirituales como parte del proceso de sanación. Se aplica en crisis existenciales, ansiedad, depresión o para quienes buscan un sentido más amplio en la vida, fomentando la conexión con uno mismo, los demás y el universo."
        invertido={false}
      />
      <DescripcionServicios
        imagen="/public/imagenes/manos.png"
        titulo="Terapia grupal"
        texto="La terapia psicotranspersonal grupal es un enfoque que integra la psicología con aspectos espirituales y filosóficos para promover un crecimiento más allá de la identidad personal. A través de técnicas como la meditación, la respiración consciente y el trabajo con estados expandidos de conciencia, busca trascender el ego y facilitar una transformación profunda. En el contexto grupal, esta terapia crea un espacio de apoyo y conexión donde los participantes pueden compartir experiencias, fortalecer su sentido de pertenencia y potenciar su proceso de autoconocimiento a través del reflejo en los demás. A diferencia de la psicología convencional, no solo se enfoca en resolver conflictos internos, sino en integrar experiencias místicas o espirituales como parte del proceso de sanación. Se aplica en crisis existenciales, ansiedad, depresión o para quienes buscan un sentido más amplio en la vida, fomentando la conexión con uno mismo, los demás y el universo."
        invertido={true}
      />
    </div>
  );
};

export default Contenedor;

