const word = prompt('Dimmi la parola da testare');
if (isPalidnrom(word)) {
	console.log('palindroma');
} else {
	console.log('NON palindroma');
}
function isPalidnrom(testWord) {
	const invertedWord = testWord.split('').reverse().join('');
	if (testWord === invertedWord) {
		return true;
	}
	return false;
}

let divisibility = prompt('Sara\' pari o dispari?').toLowerCase();
divisibility = divisibility === 'pari' ? 0 : 1;
const userNumber = parseInt(prompt('Dimmi un numero tra 1 e 5 compresi'));
const computerNumber = getRandomInteger(1, 5);
if (isDivisible(userNumber + computerNumber, divisibility)) {
	console.log(userNumber, computerNumber, 'Hai vinto');
} else {
	console.log(userNumber, computerNumber, 'Hai perso');
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isDivisible(number, divisibility) {
	if ((divisibility === 0 && number % 2 === 0) || (divisibility === 1 && number % 2 !== 0)) {
		return true;
	}
	return false;
}