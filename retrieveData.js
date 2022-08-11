
// let pokeId = ""
let pokemon = {}
// let storage = window.localStorage


// const setPokemonInfo = async function(search= "") {
    
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
//     .then((response) => response.json() )
//     .then((data) => pokemon = data)
    
//     document.getElementById("pokemonImg").src =pokemon.sprites.front_default
//     // let name = pokemon
//     // console.log(name)
    
// }
// let pokemonInfo = storage.getItem('pokemonInfo')
// console.log(pokemonInfo)

// window.onload = setPokemonInfo(storage.getItem("pokeId"))


// let getPokemonInfo = function (){
    
//     pokeId = document.getElementById("pokeId").value
//     pokeId= pokeId.toLowerCase()
    
// }

// // console.log(pokemonName)


fetch("https://pokeapi.co/api/v2/region")
.then((response) => response.json() )
.then((data) => {
    pokemon = data
    console.log(data, "promise")
    console.log(pokemon.results)
})
const response = await fetch("https://pokeapi.co/api/v2/region")
let data = await response.json()

console.log("")

// console.log(fetchPokemon, "fetchPokemon")
// console.log(pokemon, "pokemon line 8")   






