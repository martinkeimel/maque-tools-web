import React from 'react';
import OptionContainer from './components/optionContainer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola Manu.
        </p>
        <OptionContainer 
          option1Image="https://www.elreinoinfantil.com/content/bucket/1/251h195.png" 
          option1Link="https://www.youtube.com/watch?v=53ePiCirfvk"
          option2Image="https://www.elreinoinfantil.com/content/bucket/4/254h195.png"
          option2Link="https://www.youtube.com/watch?v=q8dilxHvbiM" />
      </header>
    </div>
  );
}

export default App;
