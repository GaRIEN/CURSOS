import React, { Component } from "react";

export default class Padre extends Component {

    state={
        contador:0,
    }

    incrementarContador = (e)=>{
        this.setState({
            contador:this.state.contador+1,
        })
    }


  render() {
    return (
      <div>
        <h2> comunicacion entre componentes </h2>
        <p> contador <b>{this.state.contador}</b></p>
        <Hijo incrementarContador={this.incrementarContador} mensaje='hola soy el hijo numero 1'/>
      </div>
    );
  }
}


function Hijo(props){
    return <>
    <h3>{props.mensaje}</h3>
    <button onClick={props.incrementarContador}>+ </button>
    </>
} 