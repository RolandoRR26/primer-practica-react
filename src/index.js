import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main/main';
import Info from './components/Main/info';
import Contador from './components/Main/contador';
import Footer from './components/Footer/footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Header />  
    <Main />
    <Info />
    <Contador />
    <Footer />

  </React.StrictMode>
);
