import React, { Component } from "react";

export default class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log(0, "el componente se inicializa, pero aun no esta en el dom");

    this.state = {
      hora: new Date().toLocaleTimeString(),
    };
    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "el comoponente ya se encuenta en el dom");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(2,"el estado o las props del componente han cambiado")
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount(){
    console.log(3,"el componente ha sido eliminado del dom")
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };


  iniciar = () => {
    this.tictac();
  };


  detener = () => {
    clearInterval(this.temporizador);
  };

  render() {
    console.log(
      4,
      "el componente se dibuja o redibuja cuando hay cambios en el dom"
    );
    return (
      <>
        <h3>RELOJ DIGITAL </h3>
        <p>{this.state.hora}</p>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
