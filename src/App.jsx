import React from 'react';
import { FlexContent, Footer, Hero, Navbar, Sales, Stories } from './Components';
import { heroapi, popularsales, toprateslaes, footerAPI, highlight, sneaker, story } from './data/data.js';
import Cart from './Components/Cart.jsx';

const App = () => {
  
  return (
    <>
   
      <Navbar />
      <Cart/>
      <main className=' flex flex-col gap-16 relative '>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App