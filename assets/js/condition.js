let age = 20;

if (age < 18) {
	console.log('Non puoi entrare');
	document.getElementById('verifyAge').innerText = 'Non puoi entrare';
} else {
	console.log('Puoi entrare');
	document.getElementById('verifyAge').innerText = 'Puoi entrare';
}

let price = 13;

if (price >= 10 && price < 15) {
	console.log('Prezzo nel range indicato');
	document.getElementById('verifyPrice').innerText =
		'Prezzo nel range indicato';
} else {
	console.log('Prezzo al di fuori del range indicato');
	document.getElementById('verifyPrice').innerText =
		'Prezzo al di fuori del range indicato';
}

let studentName = 'Aldo';
let grade = 30;

if (studentName === 'Mario' || grade >= 18) {
	console.log('Complimenti!');
	document.getElementById('verifyStudent').innerText = 'Complimenti!';
} else {
	console.log('Riprova!');
	document.getElementById('verifyStudent').innerText = 'Riprova!';
}

// Verifica form
const valueAge = document.getElementById('age');
const btnSend = document.getElementById('send');

btnSend.addEventListener('click', function () {
	let age = valueAge.value;
	if (!age) {
		alert('Devi compilare il campo età!');
		return;
	} else {
		document.getElementById('userAge').innerText = 'La tua età è ' + age;
		alert('La tua età è ' + age);
	}
});

// Array di oggetti: ogni oggetto è un elemento dell'array con il suo indice; per accedere al singolo oggetto si usa la stessa sintassi della destrutturazione degli array (es. products[0]), e i singoli oggetti vanno ovviammente destrutturati per poter essere stampati a video (es. products[0].prodName accede al valore della proprietà prodName del primo oggetto presente nell'array)
const products = [
	{
		prodName: 'Monitor 17"',
		prodQty: 25,
		prodPrice: 210,
	},
	{
		prodName: 'Monitor 17"',
		prodQty: 87,
		prodPrice: 85,
	},
	{
		prodName: 'Monitor 17"',
		prodQty: 20,
		prodPrice: 130,
	},
];

console.log(products);

const prod1 = document.getElementById('product1');
const prod2 = document.getElementById('product2');
const prod3 = document.getElementById('product3');

let valutazione;

if (products[0].prodPrice <= 100) {
	valutazione = 'economico';
} else if (products[0].prodPrice <= 150) {
	valutazione = 'nella media';
} else {
	valutazione = 'caro';
}

prod1.innerText =
	'Il prodotto ' +
	products[0].prodName +
	', giacenza pezzi ' +
	products[0].prodQty +
	', ha un prezzo ' +
	valutazione;

if (products[1].prodPrice < 100) {
	valutazione = 'economico';
} else if (products[1].prodPrice < 150) {
	valutazione = 'nella media';
} else {
	valutazione = 'caro';
}

prod2.innerText =
	'Il prodotto ' +
	products[1].prodName +
	', giacenza pezzi ' +
	products[1].prodQty +
	', ha un prezzo ' +
	valutazione;

if (products[2].prodPrice < 100) {
	valutazione = 'economico';
} else if (products[2].prodPrice < 150) {
	valutazione = 'nella media';
} else {
	valutazione = 'caro';
}

prod3.innerText =
	'Il prodotto ' +
	products[2].prodName +
	', giacenza pezzi ' +
	products[2].prodQty +
	', ha un prezzo ' +
	valutazione;

const warehouse = {
	qty: 20,
	available: 25,
	logistic: 8,
};

// Operatori multipli combinati
if (
	(warehouse.qty > warehouse.available &&
		warehouse.qty > warehouse.logistic) ||
	warehouse.logistic > 10
) {
	console.log('Il prodotto è disponibile per il trasporto');
} else {
	console.log('Il prodotto non è disponibile per il trasporto');
}

// If lungo
const dayName = 6;
const thisDay = document.getElementById('thisDay');

if (dayName === 0) {
	thisDay.innerText += ' Domenica';
} else if (dayName === 1) {
	thisDay.innerText += ' Lunedì';
} else if (dayName === 2) {
	thisDay.innerText += ' Martedì';
} else if (dayName === 3) {
	thisDay.innerText += ' Mercoledì';
} else if (dayName === 4) {
	thisDay.innerText += ' Giovedì';
} else if (dayName === 5) {
	thisDay.innerText += ' Venerdì';
} else {
	thisDay.innerText += ' Sabato';
}
