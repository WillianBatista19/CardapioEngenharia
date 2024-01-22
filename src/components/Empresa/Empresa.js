import carrosel1 from '../imgs/carrosel1.png';
import carrosel2 from '../imgs/carrosel2.png';
import carrosel3 from '../imgs/carrosel3.png';
import Navbar from "../Navbar/nav";
import Footer from "../Footer/Footer";
import { Container } from 'react-bootstrap';
import './Empresa.css';

function Empresa(){
    return( 
        <>
        {/* Navbar */}
        <Navbar/>

        <Container>
            {/* CONTEÚDO -  */}
            <div class="about">
                <h3>Descubra o Mundo de Sabores Rápidos na Flintstones!</h3>
                    <p>Na Flintstones, acreditamos em tornar a experiência de fast food algo especial, onde a rapidez se encontra com o sabor. Nossa equipe de chefs trabalha com eficiência para transformar ingredientes frescos em delícias irresistíveis. De hambúrgueres suculentos a wraps apetitosos, nosso menu diversificado é uma festa para o paladar.
                    Em um ambiente descontraído e com uma equipe simpática pronta para atendê-lo, queremos tornar cada visita memorável. Comprometidos com a qualidade, usamos apenas ingredientes frescos e de alta qualidade, garantindo que cada mordida seja uma experiência extraordinária.
                    Na Flintstones, não se trata apenas de uma refeição rápida; é uma celebração de sabores, velocidade e diversão. Quer seja para um almoço rápido, um lanche antes do cinema ou uma escapadela noturna, estamos aqui para fazer parte dos seus momentos deliciosos. Porque, afinal, a vida é rápida, e a boa comida não deve ser uma exceção! Estamos ansiosos para recebê-lo em nossa casa de sabores rápidos em breve!</p>
            </div>

            {/* CONTEÚDO - CARROSEL */}
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carrosel1} class="d-block w-100" alt="Primeira Imagem"/>
                    </div>
                    <div class="carousel-item">
                        <img src={carrosel2} class="d-block w-100" alt="Segunda imagem"/>
                    </div>
                    <div class="carousel-item">
                        <img src={carrosel3} class="d-block w-100" alt="Terceira"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                
            {/* CONTEÚDO */}
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-4">
                        <h4>Missão</h4>
                        <p>Nossa missão é entregar sempre o nosso melhor, ajudar a construir momentos de felicidade com os amigos, a família, todas as
                            pessoas que são importantes para você. Estar nessas experiências construindo lembranças é o alicerce fundamental dessa empresa.
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <h4>Visão</h4>
                        <p>Nossa visão é se tornar uma referência no ramo sem perder a qualidade e a diversão ao longo do processo. Ser sempre um ambiente
                            de aprendizado, aconchego e diversão para todos que façam parte da equipe e para nossos clientes.
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <h4>Valores</h4>
                        <p>Respeito: Com os clientes, colaboradores, fornecedores e com todas as formas de ser e se expressar.</p>
                        <p>Integridade: Ser ético e justo para todas as pessoas.</p>
                        <p>Inovação: Buscar inovar e trazer sempre o novo de forma responsável e divertida.</p>
                        <p>Responsabilidade: Ser responsável com os compromissos que assumimos, prestando o melhor serviço.</p>
                    </div>
                </div>
            </div>

        </Container>
        {/* FOOTER */}
        <Footer/>
        </>
    )
};

export default Empresa;