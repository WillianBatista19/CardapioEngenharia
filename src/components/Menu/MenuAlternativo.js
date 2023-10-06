// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import burgerImage from '../imgs/planodefundo.jpg'; // Ajuste o caminho da imagem
// import './Menu.css';

// function Menu() {
//   const produtos = [
//     {
//       id: 1,
//       nome: 'Hambúrguer Clássico',
//       descricao: 'Nosso hambúrguer clássico com carne, queijo, alface e tomate.',
//       preco: 15.99,
//     },
//     {
//       id: 2,
//       nome: 'Hambúrguer Vegetariano',
//       descricao: 'Um hambúrguer vegetariano com abacate, rúcula e molho especial.',
//       preco: 12.99,
//     },
//     {
//       id: 3,
//       nome: 'Batata Frita Crocante',
//       descricao: 'Deliciosas batatas fritas crocantes e temperadas.',
//       preco: 5.99,
//     },
//     {
//       id: 4,
//       nome: 'Batata Frita Crocante',
//       descricao: 'Deliciosas batatas fritas crocantes e temperadas.',
//       preco: 5.99,
//     },
//     {
//       id: 5,
//       nome: 'Batata Frita Crocante',
//       descricao: 'Deliciosas batatas fritas crocantes e temperadas.',
//       preco: 5.99,
//     },
//     // Adicionar mais produtos aqui se vcs quiserem 
//   ];

//   // Configuração do carrossel
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="carousel-container mt-4"> 
//       <Slider {...sliderSettings}>
//         {produtos.map((produto) => (
//           <div key={produto.id} className="carousel-item">
//             <div className="mb-4 d-flex flex-column h-100 justify-content-between"> {/* Usando flexbox */}
//               <img
//                 src={burgerImage}
//                 alt={produto.nome}
//                 className="carousel-image"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{produto.nome}</h5>
//                 <p className="card-text">{produto.descricao}</p>
//                 <p className="font-weight-bold">R$ {produto.preco.toFixed(2)}</p>
//                 <div className="d-flex justify-content-end"> {/* Alinhando o botão na parte inferior */}
//                   <button className="btn btn-primary">Adicionar ao Carrinho</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Menu;