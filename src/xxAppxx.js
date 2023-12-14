//import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Register from './components/Registro/Register';
import Usuarios from './services/mysql/server.js';




const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/usuarios')
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error));
  }, []);

  const adicionarUsuario = () => {
    axios.post('http://localhost:3000/api/usuarios', { nome, email })
      .then((response) => setUsuarios([...usuarios, response.data]))
      .catch((error) => console.error(error));
  };

  const excluirUsuario = (id) => {
    axios.delete(`http://localhost:3000/api/usuarios/${id}`)
      .then(() => setUsuarios(usuarios.filter((usuario) => usuario.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>CRUD React + Node.js + MySQL</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} ({usuario.email})
            <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={adicionarUsuario}>Adicionar</button>
      </div>
    </div>

    <Router>
    <Routes>
    <Route path="/" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/api/usuarios" element={<Usuarios />} />
    </Routes>
    </Router>
  );
};


/*
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}
*/

/*
<h1>CRUD React + Node.js + MySQL</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} ({usuario.email})
            <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={adicionarUsuario}>Adicionar</button>
      </div>
    </div>

*/

export default App;