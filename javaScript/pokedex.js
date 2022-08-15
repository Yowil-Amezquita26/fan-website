
let pokeId = ""
let pokemon = {}
let storage = window.localStorage
const pokemonImgDetail = document.createElement("img")
/** 
 * get image api 
 * function that sets the image of the pokemon and saves the data of that pokemon
 * */
const setPokemonInfo = async function (search= "") {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    pokemon = await respuesta.json()
    


    console.log(pokemon)
    document.getElementById("pokemonImg").src =pokemon.sprites.front_default
    document.getElementById("pokemonName").innerHTML = pokemon.name
    storage.setItem("pokemonInfo", JSON.stringify(pokemon) )
    
}

window.onload = setPokemonInfo(storage.getItem("pokeId"))


/**
 * gets the information from the input and saves it in the local storage
 */
let getPokemonInfo = function (){
    
    pokeId = document.getElementById("pokeId").value
    pokeId= pokeId.toLowerCase()
    storage.setItem("pokeId", pokeId)
        
    
}

console.log(getPokemonInfo())