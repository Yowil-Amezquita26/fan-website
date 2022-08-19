let storage = window.localStorage;
let pokemonTypes = []
const setPokemonNoAsync = function (search = "") {
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((pokemon) => {
  
      pokemonTypes = pokemon.types
      console.log(pokemonTypes.length)
      document.getElementById("pokemonImg").src = pokemon.sprites.front_default;
      document.getElementById("pokemonName").innerText = pokemon.name;
      storage.setItem("pokemonInfo", JSON.stringify(pokemon.name));
    })
    .catch(() => {
      document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    });
};

export default setPokemonNoAsync;
