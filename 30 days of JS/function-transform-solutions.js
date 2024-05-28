/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* FUNCTION TRANSFORMATIONS */

// Function Composition:
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// ----------------------------------------------------------------
var compose = function(functions) {
	return x => functions.reduceRight((acc, curr) => curr(acc), x)
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript





// Return Length of Arguments Passed:
// Write a function argumentsLength that returns the count of arguments passed to it.
// ----------------------------------------------------------------
var argumentsLength = function (...args) {
	let argsArray = [...args];
	return argsArray.length;
};
/**
 * argumentsLength(1, 2, 3); // 3
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript





// Allow One Function Call:
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// ----------------------------------------------------------------
var once = function (fn) {
	let fnIsOnce = false;
	return function (...args) {
		if (fnIsOnce) {
			return;
		} else {
			fnIsOnce = true;
			return fn(...args);
		}
	}
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript





// Memoize:
// Given a function fn, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// ----------------------------------------------------------------
function memoize(fn) {
	const cache = {};
	return (...args) => {
		let key = args.toString();
		if (key in cache) {
			return cache[key];
		} else {
			const result = fn(...args);
			cache[key] = result;
			return result;
		}
	}
}
/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript