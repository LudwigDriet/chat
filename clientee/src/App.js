import React, {useState} from 'react';
import './App.css';
import Chat from './componentes/Chat';
import { Route } from 'react-router-dom';
import Formulario from './componentes/Formulario';

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
      <div className="contenedor"><Formulario/></div>
    </div>
  );
}

export default App;
