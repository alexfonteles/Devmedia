import './App.css';

import Rodape from './components/Rodape'
import Header from './components/Header'
import Home from './components/PaginaInicial';
import Capa from './components/Capa';
import Sobre from './components/Sobre'

function App() {
  return (
    <div className="App">
      <Header />
      <Capa />
      <Sobre />
      <Rodape />
    </div>
  );
}

export default App;
