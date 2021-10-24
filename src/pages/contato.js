import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './contato.scss';

const ContatoPage = () => {

  const title = 'Contato';

  return (
    <>
      <Header title={ title }></Header>

      <main className="contato-page color-grey-5">
        <Banner hideInfos={ true } bgCenter={ true }></Banner>

        <div className="container py-2">
          <h1>{ title }</h1>

          <div className="flex">
            <div className="textos">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

              <h5>Contatos</h5>
              <div className="iconetexto">
                <i className="icon telefone"></i>
                <span>(44) 9 9999-9999</span>
              </div>
              <div className="iconetexto">
                <i className="icon whats"></i>
                <span>(44) 9 9999-9999</span>
              </div>

              <h5>Redes sociais</h5>
              <div className="iconetexto">
                <i className="icon instagram"></i>
                <span>@camdalalugueldecarros</span>
              </div>
              <div className="iconetexto">
                <i className="icon facebook"></i>
                <span>/camdalalugueldecarros</span>
              </div>
              <div className="iconetexto">
                <i className="icon linkedin"></i>
                <span>/camdalalugueldecarros</span>
              </div>

              <h5>Endereço</h5>
              <div className="iconetexto">
                <i className="icon endereco"></i>
                <span>Rua Aaaaaaaaa, 999, CEP: 99.999-999  - Centro | Cianorte-PR</span>
              </div>
            </div>

            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24495.421433813353!2d-52.624511582836135!3d-23.664173169755344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed5a10a4b58527%3A0x4e632448e884ca8!2sCianorte%2C%20PR%2C%2087200-000!5e0!3m2!1spt-BR!2sbr!4v1635107356683!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};

export default ContatoPage;
