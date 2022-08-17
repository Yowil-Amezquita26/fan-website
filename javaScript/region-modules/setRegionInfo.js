const storage = window.localStorage;
const setRegionInfo = function (region = "", list) {
  const mapImage = document.createElement("img");
  const infoRegion = document.getElementById("regionDetail");
  region = region.toLowerCase();
  console.log(list[region], infoRegion, region);
  if (list[region] != undefined) {
    document.getElementById("regionName").innerHTML =
      storage.getItem("regionSelected");
    infoRegion.innerHTML = list[region];
  }
};

export default setRegionInfo;
