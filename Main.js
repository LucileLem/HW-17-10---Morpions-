var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');

var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (!cell.firstChild) {
		// 2 - poser symbole J1 ou j2
		if (cell.firstChild = true) {
				if (tourDuJoueur1) {
					var cross = document.createElement("img");
					cross.src = 'cross.png';
					cross.height = 200;
					cross.width = 189;
					cell.appendChild(cross);
				} else {
					var circle = document.createElement("img");
					circle.src = 'circle.png';
					circle.height = 200;
					circle.width = 189;
					cell.appendChild(circle);
					}}
		else {  }
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	}
};
//hori / verti / diagonales
var combinaisons =
[[0, 1, 2], [3, 4, 5],
[6, 7, 8], [0, 3, 6],
[1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		if (
			cells[combinaison[0]].textContent === cells[combinaison[1]].textContent &&
			cells[combinaison[1]].textContent === cells[combinaison[2]].textContent &&
			cells[combinaison[0]].textContent !== ''
		) {
			console.log('WIN');
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
			alert('Bravo ' + currentPlayer + '!');
			partieGagnee = true;
		}
	});
};

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});
