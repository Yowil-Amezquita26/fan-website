
import createList from './createListI.js';
let storage = window.localStorage;
/**
 * get image api
 * function that sets the image of the pokemon and saves the data of that pokemon
 * */
async function setPokemonInfo(search = "") {
  try {
    
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    respuesta = await respuesta.json();
    await createList(respuesta.types)
    document.getElementById("pokemonImg").src = respuesta.sprites.front_default;
    document.getElementById("pokemonName").innerText = respuesta.name;
    storage.setItem("pokemonInfo", JSON.stringify(respuesta.name));
  } catch (error) {
    document.getElementById("pokemonName").innerHTML = "No Pokemon found";
  }

}

export default setPokemonInfo;
