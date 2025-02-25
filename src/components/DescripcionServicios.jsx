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
        padding: "20px",
        backgroundColor: "#E6D5C6",
        borderRadius: "10px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        flex: 1,
      }}
    >
      <img
        src={imagen}
        alt="Imagen"
        style={{
          width: "300px",
          height: "200px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
      <div>
        <h2 style={{ color: "#5D4037", margin: "0" }}>{titulo}</h2>
        <p style={{ color: "#795548", margin: "0" }}>{texto}</p>
      </div>
    </div>
  );
};

const Contenedor = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        flexWrap: "wrap",
        padding: "5px",
      }}
    >
      <DescripcionServicios
        imagen="/public/imagenes/cuerpo.png"
        titulo="Terapia 1:1"
        texto="La terapia psicotranspersonal individual integra la psicología con la espiritualidad para facilitar el autoconocimiento, la sanación y la expansión de la conciencia."
        invertido={false}
      />
      <DescripcionServicios
        imagen="/public/imagenes/manos.png"
        titulo="Terapia grupal"
        texto="La terapia psicotranspersonal grupal fomenta el crecimiento personal y la conexión colectiva a través de la exploración de la conciencia y la transformación interior."
        invertido={true}
      />
    </div>
  );
};

export default Contenedor;


