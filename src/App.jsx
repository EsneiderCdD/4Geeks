import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import User from './Pages/User';
import UserList from '../src/components/InteractiveOptions/UserList';
import CommentSection from '../src/components/Comments/CommentSection';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User/>} />
        <Route path= '/admin/users' element={<UserList/>} />

        <Route path="/user/comments" element={<CommentSection />} />


      
      </Routes>
    
  );
};

export default App;