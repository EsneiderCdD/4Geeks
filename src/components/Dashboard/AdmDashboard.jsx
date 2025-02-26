// AdmDashboard.jsx
import "../../styles/AdmDashboard.css";
import AdmNavBar from "./AdmNavbar.jsx";
import AdmOptions from "./AdmOptions.jsx";


const AdmDashboard = () => {
  return (
    <div className="dashboard-background">
      <AdmNavBar />
      <div className="dashboard-sheet">
      <AdmOptions/>
      
    
      </div>/
    </div>
  );
};

export default AdmDashboard;
