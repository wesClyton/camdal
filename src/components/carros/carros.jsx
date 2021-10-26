import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgCarro01 from '../../images/nossos-carros/01.png';
import ImgCarro02 from '../../images/nossos-carros/02.png';
import ImgCarro03 from '../../images/nossos-carros/03.png';
import './carros.scss';

class Carros extends Component {

  constructor(props) {
    super(props);

    this.carros = [
      {
        grupo: 'A',
        grupoDescricao: 'Compacto (ECMN)',
        fotos: [
          ImgCarro01,
          ImgCarro02,
          ImgCarro03
        ],
        caracteristicas: [
          '4 portas',
          'ABS',
          '1 mala(s) pequena(s)',
          'Air bag',
          'Vidro elétrico',
          'Dir. Hidráulica',
          '5 pessoas',
          'Motor 1.6'
        ]
      },
      {
        grupo: 'B',
        grupoDescricao: 'Compacto Com Ar (ECMR)',
        fotos: [
          ImgCarro02,
          ImgCarro03,
          ImgCarro01
        ],
        caracteristicas: [
          '4 portas',
          'ABS',
          '1 mala(s) pequena(s)',
          'Air bag',
          'Vidro elétrico',
          'Ar-condicionado',
          'Trava elétrica',
          'Dir. Hidráulica'
        ]
      },
      {
        grupo: 'C',
        grupoDescricao: 'Econômico Com Ar (EDMR)',
        fotos: [
          ImgCarro03,
          ImgCarro02,
          ImgCarro01
        ],
        caracteristicas: [
          '4 portas',
          'ABS',
          '1 mala(s) pequena(s)',
          'Air bag',
          'Vidro elétrico',
          'Ar-condicionado',
          'Trava elétrica',
          'Dir. Hidráulica',
          '5 pessoas',
          'Motor 1.6'
        ]
      }
    ]
  }

  render() {
    return <>
      <ul className="carrolist">
        { this.carros.map((carro, index) =>
          <li key={ index } className="carroitem">
            <div className="grupo">
              <h4>Grupo <span className="color-text-primary-1">{ carro.grupo }</span></h4>
              <p>{ carro.grupoDescricao }</p>
              <Carousel
                key={ index }
                showThumbs={ false }
                showStatus={ false }
                emulateTouch={ true }>
                { carro.fotos.map((foto, index) =>
                  <div key={ index }>
                    <img src={ foto } alt={ carro.grupoDescricao } />
                  </div>
                )}
              </Carousel>
            </div>
            <div className="caracteristicas">
              <ul className="list">
                { carro.caracteristicas.map((caracteristica, index) =>
                  <li key={ index } className="item">{ caracteristica }</li>
                )}
              </ul>
              <a
                className="btn btn-md btn-primary"
                href="https://api.whatsapp.com/send?phone=5544999999999"
                target="_blank"
                rel="noreferrer">
                  Reservar agora
              </a>
            </div>
          </li>
        )}
      </ul>
    </>
  }
}

export default Carros;
