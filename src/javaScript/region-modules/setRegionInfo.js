import createGameList from "./createGameList.js";

const storage = window.localStorage;
/**
 *
 * @param {*} region the region that the user selected
 * @param {*} list a json with the information (description, games) of every region
 */
const setRegionInfo = async function (region = "", list) {
  region = region.toLowerCase();
  if (list[region] != undefined) {
    document.getElementById("regionName").innerHTML =
      storage.getItem("regionSelected");
    document.getElementById("regionDetail").innerHTML =
      list[region].description;
    document.getElementById("regionListTitle").innerText = "Games";
    await createGameList(region, list[region].games);
  }
};

export default setRegionInfo;
