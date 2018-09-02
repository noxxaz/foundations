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
  const result = [];
  each1(numbers, function(number, index) {
    if (index % 2 === 0 && number % 2 === 1) {
        result.push(number);
    }
  });
  return result;
}
console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10])); // => [1, 3, 7]


// Write a function called evenIndexedEvenLengths (yeah, it is long) that
// accepts an array of strings as a parameter, and returns only the strings
// that are found at an even index that also have an even length, 
// e.g.:

function evenIndexedEvenLengths(strings) {
  const result = [];
  each1(strings, function(string, index) {
    if (index % 2 === 0 && string.length % 2 === 0) {
      result.push(string);
    }
  });
  return result;
}

console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]));
// => ["lion", "doge"]
console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));
// => ["purple", "yellow"]


// Write a function sumByAllElementsMultipliedByFour that takes an array as an
// argument and returns the sum of all elements multiplied by four.

function sumByAllElementsMultipliedByFour(numArray) {
  let result = 0;
  each1(numArray, function(number) { // ignore the index arg in the callback
    result += number * 4;
  });
  return result;
}

console.log(sumByAllElementsMultipliedByFour([1, 2, 3, 4, 5, 6])); 
// => 84