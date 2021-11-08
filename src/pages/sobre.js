import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImgEmpresa from '../images/sobre/empresa.png';
import ImgCianorte from '../images/sobre/cianorte.png';
import ImgMapa from '../images/sobre/mapa.png';
import './sobre.scss';

const SobrePage = () => {

  const title = 'Sobre';

  return (
    <>
      <Header title={ title }></Header>

      <main className="sobre-page color-grey-5">
        <Banner hideInfos={ true } bgCenter={ true }></Banner>

        <div className="container">
          <section className="sobre pt-2">
            <h1>{ title }</h1>

            <div className="flex">
              <div className="imagem">
                <img src={ ImgEmpresa } alt="Camdal" />
              </div>
              <div className="textoempresa">
                <p>Iniciada em Maio de 2021, a Camdal surge com uma proposta de trabalho diferente, com uma frota nova, partindo de veículos econômicos compactos, passando pelos modelos Sedans, com maior espaço interno, e alcançando a alta gama dos SUV’s Automáticos, espaçosos e muito confortáveis nas longas viagens.</p>
                <p>No jogo de palavras, Camdal possui 6 letras, assim como VIAJAR. Ir para algum lugar, conhecer, visitar, até mesmo, trabalhar.</p>
                <p>Seis, também é interessante para os sócios da empresa, tendo em vista sua crença cristã. No sexto dia, Deus criou os animais e o homem. Esse dia antecedeu o sétimo, que foi o do descanso de Deus, onde viu que sua criação era maravilhosa.</p>
                <p>O nome tem em sua composição a Mística do "M", que remete ao significado de Maria, a mãe do Salvador Jesus e gera um nome único com a união de Câmara e Dalberto  -  Camdal Aluguel de Carros.</p>
                <p>Com arquitetura bem desenhada, a Agencia conta com um visual que se destaca pelas cores fortes e vibrantes, Laranja, Azul e Cinza e que refletem a forma de trabalho que se imprime ao negócio.</p>
              </div>
              <div className="infos">
                <div className="missao-visao">
                  <div className="missao">
                    <h4>Missão</h4>
                    <p>Contribuir para que pessoas e negócios trilhem seus caminhos.</p>
                  </div>
                  <div className="visao">
                    <h4>Visão</h4>
                    <p>Ser referência na locação de veículos com lojas próprias.</p>
                  </div>
                </div>
                <div className="valores">
                  <h4>Valores</h4>
                  <ul>
                    <li>• Fé: Temos a certeza que Deus, através de nossa fé, nos conduz ao sucesso.</li>
                    <li>• Respeito as pessoas: Valorizamos e respeitamos todas as pessoas, acreditamos que a diversidade nos faz crescer como indivíduos e empresa.</li>
                    <li>• Ética e Transparência: A honestidade é o eixo que direciona nossas ações, refletimos e nos movimentamos como donos do negócio.</li>
                    <li>• Excelência:  Melhoria constante, simplificando sempre.</li>
                    <li>• Responsabilidade Sócio Ambiental: Estamos atentos e procuramos ser atuantes na conservação e preservação do Meio Ambiente, e assim contribuir para o bem-estar de nossa sociedade.</li>
                    <li>• Sustentabilidade: Garantir a prosperidade do negócio a longo prazo.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="cianorte py-2">
            <div className="flex">
              <div className="texto">
                <h1>Cianorte</h1>
                <p>Cianorte, atualmente conhecida como a CAPITAL DO VESTUÁRIO, é uma belíssima cidade situada na região noroeste do Paraná, sendo considerada umas das melhores do país no quesito qualidade de vida e baixo nível de desemprego.</p>
                <p>Mas antes de falar de Cianorte e seus encantos, precisamos lembrar um pouco de sua História.</p>
                <p>Planejada pela empresa Companhia de Melhoramentos do Norte do Paraná da qual herdou o nome e também o seu traçado urbanístico, o qual foi inspirado no projeto de um urbanista Inglês, Ebenezer Howad,  o qual chamava este tipo de planejamento urbano, de Cidade  Jardim.</p>
                <p>Sim, desde o início a ideia era que progresso e natureza convivessem juntos e em harmonia, assim, em 26 de julho de 1953 surge a cidade, com os primeiros pioneiros, principalmente vindos dos estados de São Paulo e Minas Gerais, e que buscavam um lugar próspero com campo fértil para poder fincar suas raízes.</p>
              </div>
              <div className="imagem">
                <img src={ ImgCianorte } alt="Cianorte" />
              </div>
            </div>
            <p>Chegando aqui primeiramente tiveram o Café como cultura principal, onde a cidade se desenvolveu de maneira bastante promissora, entretanto no fim da década de setenta, com as grandes geadas que vinham trazendo prejuízos para a economia do café, juntamente com mudanças nas políticas econômicas nacionais, Cianorte juntamente com as outras cidades da região, passou por grandes dificuldades, enfrentando o desemprego e o êxodo rural.</p>
            <p>Surgiu o primeiro grande desafio, transformar e buscar novos meios de prosperidade e assim Cianorte descobriu uma grande vocação, fruto também dos esforços dos imigrantes libaneses que participaram efetivamente do processo de industrialização, buscaram e não mediram esforços para que os produtos ligados a confecção fossem de qualidade e excelência. Em pouco tempo, Cianorte se destacou no cenário nacional como o maior polo atacadista da confecção e responde ainda pela realização da maior feira do vestuário do Sul do País, a Expovest. A cidade passou assim, a ser conhecida como a "Capital do Vestuário".</p>
            <p>Atualmente o município de Cianorte conta com a diversificação na indústria, tendo suas bases na Confecção, a qual exporta moda para vários lugares do mundo, assim também como Indústrias Alimentícias, Metal Mecânica, Software, Moveleira, Bebidas, Pecuária e a Agricultura, com grandes áreas de cana de açúcar, as quais abastecem as usinas de Álcool e Açucar de nossa região.</p>
          </section>

          <section className="localizacao-estrategia py-2">
            <div className="flex">
              <div className="texto">
                <h1>Localização Estratégica</h1>
                <p>Cianorte encontra-se localizada no Noroeste Paranaense. A Cidade está estrategicamente no centro, a uma distância média de 80 a 90 Km das vizinhas, Maringá, Campo Mourão, Umuarama e Paranavaí.</p>
              </div>
              <div className="imagem">
                <img src={ ImgMapa } alt="Mapa" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};

export default SobrePage;
