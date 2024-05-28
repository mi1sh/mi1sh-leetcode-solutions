/*
Hey? I just started a "30 Days of JavaScript" learning plan on leetcode :3
i wanna publish my solutions here (with comments)
*/

/* PROMISES AND TIME */

// Add Two Promises:
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
// ----------------------------------------------------------------
var addTwoPromises = async function (promise1, promise2) {
	const firstPromise = await promise1;
	const secondPromise = await promise2;

	return new Promise((resolve) => {
		resolve(firstPromise + secondPromise);
	});
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript





// Sleep:
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// ----------------------------------------------------------------
async function sleep(millis) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(millis);
		}, millis);
	});
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript





// Timeout Cancellation:
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// ----------------------------------------------------------------
var cancellable = function (fn, args, t) {
	const cancelTimer = () => {
		clearTimeout(timer);
	};
	const timer = setTimeout(() => {
		fn(...args);
	}, t);
	return cancelTimer;
};
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript





// Interval Cancellation:
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// ----------------------------------------------------------------
var cancellable = function (fn, args, t) {
	const cancelTimer = () => {
		clearInterval(timer);
	};
	fn(...args)
	const timer = setInterval(() => {
		fn(...args)
	}, t--);
	return cancelTimer;
};
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript





// Promise Time Limit:
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// ----------------------------------------------------------------
var timeLimit = function(fn, t) {
	return async function(...args) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject("Time Limit Exceeded")
			}, t);
			return fn(...args).then(resolve).catch(reject);
		})
	}
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript





// Cache With Time Limit:
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// ----------------------------------------------------------------
var TimeLimitedCache = function() {
	this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
	let res = this.cache.has(key);
	if (res) clearTimeout(this.cache.get(key).ref);
	this.cache.set(key, {value: value, ref: setTimeout(() => this.cache.delete(key), duration)});
	return res;
};

TimeLimitedCache.prototype.get = function(key) {
	return this.cache.has(key) ? this.cache.get(key).value : -1
};

TimeLimitedCache.prototype.count = function() {
	return this.cache.size;
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript




// Debounce:
// Given a function fn and a time in milliseconds t, return a debounced version of that function.
// ----------------------------------------------------------------
var debounce = function(fn, t) {
	let timer = null;
	return function(...args) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			return fn(...args)
		}, t);
	}
};
// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/debounce/?envType=study-plan-v2&envId=30-days-of-javascript




// Execute Asynchronous Functions in Parallel:
// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
// ----------------------------------------------------------------
var promiseAll = function (functions) {
	return new Promise((resolve, reject) => {
		let result = [];
		let count = 0;
		for (let fn in functions) {
			((fn) => {
				functions[fn]().then(res => {
					result[fn] = res;
					count++;
					if (count === functions.length) {
						resolve(result);
					}
				}).catch(rej => { reject(rej) })
			})(fn)
		}
	})
};

// ----------------------------------------------------------------
// LINK TO LEETCODE PROBLEM PAGE:
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript