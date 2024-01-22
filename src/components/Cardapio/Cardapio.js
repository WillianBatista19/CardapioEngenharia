import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import burgerImage from "../imgs/planodefundo.jpg";
import Navbar from "../Navbar/nav";
import Footer from "../Footer/Footer";
import { useProductContext } from "../Produtos/ProductContext";

function Cardapio() {
  const { products } = useProductContext();

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={burgerImage} alt={product.name} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="mt-auto">
                    {product.price !== undefined && (
                      <>
                        <Card.Text className="font-weight-bold">
                          R$ {product.price.toFixed(2)}
                        </Card.Text>
                        <Button variant="primary">Adicionar ao Carrinho</Button>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cardapio;
