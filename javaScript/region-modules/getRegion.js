import setRegionInfo from "./setRegionInfo.js";
import region from "../../regions.json" assert{type: "json"};
const storage = window.localStorage;
const formRegion = document.querySelector("#formRegion");

const getRegion = () => {
  storage.setItem(
    "regionSelected",
    document.getElementById("regionList").value
  );
};
formRegion.addEventListener("submit", getRegion);
window.onload = setRegionInfo(storage.getItem("regionSelected"), region);
