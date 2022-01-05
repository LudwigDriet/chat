import React, {useState} from 'react';

import './App.css';
import Chat from './componentes/Chat';


function App() {

 const [nombre, setNombre]= useState('');
 const [registrado, setRegistrado]= useState(false)

 const registrar = (e) => {
   e.preventDefault();
   if(nombre !==""){
     setRegistrado(true)
   }
 }

  return (
    <div >
      <div className="App">
      {
        !registrado &&

    <form onSubmit={registrar}> 
      <label htmlFor=''>Introduzca su nombre </label>
      <input value={nombre} onChange={ e => setNombre(e.target.value)}/>
      <button>Ir al chat</button>
    </form>

      }
    </div>
      {
        registrado &&
        <Chat nombre={nombre}/>
      }

    </div>
  );
}

export default App;
