export default function Propiedades(props){
    return (
        <div>
            <h2>HOLA SOY EL TITULO DE PROPIEDADES</h2>
            <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano?'soy verdadero':'soy falso'}</li>
            <li>{props.arreglo.join(',')}</li>
            <li>{props.objeto.nombre+" - "+props.objeto.correo}</li>
            <li>{props.arreglo.map(props.funcion)}</li>
            <li>{props.elementoReact}</li>
            <li>{props.ComponenteReact}</li>
            </ul>
        </div>
    )
}