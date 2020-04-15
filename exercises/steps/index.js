// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ----------------------------------------------------------
// My initial solution
// LegacyWay
function buildString(char, length) {
	let returnString = '';
	for (let i = 0; i < length; i++) {
		returnString += char;
	}
	return returnString;
}

function stepsMySolution(n) {
	let counter = 1;
	while (counter <= n) {
		console.log(buildString('#', counter) + buildString(' ', n - counter));
		counter++;
	}
}

// --------------------------------------------------------
// Solution 1 - easier solution

// Think of in as a double matrix problem

// --------> column
// |     ----------------
// |    | #  |    |    |
// |r   ----------------
// |o   | #  | #  |    |
// |w   ----------------
// |    | #  | #  | #  |
// V    ----------------

function steps1(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (let column = 0; column < n; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}

		console.log(stair);
	}
}

// --------------------------------------------------------
// Solution 2 - hard - recursioin and tricky

// Recursion
// 1. We always start of with recursion function
// 2. First thing we always do with a recurisce function is find BASE case
// 3. If we call the recursive function again, we have to make sure that there is change in arguments

// Recursion tips
// 1. Figure out the bare minimum pieces of information to represent your problem
// 2. Give reasonable defaults to the bare minimum pieces of info
// 3. Check the base case. Is there any work left to do? If not, return
// 4. Do some work. Call your function again, making sure the arguments have changed in some fashion

// Recursion for our steps problem
// 1. if(row === n) then we have hit the end of our problem
// 2. If the 'stari' string has a length === n then we are at the end of a row
// 3. If the length of the stair string is less than or equal to the row number we're working on, we add '#', otherwise add a space

function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add);
}

module.exports = steps;
