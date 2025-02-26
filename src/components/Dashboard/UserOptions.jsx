import "../../styles/UserOptions.css";


import psychology from "../../gifs/psychology.gif";
import mentoring from "../../gifs/mentoring.gif";
import comment from "../../gifs/comment.gif";

import form from "../../gifs/form.gif";

const OptionCard = ({ title, description, imageUrl }) => {
  return (
    <div className="user-option-card">
      <img src={imageUrl} alt={title} className="user-option-image" />
      <h2 className="user-option-title">{title}</h2>
      <p className="user-option-description">{description}</p>
    </div>
  );
};

const UserOptions = () => {
  return (
    <div className="user-dashboard-background">
      
      <main className="user-dashboard-main">
        <div className="user-options-grid">
          {[ 
            { title: "Sesiones 1:1", description: "Agenda/Modifica/Elimina un sesion", imageUrl: psychology  },
            { title: "Sesiones Grupales", description: "Reserva un cupo para el proximio evento presencial!", imageUrl: mentoring },
            { title: "Comentarios", description: "Realiza comentarios.", imageUrl: comment },
            { title: "Modificar Datos", description: "Modifica y actualiza informacion.", imageUrl: form },
          
          ].map((item, index) => (
            <OptionCard key={index} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserOptions;
