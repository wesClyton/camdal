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
              <p>Estamos sempre preparados para ajudar você no que for preciso. Dúvidas, solicitação ou sugestões? Entre em contato com a gente!</p>

              <h5>Contatos</h5>
              <div className="iconetexto">
                <i className="icon telefone"></i>
                <a target="_blank" href="tel:+5544991038369">(44) 99103 8369</a>
              </div>
              <div className="iconetexto">
                <i className="icon whats"></i>
                <a target="_blank" href="https://wa.me/554430394721">(44) 3039 4721</a>
              </div>

              <h5>Redes sociais</h5>
              <div className="iconetexto">
                <i className="icon instagram"></i>
                <span>em breve</span>
              </div>
              <div className="iconetexto">
                <i className="icon facebook"></i>
                <a target="_blank" href="https://www.facebook.com/camdallocadora">/camdallocadora</a>
              </div>
              <div className="iconetexto">
                <i className="icon linkedin"></i>
                <span>em breve</span>
              </div>

              <h5>Endereço</h5>
              <div className="iconetexto">
                <i className="icon endereco"></i>
                <span>Avenida Goias, 1178, Zona 5 - Cianorte-PR - CEP: 87209-006</span>
              </div>
            </div>

            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4430889111254!2d-52.603233285020444!3d-23.66010748463393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed5a140181fe4b%3A0xc258aaccbb3195a0!2sAv.%20Goi%C3%A1s%2C%201178%20-%20Zona%205%20(Armazens)%2C%20Cianorte%20-%20PR%2C%2087200-000!5e0!3m2!1spt-BR!2sbr!4v1636218006987!5m2!1spt-BR!2sbr"
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
