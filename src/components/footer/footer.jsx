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
              <small>Serviço de Translado</small>
            </li>
          </ul>
        </div>

        <section className="bottom">
          <ul className="socialmedialist">
            <li>
              <a className="link whats" href="https://wa.me/554430394721" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link facebook" href="https://www.facebook.com/camdallocadora" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link instagram" href="#" title="Em breve" target="_blank" rel="noreferrer"></a>
            </li>
            <li>
              <a className="link linkedin" href="#" title="Em breve" target="_blank" rel="noreferrer"></a>
            </li>
          </ul>

          <address className="address color-text-white mt-2">Avenida Goias, 1178, Zona 5 | 87209-006 | Cianorte-PR</address>
          <small className="copy">
            <span className="text">©2021 - Todos os direitos reservados à Camdal - Aluguel de carros</span>
            <span className="pipe">|</span>
            <Link className="link" to="/politica-de-privacidade">Política de privacidade</Link>
          </small>
        </section>
      </footer>

      <a
        href="https://wa.me/554430394721"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fixed">
      </a>
    </>
  }

}

export default Footer;
