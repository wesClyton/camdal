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
          <h1 className="color-text-white text ">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
          <a
            className="btn btn-md btn-primary"
            href="https://api.whatsapp.com/send?phone=5544999999999"
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
