
import './App.css';
import Carrito from './components/Carrito';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">


      {/* <NavBar />
      <Carrito nombre="Nicolas" />
      <Carrito nombre="Brisa" />
      <Carrito nombre="Jeremias" />
      <Carrito nombre="Nerina" />
      <Carrito nombre="Gaston" /> */}

      <button onClick={() => setContador(contador + 1)} > Pulsar </button>


      {
        contador % 2 === 0
      }

      <ItemCount />

    </div>
  );
}

export default App;



// import { useState, useEffect } from ‘react’;

// import productos from “../helpers/productos.json”

// function ItemsList() {

//   const [items, setItems]\= useState([])

//   useEffect(() \=> {

//     setTimeout(() \=> {

//     const items\= new Promise((resolve, reject) \=> {

//       resolve(productos)

//     })

// items.then(res \=> setItems(res))

//   }, 2000)

// }, [])

// return (

//   {
//     items.map((producto) \=> {

//       return<>

// { producto.producto }


// { producto.precio }

// </>

// })}


// )

// }

// export default ItemsList

