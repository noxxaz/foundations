console.log("Welcome to Code Chrysalis Foundations!");

function productLoop(num1, num2) {
    let result = 0;

    for (let counter = 0; counter < num1; counter = counter + 1) {
        result = result + num2;
    }
    return result;
}

function productRecursive(num1, num2) {
    if (num1 === 1){
        return num2
    } else {
        return num2 + productRecursive(num1 - 1, num2);
    }
}
// Test cases
console.log(productLoop(10,10));
console.log(productRecursive(3,4));
console.log(productRecursive(120,10));

function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "Error. n must be 0 or greater."
    }

    return productRecursive(n,factorial(n - 1));
}
// Test cases
console.log(factorial(4)); // 4 * 3 * 2 * 1 ---> 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 ---> 120

// Write a function called isEven that, given a number n as a parameter, returns true if that 
//number is even, and false otherwise; however, you need to do this without using the % operator.
function isEven(n) {
    return Number.isInteger(n / 2);
}
//Tests
console.log(isEven(2));
console.log(isEven(20));
console.log(isEven(205));


// Write a function validCredentials that accepts two parameters: username and password, and 
// returns true if both are long enough, and false otherwise. You can decide what constitutes "long enough".
function validCredentials(username, password) {
    return (username.length >= 8 && password.length >= 8);
}

console.log(validCredentials("yo","mama"));
console.log(validCredentials("fritolays","1potato2"));
console.log(validCredentials("chunkalicious","supercalifragilistic"));



// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
// (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible 
// by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // divisible by both 3 & 5
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            //divisible only by 3
                console.log("Fizz");        
            } else if (i % 5 === 0) {
            //divisible only by 5
                console.log("Buzz");
        } else {
            //not divisible by 3 or 5
            console.log(i);
        }
    }
}

fizzBuzz();

// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the 
// grid there is either a space or a "#" character. The characters should 
// form a chessboard.

function checkerBoard(n) {
// Only works with even numbers. 

    var board = "";

    for(i = 1; i <= (n / 2); i++) {
        for (j = 1; j <= n; j++){
            if(j % 2 === 0) {
                board += "#";
            } else {
                board += " ";
            }           
        }
        board += "\n";

        for (k = 1; k <= n; k++){
            if(k % 2 === 1) {
                board += "#";
            } else {
                board += " ";
            }           
        }
        board += "\n";
    }

    return board;
}
console.log(checkerBoard(5));