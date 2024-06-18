const animals = ['gatto', 'cane', 'coniglio'];
console.log(animals);
document.getElementById('animals').innerText = animals; // Stampa array non destrutturato

// Stampa array destrutturato
document.getElementById('animal1').innerText = animals[0];
document.getElementById('animal2').innerText = animals[1];
document.getElementById('animal3').innerText = animals[2];

animals.sort(); // Ordine alfabetico (numerico dal più piccolo al più grande)
console.log(animals);

animals.reverse(); // Ordine alfabetico inverso (numerico dal più grande al più piccolo)
console.log(animals);

animals[1] = 'giraffa'; // Modifica valore di un array
console.log(animals);

// Array numerico
const numbers = [1, 4, 8, 2, 5, 11];
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);
