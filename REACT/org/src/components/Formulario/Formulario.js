import { use, useState } from 'react';
import './Formulario.css'
import Campo from '../Campo/index';
import ListaOpciones from '../ListaOpciones/index';
import Boton from '../Boton/Boton';

const Formulario=(props)=>{

    const [nombre, setNombre]=useState("");
    const [puesto, setPuesto]=useState("");
    const [foto, setFoto]=useState("");
    const [equipo, setEquipo]=useState("");

    const [titulo, actualizarTitulo]=useState("");
    const[color , actualizarColor]=useState("");

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio= (e)=>{
        console.log('Formulario enviado', e); 
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValue={setNombre}/>
            <Campo
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required 
                valor={puesto}
                setValue={setPuesto}/>
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValue={setFoto}/>
            <ListaOpciones
                valor={equipo}
                setValue={setEquipo}
                equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                setValue={actualizarTitulo}/>
            <Campo
                titulo="Color" 
                placeholder="Ingresar el color hexadecimal"
                required 
                valor={color}
                setValue={actualizarColor}
                type="color"
                />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario;