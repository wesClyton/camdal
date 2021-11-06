import { Link } from 'gatsby';
import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImgSobre from '../images/home/sobre.png';
import Duvidas from '../components/duvidas/duvidas';
import './index.scss';

const IndexPage = () => {
  return (
    <>
      <Header></Header>

      <main className="index-page">
        <Banner hideInfos={ false }></Banner>

        <section className="sobre py-2">
          <div className="container">
            <div className="flex">
              <div className="text">
                <h1>Sobre</h1>
                <p>Somos uma empresa especializada na locação de carros, modalidade RAC – Rent a Car. A Campal foi criada, sempre buscando a Excelência no atendimento aos clientes.</p>
                <p>Quando alcançamos o entendimento completo das necessidades individuais de cada pessoa, nosso objetivo é atingido. Isto facilita na escolha do modelo de veículo a ser escolhido e também no modelo de contrato locação, diário, semanal, quinzenal ou mensal. Nossos colaboradores estão treinados para encontrar a solução ideal a cada ocasião, desde a simples locação para trabalho, uma viagem de final de ano com a família ou mesmo, para levar a noiva ao seu grande momento no altar.</p>
                <p>Queremos que a experiência de locação de um automóvel aos nossos clientes, seja sempre única e com foco na confiança, e assim estreitamos os laços com cada cliente atendido, gerando compromisso de longo prazo com cada indivíduo.</p>
                <p>Nossa loja está localizada na região central de Cianorte.</p>
                <Link to="/sobre" className="btn btn-md btn-primary">Saiba mais</Link>
              </div>
              <div className="image">
                <img src={ ImgSobre } alt="Sobre" />
              </div>
            </div>
          </div>
        </section>

        <section className="nossoscarros py-2">
          <div className="container">
            <div className="flex">
              <div className="icones">
                <h1>Nossos carros</h1>
                <ul className="listicons">
                  <li className="item">
                    <i className="icon carroslimpos"></i>
                    <small>Carros limpos</small>
                  </li>
                  <li className="item">
                    <i className="icon revisao"></i>
                    <small>Revisão em dia</small>
                  </li>
                  <li className="item">
                    <i className="icon semtaxas"></i>
                    <small>Sem taxas ocultas</small>
                  </li>
                  <li className="item">
                    <i className="icon alugueis"></i>
                    <small>Aluguéis flexíveis</small>
                  </li>
                </ul>
              </div>
              <div className="text">
                <p>Oferecemos uma gama de veículos diferenciados para melhor atender, com os modelos Hatch, com motores 1.0 de alta tecnologia, 03 cilindros, os quais proporcionam maior potência e alta eficiência no consumo de combustível, aliados ao conforto da direção elétrica, ar condicionado e conjunto de som.</p>
                <p>Modelos Sedan, equipados com motores 1.5 e 1.6, sempre com Ar Condicionado e Direção Hidráulica, com amplo espaço para bagagem e seus passageiros.</p>
                <p>Modelos SUV’s, com câmbio automático, perfeito para longas viagens, para um fim de semana com a família ou até mesmo, ser utilizado para levar a noiva até a Igreja.</p>
                <p>Nossa frota está sempre pronta para ser utilizada, com manutenção em dia, e veículos limpos.</p>
                <Link to="/nossos-carros" className="btn btn-md btn-primary">Ver carros</Link>
              </div>
            </div>
          </div>
        </section>

        <Duvidas></Duvidas>
      </main>

      <Footer></Footer>
    </>
  );
};

export default IndexPage;
