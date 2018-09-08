"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: The each() function below can olnly take arrays. Why? Modify the each  
// function so that it can take both arrays and objects.

function each (array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i, array);
    }
}

function each1 (objOrArray, action) {
    if (typeof objOrArray != "object") {
        return "Invalid input.";
    }
    if (Array.isArray(array)) {
        for (let i = 0; i < objOrArray.length; i++) {
            action(objOrArray[i], i, objOrArray);
        }
    } else {
        for (let key in objOrArray) {
            action(objOrArray[key], key, objOrArray);
        }
    }
}

// Write a map function that uses each()
function map(array, action) {
    let result = [];
    each(array, (val, idx, array) => {
        result.push(action(val));
    });
    return result;
}
// Call each and log each element of the array
each([1, 2, 3], (elem) => {console.log(elem)});

// Call map and return each array element * 2
console.log(map([1, 2, 3], (elem) => elem * 2));


// Recreate the reduce function. It should take an array, a reducer function,
// and an initial value. The given reducer function should be provided with
// the current total and current element, and return the updated total. reduce
// should return the accumulated total created by running the callback function
// over every element in the array.

function reduce(array, reducer, initial) {
    let total = initial;
    for (let i = 0; i < array.length; i++) {
        total = reducer(total, array[i]);
    }
    return total;
}

// Tests
const numbers = [1, 2, 3, 4, 5];
function updateSum(total, element) {
  return (total += element);
}
function updateMultiply(total, element) {
  return (total *= element);
}

console.log(reduce(numbers, updateSum, 0));
console.log(reduce(numbers, updateMultiply, 1));

// Modify your reduce function so that the initial value is optional.
// If the initial value is not provided, take the first element from the
// given array.

function reduce1(array, reducer, initial = array[0]) {
    let total = initial;
    for (let i = 0; i < array.length; i++) {
        total = reducer(total, array[i]);
    }
    return total;
}
console.log(reduce1(numbers, updateSum));
console.log(reduce1(numbers, updateMultiply));

// Use the reduce function to create a string from an array of smaller strings.
// This has been started for you – you will need to add arguments and write the
// body of the lambda function. If you've forgotten how the reduce function 
// works, go back to the slides or explore this link: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const arr = ["H", "e", "l", "l", "o", "!"];

const reducedArray = arr.reduce((total, currVal) => {
    return total + currVal;
});
console.log(reducedArray); // => "Hello!"

// filter method
numbers.push(6); // [1, 2, 3, 4, 5, 6];

function isEven(number) {
    return number % 2 === 0;
}

const evenNumbersTaskThree = numbers.filter((number) => isEven(number));

console.log(evenNumbersTaskThree); // => [2, 4, 6]

// Now, create this algorithm from scratch. The filter algorithm you will
// be writing from scratch takes two arguments: an array and a function.
// Design the algorithm so that it returns an array that only includes the
// elements that have passed the test in the function being passed in.

// Hint: You are passing the function isEven in as an argument. That function
// checks if a number is even and returns either 'true' or 'false'.

function filter(array, func) {
    let result = [];
    array.forEach(function(element) {
        if (func(element)) {
            result.push(element);
        }
    });
    return result;
}

const evenNumbersTaskTwo = filter(numbers, isEven);
console.log(evenNumbersTaskTwo);

// Using your filter function, declare a function called multiplesOfThree that
// takes an array of numbers as input, and returns an array of only the numbers
// that are multiples of three.

// TODO:

// Declare a function called positives that takes an array of numbers as a
// parameter, and returns an array of only the numbers that are positive.

// TODO:

// Declare a function called evenLength that takes an array of strings and 
// returns an array of only the strings with an even length.

// TODO:

// Write a function startsWithChar that accepts two parameters: an array of 
// strings and a single-character string (e.g. "a"), and returns an array 
// of only the strings that start with that character.

function startsWithChar(strings, character) {
  // Your code here!
}
const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
startsWithChar(words, "x"); // => []



