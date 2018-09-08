"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Using the nobel data, write a function called laureatesByYear 
// that returns an array of all the laureates for the given year.

function laureatesByYear(year) {
    let result = [];
    for (let i = 0; i < nobels.prizes.length; i++) {
//    for (key in nobels.prizes) {
//        if (key.year == year) {
        if (nobels.prizes[i].year == year) {
            result = result.concat(nobels.prizes[i].laureates);
        }
    }
    return result;    
}   

console.log(laureatesByYear(2014));

