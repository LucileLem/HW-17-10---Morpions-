var tour_du_joueur1 = true;
var partie_gagnee = false;
var cells = document.querySelectorAll('.cell');
var gagnant_text = document.getElementById('gagnant');
var restart = document.getElementById('restart');

cells.forEach(cell => cell.addEventListener('click', jouer));
restart.addEventListener('click', restartGame);

function jouer() {
// 1 - verifier case remplie ou pas
	if (!this.innerHTML && !partie_gagnee) {
		this.appendChild(tour());
		verifierCombinaisons()
		tour_du_joueur1 = !tour_du_joueur1;
	}
}

// 2 - poser symbole ; si tour_du_joueur1 est true c'est le joueur 1 qui vient de jouer
function tour() {
	if (tour_du_joueur1) {
		var cross = document.createElement("img");
		cross.src = 'images/cross.png';
		cross.height = 164;
		cross.width = 154;
		return cross;
	} else {
	 	var circle = document.createElement("img");
		circle.src = 'images/circle.png';
		circle.height = 164;
		circle.width = 154;
		return circle;
	}
};

function afficherGagnant(gagnant){
	console.log('WIN');	
	gagnant_text.style.display = 'block';
	gagnant_text.innerHTML = 'Bravo ' + (tour_du_joueur1 ? 'joueur 1' : 'joueur 2') + '!';
	restart.style.display = 'block';
	partie_gagnee = true;
}

	// 3 - check combinaison gagnante
function verifierCombinaisons() {
	//horizontales
	if (cells[0].innerHTML !== '' && cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML) {
		afficherGagnant(cells[0].innerHTML);
	}
	else if (cells[3].innerHTML !== '' && cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML) {
		afficherGagnant(cells[3].innerHTML);
	}
	else if (cells[6].innerHTML !== '' && cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML) {
		afficherGagnant(cells[6].innerHTML);
	}
	// verticales 
	else if (cells[0].innerHTML !== '' && cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML) {
		afficherGagnant(cells[0].innerHTML);
	}
	else if (cells[1].innerHTML !== '' && cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML) {
		afficherGagnant(cells[1].innerHTML);
	}
	else if (cells[2].innerHTML !== '' && cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML) {
		afficherGagnant(cells[2].innerHTML);
	}
	// diagonales 
	else if (cells[0].innerHTML !== '' && cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML) {
		afficherGagnant(cells[0].innerHTML);
	}
	else if (cells[2].innerHTML !== '' && cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML) {
		afficherGagnant(cells[2].innerHTML);
	}
};

// pour rajouter un peu de durée de vie !
function restartGame(){
	partie_gagnee = false;
	cells.forEach(cell => cell.innerHTML = '');
	gagnant.style.display = 'none';
	restart.style.display = 'none';
	tour_du_joueur1 = true;
}