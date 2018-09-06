"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: The each function below can olnly take arrays. Why? Modify the each  
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


