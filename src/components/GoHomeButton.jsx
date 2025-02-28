import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/GoHomeButton.css';

const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/admin")} className="go-home-button">
      Ir al Panel de control
    </button>
  );
};

export default GoHomeButton;
