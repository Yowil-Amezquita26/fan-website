import createTypeList from "./createTypeList.js";

let storage = window.localStorage;
const typelist = document.getElementById("typeList");
/**
 *
 * @param {*} search the pokemon that the user inserted
 */
const setPokemonNoAsync = function (search = "") {
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((pokemon) => {
      createTypeList(pokemon.types);
      document.getElementById("pokemonImg").src = pokemon.sprites.front_default;
      document.getElementById("pokemonName").innerText = pokemon.name;
      storage.setItem("pokemonInfo", JSON.stringify(pokemon.name));
    })
    .catch(() => {
      document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    });
};

export default setPokemonNoAsync;
