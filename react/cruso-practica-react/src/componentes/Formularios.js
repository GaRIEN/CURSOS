import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");


  return (
    <>
      <h2>Formularios</h2>
      <form>

        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <p> elige tu sabor favorito</p>
        <input
          type="radio"
          id="piña"
          name="sabor"
          value="piña"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">piña</label>
        <input
          type="radio"
          id="platano"
          name="sabor"
          value="platano"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked

        />
        <label htmlFor="">platano</label>

        <p>elije tu lenguaje favorito</p>
        <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="" >
            <option value="js">javascript</option>
            <option value="php">php</option>
            <option value="py">python</option>
            <option value="java">java</option>
            <option value="go">go</option>
        </select>
        
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}
