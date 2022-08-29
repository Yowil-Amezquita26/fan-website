import createGameList from "./createGameList.js";

const storage = window.localStorage;
const setRegionInfo = async function (region = "", list) {
  region = region.toLowerCase();
  if (list[region] != undefined) {
    document.getElementById("regionName").innerHTML =
      storage.getItem("regionSelected");
    document.getElementById("regionDetail").innerHTML =
      list[region].description;
    await createGameList(region, list[region].games);
    document.getElementById("regionListTitle").innerText = "Games";
  }
};

export default setRegionInfo;
