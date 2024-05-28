/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* CLOSURES */

// Create Hello World Function:
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// ----------------------------------------------------------------
var createHelloWorld = function() {
	return function(...args) {
		return 'Hello World';
	}
};

const f = createHelloWorld();
f()
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript





// Counter:
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// ----------------------------------------------------------------
var createCounter = function(n) {
	let count = n;
	let num = -1;
	return function() {
		if (count == n) {
			num++;
		}
		if (count !== n) {
			num++;
		}
		return count + num;
	};
};
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript





// To be or Not to be:
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// ----------------------------------------------------------------
var expect = function(val) {
	return {
		toBe: num => {
			if (val !== num) throw new Error('Not Equal');
			else return true;
		},
		notToBe: num => {
			if (val === num) throw new Error('Equal');
			else return true;
		},
	};
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript





// Counter II:
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// ----------------------------------------------------------------
var createCounter = function(init) {
	let count = init;
	return {
		increment: () => {
			count++;
			return count;
		},
		decrement: () => {
			count--;
			return count;
		},
		reset: () => {
			count = init;
			return count;
		}
	}
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript