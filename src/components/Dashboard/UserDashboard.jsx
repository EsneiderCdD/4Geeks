import "../../styles/UserDashboard.css";
import UserNavBar from "./UserNavBar.jsx";
import UserOptions from "./UserOptions.jsx";
import DeleteUserButton from "../DeleteUserButton.jsx";
import ModifyUser from "../ModifyUser.jsx";


const UserDashboard = () => {
  return (
    <div className="user-dashboard-background">
        <UserNavBar></UserNavBar>
      <div className="user-dashboard-sheet">
        <UserOptions />
        <DeleteUserButton />
        <ModifyUser />
       
      </div>
    </div>
  );
};

export default UserDashboard;
