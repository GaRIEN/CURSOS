// import React, { Component } from "react";

// function Pokemon(props) {
//   return (
//     <figure>
//       <img src={props.avatar} alt={props.name} />
//       <figcaption>{props.name}</figcaption>
//     </figure>
//   );
// }

// export default class AjaxApi extends Component {
//   state = {
//     pokemons: [],
//   };

//   componentDidMount() {
//     let url = "https://pokeapi.co/api/v2/pokemon/";
//     fetch(url)
//       .then((data) => data.json())
//       .then((res) => {
//         console.log(res);
//         res.results.forEach((el) => {
//           fetch(el.url)
//             .then((data) => data.json())
//             .then((res) => {
//               console.log("esto es la segunda solicitud");
//               let pokemon = {
//                 id: res.id,
//                 name: res.name,
//                 avatar: res.sprites.front_default,
//               };

//               console.log(pokemon);
//               let pokemons = [...this.state.pokemons, pokemon];

//               this.setState({ pokemons });
//             });
//         });
//       });
//   }

//   render() {
//     return (
//       <>
//         <h2>CONSUMIENDO API CON AJAX</h2>

//         {this.state.pokemons.length === 0 ? (
//           <h3>Cargando...</h3>
//         ) : (
//           this.state.pokemons.map((el) => (
//             <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
//           ))
//         )}

//         {/* {this.state.pokemons.map((el)=> (<Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
                
//             )} */}
//       </>
//     );
//   }
// }



import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApi extends Component {
  state = {
    pokemons: [],
    loading: true,
    error: null,
    hasFetched: false,
  };

  componentDidMount() {
    if (this.state.hasFetched) return;

    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        const pokemonRequests = res.results.map((el) =>
          fetch(el.url).then((data) => data.json())
        );

        Promise.all(pokemonRequests)
          .then((pokemonData) => {
            const pokemons = pokemonData.map((res) => ({
              id: res.id,
              name: res.name,
              avatar: res.sprites.front_default,
            }));

            this.setState({ pokemons, loading: false, hasFetched: true });
          })
          .catch((error) => {
            this.setState({ error: error.message, loading: false });
          });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { pokemons, loading, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (loading) {
      return <h3>Cargando...</h3>;
    }

    return (
      <>
        <h2>CONSUMIENDO API CON AJAX</h2>
        {pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))}
      </>
    );
  }
}