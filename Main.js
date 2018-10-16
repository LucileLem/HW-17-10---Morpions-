var tour_du_joueur1 = true;
var partie_gagnee = false;
var cells = document.querySelectorAll('.cell');
var gagnant_text = document.getElementById('gagnant');
var restart = document.getElementById('restart');

<<<<<<< HEAD
var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (!cell.firstChild) {
		// 2 - poser symbole J1 ou j2
		if (cell.firstChild = true) {
				if (tourDuJoueur1) {
					var cross = document.createElement("img");
					cross.src = 'cross.png';
					cross.height = 164;
					cross.width = 154;
					cell.appendChild(cross);
				} else {
					var circle = document.createElement("img");
					circle.src = 'circle.png';
					circle.height = 164;
					circle.width = 154;
					cell.appendChild(circle);
					}}
		else {  }
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	}
};
//hori / verti / diagonales
var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
=======
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
>>>>>>> 33d977b8d6b17013a7a7bdc6bad08626b5a0a421

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