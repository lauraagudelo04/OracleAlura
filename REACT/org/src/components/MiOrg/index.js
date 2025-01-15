import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props)=>{
    //Estado - hooks para manejar con estados
    //useState

    /*const [mostrar, actualizarMostrar]=useState(true);
    const manejarClick=()=>{
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    }*/

    return <section className="OrgSection">
        <h3 className="title">Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;