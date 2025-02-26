// UserNavBar.jsx
import "../../styles/UserNavBar.css";

const UserNavBar = () => {
  return (
    <nav className="user-navbar">
      <div className="user-nav-options-container">
        <button className="user-nav-button">
        <span className="material-icons">
            group
        </span>
        </button>
        <button className="user-nav-button">
        <span className="material-icons">
         groups
        </span>
        </button>
      </div>
      <div className="user-nav-title">PsicologiaTranspersonal</div>
      <div className="user-nav-options-container">
        <button className="user-nav-button">
        <span className="material-icons">
            description
        </span>
        </button>
        <button className="user-nav-button">
        <span className="material-icons">
          logout
        </span>
        </button>
      </div>
    </nav>
  );
};

export default UserNavBar;
