const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const imgDiv = document.getElementById("img-div");
const tableDiv = document.getElementById("table-div");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const searchPokemon = async () => {
  
  try {
    const inputString = searchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputString}`);
    const pokemonData = await res.json();

    pokemonName.textContent = "";
    pokemonId.textContent = "";
    pokemonWeight.textContent = "";
    pokemonHeight.textContent = "";
    pokemonTypes.innerHTML = "";
    imgDiv.innerHTML = "";

    pokemonName.textContent = pokemonData.name.toUpperCase();
    pokemonId.textContent = `#${pokemonData.id}`;

    pokemonWeight.textContent = `Weight: ${pokemonData.weight}`;
    pokemonHeight.textContent = `Height: ${pokemonData.height}`;
    pokemonTypes.innerHTML += pokemonData.types.map((typeObj) => `<div class="type-div  ${typeObj.type.name.toLowerCase()}-type"><p>${typeObj.type.name.toUpperCase()}</p></div>`).join("");

    pokemonHp.textContent = pokemonData.stats[0].base_stat;
    pokemonAttack.textContent = pokemonData.stats[1].base_stat;
    pokemonDefense.textContent = pokemonData.stats[2].base_stat;
    pokemonSpecialAttack.textContent = pokemonData.stats[3].base_stat;
    pokemonSpecialDefense.textContent = pokemonData.stats[4].base_stat;
    pokemonSpeed.textContent = pokemonData.stats[5].base_stat;

    imgDiv.innerHTML = `<img id="sprite" src="${pokemonData.sprites.front_default}"/>`;
    tableDiv.style.display = "flex";
  }
  catch(err) {
    alert("Pokémon not found");
    tableDiv.style.display = "none";
  }
}

searchButton.addEventListener("click", searchPokemon);