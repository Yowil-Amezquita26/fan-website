
async function setGamesByRegion(region=""){
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/region/kanto`);
        console.log(respuesta.json());
        respuesta =respuesta.json();
        console.log(respuesta.name);
    } catch (error) {
        
    }
}

export default setGamesByRegion;