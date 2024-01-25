import React from 'react';
import Navbar from "../Navbar/nav";
import Footer from "../Footer/Footer";
import { Container} from "react-bootstrap";
import "./Menu.css";

// Imagens Carrosel
import menu1 from '../imgs/menu1.jpg';
import menu2 from '../imgs/menu2.jpg';
import menu3 from '../imgs/menu3.jpg';
//Imagens depoimentos
import card1 from '../imgs/card1.jpg';
import card2 from '../imgs/card2.jpg';
import card3 from '../imgs/card3.jpg';

function Menu() {
  return (
    <>
    <Navbar/>
    <Container>
    <div className="container mt-5">
        <div className="alert alert-light text-center" role="alert">
          <h2>Venha aproveitar e saborear o melhor da região!</h2>
          <p>Você merece mais do que uma refeição rápida, merece uma explosão de sabores inesquecíveis! Aqui na Flinstones, cada mordida é uma experiência única, preparada com paixão e ingredientes frescos.</p>
        </div>
    </div>

    <div className="container2">
      <div className="card_menu">
        <img src={card1} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">"Ambiente extraordinário com o melhor atendimento possível, funcionários muito simpáticos e atenciosos" - Fernanda Xavier</p>
        </div>
      </div>
      <div className="card_menu">
        <img src={card2} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">"Comida deliciosa, mal posso esperar o salário cair para voltar! kkkk" - Bianca & Aline</p>
        </div>
      </div>
      <div className="card_menu">
        <img src={card3} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">"Atendimento e comida excelentes, o hamburguer com mel é excepcional." - Rodrigo Alves</p>
        </div>
      </div>
    </div>
    
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={menu1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={menu2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={menu3} class="d-block w-100" alt="..."/>
          </div>
      </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
      
      {/* <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <img src={imagem1} class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <img src={imagem2} class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <img src={imagem2} class="card-img-top" alt="..."/>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
    <Footer/>
    </>
);
}

export default Menu;
