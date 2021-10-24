import React, { Component } from 'react';
import './duvidas.scss';

class Duvidas extends Component {

  constructor(props) {
    super(props);
    this.duvidaToggle = this.duvidaToggle.bind(this);

    this.state = {
      duvidas: [
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        },
        {
          pergunta: 'Contrary to popular belief?',
          resposta: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
        }
      ]
    }
  }

  duvidaToggle(event) {
    if (event.target.parentElement.classList.contains('active')) {
      event.target.parentElement.classList.remove('active');
      return;
    }
    const duvidas = document.getElementsByClassName('duvida-item');
    for (let i = 0; i <= duvidas.length - 1; i++) {
      duvidas[i].classList.remove('active');
    }
    event.target.parentElement.classList.add('active');
  }

  render() {
    return <>
      <section className="duvidasfrequentes py-2">
        <div className="container">
          <h1>O que saber antes de alugar um carro?</h1>
          <div className="flex">
            <div className="duvidas">
              <ul>
                { this.state.duvidas.map((item, index) =>
                  <li key={ index } className="duvida-item">
                    <div className="texto">
                      <strong>{ item.pergunta }</strong>
                      <p>{ item.resposta }</p>
                    </div>
                    <button className="icone" onClick={ this.duvidaToggle }></button>
                  </li>
                )}
              </ul>
            </div>

            <div className="icones">
              <ul className="listicon">
                <li className="item">
                  <div className="icon protecaoveiculo">
                    <i></i>
                    <strong>Proteções do veículo</strong>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </li>
                <li className="item">
                  <div className="icon protecaoterceiros">
                    <i></i>
                    <strong>Proteções a terceiros</strong>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </li>
                <li className="item">
                  <div className="icon caucao">
                    <i></i>
                    <strong>Caução</strong>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </li>
                <li className="item">
                  <div className="icon opcionais">
                    <i></i>
                    <strong>Opcionais</strong>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  }
}

export default Duvidas;
