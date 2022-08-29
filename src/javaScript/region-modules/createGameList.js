const gameList = document.getElementById("gameRegion");

const createGameList = async function (region, list) {
  console.log(region, list);
  list.forEach((game) => {
    const gameLi = document.createElement("li");
    gameLi.appendChild(document.createTextNode(`Pokemon ${game}`));
    gameLi.classList.add("game");
    gameList.appendChild(gameLi);
  });
};

export default createGameList;
