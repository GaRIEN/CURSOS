import React, { Component } from "react";
import data from "../helpers/data.json";

function Frameworks(props) {
  return (
    <li>
      <a href={props.fr.web} target="_blanck">
        {props.fr.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "invierno", "otoño", "verano"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones</h3>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>FRAMERWORKS</h3>
        <ul>
          {data.framework.map((fr) => (
            <Frameworks key={fr.id} fr={fr} />
          ))}
        </ul>
      </div>
    );
  }
}
