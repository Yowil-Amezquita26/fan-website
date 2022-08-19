import setGamesByRegion from "./setGamesByRegion.js";

const storage = window.localStorage;
const setRegionInfo = function (region = "", list) {
  region = region.toLowerCase();
  if (list[region] != undefined) {
    document.getElementById("regionName").innerHTML =
      storage.getItem("regionSelected");
    document.getElementById("regionDetail").innerHTML = list[region];
  }
  setGamesByRegion(region);
};

export default setRegionInfo;
