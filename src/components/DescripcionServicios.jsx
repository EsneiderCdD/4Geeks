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
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <DescripcionServicios
        imagen="/public/imagenes/cuerpo.png"
        titulo="Terapia 1:1"
        texto="La terapia psicotranspersonal individual es un enfoque que integra la psicología con aspectos espirituales y filosóficos para promover un crecimiento más allá de la identidad personal."
        invertido={false}
      />
      <DescripcionServicios
        imagen="/public/imagenes/manos.png"
        titulo="Terapia grupal"
        texto="La terapia psicotranspersonal grupal es un enfoque que integra la psicología con aspectos espirituales y filosóficos para promover un crecimiento más allá de la identidad personal."
        invertido={true}
      />
    </div>
  );
};

export default Contenedor;


