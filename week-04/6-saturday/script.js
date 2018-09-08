"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Using the nobel data, write a function called laureatesByYear 
// that returns an array of all the laureates for the given year.

function each(array, func) {
    for (let i = 0; i < array.length; i++) {
        return func(array[i]);
    }
}

function laureatesByYear(year) {
    let result = [];
    // for (let i = 0; i < nobels.prizes.length; i++) {
    //     if (nobels.prizes[i].year == year) {
    //         result = result.concat(nobels.prizes[i].laureates);
    //     }
    // }
    each(nobels.prizes, function(obj) {
        console.log(obj.year);
        if (obj.year == year) {

            result = result.concat(obj.laureates);
        }
    });
    return result;    
}   

console.log(laureatesByYear(2014));

