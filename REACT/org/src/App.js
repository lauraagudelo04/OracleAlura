import { useState } from 'react';
import React from'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //Ternario -->condicion ? se muestra : no se muestra

  const cambiarMostrar= () =>{
      actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX y Diseño"/>
      <Equipo equipo="Móvil"/>
      <Equipo equipo="Innovación y Gestión"/>
    </div>
  );
}

export default App;
