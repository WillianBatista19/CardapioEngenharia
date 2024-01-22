import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer Clássico', price: 10.99, description: 'Delicioso hambúrguer clássico.' },
    { id: 2, name: 'Hamburguer Vegetariano', price: 9.99, description: 'Opção saudável e saborosa.' },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
