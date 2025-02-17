import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing'; // <-- Nuevo componente
import Login from './components/Login';
import Register from './components/Register';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import Logout from './components/Logout';
import Comments from './components/Comments';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Landing />
      <Routes>
       {/* <Route path="/" element={<Landing />} /> Ruta Opcional Home*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terapia-1-1" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia 1:1</div>} />
        <Route path="/terapia-grupal" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia Grupal</div>} />
        <Route path="/updateuser" element={<UpdateUser />} />
        <Route path="/deleteuser" element={<DeleteUser />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;

