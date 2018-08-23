"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

const animals = ["saru", "tanuki", "tonbi", "kitsune", "uma"];
console.log(animals[animals.length - 1]); // => "uma"

// Declare a function called numberOfAnimals. It should take an array 
// as an input and return the length of the array. Invoke your function 
// using the animals variable you created above!

function numberOfAnimals(animalArray) {
    return animals.length;
}

console.log(numberOfAnimals(animals)); // 5
console.log(numberOfAnimals(["cat", "pig", "fish"])); // 3

// Declare a function called returnLast that takes any array as 
// an argument and returns the last item in the array.
function returnLast(someArray) {
    return someArray[someArray.length -1];
}
console.log(returnLast(animals));

// Declare a function called hiInTheMiddle. It should take an array 
// as an argument. Your function should first check to make sure that 
// the array has an odd number of values (length needs to be odd). If 
// the length is odd, your function should replace the value in the 
// middle index, no matter what it may be, with "hi".

//Example:
console.log(hiInTheMiddle([1, 2, 3, 4, 5])); // [1, 2, "hi", 4, 5]
console.log(hiInTheMiddle(["a", "b", "c", "d"])); 

function hiInTheMiddle(someArray) {
    if (someArray.length % 1) {
        // odd number of elements
        someArray[(someArray.length - 1) / 2] = "hi";
    } else {
        someArray.splice(someArray.length / 2, 0, "hi");
    }
    return someArray;
}

//Write a function that takes an array and reverses 
// the values without using the .reverse() method

const yomama = [1, 2, 3, 4, 5, 6];
//reverseArray(yomama);
console.log(reverseArray(yomama)); // [5, 4, 3, 2, 1]
console.log(yomama);

function reverseArray(someArray) {
    let i = someArray.length - 1;
    let j = 0;
    let newArray = [0];
    while (i >= 0) {
        newArray[j] = someArray[i];
        j++;
        i--;
    }
    i = 0;
    //update original array values
    while (i <= someArray.length - 1) {
        someArray[i] = newArray[i];
        i++;
    }
    return someArray;
}


// For Loops -------------------------------

function countToTen() {
    let outputStr = "";
    for(let i = 1; i <= 10; i++) {
        outputStr += i + " ";
    }
    console.log(outputStr);
}
countToTen(); // => 1 2 3 4 5 6 7 8 9 10

// Let's try traversing an array. Declare a function called printArray 
// that takes an array as an input and prints every item in the array 
// to the console. Create an array variable with at least 5 items in 
// it to test your function.

printArray(["what", "the", "actual", "eff", "is", "wrong", "with", "you","?"]);

function printArray(someArray){
    for (let i = 0; i < someArray.length; i++ ) {
        console.log(someArray[i]);
    }

}

// Declare a function called addOneArray. Your function should take an array 
// of numbers as an input, increment every number in the array by 1 and return 
// the incremented array.

function addOneArray(someArray) {
    let newArray = []; 
    for(let i = 0; i < someArray.length; i++) {
        newArray[i] = someArray[i] + 1;
    }
    return newArray;
}
console.log(addOneArray([1, 2, 3, 4])); // => [2, 3, 4, 5]
