import * as React from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './sobre.scss';

const SobrePage = () => {
  return (
    <>
      <Header title="Sobre"></Header>

      <main className="sobre-page color-grey-5">
        <Banner hideInfos={ true } bgCenter={ true }></Banner>

        <div className="container">
          <section className="sobre py-2">
            <h1>Sobre</h1>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
};

export default SobrePage;
