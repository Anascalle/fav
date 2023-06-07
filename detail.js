const results = data.results;
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function getCharacter() {
  const data = searchById(id);
  const type1 = data.types[0].type.name;
  const type2 = data.types[1] ? data.types[1].type.name : null;
  const abilities = data.abilities.map(ability => ability.ability.name);
  const moves = data.moves.slice(0, 15);

  const types = type2 ? [type1, type2] : [type1];
   
    const character = new Character(data.id, data.name, data.sprites.other["official-artwork"].front_default, types,data.weight,data.height,abilities, data.base_experience,data.stats,moves);
   
    const nameH1 = document.getElementById("name")
    nameH1.innerHTML = character.name

    const idH1 = document.getElementById("id")
    idH1.innerHTML = `N°${character.id.toString().padStart(4, '0')}`;

    const typeH1 = document.getElementById('type');
    typeH1.innerHTML = character.types.join(', ');

  const imageElement = document.getElementById("image");
  imageElement.src = data.sprites.other["official-artwork"].front_default;
  
  const weightH1 = document.getElementById("weight");
  weightH1.innerHTML = `Weight: ${character.weight} kg`;

  
  const heightH1 = document.getElementById("height");
  heightH1.innerHTML = `Height: ${character.height} m`;

  const abilitiesUL = document.getElementById("abilities");
  character.abilities.forEach((ability) => {
    const li = document.createElement("li");
    li.textContent = ability;
    abilitiesUL.appendChild(li);
  });

 
  const base_experienceH1 = document.getElementById("base_experience");
  base_experienceH1.innerHTML = `Base experience: ${character.base_experience} `;
  


  const statsUL = document.getElementById("stats");
  character.stats.forEach((stat) => {
    const li = document.createElement("li");
    li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
    statsUL.appendChild(li);
  });

  const movesUL = document.getElementById("moves");
  character.moves.forEach((move) => {
    const li = document.createElement("li");
    li.textContent = move.move.name;
    movesUL.appendChild(li);
  });
}
function searchById(id) {
   for (let i = 0; i < data.length; i++) {
    var busqueda = `${data [i].id}`
    if (busqueda === id) {
        console.log(data[i])
        return data[i]
    }
   }
}
function goBack() {
  window.location.href = 'Pokedex.html';
}


getCharacter()