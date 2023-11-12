import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import burgerImage from '../imgs/planodefundo.jpg';
import Navbar from '../Navbar/nav';
import Footer from '../Footer/Footer';

function Menu() {
  const produtos = [
    {
      id: 1,
      nome: 'Hambúrguer Clássico',
      descricao: 'Nosso hambúrguer clássico com carne, queijo, alface e tomate.',
      preco: 15.99,
    },
    {
      id: 2,
      nome: 'Hambúrguer Vegetariano',
      descricao: 'Um hambúrguer vegetariano com abacate, rúcula e molho especial.',
      preco: 12.99,
    },
    {
      id: 3,
      nome: 'Batata Frita Crocante',
      descricao: 'Deliciosas batatas fritas crocantes e temperadas.',
      preco: 5.99,
    },
    {
      id: 4,
      nome: 'Hamburguer Simples',
      descricao: 'Deliciosas carnes crocantes e temperadas.',
      preco: 7.99,
    },
    {
      id: 5,
      nome: 'Hamburgão',
      descricao: 'Delicioso hamburgão com tudo de bom.',
      preco: 9.99,
    },
    {
      id: 6,
      nome: 'Hamburguer Artesanal',
      descricao: 'Delicioso hamburguer gourmet com molho especial e deliciosas gorduras tipo LDS',
      preco: 17.99,
    }
  ];

  return (
    <Container>
      <Navbar/>
      <Row className="mt-5">
        {produtos.map((produto) => (
          <Col key={produto.id} xs={12} md={4}>
            <Card className="mb-4 h-100 d-flex flex-column">
              <Card.Img variant="top" src={burgerImage} alt={produto.nome} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <div className="mt-auto">
                  <Card.Text className="font-weight-bold">R$ {produto.preco.toFixed(2)}</Card.Text>
                  <Button variant="primary">Adicionar ao Carrinho</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer/>
    </Container>
  );
}

export default Menu;
