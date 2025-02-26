import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import User from './Pages/User';
import UserList from '../src/components/InteractiveOptions/UserList';
import FooterApp from "./components/FooterApp"
import NavbarApp from './components/NavbarApp';
import './index.css';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User/>} />
        <Route path= '/admin/users' element={<UserList/>} />
      </Routes>
    
  );
};

export default App;