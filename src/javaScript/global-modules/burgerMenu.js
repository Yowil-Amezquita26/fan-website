const toggleButton = document.getElementById("buttonMenu");
const listLink = document.getElementById("listLink");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  console.log("hola");
  listLink.classList.toggle("close");
});
