import { useState } from 'react';
import './Formulario.css'
import CampoTexto from '../CampoTexto/index';
import ListaOpciones from '../ListaOpciones/index';
import Boton from '../Boton/Boton';

const Formulario=()=>{

    const [nombre, setNombre]=useState("");
    const [puesto, setPuesto]=useState("");
    const [foto, setFoto]=useState("");
    const [equipo, setEquipo]=useState("");

    const manejarEnvio= (e)=>{
        console.log('Formulario enviado', e); 
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        let datosAEnviar={
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo: equipo
        }
        
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValue={setNombre}/>
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required 
                valor={puesto}
                setValue={setPuesto}/>
            <CampoTexto 
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValue={setFoto}/>
            <ListaOpciones
                valor={equipo}
                setValue={setEquipo}/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;