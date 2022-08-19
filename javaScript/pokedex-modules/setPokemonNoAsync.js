let storage = window.localStorage;
let pokemonTypes = [];
const typelist = document.getElementById("typeList");
const setPokemonNoAsync = function (search = "") {
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((pokemon) => {
  
      pokemonTypes = pokemon.types
      console.log(pokemonTypes.length)
      pokemonTypes.forEach(types =>{
        console.log(types.type.name)
        const type = document.createElement("li")
        type.appendChild(document.createTextNode(types.type.name))
        typelist.appendChild(type)
      })
      document.getElementById("pokemonImg").src = pokemon.sprites.front_default;
      document.getElementById("pokemonName").innerText = pokemon.name;
      storage.setItem("pokemonInfo", JSON.stringify(pokemon.name));
    })
    .catch(() => {
      document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    });
};

export default setPokemonNoAsync;
