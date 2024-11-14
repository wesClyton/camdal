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

              <h5>Redes sociais</h5>
              <div className="iconetexto">
                <i className="icon instagram"></i>
                <a target="_blank" href="https://www.instagram.com/camdallocadora/">/camdallocadora</a>
              </div>
              <div className="iconetexto">
                <i className="icon facebook"></i>
                <a target="_blank" href="https://www.facebook.com/camdallocadora">/camdallocadora</a>
              </div>
              <div className="iconetexto">
                <i className="icon linkedin"></i>
                <span>em breve</span>
              </div>

              <h5>Email</h5>
              <div className="iconetexto">
                <i className="icon mail"></i>
                <a href="mailto:reserva@camdal.com.br">reserva@camdal.com.br</a>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h5>Cianorte</h5>
                <div className="iconetexto">
                  <i className="icon endereco"></i>
                  <a target="_blank" href="https://maps.app.goo.gl/7dZi6ar1NCGeib416">Avenida Goias, 1178, Zona 5 - CEP: 87209-006</a>
                </div>
                <div className='flex mt-1'>
                  <div className="iconetexto">
                    <i className="icon telefone"></i>
                    <a target="_blank" href="tel:+5544991038369">(44) 99103 8369</a>
                  </div>
                  <div className="iconetexto">
                    <i className="icon telefone"></i>
                    <a target="_blank" href="tel:+554430394721">(44) 3039 4721</a>
                  </div>
                </div>
              </div>

              <div className="card mt-2">
                <h5>Paranavaí</h5>
                <div className="iconetexto">
                  <i className="icon endereco"></i>
                  <a target="_blank" href="https://maps.app.goo.gl/ocCmXdzJqoidwxzp7">Avenida Distrito Federal, Jardim Progresso - 1580 - CEP: 87701-310</a>
                </div>
                <div className='flex mt-1'>
                  <div className="iconetexto">
                    <i className="icon telefone"></i>
                    <a target="_blank" href="tel:+5544999215276">(44) 99921 5276</a>
                  </div>
                  <div className="iconetexto">
                    <i className="icon telefone"></i>
                    <a target="_blank" href="tel:+554439002425">(44) 3900-2425</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};

export default ContatoPage;
