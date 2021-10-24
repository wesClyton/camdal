import { Link } from 'gatsby';
import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImgSobre from '../images/home/sobre.png';
import './index.scss';

const IndexPage = () => {
  return (
    <>
      <Header></Header>

      <main className="index-page">
        <Banner hideInfos={ false }></Banner>

        <section className="sobre py-2">
          <div className="container">
            <div className="flex">
              <div className="text">
                <h1>Sobre</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link to="/sobre" className="btn btn-md btn-primary">Saiba mais</Link>
              </div>
              <div className="image">
                <img src={ ImgSobre } alt="Sobre" />
              </div>
            </div>
          </div>
        </section>

        <section className="nossoscarros py-2">
          <div className="container">
            <div className="flex">
              <div className="icones">
                <h1>Nossos carros</h1>
                <ul className="listicons">
                  <li className="item">
                    <i className="icon carroslimpos"></i>
                    <small>Carros limpos</small>
                  </li>
                  <li className="item">
                    <i className="icon revisao"></i>
                    <small>Revisão em dia</small>
                  </li>
                  <li className="item">
                    <i className="icon semtaxas"></i>
                    <small>Sem taxas ocultas</small>
                  </li>
                  <li className="item">
                    <i className="icon alugueis"></i>
                    <small>Aluguéis flexíveis</small>
                  </li>
                </ul>
              </div>
              <div className="text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link to="/nossos-carros" className="btn btn-md btn-primary">Ver carros</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
};

export default IndexPage;
