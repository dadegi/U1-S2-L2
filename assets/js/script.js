const student = {
	name: 'Mario',
	surname: 'Rossi',
	age: 25,
	batch: 'FS0624',
	hasWebcam: false,
};

console.log(student);
document.getElementById('myObject').innerText = student; // L'oggetto apparirà come object Object in quanto non destrutturato
const webcam = student.hasWebcam === true ? 'sì' : 'no';
document.getElementById('myObject').innerText =
	'Studente ' +
	student.name +
	' ' +
	student.surname +
	', di anni ' +
	student['age'] +
	', frequentante il corso ' +
	student.batch +
	', dotato di webcam: ' +
	webcam; // Oggetto destrutturato

// Modifica dell'oggetto
student.name = 'Aldo'; // Modifica proprietà
student.city = 'Napoli'; // Aggiunta proprietà
delete student.hasWebcam; // Eliminazione proprietà

console.log(student);
document.getElementById('modifyObject').innerText =
	'Studente ' +
	student.name +
	' ' +
	student.surname +
	', di anni ' +
	student['age'] +
	', città di provenienza: ' +
	student.city +
	', frequentante il corso ' +
	student.batch;

// Copia oggetto
const book = {
	title: 'Il nome della Rosa',
	author: 'Eco',
};

const book2 = book; // Con il semplice operatore ddi assegnazione (=) i due oggetti diventano siamesi, ogni modifica impatta su entrambi
book2.author = 'Umberto Eco';
console.log(book);
console.log(book2);

const book3 = { ...book }; // Con lo spread operator (...) si crea una copiia dell'oggetto di partenza INDIPENDENTE

book3.title = 'Lessico famigliare';
book3.author = 'Natalia Ginzburg';
console.log(book);
console.log(book3);

// N.B. QUALUNQUE MANIPOLAZIONE DELL'OGGETTO DEVE SEMPRE PASSARE PER LA DESTRUTTURAZIONE DELL'OGGETTO STESSO
