import "../../styles/UserDashboard.css";
import UserNavBar from "./UserNavBar.jsx";
import UserOptions from "./UserOptions.jsx";

const UserDashboard = () => {
  return (
    <div className="user-dashboard-background">
        <UserNavBar></UserNavBar>
      <div className="user-dashboard-sheet">
        <UserOptions />
      </div>
    </div>
  );
};

export default UserDashboard;
