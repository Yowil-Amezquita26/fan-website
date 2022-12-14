import createTypeList from "./createTypeList.js";
let storage = window.localStorage;
/**
 *
 * @param {*} search the pokemon that the user inserted
 */
async function setPokemonInfo(search = "") {
  try {
    let respuesta = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    ).json();
    await createTypeList(respuesta.types);
    if (search == "25") {
      document.getElementById("pokemonImg").src =
        respuesta.sprites.other.dream_world.front_default;
      document.getElementById(
        "pokemonName"
      ).innerText = `${respuesta.name} (Ash's best friend)`;
    } else {
      document.getElementById("pokemonImg").src =
        respuesta.sprites.front_default;
      document.getElementById("pokemonName").innerText = respuesta.name;
    }
    storage.setItem("pokemonInfo", JSON.stringify(respuesta.name));
  } catch (error) {
    document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    document.getElementById("typeList").innerText = "Unknown";
  }
}

export default setPokemonInfo;
