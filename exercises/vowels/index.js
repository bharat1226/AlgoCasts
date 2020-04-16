// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

function _isVowel(char) {
	return vowelsArray.includes(char);
}

function vowelsMySolution(str) {
	return str
		.toLowerCase()
		.split('')
		.filter((char) => !!_isVowel(char)).length;
}

// ------------------------------------------------------------------
// Solution 1

function vowels1(str) {
	let count = 0;

	// If we use an array like above, it will become easier for future engineer
	const checker = 'aeiou';

	for (let char of str.toLowerCase()) {
		// Trick here is using includes
		if (checker.includes(char)) {
			count++;
		}
	}

	return count;
}

// ------------------------------------------------------------------
// Solution 2 ---> slightly more condensed version

function vowels(str) {
	// Using regex is so easy --> its like cheating :p

	// we add 'g' and 'i' options at end of regex -->
	// 'g' => do not stop at first match
	// 'i' => case 'insensivtive'
	const matches = str.match(/[aeiou]/gi);

	// str.match will return an array of all the matches found
	// if no matches are found, match function will return null

	return matches ? matches.length : 0;
}

// iterable solution is safe and best ---> my solution

module.exports = vowels;
