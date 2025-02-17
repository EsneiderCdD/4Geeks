import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';
import Logout from './components/Logout';
import Comments from './components/Comments';




function App() {
    return (
        <div>
            
            <Login />
            <Register />
            <DeleteUser />
            <UpdateUser />
            <Logout />
            <Comments />
          
        </div>
    );
}

export default App;
