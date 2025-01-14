import './Formulario.css'
import CampoTexto from '../CampoTexto/index';
const Formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Apellido" placeholder="Ingresar apellido" />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
        </form>
    </section>
}

export default Formulario;