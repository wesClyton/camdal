import { Link } from 'gatsby';
import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {

  render() {
    return <>
      <footer className="footer">
        <div className="container">
          <ul className="list">
            <li className="listitem">
              <i className="icon card"></i>
              <small>Pague em até 12x</small>
            </li>
            <li className="listitem">
              <i className="icon money"></i>
              <small>Melhor preço da região</small>
            </li>
            <li className="listitem">
              <i className="icon support"></i>
              <small>Atendimento humanizado</small>
            </li>
            <li className="listitem">
              <i className="icon car"></i>
              <small>Serviço leva/busca carro</small>
            </li>
          </ul>
        </div>

        <section className="bottom">
          <ul className="socialmedialist">
            <li>
              <a className="link whats" href="#" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link facebook" href="#" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link instagram" href="#" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link linkedin" href="#" target="_blank" rel="noreferrer"></a>
            </li>
          </ul>

          <address className="address color-text-white mt-2">Rua Aaaaaaaa Aaaaaa, 999 - Centro | Cianorte-PR</address>
          <small className="copy">
            <span className="text">©2021 - Todos os direitos reservados à Camdal - Aluguel de carros</span>
            <span className="pipe">|</span>
            <Link className="link" to="/politica-de-privacidade">Política de privacidade</Link>
          </small>
        </section>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=5544999999999"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fixed">
      </a>
    </>
  }

}

export default Footer;
