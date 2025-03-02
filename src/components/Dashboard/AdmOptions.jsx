import "../../styles/UserOptions.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import psychology from "../../gifs/psychology.gif";
import mentoring from "../../gifs/mentoring.gif";
import comment from "../../gifs/comment.gif";
import form from "../../gifs/form.gif";
import Comments from "../Comments";

const OptionCard = ({ title, description, imageUrl, isExpanded, toggleExpand }) => {
  return (
    <div className="user-option-card">
      <div className="option-header" onClick={toggleExpand}>
        <img src={imageUrl} alt={title} className="user-option-image" />
        <div className="user-option-content">
          <h2 className="user-option-title">{title}</h2>
          <p className="user-option-description">{description}</p>
        </div>
        <button className="option-button" onClick={toggleExpand}>
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

const UserOptions = () => {
  const navigate = useNavigate();
  const [expandedOption, setExpandedOption] = useState(null);

  const toggleExpand = (title) => {
    setExpandedOption(expandedOption === title ? null : title);
  };

  return (
    <div className="user-dashboard-background">
      <main className="user-dashboard-main">
        <div className="user-options-grid">
          <OptionCard
            title="Sesiones 1:1"
            description="Agenda/Modifica/Elimina una sesión"
            imageUrl={psychology}
            isExpanded={expandedOption === "Sesiones 1:1"}
            toggleExpand={() => toggleExpand("Sesiones 1:1")}
          />
          <OptionCard
            title="Sesiones Grupales"
            description="Reserva un cupo para el próximo evento presencial!"
            imageUrl={mentoring}
            isExpanded={expandedOption === "Sesiones Grupales"}
            toggleExpand={() => toggleExpand("Sesiones Grupales")}
          />
          <OptionCard
            title="Comentarios"
            description="Realiza comentarios."
            imageUrl={comment}
            isExpanded={expandedOption === "Comentarios"}
            toggleExpand={() => toggleExpand("Comentarios")}
          />
          {expandedOption === "Comentarios" && (
            <div className="expanded-container">
              <Comments />
            </div>
          )}
          <OptionCard
            title="Modificar Datos"
            description="Modifica y actualiza información."
            imageUrl={form}
            isExpanded={expandedOption === "Modificar Datos"}
            toggleExpand={() => toggleExpand("Modificar Datos")}
          />
        </div>
      </main>
    </div>
  );
};

export default UserOptions;