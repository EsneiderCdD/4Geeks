import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';



function App() {
    return (
        <div>
            
            <Login />
            <Register />
            <DeleteUser />
            <UpdateUser />


        </div>
    );
}

export default App;
