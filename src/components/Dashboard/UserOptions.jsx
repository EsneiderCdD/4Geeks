import "../../styles/UserOptions.css";
import { useNavigate } from "react-router-dom";
import psychology from "../../gifs/psychology.gif";
import mentoring from "../../gifs/mentoring.gif";
import comment from "../../gifs/comment.gif";
import form from "../../gifs/form.gif";

const OptionCard = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="user-option-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={imageUrl} alt={title} className="user-option-image" />
      <h2 className="user-option-title">{title}</h2>
      <p className="user-option-description">{description}</p>
    </div>
  );
};

const UserOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="user-dashboard-background">
      <main className="user-dashboard-main">
        <div className="user-options-grid">
          {[ 
            { title: "Sesiones 1:1", description: "Agenda/Modifica/Elimina un sesion", imageUrl: psychology, onClick: () => {} },
            { title: "Sesiones Grupales", description: "Reserva un cupo para el proximio evento presencial!", imageUrl: mentoring, onClick: () => {} },
            { title: "Comentarios", description: "Realiza comentarios.", imageUrl: comment, onClick: () => navigate("/user/comments") },
            { title: "Modificar Datos", description: "Modifica y actualiza informacion.", imageUrl: form, onClick: () => {} },
          ].map((item, index) => (
            <OptionCard key={index} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserOptions;
