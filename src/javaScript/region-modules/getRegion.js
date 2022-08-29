import setRegionInfo from "./setRegionInfo.js";
import region from "../../helpers/regions.json" assert { type: "json" };
const storage = window.localStorage;
const formRegion = document.querySelector(".formStyle");

/**
 * gets the information from the input and saves it in the local storage
 */
const getRegion = () => {
  storage.setItem(
    "regionSelected",
    document.getElementById("regionList").value
  );
};
formRegion.addEventListener("submit", getRegion);
window.onload = setRegionInfo(storage.getItem("regionSelected"), region);
