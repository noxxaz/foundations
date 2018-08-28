"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Declare a function countCharacters that, when given a string as an argument, 
// returns an object containing counts of the occurrences of each character in the string
// example: Mississippi

console.log(countCharacters("Mississippi"));
// {M: 1, i: 4, s: 4, p: 2}

function countCharacters(someStr) {
    let result = {};
    let char = "";
    for (let i = 0; i < someStr.length; i++) {
        char = someStr.slice(i, i + 1);
        if (!result[char]) { result[char] = 0; }
        result[char]++;
    }
    return result;
}