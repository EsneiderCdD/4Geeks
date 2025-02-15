import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{
      backgroundColor: '#f5f5f5',
      padding: '10px',
      textAlign: 'center'
    }}>
      <Link 
        to="/login" 
        style={{ margin: '0 15px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
      >
        Iniciar Sesión
      </Link>
      <Link 
        to="/terapia-1-1" 
        style={{ margin: '0 15px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
      >
        Terapia 1:1
      </Link>
      <Link 
        to="/terapia-grupal" 
        style={{ margin: '0 15px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
      >
        Terapia Grupal
      </Link>
    </nav>
  );
};

export default NavBar;
