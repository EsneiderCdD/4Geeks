import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Eliminar el token
    localStorage.removeItem("userRole"); // Eliminar el rol del usuario
    navigate("/"); // Redirigir a Home
    window.location.reload(); // Recargar la página
  };

  return (
    <button className="nav-button" onClick={handleLogout}>
      <span className="material-icons">logout</span>
    </button>
  );
};

export default LogoutButton;


