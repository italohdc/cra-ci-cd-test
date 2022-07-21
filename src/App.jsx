// import logo from './logo.svg';
import './App.css';

function App() {

  const textoCustomizado = process.env.REACT_APP_TEXTO

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p className='vermelho'>Vermelho</p>
        <p className='verde'>Verde</p>
        <p className='azul'>Azul</p>

        {textoCustomizado && <p>{textoCustomizado}</p>}

      </header>
    </div>
  );
}

export default App;
