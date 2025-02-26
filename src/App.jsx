import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import FooterApp from "./components/FooterApp"
import NavbarApp from './components/NavbarApp';
import './index.css';

const App = () => {
  return (

      <div>
        <NavbarApp/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <FooterApp/>
      </div>
  );
};

export default App;