"ewes tricked"
"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Write a function called pluck that takes two inputs:
// an array of objects and a string key. It returns an array of all the values 
// found in the objects with a key of key.

console.log("Warmup ----------------------------------------------")

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


// Higher order functions (HOFs)
// Don't Hassle the HOFs

const square = function(x) {
    return x * x;
};
  
const power = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
  };
  
const sumSquares1 = function(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += square(numbers[i]);
    }
    return total;
  };

// Basic exercises -------------------------------------------------------

// Write a function each that takes an array and a function. each will execute 
// the given function once for each array element.
// Note: Do this without using the Array.forEach() method.

console.log("double() ----------------------------------------------")

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const testArray = [1, 2, 3, 4];
const result = [];

const double = function(number) {
  result.push(number * 2);
};

const cheer = function(array) {
    array.push("Who do we appreciate?!!");
    return array;
}

each(testArray, double);
console.log(cheer(result)); // This should return [ 2, 4, 6, 8 ];


// Run each, using the function below as the callback, but pass it in as 
// an anonymous function. Feel free to use any array of numbers with it.

console.log("addTen() ----------------------------------------------")

function addTen(number) {
    console.log(number + 10);
  }

const someDumbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

each(someDumbArray, function(number) {
    console.log(number + 10);
})

// Refactor sumSquares below using the each that you wrote.
console.log("sumSquares() ----------------------------------------------")

function sumSquares(numbers) {
    let total = 0;

    each(numbers, function(number) {
        total = total + square(number);
    } );
    return total;
}

console.log(sumSquares([1, 2, 3, 4])); // => 30


// Write a function called squareAll that squares each number in an array, 
// and returns an array of all the squared numbers using a for loop.
// Then refactor your squareAll function using each.
console.log("squareAll() ----------------------------------------------")

function squareAll(numArray) {
    let newArray = [];
//    for(let i = 0; i < numArray.length; i++) {
//        newArray[i] = square(numArray[i]);
//    }
    each(numArray, function(number) {
        newArray.push(square(number));
    } );
    return newArray;
}

console.log(squareAll([1, 2, 3, 4])); // => [1, 4, 9, 16]

// Medium exercises -------------------------------------------------------
