import React from 'react';

import './global.css';
import Navbar from './navbar';
import Routes from './routes';
import Footer from './footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;