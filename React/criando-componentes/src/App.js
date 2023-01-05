import React from 'react';
import './App.css';

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import HomePage from './componentes/HomePage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

/*
import React from 'react';
import './App.css';

const App = ( ) => {
  return (
    <div className="App">

    </div>
  );
}

export default App;
*/