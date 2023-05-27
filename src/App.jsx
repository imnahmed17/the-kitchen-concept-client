import React from 'react';
import Header from './components/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;