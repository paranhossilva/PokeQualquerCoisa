const dano = [[ 1 , 2 , 1 , 1 , 1 ,0.5, 1 , 0 ,0.5, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ],		//Normal
			  [ 1 , 1 , 2 , 1 , 1 ,0.5,0.5, 1 , 1 , 1 , 1 , 1 , 1 , 2 , 1 , 1 ,0.5, 2 ],		//Fighting
		 	  [ 1 ,0.5, 1 , 1 , 0 , 2 ,0.5, 1 , 1 , 1 , 1 ,0.5, 2 , 1 , 2 , 1 , 1 , 1 ],		//Flying
		 	  [ 1 ,0.5, 1 ,0.5, 2 , 1 ,0.5,0.5, 1 , 1 , 1 , 1 , 1 , 2 , 1 , 1 , 1 ,0.5],		//Poison
			  [ 1 , 1 , 1 ,0.5, 1 ,0.5, 1 , 1 , 1 , 1 , 2 , 2 , 0 , 1 , 2 , 1 , 1 , 1 ],		//Ground
			  [0.5, 2 ,0.5,0.5, 2 , 1 , 1 , 1 , 2 ,0.5, 2 , 2 , 1 , 1 , 1 , 1 , 1 , 1 ],		//Rock
			  [ 1 ,0.5, 2 , 1 ,0.5, 2 , 1 , 1 , 1 , 2 , 1 ,0.5, 1 , 1 , 1 , 1 , 1 , 1 ],		//Bug
			  [ 0 , 0 , 1 ,0.5, 1 , 1 ,0.5, 2 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 2 , 1 ],		//Ghost
			  [0.5, 2 ,0.5, 0 , 2 ,0.5,0.5, 1 ,0.5, 2 , 1 ,0.5, 1 ,0.5,0.5,0.5, 1 ,0.5],		//Steel
			  [ 1 , 1 , 1 , 1 , 2 , 2 ,0.5, 1 ,0.5,0.5, 2 ,0.5, 1 , 1 ,0.5, 1 , 1 ,0.5],		//Fire
			  [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,0.5,0.5,0.5, 2 , 2 , 1 ,0.5, 1 , 1 , 1 ],		//Water
			  [ 1 , 1 , 2 , 2 ,0.5, 1 , 2 , 1 , 1 , 2 ,0.5,0.5,0.5, 1 , 2 , 1 , 1 , 1 ],		//Grass
			  [ 1 ,0.5, 1 , 1 , 2 , 1 , 1 , 1 ,0.5, 1 , 1 , 1 ,0.5, 1 , 1 , 1 , 1 , 1 ],		//Electric
			  [ 1 ,0.5, 1 , 1 , 1 , 1 , 2 , 2 , 1 , 1 , 1 , 1 , 1 ,0.5, 1 , 1 , 2 , 1 ],		//Psychic
			  [ 1 , 2 , 1 , 1 , 1 , 2 , 1 , 1 , 2 , 2 , 1 , 1 , 1 , 1 ,0.5, 1 , 1 , 1 ],		//Ice
			  [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,0.5,0.5,0.5,0.5, 1 , 2 , 2 , 2 , 1 ],		//Dragon
			  [ 1 , 2 , 1 , 1 , 1 , 1 , 2 ,0.5, 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 ,0.5, 2 ],		//Dark
			  [ 1 ,0.5, 1 , 2 , 1 , 1 ,0.5, 1 , 2 , 1 , 1 , 1 , 1 , 1 , 1 , 0 ,0.5, 1 ],];		//Fairy
			
const tipos = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];

// API endpoint --------------------------------------------
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName, // Nome ou numero passado na caixa de busca
    pokemon, // Responsavel por guardar os dados recebidos da API
    card; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
	var tipo = new Array();
	tipo = pokemon.types.map(item => item.type.name);
	
	
	card = `<div class="row" style = "text-transform:capitalize;">
				<div class="col-sm-8">`;

	if (tipo.length == 1){
		var ind = tipos.indexOf(tipo[0]);
		
				
		for (var i = 0; i < 18; i++){
			card += `<div class="row" align="center">
						<div class="col-sm-3">
							<img src="assets/img/` + tipos[i] + `.png" alt="` + tipos[i] + `" style="max-width:100%;height:100%;">
						</div>
						<div class="col-sm-5">
							<img src="assets/img/` + dano[ind][i] + `.png" alt="` + dano[ind][i] + `" style="max-width:100%;height:100%;">
						</div>
					</div><hr>`;
		}
	}
	else {
		var ind = tipos.indexOf(tipo[0]);
		var novoDano = new Array();
		
		
		for (var i = 0; i < 18; i++){
			novoDano[i] = dano[ind][i];			
		}
		
		ind = tipos.indexOf(tipo[1]);
		
		for (var i = 0; i < 18; i++){
			novoDano[i] = novoDano[i] * dano[ind][i];	
					
		}
		
		for (var i = 0; i < 18; i++){
			card += `<div class="row" align="center">
						<div class="col-sm-3">
							<img src="assets/img/` + tipos[i] + `.png" alt="` + tipos[i] + `" style="max-width:100%;height:100%;">
						</div>
						<div class="col-sm-5">
							<img src="assets/img/` + novoDano[i] + `.png" alt="` + novoDano[i] + `" style="max-width:100%;height:100%;">
						</div>
					</div><hr>`;
		}		
	}
	card += `	</div>
			<div class="col-sm-4">
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="Sprite do ${pokemon.name}" style="max-width:100%;height:auto;">
				<h1 align="center">${pokemon.name}</h1>
				<h3>Nº: ${pokemon.id}</h3>
				<h3>Tipo: ${pokemon.types.map(item => item.type.name).toString()}</h3>
				<h3>Peso: ${pokemon.weight  / 10}kg</h3>
				<h3>Altura: ${pokemon.height  / 10}m</h3>
			</div></div>
				`;
	
  /*card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
    </div>`;*/
  return card;
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
      container.innerHTML = createCard();
  }, 2000);
}

// Add Events --------------------------------------------
searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
});