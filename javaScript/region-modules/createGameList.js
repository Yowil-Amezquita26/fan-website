const gameList = document.getElementById("gameRegion");

const createGameList = async function (region) {
  let respuesta = await fetch(`https://pokeapi.co/api/v2/region/${region}`);
  let gameRegion = await respuesta.json();
  await gameRegion.version_groups.forEach((game) => {
    const gameLi = document.createElement("li");
    gameLi.appendChild(document.createTextNode(`Pokemon ${game.name}`));
    gameLi.classList.add("game");
    gameList.appendChild(gameLi);
  });
};

export default createGameList;
