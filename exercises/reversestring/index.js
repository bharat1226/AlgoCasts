// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
	// using reverse() built-in array function
	return str.split('').reverse().join('');
}

function reverse2(str) {
	// By using reduce function
	return str.split('').reduce((prev, curr) => curr + prev, '');
	// return str.split('').reduce((reversed, character) => character + reversed, '');
}

function reverse(str) {
	// using for loop
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}

	return reversed;
}

module.exports = reverse;
