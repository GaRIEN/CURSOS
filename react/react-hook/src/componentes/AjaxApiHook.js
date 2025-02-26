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
    const getPokemon = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      // Array temporal para acumular los Pokémones
      let pokemonesTemp = [];

      // Usamos un bucle for...of en lugar de forEach para manejar mejor la asincronía
      for (let element of json.results) {
        let res = await fetch(element.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        // Verificamos si el Pokémon ya existe en el array temporal
        if (!pokemonesTemp.some((p) => p.id === pokemon.id)) {
          pokemonesTemp.push(pokemon);
        }
      }

      // Actualizamos el estado una sola vez
      setPokemones(pokemonesTemp);
    };

    getPokemon("https://pokeapi.co/api/v2/pokemon/");
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