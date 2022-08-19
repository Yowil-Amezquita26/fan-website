import typeColors from "../../typeColors.json" assert { type: "json" };
const typelist = document.getElementById("typeList");

function createList(list) {
  list.forEach((types) => {
    let img = document.createElement("img");
    const type = document.createElement("li");
    img.src = `/assets/icons/${types.type.name}.png`;

    type.appendChild(img);
    type.appendChild(document.createTextNode(types.type.name));
    type.classList.add("typePokemon");
    img.classList.add("typeImage");
    typelist.appendChild(type);
  });
}

export default createList;
