"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// write a function called "product" that takes a number parameter of "a"
// and returns another function that takes another parameter called "b".
// This returned function should itself return the product (multiplication)
// of a and b.

function product(a) {
    return function (b) {
        return a * b;
    };
}

const times10 = product(10);
console.log(times10(5) + " should equal 50");
console.log(times10(3) + " should equal 30");

// Write a function called map that takes two arguments, an array and a
// function. It should return a new array with the function applied to
// each element in the original array.

function map(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
}

// tests
const numbers = [1, 2, 3, 4, 5];

const triple = function(num) {
  return num * 3;
};

const addOne = function(num) {
  return num + 1;
};

const tripledNums = map(numbers, triple);
const oneAddedNums = map(numbers, addOne);

console.log(tripledNums, " should equal [3, 6, 9, 12, 15]");
console.log(oneAddedNums, " should equal [2, 3, 4, 5, 6]");

// Using the map function that you wrote above, declare a function
// called pluck that takes an array of objects and a string (the key)
// and returns a new array of property values using the string.

function pluck(objArray, key) {

//--- First attempt (using For loop)
//    const result = [];
//    for (let i = 0; i < objArray.length; i++) {
//        result.push(objArray[i][key]);
//    }
//    return result;

//--- Next attempt (using map() function)
//    return map(objArray, function(myObj) {
//        return myObj[key];
//    });

//--- Last attempt (using built in .map function)
    return objArray.map(function(myObj) {
        return myObj[key];
    });
}

const stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

console.log(pluck(stooges, "name")); // => ["moe", "larry", "curly"]
// Rewrite the above using the built-in .map function for arrays.

// NOBEL PRIZES -----------------------------------------------------
// Declare a function called laureatesByYear that returns an array of all
// the laureates for the given year.
function laureatesByYear(year) {
    let result = [];
    // for (let i = 0; i < nobels.prizes.length; i++)
    //     if (nobels.prizes[i].year == year) {
    //         result = result.concat(nobels.prizes[i].laureates);
    //     }
    // return result;

    return nobels.prizes.map(function(myObj) {
        if (myObj.year == year) {
            return myObj.laureates;
        }
    });
}
console.log("Nobel Laureates from 2017:--------------")
console.log(laureatesByYear(2017));

// Declare a function called laureatesByField that takes a category string
// and returns an array of all the laureates for that particular field.
function laureatesByField(category) {
    let result = [];
        for (let i = 0; i < nobels.prizes.length; i++)
            if (nobels.prizes[i].category == category) {
                result = result.concat(nobels.prizes[i].laureates);
            }
    return result;
}
console.log("Nobel Laureates in Economics:--------------")
console.log(laureatesByField("economics"));

// Declare a function called getLaureates that two inputs: a year number
// and a category string. It should return an array of laureates for that
// particular category in that particular year.
function getLaureates(year, category) {
    let result = [];
    for (let i = 0; i < nobels.prizes.length; i++)
        if (nobels.prizes[i].year == year) {
            if(nobels.prizes[i].category == category) {
                result = result.concat(nobels.prizes[i].laureates);
            }
        }
    return result;
}
console.log("Nobel Laureates from 2010 in Physics:--------------")
console.log(getLaureates(2010, "physics"));

// Declare a function called totalLaureates that takes a category input
// string and returns the total number of laureates for the given category
// in Nobel history.
function totalLaureates(category) {
    let result = [];
        for (let i = 0; i < nobels.prizes.length; i++)
            if (nobels.prizes[i].category == category) {
                result = result.concat(nobels.prizes[i].laureates);
            }
        return result.length;
}
console.log("# of Nobel Laureates in Economics:--------------")
console.log(totalLaureates("economics"));



