import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cardapio from "./components/Cardapio/Cardapio";
import Login from "./components/Login/Login";
import Register from "./components/Registro/Register";
import Empresa from "./components/Empresa/Empresa";
import ProductList from "./components/Produtos/ProductList";
import ProductProvider from "./components/Produtos/ProductContext";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ProductList" element={<ProductList />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
