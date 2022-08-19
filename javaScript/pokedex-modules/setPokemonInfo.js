let storage = window.localStorage;
let pokemonTypes = []
const typeList = document.createElement("p")
/**
 * get image api
 * function that sets the image of the pokemon and saves the data of that pokemon
 * */
async function setPokemonInfo(search = "") {
  try {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    respuesta = await respuesta.json();
    pokemonTypes = respuesta.types
    pokemonTypes.forEach(type =>{
      console.log(type)
      typeList.innerText = type
    })
    document.getElementById("pokemonImg").src = respuesta.sprites.front_default;
    document.getElementById("pokemonName").innerText = respuesta.name;
    storage.setItem("pokemonInfo", JSON.stringify(respuesta.name));
  } catch (error) {
    document.getElementById("pokemonName").innerHTML = "No Pokemon found";
  }

}

export default setPokemonInfo;
