let storage = window.localStorage;
let pokemon = {};
/**
 * get image api
 * function that sets the image of the pokemon and saves the data of that pokemon
 * */
async function setPokemonInfo(search = "") {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );
    pokemon = await respuesta.json();

    document.getElementById("pokemonImg").src = pokemon.sprites.front_default;
    document.getElementById("pokemonName").innerHTML = pokemon.name;
    storage.setItem("pokemonInfo", JSON.stringify(pokemon.name));
  } catch (error) {
    console.log(error);
    document.getElementById("pokemonName").innerHTML = "No Pokemon found";
  }
}

export default setPokemonInfo;
