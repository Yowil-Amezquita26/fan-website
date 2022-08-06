
    
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((response) => response )

let respuesta = async function() {
    
    let resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((data) => data )

    return resp
    
}

console.log(respuesta())