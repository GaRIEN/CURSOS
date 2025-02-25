import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojosHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("FAse de Desmontaje");
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hora={hora} />}
    <nav>
    <button onClick={() => setVisible(true)}>iniciar</button>
    <button onClick={() => setVisible(false)}>Detener</button>
    </nav>
      
    </>
  );
}
