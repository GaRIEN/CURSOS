import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      //Creamos una función para actualizar el estado
      const actualizarScrollY = () => {
        let scrollY = window.pageYOffset;
        console.log(`scrollY: ${scrollY}`);
        setScrollY(scrollY);
      };
      //Actualizamos el scroll al montar el componente
      actualizarScrollY();
      //Nos suscribimos al evento scroll de window
      window.addEventListener("scroll", actualizarScrollY);
  
      //Devolvemos una función para desuscribir el evento
      return () => {
        window.removeEventListener("scroll", actualizarScrollY);
      };
    });
  
    return (
      <div>
        <span>ScrollY del Navegador: {scrollY}px</span>
      </div>
    );
  }


