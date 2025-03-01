// AdmDashboard.jsx
import "../../styles/AdmDashboard.css";



import NavBar from "../Navbar/NavBar.jsx";
import ConsultarUsuarios from "./ConsultarUsuarios.jsx";

const AdmDashboard = () => {
  return (
    <div className="dashboard-background">
      <NavBar/>
      <ConsultarUsuarios></ConsultarUsuarios>
    
    </div>
    
  );
};

export default AdmDashboard;
