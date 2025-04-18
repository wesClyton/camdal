import * as React from 'react';
import Banner from '../components/banner/banner';
import Carros from '../components/carros/carros';
import Duvidas from '../components/duvidas/duvidas';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './nossos-carros.scss';

const NossosCarrosPage = () => {

  const title = 'Nossos carros';

  return (
    <>
      <Header title={ title }></Header>

      <main className="nossos-carros-page color-grey-5">
        <Banner hideInfos={ true } bgCenter={ true }></Banner>

        <div className="container py-2">
          <h1>{ title }</h1>

          <Carros></Carros>
        </div>
      </main>

      <Duvidas></Duvidas>

      <Footer></Footer>
    </>
  );
};

export default NossosCarrosPage;
