import setPokemonInfo from "./setPokemonInfo.js";
import setPokemonNoAsync from "./setPokemonNoAsync.js";

let storage = window.localStorage;
let pokeId = ""
/**
 * gets the information from the input and saves it in the local storage
 */
let getPokemonInfo = () => {
    pokeId = document.getElementById("pokeId").value.toLowerCase();
    console.log(pokeId);
    storage.setItem("pokeId", pokeId);
};

window.onload = setPokemonInfo(storage.getItem("pokeId"));
