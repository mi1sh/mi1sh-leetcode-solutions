/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* JSON  */

// Is Object Empty:
// Given an object or an array, return if it is empty.
// ----------------------------------------------------------------
var isEmpty = function (obj) {
	if (typeof obj === 'object') return !Object.keys(obj).length;
	return !obj.length;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript


// Chunk Array:
// Given an array arr and a chunk size size, return a chunked array.
// ----------------------------------------------------------------
var chunk = function (arr, size) {
	let result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript


// Array Prototype Last:
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// ----------------------------------------------------------------
Array.prototype.last = function () {
	return this.length ? this[this.length - 1] : -1;
};
/*
const arr = [1, 2];
console.log(arr.last()); // 3
*/
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript


// Sort By:
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
// ----------------------------------------------------------------
var sortBy = function (arr, fn) {
	return arr.sort((a, b) => fn(a) - fn(b));
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript


// Join Two Arrays by ID:
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.
// ----------------------------------------------------------------
var join = function (arr1, arr2) {
	let result = {};
	let arrays = [...arr1, ...arr2].map((e) => result[e.id] = {...result[e.id], ...e});
	return [...Object.values(result)];
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript


// Compact Object:
// Given an object or array obj, return a compact object.
// ----------------------------------------------------------------
var compactObject = function (obj) {
	if (!obj || typeof obj !== 'object') {
		return obj;
	}
	if (Array.isArray(obj)) {
		return obj.filter((item) => item).map((item) => compactObject(item));
	} else {
		const result = {};
		for (let key in obj) {
			let item = compactObject(obj[key]);
			if (item) {
				result[key] = item;
			}
		}
		return result;
	}
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript


// Group By:
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// ----------------------------------------------------------------
Array.prototype.groupBy = function (fn) {
	const result = {};
	this.map((item) => {
		const key = fn(item);
		if (!result[key]) {
			result[key] = [item];
		} else {
			result[key].push(item);
		}
	});
	return result;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript


// Flatten Deeply Nested Array
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
// ----------------------------------------------------------------
var flat = function (arr, n) {
	if (n === 0) {
		return arr;
	} else {
		let result = [];
		for (let item of arr) {
			if (Array.isArray(item)) {
				let flatItem = flat(item, n - 1);
				result.push(...flatItem);
			} else {
				result.push(item);
			}
		}
		return result;
	}
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript