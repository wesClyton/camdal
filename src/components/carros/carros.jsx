import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgKa1 from '../../images/nossos-carros/ka1.png';
import ImgKa2 from '../../images/nossos-carros/ka2.png';
import ImgEtios1 from '../../images/nossos-carros/etios1.png';
import ImgEtios2 from '../../images/nossos-carros/etios2.png';
import ImgDuster1 from '../../images/nossos-carros/duster1.png';
import ImgDuster2 from '../../images/nossos-carros/duster2.png';
import './carros.scss';

class Carros extends Component {

  constructor(props) {
    super(props);

    this.carros = [
      {
        grupo: 'B/C Hatch',
        grupoDescricao: 'Compacto/Econômico com ar',
        fotos: [
          ImgKa1,
          ImgKa2
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS ',
          'Porta Malas -  257 Litros ',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Sistema de Som',
          'Direção Elétrica ',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.0 – 03 Cilindros',
          'Computador de Bordo'
        ]
      },
      {
        grupo: 'FS',
        grupoDescricao: 'Intermediário Sedan',
        fotos: [
          ImgEtios1,
          ImgEtios2
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS ',
          'Porta Malas -  562 Litros ',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Sistema de Som',
          'Direção Elétrica',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.5',
          'Cambio 6 Marchas - Mecânico',
          'Computador de Bordo',
          'Banco de Couro ou Tecido'
        ]
      },
      {
        grupo: 'GX',
        grupoDescricao: 'SUV automático',
        fotos: [
          ImgDuster1,
          ImgDuster2
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS ',
          'Porta Malas -  475 Litros',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Central Multimidia',
          'Direção Hidráulica',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.5 ',
          'Cambio Automático',
          'Computador de Bordo'
        ]
      }
    ]
  }

  render() {
    return <>
      <small className="py-2 d-block">* As imagens dos veículos exibidos neste site são meramente ilustrativas.</small>
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
