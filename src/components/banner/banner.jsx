import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bgCenter: props.bgCenter,
      hideInfos: props.hideInfos
    }
  }

  render() {
    return <>
      <section className={ `banner ${this.state.bgCenter ? 'center' : ''}` }>
        <div className={ `infos ${this.state.hideInfos ? 'd-none' : ''}` }>
          <h1 className="color-text-white text ">A mobilidade e o cuidado que você precisa com veículos novos e os melhores preços. <br/>Conte com a gente!</h1>
          <a
            className="btn btn-md btn-primary"
            href="https://wa.me/554430394721"
            target="_blank"
            rel="noreferrer">
            Reservar Agora
          </a>
        </div>
      </section>
    </>
  }
}

export default Banner;
