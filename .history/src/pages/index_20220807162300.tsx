import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Necesidad from '../components/Necesidad';
import Problema from '../components/Problema';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Necesidad />
          
        </>
      </LazyShow>
      
      <LazyShow>
        <>
          <Canvas />

        <Pricing />
        </>
        
      </LazyShow>
      <LazyShow>
        <>

        <Problema />
        </>
        
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
