import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './PaginaInicial.css';
import Home from '../Home';
import Sobre from '../Sobre';
import Sabores from '../Sabores';

function PaginaInicial() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home /> }/>
        <Route path='/sabores' element={ <Sabores /> }/>
        <Route path='/sobre' element={ <Sobre /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default PaginaInicial;
