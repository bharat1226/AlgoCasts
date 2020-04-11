// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt1(n) {
	// My solution
	const sign = Math.sign(n);

	return sign * parseInt((n * sign).toString().split('').reverse().join(''));
}

function reverseInt(n) {
	// Current Solution

	// parseInt('23-') = '23'
	// Above trick for parseInt
	return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;
