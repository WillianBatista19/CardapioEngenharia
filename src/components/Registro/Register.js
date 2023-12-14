import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Ok')
    // console.log('Nome:', name);
    // console.log('Email:', email);
    // console.log('Senha:', password);
    
    e.preventDefault();
    // console.log('Ok')
    // console.log('Nome:', name);
    // console.log('Email:', email);
    // console.log('Senha:', password);
    
    try {
      console.log('try')
      const response = await fetch(`http://localhost:3005/api/cadusuario/${name}/${email}/${password}`);
      // console.log(response)
      if (!response.ok) {
          // console.log('try 2')
          throw new Error('Erro ao cadastrar usuário');
      }

      const data = await response.json();
      console.log('Usuário encontrado:', data);
      // Faça algo com os dados do usuário, como exibí-los na tela
  } catch (error) {
      // console.log('catch')
      console.error('Erro ao cadastrar usuário:', error.message);
      // Tratar o erro conforme necessário
  }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <div className="text-center mb-4">
            <h2 className="display-4">Crie uma conta</h2>
            <p>Registre-se para acessar o cardápio online.</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" block>
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;