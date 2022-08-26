import setPokemonInfo from "./setPokemonInfo.js";
import setPokemonNoAsync from "./setPokemonNoAsync.js";

let storage = window.localStorage;
let pokeId = "";
const pokemonForm = document.querySelector(".formStyle");
const regex = /[/]/;

/**
 * gets the information from the input and saves it in the local storage
 */
function getPokemonInfo() {
  pokeId = document.getElementById("pokeId").value.toLowerCase();
  if (regex.test(pokeId) == true) {
    pokeId = "";
  }
  if (parseInt(pokeId) > 898) {
    pokeId = "";
  }
  storage.setItem("pokeId", pokeId);
}

pokemonForm.addEventListener("submit", getPokemonInfo);
window.onload = setPokemonInfo(storage.getItem("pokeId"));
