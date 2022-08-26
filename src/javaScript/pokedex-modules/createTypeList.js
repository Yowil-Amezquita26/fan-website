import typeColors from "../../helpers/typeColors.json" assert { type: "json" };
const typelist = document.getElementById("typeList");

function createTypeList(list) {
  list.forEach((types) => {
    let img = document.createElement("img");
    const type = document.createElement("li");
    img.src = `../assets/icons/${types.type.name}.png`;

    type.appendChild(img);
    type.in;
    type.appendChild(document.createTextNode(types.type.name));
    type.classList.add("typePokemon");
    img.classList.add("typeImage");
    type.setAttribute("id", `${types.type.name}`);
    typelist.appendChild(type);
    document.getElementById(`${types.type.name}`).style.boxShadow = `5px 10px ${
      typeColors[types.type.name]
    }`;
  });
}

export default createTypeList;
