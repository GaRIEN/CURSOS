import React from 'react'
import "./Estilos.css"

function Estilos(){
    return(
        <>
        <section className='estilos'>

        <h2>Estilos CSS en React</h2>
        <h3 className='bg-react'>estilos en hojas css</h3>
        <h3 className='bg-react' style={{borderRadius:"2.5rem", margin:"1rem"}}>estilos en linea</h3>

        </section>
        </>
    )
}

export {Estilos}

