
import './App.css';
import Carrito from './components/Carrito';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">


      <NavBar/>
      <Carrito nombre = "Nicolas" />
      <Carrito nombre = "Brisa" />
      <Carrito nombre = "Jeremias" />
      <Carrito nombre = "Nerina" />
      <Carrito nombre = "Gaston" />

    </div>
  );
}

export default App;
