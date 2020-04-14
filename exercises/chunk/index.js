// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My solution

function chunkMySolution(array, size) {
	const chunkedArray = [];
	let subArray = [];
	array.forEach((element, i) => {
		if (subArray.length === size) {
			chunkedArray.push(subArray);
			subArray = [];
		}
		subArray.push(element);

		if (array.length - 1 === i) {
			chunkedArray.push(subArray);
		}
	});
	return chunkedArray;
}

//  Solution 1
function chunk1(array, size) {
	const chunked = [];

	for (let element of array) {
		const last = chunked[chunked.length - 1];

		if (!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}

	return chunked;
}

// solution 2
function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}
	return chunked;
}

module.exports = chunk;
