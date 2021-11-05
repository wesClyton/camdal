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
          { this.props.title ? this.props.title + ' | ' : '' }Camdal
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
                  <li className="listitem">
                    <i className="icon phone"></i>
                    <span className="text">(44) 3631-6152</span>
                  </li>
                  <li className="listitem">
                    <i className="icon whats"></i>
                    <span className="text">(44) 3039-4721</span>
                  </li>
                  <li className="listitem">
                    <i className="icon mail"></i>
                    <a className="text" href="mailto:contato@camdal.com.br">contato@camdal.com.br</a>
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
