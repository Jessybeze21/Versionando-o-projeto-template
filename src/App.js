import React, { useState } from 'react';
import './App.css'; // Certifique-se de que o CSS esteja importado.

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Meu Projeto Modificado!</h1>
        <p>Este é um exemplo simples para modificar o comportamento de um botão.</p>
        <button
          className="custom-button"
          onClick={handleClick}
        >
          Clique aqui!
        </button>
        <p>Você clicou no botão {clickCount} vezes.</p> 
        <hr></hr>
        <p>Jéssica Bezerra</p>
      </header>
    </div>
  );
}

export default App;