import { Component } from "react";

function Estadohijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  //creamos  el constructor
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      prueba:15,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El state</h2>
        <p>{this.state.contador}</p>
        <p>{this.state.prueba}</p>
        <Estadohijo contadorHijo= {this.state.contador} />
      </div>
    );
  }
}
