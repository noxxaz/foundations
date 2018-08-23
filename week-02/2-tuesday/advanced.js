console.log("This is some advanced shiznit!");

function guessMyNumber(n) {
    if (n > 5) {
        return "Please try a number between 0 and 5.";
    } else if (n === randomNumber(5)) {
        return "You guessed my number!";
    }
    return "Nope! Wrong number!";
}

// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));
// console.log(guessMyNumber(4));

function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
}






// WHILE LOOPS --------------------------------------------------------------

// Basic -------------------------------------
//Declare a function that uses while loops to count from 1 to 10.
function countToTen() {
    i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
//Test case
countToTen(); // => 1, 2, ... 10

// Create a while loop inside of the countDown function below so that it counts down to 0 
// from the number given as an argument.

function countDown(end) {
    while (end >= 0) {
        console.log(end);
        end--;
    }
}
countDown(10);

// Create a while loop inside of the sayGoodbye function so that prints "Goodbye" 
// to the console the same number of times as the argument passed in.

function sayGoodbye(times) {
    while (times >= 0) {
        console.log("Goodbye");
        times--;
    }
    console.log("Jeez, can't ya take a hint?")
}
sayGoodbye(5);

// Create a while loop inside of the multiplesOfSeven function so that it prints 
// count * 7 to the console up to the number passed in.

function multiplesOfSeven(count) {
    let i = 1;
    while(i <= count) {
        console.log(7 * i);
        i++;
    }
}

// Test
multiplesOfSeven(4);
// 7
// 14
// 21
// 28

// Medium -----------------------------
// The function power is written below, using recursion It calculates a base 
// raised to the power of an exponent. (e.g. baseexponent / 24 = 16).
// Rewrite power so that it uses while loops instead of recursion. Your power 
// function should take two parameters: a base and an exponent. It will return   
// the base raised to the power of the exponent.

function power(base, exponent) {
    let retVal = 1;
    if (exponent === 0) {
    return 1;
  }
  while (exponent >= 1) {
    retVal = retVal * base;
    exponent--;
  }
  return retVal;
}
// Test cases
console.log(power(2, 4)); // should print 16

// Write a function called fizzBuzz. fizzBuzz prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 AND 5, print "FizzBuzz" instead of the number.

function fizzBuzz(max) {
    let i = 1;
    while (i <= max) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
        i++;
    }
}
fizzBuzz(125);

// Rewrite your laugh function from the recursion exercises so that instead of 
// using recursion, it uses a while loop and a variable instead.

function laugh(times){
    let i = 1;
    let varLaughter = "";
    while (i < times) {
        varLaughter += "ha";
        i++;
    }
    return varLaughter;
}
console.log(laugh(25));