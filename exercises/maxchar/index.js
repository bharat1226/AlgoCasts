// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	if (str.length === 1) {
		return str;
    }
    
	const chars = {};
	let counter = 0;
    let counterString = '';
    
    // you can use for loop here
	str.split('').forEach((element) => {
		// method one

		// if (chars[element]) {
		// 	chars[element]++;
		// } else {
		// 	chars[element] = 1;
		// }

		// method two

		// chars[element] ? chars[element]++ : chars[element] = 1

		// method three

		chars[element] = chars[element] + 1 || 1;
	});

    // You can use for loop here
	Object.keys(chars).forEach((x) => {
		if (chars[x] > counter) {
			counterString = x;
			counter = chars[x];
		}
	});

	return counterString;
}

module.exports = maxChar;
