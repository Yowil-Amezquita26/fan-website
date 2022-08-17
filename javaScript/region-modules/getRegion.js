import setRegionInfo from "./setRegionInfo.js";

const storage = window.localStorage;
const formRegion = document.querySelector("#formRegion");
const regionObj = {
  kanto:
    "Kanto, named after the real-world region of Japan by the same name, features a variety of cities surrounded by mountains and plains, and even features a volcano on Cinnabar Island. Every town in the Pokémon Kanto region is named in reference to a color, like Viridian City, Lavender Town, and others. Players begin their journey in the quiet Pallet Town (a reference to the blank canvas of a painting) and the starter Pokémon offered to players in a basic Poké Ball are Squirtle, Charmander, and Bulbasaur.",
  johto:
    "Much of the overall aesthetic and inspiration for the Johto region comes from traditional Japanese architecture and culture, and the fictional area is inspired by the Kansai region of Japan, which includes Osaka, Kyoto, and Nara. The Kansai region has rich soils, which inspired the berry crop mechanic introduced in this generation of games.",
  hoenn:
    "Hoenn was a more tropical environment, reflected in many of the types of Pokémon that could be found throughout trainers’ journeys. This game introduced the idea of varying weather patterns, including rainfall, volcanic ash, and bright sunlight. Pokémon like Castform could even react and change form based on the environmental conditions here. Starters in this region included Treecko, Torchic, and Mudkip.",
  sinnoh:
    "In contrast to its southern partner Hoenn, Sinnoh featured fewer waterways, instead focused on the central landmass divided by the massive Mt. Coronet in the center. To the northeast, the region featured a Battle Zone island. There was also a massive tundra to the very north of the island, and some of the cities in the game are directly based on Hokkaido’s notable locales, like Pokémon’s Jubilife City standing in for Sapporo City. Pokémon starters here include Piplup, Turtwig, and Chimchar.",
  unova:
    "Moving out of the Japanese-themed regions, Generation 5’s Unova region was actually inspired by New York City, reflected in the metropolitan regions and the more specifically themed Pokémon (such as the fan-favorites Garbodor, a garbage Pokémon, and Vanillite, an ice cream Pokémon). Despite the overall layout being based on New York City, there are landmarks from throughout the state that make up the entire region.",
  kalos:
    "The Kalos region is the sixth region to be introduced, serving as the setting for Pokémon X and Y. Shaped like a five-pointed star, the area is inspired by metropolitan France, with city names like Lumiose and Shalour reflecting this influence. Froakie, Chespin, and Fennekin are the starters featured here. Unlike many of the other regions in earlier games, Kalos is isolated from other regions — in fact, in the Pokémon anime series, it must be reached by airplane.",
  alola:
    "Alola is a unique region in the Pokémon world, split into four natural islands and one manmade island. Inspired by Hawaii, it is the backdrop for the Generation 7 Pokemon games Sun, Ultra Sun, Moon, and Ultra Moon. Within the game world, it is a popular tourist destination and all towns and cities are very integrated with nature.",
  galar:
    "The eighth region in the Pokémon series, Galar is one of the first to have more of its landmass added after the core title of the game, featured in the Crown Tundra and Isle of Armor expansions. Notably inspired by Great Britain (as if viewed upside-down), Galar incorporates cultural references from England, Wales, and Scotland into its topography and cities.",
};

const getRegion = () => {
  storage.setItem(
    "regionSelected",
    document.getElementById("regionList").value
  );
};
formRegion.addEventListener("submit", getRegion);
window.onload = setRegionInfo(storage.getItem("regionSelected"), regionObj);
