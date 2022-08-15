let storage = window.localStorage;
let pokemon ={}

const setPokemonNoAsync = function (search = "") {
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(pokemon)
      document.getElementById("pokemonImg").src = pokemon.sprites.front_default;
      document.getElementById("pokemonName").innerHTML = pokemon.name;
      storage.setItem("pokemonInfo", JSON.stringify(pokemon.name));
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    });
};

export default setPokemonNoAsync;
