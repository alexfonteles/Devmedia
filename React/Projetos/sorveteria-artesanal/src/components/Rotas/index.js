import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Rotas.css';
import Sabores from '../Sabores';
import Sobre from '../Sobre';
import Home from '../PaginaInicial';


function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/' exact element={<Sabores/>}/>
            <Route path='/' exact element={<Sobre/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
