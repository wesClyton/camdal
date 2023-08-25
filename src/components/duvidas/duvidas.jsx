import React, { Component } from 'react';
import './duvidas.scss';

class Duvidas extends Component {

  constructor(props) {
    super(props);
    this.duvidaToggle = this.duvidaToggle.bind(this);
    this.removeClasseActive = this.removeTodasAsClassesActive.bind(this);
    this.addClasseTarget = this.addClasseTarget.bind(this);

    this.state = {
      duvidas: [
        {
          pergunta: 'Requisitos para alugar um carro',
          resposta: [
            '• O locatário/condutor deverá possuir idade mínima de 21 anos.',
            '• O locatário deverá apresentar seu documento de habilitação original, emitido há mais de 2 anos (CNH Definitiva), válido e dentro do prazo de vencimento.',
            '• Estrangeiros deverão apresentar passaporte, habilitação válida e visto de permanência.',
            '• O locatário deverá apresentar cartão de crédito válido, dentro do prazo de vencimento, com limite de crédito disponível para pre-autorização.',
            '• Não serão aceitos pagamentos em dinheiro.'
          ]
        },
        {
          pergunta: 'Sobre a diária',
          resposta: [
            'A diária do carro é de 24 horas, com até 1 hora de tolerância para devolução. A partir da 25ª hora, incidirá cobrança de diária extra;'
          ]
        },
        {
          pergunta: 'Reservas de longa duração',
          resposta: [
            'Para reservas superiores a 30 dias, o cliente deverá realizar um Contrato Mensal. Caso queira permanecer com o carro alugado, você deverá dirigir-se pessoalmente a Loja para confirmar a disponibilidade do veículo locado, confirmar o novo período e assinar o novo contrato.'
          ]
        },
        {
          pergunta: 'Entregas de veículos',
          resposta: [
            'Para entrega de veículos em outra cidade, consulte valores;'
          ]
        },
        {
          pergunta: 'Motoristas Adicionais',
          resposta: [
            'O cliente pode nomear até 4 (quatro) motoristas adicionais, implicando no pagamento da taxa diária vigente.'
          ]
        },
        {
          pergunta: 'Reservas por grupos de veículos',
          resposta: [
            'A locadora não garante a reserva de carro por marca, modelo, cor ou configuração específica. O locatário deve optar por um dos carros disponíveis e pertencentes ao grupo, no dia da abertura do contrato de locação e retirada do carro junto à loja. As características dos carros apresentadas neste website poderão sofrer variações entre os próprios carros do grupo e lojas de atendimento da locadora.'
          ]
        },
      ]
    }
  }

  duvidaToggle(event) {
    if (event.target.localName === 'li') {
      this.addClasseTarget(event.target);
    }
    if (event.target.localName === 'strong' || event.target.localName === 'p') {
      this.addClasseTarget(event.target.parentElement.parentElement);
    }
    if (event.target.localName === 'button') {
      this.addClasseTarget(event.target.parentElement);
    }
  }

  addClasseTarget(target) {
    if (target.classList.contains('active')) {
      target.classList.remove('active');
      return;
    }
    this.removeTodasAsClassesActive();
    target.classList.add('active');
    return;
  }

  removeTodasAsClassesActive() {
    const duvidas = document.getElementsByClassName('duvida-item');
    for (let i = 0; i <= duvidas.length - 1; i++) {
      duvidas[i].classList.remove('active');
    }
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
                  <li key={ index } className="duvida-item" onClick={ this.duvidaToggle }>
                    <div className="texto">
                      <strong>{ item.pergunta }</strong>
                      { item.resposta.map((item, index) =>
                        <p key="index">{ item }</p>
                      )}
                    </div>
                    <button className="icone"></button>
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
                  <p>Nossos veículos já saem com proteção total, garantindo assim a tranquilidade necessária para o uso durante o período contratado.</p>
                </li>
                <li className="item">
                  <div className="icon conforto">
                    <i></i>
                    <strong>Conforto</strong>
                  </div>
                  <p>Todos veículos têm disponível Ar Condicionado, Direção Elétrica ou Hidráulica, Sistema de Som e Alarme, além do rastreamento dos veículos.</p>
                </li>
                <li className="item">
                  <div className="icon caucao">
                    <i></i>
                    <strong>Caução</strong>
                  </div>
                  <p>O locatário deverá apresentar cartão de crédito válido, dentro do prazo de vencimento, com limite de crédito disponível para pre-autorização.</p>
                </li>
                <li className="item">
                  <div className="icon opcionais">
                    <i></i>
                    <strong>Opcionais</strong>
                  </div>
                  <p>Nossa frota dispõe de sistema de som com bluetooth, opção para Pen Drive, e nos SUV’s, multi mídia com GPS integrado.</p>
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
