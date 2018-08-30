"ewes tricked"
"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Write pseudocode for a function called pluck that takes two inputs:
// an array of objects and a string key. It returns an array of all the values 
// found in the objects with a key of key.

console.log(pluck([{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}, {a: 7, b: 8, c: 9}], "a"));
// should return [1, 4, 7]

function pluck(objArray, key) {
    let returnArray = [];
    for (let i = 0; i < objArray.length; i++) {
        const currObj = objArray[i];
        if (key in currObj) {
            returnArray.push(currObj[key]);
        }
    }
    return returnArray;
}