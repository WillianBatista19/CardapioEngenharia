import React, { useState } from "react";
import Navbar from "../Navbar/nav";
import { useProductContext } from "./ProductContext";

const ProductManagement = () => {
  const { products, setProducts } = useProductContext();
  const [editingProduct, setEditingProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    clearForm();
  };

  const editProduct = (productId, updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      )
    );
    clearForm();
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    clearForm();
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditingProduct(productToEdit);
    setProductName(productToEdit.name);
    setProductPrice(productToEdit.price.toFixed(2));
    setProductDescription(productToEdit.description);
    setProductImage(productToEdit.image);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    clearForm();
  };

  const clearForm = () => {
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImage(null);
    setEditingProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Gerenciamento de Produtos</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editingProduct) {
              editProduct(editingProduct.id, {
                name: e.target.name.value,
                price: parseFloat(e.target.price.value),
                description: e.target.description.value,
                image: productImage,
              });
            } else {
              addProduct({
                name: e.target.name.value,
                price: parseFloat(e.target.price.value),
                description: e.target.description.value,
                image: productImage,
              });
            }
          }}
        >
          <div className="form-row align-items-end">
            <div className="col-md-4 mb-3">
              <label htmlFor="name">Nome do Produto:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="price">Preço do Produto:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                step="0.01"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="description">Descrição:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="col-md-2 mb-3 align-self-end">
              <label htmlFor="image">Imagem:</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                accept="image/*"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </div>
            <div className="col-md-2 mb-3 align-self-end">
              <button
                type="submit"
                className={`btn ${
                  editingProduct ? "btn-warning" : "btn-primary"
                }`}
              >
                {editingProduct ? "Editar" : "Adicionar"}
              </button>
            </div>
            {editingProduct && (
              <div className="col-md-2 mb-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancelar Edição
                </button>
              </div>
            )}
          </div>
        </form>

        <table className="table mt-4">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>{product.description}</td>
                <td>
                  {product.image && (
                    <img
                      src={URL.createObjectURL(product.image)}
                      alt={`Imagem de ${product.name}`}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductManagement;
