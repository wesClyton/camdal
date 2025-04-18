import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImgEmpresa from '../images/sobre/empresa.png';
import ImgCianorte from '../images/sobre/cianorte.png';
import ImgParanavai from '../images/sobre/paranavai.png';
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
                <p>Cianorte, conhecida como a "Capital do Vestuário", é uma cidade no noroeste do Paraná, destacada pela alta qualidade de vida e baixo desemprego. </p>
                <p>Fundada em 26 de julho de 1953, a cidade foi planejada pela Companhia de Melhoramentos do Norte do Paraná, seguindo o conceito de "Cidade Jardim" do urbanista inglês Ebenezer Howard. </p>
                <p>Inicialmente, a economia de Cianorte era baseada no café, mas enfrentou dificuldades na década de 1970 devido a geadas e mudanças econômicas. Superando esses desafios, Cianorte se reinventou como um importante polo de confecção, influenciado por imigrantes libaneses, e hoje abriga a maior feira de vestuário do sul do país, a Expovest. </p>
                <p>Atualmente, a economia é diversificada, incluindo indústrias alimentícias, metal-mecânicas, software, móveis, bebidas, pecuária e agricultura, com destaque para a produção de cana-de-açúcar.</p>
              </div>
              <div className="imagem">
                <img src={ ImgCianorte } alt="Cianorte" />
              </div>
            </div>
          </section>

          <section className="cianorte py-2">
            <div className="flex">
              <div className="imagem">
                <img src={ ImgParanavai } alt="Cianorte" />
              </div>
              <div className="texto">
                <h1>Paranavaí</h1>
                <p>Paranavaí é uma cidade no noroeste do Paraná, Brasil, fundada em 14 de dezembro de 1952. Sua história está ligada à colonização incentivada pelo governo estadual e empresas, atraindo migrantes, especialmente de São Paulo e Minas Gerais.</p>
                <p>A economia é diversificada, com foco na agricultura, destacando-se na produção de mandioca, laranja, soja, milho e cana-de-açúcar, além de um significativo setor agroindustrial.</p>
                <p>O comércio e os serviços também são importantes, com um crescente desenvolvimento industrial.</p>
                <p>Culturalmente rica, Paranavaí sedia eventos como o Festival de Música e Poesia (Femup) e a ExpoParanavaí.</p>
                <p>A cidade possui uma boa infraestrutura educacional, incluindo a Universidade Estadual do Paraná (Unespar). Paranavaí equilibra tradição e modernidade, sendo um excelente lugar para viver, trabalhar e investir.</p>
              </div>
            </div>
          </section>

          <section className="localizacao-estrategia py-2">
            <div className="flex">
              <div className="texto">
                <h1>Localização Estratégica</h1>
                <p>Cianorte encontra-se localizada no Noroeste Paranaense. A Cidade está estrategicamente no centro, a uma distância média de 80 a 90 Km das vizinhas, Maringá, Campo Mourão, Umuarama e Paranavaí.</p>
                <p>Paranavaí está localizada estrategicamente próxima de importantes rodovias, que facilitam o acesso e aproximam as divisas com São Paulo e Mato Grosso do Sul. A cidade faz parte da Mesorregião Noroeste Paranaense, e fica a 70 km de Maringá PR.</p>
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
