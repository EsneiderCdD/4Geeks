// AdmNavBar.jsx
import "../../styles/AdmNavBar.css";

const AdmNavBar = () => {
  return (
    <nav className="adm-navbar">
      <div className="nav-options-container">
        <button className="nav-button">
        <span className="material-icons">
          person_search
        </span>
        </button>
        <button className="nav-button">
        <span className="material-icons">
          calendar_month
        </span>
        </button>
        <button className="nav-button">
        <span className="material-icons">
          payments
        </span>
        </button>
        
      </div>
      <div className="nav-title">PsicologiaTranspersonal</div>
      <div className="nav-options-container">
        <button className="nav-button">
        <span className="material-icons">
          forum
        </span>
        </button>
        <button className="nav-button">
        <span className="material-icons">
          bar_chart
        </span>
        </button>
        <button className="nav-button">
        <span className="material-icons">
          logout
        </span>
        </button>
      </div>
    </nav>
  );
};

export default AdmNavBar;

