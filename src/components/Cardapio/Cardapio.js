import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import Navbar from "../Navbar/nav";
import Footer from "../Footer/Footer";
import { useProductContext } from "../Produtos/ProductContext";
import burgerImage from "../imgs/planodefundo.jpg"; // Importe a imagem padrão

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
                {product.image ? (
                  <Card.Img
                    variant="top"
                    src={URL.createObjectURL(product.image)}
                    alt={product.name}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                ) : (
                  <Card.Img
                    variant="top"
                    src={burgerImage}
                    alt={product.name}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="mt-auto">
                    {product.price !== undefined && (
                      <>
                        <Card.Text className="font-weight-bold">
                          R$ {product.price.toFixed(2)}
                        </Card.Text>
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
