import { Link } from 'gatsby';
import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import '../../styles/main.scss';
import './header.scss';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuAtivo: false
    }

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState({ menuAtivo: !this.state.menuAtivo })
  }

  render() {
    return (
      <>
        <title>
          { this.props.title ? this.props.title + ' | ' : '' }Camdal Locadora de Veículos
        </title>

        <header className="header">
          <div className="container">
            <div className="flex">
              <div className="logo">
                <Link className="link" to="/">
                  <img src={ Logo } alt="Camdal" />
                </Link>
              </div>

              <nav className={ `nav ${this.state.menuAtivo ? '-active' : ''}` }>
                <ul className="list">
                  <li className="listitem">
                    <Link className="listlink" activeClassName="-active" to="/">Home</Link>
                  </li>
                  <li className="listitem">
                    <Link className="listlink" activeClassName="-active" to="/sobre">Sobre</Link>
                  </li>
                  <li className="listitem">
                    <Link className="listlink" activeClassName="-active" to="/nossos-carros">Nossos carros</Link>
                  </li>
                  <li className="listitem">
                    <Link className="listlink" activeClassName="-active" to="/contato">Contato</Link>
                  </li>
                </ul>
              </nav>

              <div className={ `socialmedia ${this.state.menuAtivo ? '-active' : ''}` }>
                <ul className="list">
                  {/* <li className="listitem">
                    <i className="icon phone"></i>
                    <a className="text" href="tel:+5544991038369">(44) 99103 8369</a>
                  </li> */}
                  <li className="listitem">
                    <i className="icon whats"></i>
                    <a className="text" href="https://wa.me/554430394721">WhatsApp</a>
                  </li>
                  <li className="listitem">
                    <i className="icon mail"></i>
                    <a className="text" href="mailto:reserva@camdal.com.br">reserva@camdal.com.br</a>
                  </li>
                </ul>
              </div>
            </div>

            <button className={ `menu-icon ${this.state.menuAtivo ? '-active' : ''}` } onClick={ this.menuToggle }></button>
          </div>
        </header>
      </>
    );
  }

}

export default Header;
