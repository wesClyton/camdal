import * as React from 'react';
import Logo from '../images/logo.png';
import './index.scss';

const IndexPage = () => {
  return (
    <>
      <main className="em-breve-page">
        <div className="box">
          <header>
            <img width="250" className="mb-2" src={ Logo } alt="Camdal" />
          </header>
          <div className="contatos">
            <div className="iconetexto">
              <i className="icon telefone"></i>
              <span>(44) 3631-6152</span>
            </div>
            <div className="iconetexto">
              <i className="icon telefone"></i>
              <span>(44) 3631-6463</span>
            </div>
            <div className="iconetexto">
              <i className="icon whats"></i>
              <span>(44) 3039-4721</span>
            </div>
          </div>
          <span className="em-breve">Em breve</span>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
