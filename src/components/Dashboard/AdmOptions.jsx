import "../../styles/AdmOptions.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import search from "../../gifs/search.gif";
import calendar from "../../gifs/calendar.gif";
import comments from "../../gifs/comments.gif";
import serviceprice from "../../gifs/serviceprice.gif";
import analysis from "../../gifs/analysis.gif";
import Comments from "../Comments";

const OptionCard = ({ title, description, imageUrl, onClick, isExpanded, toggleExpand }) => {
  return (
    <div className="option-card">
      <div className="option-header" onClick={toggleExpand}>
        <img src={imageUrl} alt={title} className="option-image" />
        <div className="option-content">
          <h2 className="option-title">{title}</h2>
          <p className="option-description">{description}</p>
        </div>
        <button className="option-button" onClick={toggleExpand}>
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

const AdminOptions = () => {
  const navigate = useNavigate();
  const [expandedOption, setExpandedOption] = useState(null);

  const toggleExpand = (title) => {
    setExpandedOption(expandedOption === title ? null : title);
  };

  return (
    <div className="dashboard-background">
      <main className="dashboard-main">
        <div className="options-grid">
          <OptionCard
            title="Consultar Usuario"
            description="Accede al perfil y datos de los usuarios."
            imageUrl={search}
            onClick={() => navigate("/admin/users")}
            isExpanded={expandedOption === "Consultar Usuario"}
            toggleExpand={() => toggleExpand("Consultar Usuario")}
          />
          {expandedOption === "Consultar Usuario" && (
            <div className="expanded-container">
              <Comments />
            </div>
          )}
          <OptionCard
            title="Agenda"
            description="Administra citas y reuniones fácilmente."
            imageUrl={calendar}
          />
          <OptionCard
            title="Comentarios"
            description="Revisa y gestiona los comentarios recibidos."
            imageUrl={comments}
            onClick={() => navigate("/admin/comments")}
          />
          <OptionCard
            title="Precios / Servicios"
            description="Modifica y actualiza tarifas y servicios."
            imageUrl={serviceprice}
          />
          <OptionCard
            title="Estadísticas"
            description="Visualiza métricas y reportes de actividad."
            imageUrl={analysis}
          />
        </div>
      </main>
    </div>
  );
};

export default AdminOptions;
