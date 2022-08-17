import setPokemonInfo from "./setPokemonInfo.js";
import setPokemonNoAsync from "./setPokemonNoAsync.js";

let storage = window.localStorage;
let pokeId = "";
const pokemonForm = document.querySelector("#formPokemon");

/**
 * gets the information from the input and saves it in the local storage
 */
function getPokemonInfo() {
  console.log("Inside the function");
  pokeId = document.getElementById("pokeId").value.toLowerCase();
  console.log(pokeId);
  storage.setItem("pokeId", pokeId);
  console.log("hoola");
}

pokemonForm.addEventListener("submit", getPokemonInfo);
window.onload = setPokemonNoAsync(storage.getItem("pokeId"));
