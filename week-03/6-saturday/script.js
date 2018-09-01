"ewes tricked"
"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Write a higher order function called odds tht accepts an array lf numbers 
// as a parameter and returns an array of just the odd ones. Use the each function below

console.log(odds([1, 2, 3, 4])); // => [1, 3]

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function odds(array) {
    const result = [];
    each(array, function(number) {
        if(number % 2) result.push(number);
    } );
    return result;
}