/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* BASIC ARRAY TRANSFORMATIONS */

// Apply Transform Over Each Element in Array:
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// ----------------------------------------------------------------
var map = function(arr, fn) {
	let res = [];
	for (let i = 0; i < arr.length ; i++) {
		res.push(fn(arr[i], i));
	}
	return res
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript





// Filter Elements from Array:
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// ----------------------------------------------------------------
var filter = function(arr, fn) {
	let filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript





// Array Reduce Transformation:
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// ----------------------------------------------------------------
var reduce = function(nums, fn, init) {
	let initial = init;
	for(let i = 0; i < nums.length; i++) {
		initial = fn(initial, nums[i])
	}
	return initial;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript