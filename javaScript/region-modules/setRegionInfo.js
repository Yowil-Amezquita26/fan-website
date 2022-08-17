const storage = window.localStorage;
const setRegionInfo = function (region = "", list) {
  region = region.toLowerCase();
  if (list[region] != undefined) {
    document.getElementById("regionName").innerHTML =
      storage.getItem("regionSelected");
    document.getElementById("regionDetail").innerHTML = list[region];
  }
};

export default setRegionInfo;
