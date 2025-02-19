import React from "react";

const paisesHispanohablantes = [
  { value: "AR", label: "Argentina" },
  { value: "BO", label: "Bolivia" },
  { value: "CL", label: "Chile" },
  { value: "CO", label: "Colombia" },
  { value: "CR", label: "Costa Rica" },
  { value: "CU", label: "Cuba" },
  { value: "DO", label: "República Dominicana" },
  { value: "EC", label: "Ecuador" },
  { value: "SV", label: "El Salvador" },
  { value: "GT", label: "Guatemala" },
  { value: "HN", label: "Honduras" },
  { value: "MX", label: "México" },
  { value: "NI", label: "Nicaragua" },
  { value: "PA", label: "Panamá" },
  { value: "PY", label: "Paraguay" },
  { value: "PE", label: "Perú" },
  { value: "PR", label: "Puerto Rico" },
  { value: "ES", label: "España" },
  { value: "UY", label: "Uruguay" },
  { value: "VE", label: "Venezuela" },
];

const CountrySelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "30px",
        border: "1px solid black",
        backgroundColor: "transparent",
      }}
    >
      <option value="" disabled>Selecciona tu país</option>
      {paisesHispanohablantes.map((pais) => (
        <option key={pais.value} value={pais.value}>
          {pais.label}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;