import Home from './Pages/Home'
import NavbarApp from './components/NavbarApp'
import FooterApp from './components/FooterApp'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginRegister from './components/LoginRegister';


import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import Logout from './components/Logout';
import Comments from './components/Comments';


const App = () => {
  return (

      <div>
        <NavbarApp></NavbarApp>
        <LoginRegister></LoginRegister>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path="/terapia-1-1" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia 1:1</div>} />
          <Route path="/terapia-grupal" element={<div style={{textAlign: 'center', marginTop: '50px'}}>Página de Terapia Grupal</div>} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </div>
  );
};

export default App;



    
   