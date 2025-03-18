import React, { useState } from 'react';
import Jogo1 from './componentes/Jogo1';
import Jogo2 from './componentes/Jogo2';
import './App.css';


function App() {
  const [numero, setNumero] = useState(1);

  const jogarDado = () => {
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    setNumero(novoNumero);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogar Dado</h1>
        <img src={`/dado${numero}.png`} alt={`Face do dado ${numero}`} />
        
        <button onClick={jogarDado}>Clique para jogar</button>
      </header>
    </div>
  );
}

export default App;

