import * as React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './index.scss';

const IndexPage = () => {
  return (
    <>
      <Header></Header>

      <main className="index-page"></main>

      <Footer></Footer>
    </>
  );
};

export default IndexPage;
