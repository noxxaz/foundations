"use strict"
// "ewes tricked"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Declare a function countCharacters that, when given a string as an argument, 
// returns an object containing counts of the occurrences of each character in the string
// example: Mississippi

console.log(countCharacters("Mississippi"));
// {M: 1, i: 4, s: 4, p: 2}

function countCharacters(someStr) {
    const result = {};
    for (let i = 0; i < someStr.length; i++) {
        if (!result[someStr[i]]) result[someStr[i]] = 0; 
        result[someStr[i]]++;
    }
    return result;
}

// Function callbacks
const doSomething = function(number, action) {
    console.log(typeof action);
    return action(number);
  };
  
console.log( doSomething(10, function(x) {return 3 * x;}));

const triple = function(x) {
    return 3 * x;
}
console.log(doSomething(6, triple)); // returns 18

// Declare a function doSomethingElse that accepts three parameters. 
// The first is a number, the second is a function (doSomething) and 
// the third is any function. Call doSomethingElse with triple to create 
// the same return AND print the result of doSomething().

doSomethingElse(6, doSomething, triple); // prints and returns 18

function doSomethingElse(num, func1, func2) {
    let result = func1(num, func2);
    console.log(result);
    return result;
}

// HOMEWORK:
// Declare a function called addFive that adds 5 to a number. 
// Create a second function called updateEvery and use addFive() 
// as a callback to update every value in the following array:

const numbers = [4, 6, 10, 65, 7];

const addFive = function(n) {
    return n + 5;
}

function updateEvery(someArray, someFunction) {
    for (let i = 0; i < someArray.length; i++) {
        someArray[i] = someFunction(someArray[i]);
    }
    return someArray;
}

console.log(updateEvery(numbers, addFive));
// returns [9, 11, 15, 70, 12]

// arrays are passed by reference so our function affected the original array
console.log(numbers);

// Declare a new function that returns true if a number is even and 
// false if it is odd. Use this new function to return an array of 
// the odd and even (true/false) values from numbers in Task 1 (e.g.
// [false, false, false, true, true]).

const isEven = function(n) {
    return (n % 2 === 0);
}

console.log(updateEvery(numbers, isEven));