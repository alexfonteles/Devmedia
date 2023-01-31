import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Rotas.css';
import Sabores from '../Sabores';
import Sobre from '../Sobre';
import Capa from '../Capa';
import Eventos from '../Eventos';
import Contatos from '../Contatos';
import Rodape from '../Rodape';
import Header from '../Header';


function Rotas() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' exact element={<Capa/>}/>
            <Route path='/sabores' exact element={<Sabores/>}/>
            <Route path='/eventos' exact element={<Eventos/>}/>
            <Route path='/sobre' exact element={<Sobre/>}/>
        </Routes>
      <Contatos />
      <Rodape />
    </BrowserRouter>
  );
}

export default Rotas;
/*



*/