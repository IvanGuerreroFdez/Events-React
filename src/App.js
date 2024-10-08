import logo from './logo.svg';
import './App.css';
import BotonSimple from './components/BotonSimple';
import EligeBoton from './components/EligeBoton';
import Suma from './components/Suma';
import Eventos from './components/Eventos';
import FormularioSimple from './components/FormularioSimple';
import Formulario from './components/Formulario';
import Contador from './components/Contador';

function App() {
  const handleEnviaData = (data) => {
    console.log(data);
  }
  const handleSumaResuelta = (resultado) => {
    console.log(`Se ha resuelto la suma con resultado: ${resultado}`);
  }

  const handleInformaResultado = (resultado) => {
    console.log(`El contador tiene un valor de ${resultado}`);
  }
  return (
    <div className="App">

      <BotonSimple/>

      <EligeBoton/>

      <p></p>

      <Suma numA={3} numB={4} sumaResuelta={handleSumaResuelta}/>
      <Suma numA={51} numB={93} sumaResuelta={handleSumaResuelta}/>

      <p></p>

      <Eventos/>

      <p></p>

      <FormularioSimple/>

      <p></p>

      <Formulario enviaData = {handleEnviaData} />

      <p></p>

      <Contador informaResultado={handleInformaResultado} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
