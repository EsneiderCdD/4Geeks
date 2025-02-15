import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import Logout from './components/Logout';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terapia-1-1" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia 1:1</div>} />
        <Route path="/terapia-grupal" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia Grupal</div>} />
        <Route path="/edit-user" element={<UpdateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/logout" element={<Logout />} />
        
      </Routes>
    </Router>
  );
};

export default App;
