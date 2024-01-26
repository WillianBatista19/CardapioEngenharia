// ProductContext.js
import React, { createContext, useContext, useState, useEffect} from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

/*
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer Clássico', price: 10.99, description: 'Delicioso hambúrguer clássico.', image: null },
    { id: 2, name: 'Hamburguer Vegetariano', price: 9.99, description: 'Opção saudável e saborosa.', image: null },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
*/

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log("ok 1");

  const fetchProducts = async () => {
    console.log("ok 2");
    try {
      console.log("try 1");
      const response = await fetch(`http://localhost:3005/api/exibetodosprodutos`);
      console.log("try 2");
      if (!response.ok) {
        console.log("erro try 1");
        throw new Error('Erro ao buscar produtos');
      }
      console.log("try 3");
      const data = await response.json();

      console.log('Produtos encontrados:', data);

      // Atualiza o estado com os dados obtidos da API
      setProducts(data);
      console.log("try 4");
    } catch (error) {
      console.error('Erro ao buscar produtos:', error.message);
    }
  };

  // Chama a função fetchProducts no momento em que o componente é montado
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;
