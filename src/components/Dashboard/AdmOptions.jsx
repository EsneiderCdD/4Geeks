import "../../styles/AdmOptions.css";
import { useNavigate } from "react-router-dom";
import search from "../../gifs/search.gif";
import calendar from "../../gifs/calendar.gif";
import comments from "../../gifs/comments.gif";
import serviceprice from "../../gifs/serviceprice.gif";
import analysis from "../../gifs/analysis.gif";

const OptionCard = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="option-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={imageUrl} alt={title} className="option-image" />
      <h2 className="option-title">{title}</h2>
      <p className="option-description">{description}</p>
    </div>
  );
};

const AdminOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-background">
      <main className="dashboard-main">
        <div className="options-grid">
          <OptionCard
            title="Consultar Usuario"
            description="Accede al perfil y datos de los usuarios."
            imageUrl={search}
            onClick={() => navigate("/admin/users")}
          />
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
