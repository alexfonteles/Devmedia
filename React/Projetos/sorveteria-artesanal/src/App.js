import './App.css';

import Rodape from './components/Rodape'
import Header from './components/Header'
import Home from './components/PaginaInicial';
import Capa from './components/Capa';

function App() {
  return (
    <div className="App">
      <Header />
      <Capa />
      <Home />
      <Rodape />
    </div>
  );
}

export default App;
