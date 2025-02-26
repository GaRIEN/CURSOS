import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHook() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        res.results.forEach((element) => {
          fetch(element.url)
            .then((data) => data.json())
            .then((res) => {
              console.log("segunda consulta");
              let pokemon = {
                id: res.id,
                name: res.name,
                avatar: res.sprites.front_default,
              };
              setPokemones((pokemones) => [...pokemones, pokemon]);
            });
        });
      });
  }, []);

  return (
    <>
      <h2>Pokemon con Ajax Api</h2>
      {pokemones.length === 0 ? (
        <h3>Cargando ....</h3>
      ) : (
        pokemones.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}