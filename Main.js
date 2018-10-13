var tour_du_joueur1 = 0;
const cells = document.querySelectorAll('.cell');
const gagnant_text = document.getElementById('gagnant');
const restart = document.getElementById('restart');

cells.forEach(cell => cell.addEventListener('click', jouer));
restart.addEventListener('click', restartGame);

function jouer() {
// 1 - verifier case remplie ou pas
	if (!this.innerHTML) {
		this.innerHTML = tour();
	}
	// minimum 5 tours avant d'avoir un gagnant
	if (tour_du_joueur1 >= 5) {
		verifierCombinaisons()
	}
}

// 2 - poser symbole ; si tour_du_joueur est un multiple de 2 c'est le joueur 2 qui vient de jouer
function tour() {
	tour_du_joueur1++;
	return tour_du_joueur1 % 2 === 0 ? 'O' : 'X';
};

function afficherGagnant(gagnant){
	console.log('WIN');	
	gagnant_text.style.display = 'block';
	gagnant_text.innerHTML = 'Bravo ' + (gagnant === 'X' ? 'joueur 1' : 'joueur 2') + '!';
	restart.style.display = 'block';
	cells.forEach(cell => cell.innerHTML = '');
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
	gagnant.style.display = 'none';
	restart.style.display = 'none';
	tour_du_joueur1 = 0;
}