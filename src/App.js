import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Usuarios from './Usuarios'; // Importe o componente de usuários
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Registro/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
