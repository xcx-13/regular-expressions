// Elements

// Textfields
const inputArtikelnummer = document.getElementById('input-artikelnummer');
const inputDatum = document.getElementById('input-datum');
const inputFiliale = document.getElementById('input-filiale');

// Buttons
const buttonArtikelnummer = document.getElementById('button-artikelnummer');
const buttonDatum = document.getElementById('button-datum');
const buttonFiliale = document.getElementById('button-filiale');


// Event Handler

buttonArtikelnummer.onclick = () => {
	// Regex Prüfung: ^\d{10}$ oder ^[0-9]{10}$
	let str = inputArtikelnummer.value;
	let pattern = new RegExp("^[0-9]{10}$");
	if (pattern.test(str)) {
		return alert('Artikelnummer angelegt');
	}
	console.warn('implementiert!');
};

buttonDatum.onclick = () => {
	// Eure Regex Prüfung hier ...
	let str = inputDatum.value;
	let pattern = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
	if (pattern.test(str)) {
		return alert('Datum angelegt');
	}
	console.warn('Noch nicht implementiert!');
};

buttonFiliale.onclick = () => {
	// Eure Regex Prüfung hier ...
	let str = inputFiliale.value;
	let pattern = new RegExp("^[0-9A-Z][0-9]$");
	if (pattern.test(str)) {
		return alert('Filiale angelegt');
	}
	console.warn('Noch nicht implementiert!');
};