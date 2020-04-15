// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My Solution
function sortAndFilter(str) {
	return str
		.toLowerCase()
		.split('')
		.filter((x) => x !== ' ' || x !== '!' || x !== ',')
		.sort()
		.join('');
}

function anagramsMySolution(stringA, stringB) {
	return sortAndFilter(stringA) === sortAndFilter(stringB);
}

// -----------------------------------------------------------
// Solution 1

function buildCharMap(str) {
	const charMap = {};

	// use only alphanumerice ---> use regex and replace method
	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
}

function anagrams1(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
}

// ---------------------------------------------------------------
// solution 2 ----> might lead to performance concerns --> straight forward

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
