// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ---------------------------------------------------
// My Solution

function capitalizeMySolution(str) {
	return str
		.split(' ')
		.map((eachWord) => {
			const lettersArray = eachWord.split('');
			if (lettersArray.length > 0) {
				lettersArray[0] = lettersArray[0].toUpperCase();
			}
			return lettersArray.join('');
		})
		.join(' ');
}

// ---------------------------------------------------
// You can take slightly easy solution by taking JS standard library or nasty for loop

// Solution 1
// Easier and best solution

function capitalize1(str) {
	const words = [];

	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}

	return words.join(' ');
}

// ---------------------------------------------------------
// Solution 2 (tedious and nasty looking)

function capitalize(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}

	return result;
}

module.exports = capitalize;
