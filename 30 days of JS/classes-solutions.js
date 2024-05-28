/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* CLASSES */

// Array Wrapper:
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features: 1. When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays. 2.When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
// ----------------------------------------------------------------
var ArrayWrapper = function(nums) {
	this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
	return this.nums.reduce((acc, val) => val + acc, 0);
}

ArrayWrapper.prototype.toString = function() {
	return `[${this.nums.join(',')}]`
}
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript





// Calculator with Method Chaining:
// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.
// ----------------------------------------------------------------
class Calculator {

	constructor(value) {
		this.value = value;
	}

	add(value){
		this.value += value;
		return this;
	}

	subtract(value){
		this.value -= value;
		return this;
	}

	multiply(value) {
		this.value *= value;
		return this;
	}

	divide(value) {
		if (value) {
			this.value /= value;
		} else this.value = "Division by zero is not allowed";
		return this;
	}

	power(value) {
		this.value = Math.pow(this.value, value);
		return this;
	}

	getResult() {
		return this.value;
	}
}
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript





// Event Emitter:
// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.
// ----------------------------------------------------------------
class EventEmitter {
	constructor() {
		this.events = {};
	}
	/**
	 * @param {string} eventName
	 * @param {Function} callback
	 * @return {Object}
	 */
	subscribe(eventName, callback) {
		if (!this.events[eventName]) {
			this.events[eventName] = []
		}
		this.events[eventName].push(callback);
		return {
			unsubscribe: () => {
				this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
			}
		};
	}

	/**
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {Array}
	 */
	emit(eventName, args = []) {
		if (!this.events[eventName]) {
			return [];
		}
		return this.events[eventName].map(callback => callback(...args))
	}
}
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/event-emitter/?envType=study-plan-v2&envId=30-days-of-javascript