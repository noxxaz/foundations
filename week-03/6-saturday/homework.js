"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// Write a function called select that, given an object and an array of 
// strings representing keys, returns a new object consisting of just the
// keys (and values) specified in the array of strings.

function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function select(object, keys) {
  const resultObj = {};
  each(keys, function(string) {
    resultObj[string] = object[string];
  } ) ;

//  for (let i = 0; i < keys.length; i++) {
//    resultObj[keys[i]] = object[keys[i]];
//  }
  return resultObj;
}

console.log(select({ a: 1, b: 2, c: 3 }, ["a", "b"])); // => {a: 1, b: 2}

// New version of the each function
function each1(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

// Using our new version of each, write a function called indexedExponentials
// that, when given an array of numbers as an argument, returns a new array
// of numbers where each number has been raised to the power of its index
// e.g.:

function indexedExponentials(numbers) {
  const result = [];
  each1(numbers, function(number, index) {
    result.push(number ** index);
  });
  return result;
}

console.log(indexedExponentials([2, 5, 7, 4])); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]

// Write a function called evenIndexedOddNumbers that, when given an array
// of numbers as an argument, returns an array of only the odd numbers with
// even indices.

function evenIndexedOddNumbers(numbers) {
  // TODO: Your code here
}
evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]); // => [1, 3, 7]


