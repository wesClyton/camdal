import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgKa1 from '../../images/nossos-carros/ka1.png';
import ImgKa2 from '../../images/nossos-carros/ka2.png';
import ImgEtios1 from '../../images/nossos-carros/etios1.png';
import ImgEtios2 from '../../images/nossos-carros/etios2.png';
import ImgEtiosHatch1 from '../../images/nossos-carros/etios-hatch-1.png';
import ImgEtiosHatch2 from '../../images/nossos-carros/etios-hatch-2.png';
import ImgDuster1 from '../../images/nossos-carros/duster1.png';
import ImgDuster2 from '../../images/nossos-carros/duster2.png';
import ImgTCross1 from '../../images/nossos-carros/tcross1.png';
import ImgTCross2 from '../../images/nossos-carros/tcross2.png';
import ImgHb201 from '../../images/nossos-carros/hb201.png';
import ImgHb202 from '../../images/nossos-carros/hb202.png';
import ImgGol1 from '../../images/nossos-carros/gol1.png';
import ImgGol2 from '../../images/nossos-carros/gol2.png';
import ImgVoyage1 from '../../images/nossos-carros/voyage1.jpg';
import ImgVoyage2 from '../../images/nossos-carros/voyage2.jpg';
import ImgYaris1 from '../../images/nossos-carros/yaris1.png';
import ImgYaris2 from '../../images/nossos-carros/yaris2.png';
import ImgYarisHatch1 from '../../images/nossos-carros/yarisHatch1.png';
import ImgYarisHatch2 from '../../images/nossos-carros/yarisHatch2.png';
import OnixCs1 from '../../images/nossos-carros/onixcs1.jpg';
import OnixCs2 from '../../images/nossos-carros/onixcs2.jpg';
import Hb20Cs1 from '../../images/nossos-carros/hb20cs1.jpg';
import Hb20Cs2 from '../../images/nossos-carros/hb20cs2.jpg';
import './carros.scss';

class Carros extends Component {

  constructor(props) {
    super(props);

    this.carros = [
      {
        grupo: 'C Hatch',
        grupoDescricao: 'Compacto / Econômico com ar',
        link: 'https://wa.link/isikda',
        fotos: [
          ImgKa1,
          ImgKa2,
          ImgGol1,
          ImgGol2
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
        grupo: 'CE Hatch',
        grupoDescricao: 'Compacto / Econômico Fast - Motor 1.3',
        link: 'https://wa.link/isikda',
        fotos: [
          ImgEtiosHatch1,
          ImgEtiosHatch2,
          ImgHb201,
          ImgHb202
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS',
          'Porta Malas - 270 Litros',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Sistema de Som ',
          'Câmera e Sensor de Ré',
          'Faróis de neblina',
          'Direção Elétrica',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.3',
          'Cambio 6 Marchas - Mecânico',
          'Computador de Bordo',
          'Banco de Couro ou Tecido'
        ]
      },
      {
        grupo: 'FS',
        grupoDescricao: 'Intermediário Sedan',
        link: 'https://wa.link/6g1hyd',
        fotos: [
          ImgEtios1,
          ImgEtios2,
          ImgVoyage1,
          ImgVoyage2
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
        grupo: 'CS',
        grupoDescricao: 'Intermediário Sedan',
        link: 'https://wa.link/6g1hyd',
        fotos: [
          OnixCs1,
          OnixCs2,
          Hb20Cs1,
          Hb20Cs2
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS',
          'Porta Malas - 275 Litros',
          '06 Air Bags ',
          '04 Vidros Elétricos',
          'Travas Elétricas',
          'Kit Multimidia com espelhamento de Sistema Androide ou IOS',
          'Faróis com Acendimento Automático',
          'Direção Elétrica',
          'Ar Condicionado',
          '05 Ocupantes',
          'Cambio  - Mecânico',
          'Computador de Bordo',
          'Banco em Tecido',
        ]
      },
      {
        grupo: 'FH',
        grupoDescricao: 'Intermediário Hatch Automático',
        link: 'https://wa.link/phua81',
        fotos: [
          ImgYarisHatch1,
          ImgYarisHatch2,
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS ',
          'Porta Malas -  310 Litros ',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Sistema de Som',
          'Câmera e Sensor de Ré',
          'Iluminação DRL',
          'Direção Hidraulica',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.3 e 1.5',
          'Cambio Automático',
          'Computador de Bordo',
          'Banco de Couro ou Tecido'
        ]
      },
      {
        grupo: 'FX',
        grupoDescricao: 'Intermediário Sedan Automático',
        link: 'https://wa.link/cb00pr',
        fotos: [
          ImgYaris1,
          ImgYaris2,
          ImgVoyage1,
          ImgVoyage2
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
          'Motor 1.6',
          'Cambio Automático',
          'Computador de Bordo'
        ]
      },
      {
        grupo: 'GX',
        grupoDescricao: 'SUV automático',
        link: 'https://wa.link/yhz63x',
        fotos: [
          ImgTCross1,
          ImgTCross2,
          ImgDuster1,
          ImgDuster2
        ],
        caracteristicas: [
          '04 portas',
          'Freios ABS ',
          'Porta Malas - 425 Litros',
          'Air Bag Duplo',
          'Vidros Elétricos',
          'Travas Elétricas',
          'Central Multimidia',
          'Direção Elétrica ',
          'Volante com Regulagem de Altura',
          'Ar Condicionado',
          '05 Ocupantes',
          'Motor 1.0 Turbo',
          'Cambio Automático',
          'Computador de Bordo'
        ]
      },

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
                autoPlay={ true }
                interval={ 2000 }
                infiniteLoop={ true }
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
                href={ carro.link }
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
