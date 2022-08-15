
let pokeId = ""
let pokemon = {}
let storage = window.localStorage
const pokemonImgDetail = document.createElement("img")
/** 
 * get image api 
 * function that sets the image of the pokemon and saves the data of that pokemon
 * */
const setPokemonInfo = async function (search= "") {

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        pokemon = await respuesta.json();

        document.getElementById("pokemonImg").src =pokemon.sprites.front_default;
        document.getElementById("pokemonName").innerHTML = pokemon.name;
        storage.setItem("pokemonInfo", JSON.stringify(pokemon.name) );
    } catch (error) {
        console.log(error);
        document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    }


    console.log(setPokemonNoAsync(search));
    
};

const setPokemonNoAsync = function (search = ""){

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((pokemon) => {
        document.getElementById("pokemonImg").src =pokemon.sprites.front_default;
        document.getElementById("pokemonName").innerHTML = pokemon.name;
        storage.setItem("pokemonInfo", JSON.stringify(pokemon.name) );
    }).catch((error) => {
        console.log(error)
        document.getElementById("pokemonName").innerHTML = "No Pokemon found";
    })
}


window.onload = setPokemonNoAsync(storage.getItem("pokeId"));


/**
 * gets the information from the input and saves it in the local storage
 */
let getPokemonInfo = function (){

    pokeId = document.getElementById("pokeId").value.toLowerCase()
    console.log(pokeId)
    storage.setItem("pokeId", pokeId)
}
