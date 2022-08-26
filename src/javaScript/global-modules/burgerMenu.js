const toggleButton = document.getElementById("buttonMenu");
const listLink = document.getElementById("listLink");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  listLink.classList.toggle("close");
});
