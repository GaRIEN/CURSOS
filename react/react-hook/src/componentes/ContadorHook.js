import React, { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);

  const Sumar = () => setValor(valor + 1);
  const Restar = () => setValor(valor - 1);

  return (
    <>
      <h2>HOOK - USESTATE</h2>
      <nav>
        <button onClick={Sumar}>+</button>
        <button onClick={Restar}>-</button>
        <p>{valor}</p>
      </nav>
    </>
  );
}
