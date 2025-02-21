import React from "react"; //siempre importar
import logo from "./logo.svg";
import Componente from "./componentes/componente";
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/estado";
import RenderizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RenderizadoElementos";
import {EventosES6,EventosES7,MasSobreEventos} from "./componentes/Eventos";
import  ComunicacionComponentes from "./componentes/ComunicacionComponentes";
import Reloj from "./componentes/RelojDigital";
import AjaxApi from"./componentes/AjaxApi"

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Componente msg="hola soy un nuevo componente" />
        <Propiedades
          cadena="holi soy bonita cadena"
          numero={26}
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:'angel', correo:'gabrielhuaman683gmail.com'}}
          funcion={(num)=>num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          ComponenteReact={
            <Componente msg='soy un componente y prop'/>
          }
        />

        <hr/>
        <Estado/>
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <Reloj/>
        <hr/>
        <AjaxApi/>
      </section>
      
    </div>
  );
}

export default App;
