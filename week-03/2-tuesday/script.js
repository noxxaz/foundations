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
