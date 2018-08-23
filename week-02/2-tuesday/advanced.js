console.log("This is some advanced shiznit!");

function guessMyNumber(n) {
    let upperBound = 5;
    let rando = randomNumber(upperBound);
    if (n > upperBound) {
        return "Please try a number between 0 and " + upperBound + ".";
    } else if (n === rando) {
        return "You guessed my number!";
    }
    return "Nope! The correct number was: " + rando;
}

console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));
console.log(guessMyNumber(4));

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
    let result;
    while (i <= max) {
        result = "";
        if (i % 3 === 0) {
            result += "Fizz";
        }
        if (i % 5 === 0) {
            result += "Buzz"
        }
        console.log(result || i);
        i++;
    }
}
fizzBuzz(25);

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

// Advanced -----------------------------------------

// Fancy counting. Use a while loop to build a single string with the numbers 1 through n, 
// separated by commas. Have it return the new string. How can we make sure not to have a 
// comma after the last number?

// Test cases  
console.log(counting(5)); // => '1, 2, 3, 4, 5'
console.log(counting(1)); // => '1'
console.log(counting(3)); // => '1, 2, 3'

function counting(n) {
    let i = 1;
    let stringOfNums = "";

    while (i <= n) {
        if (stringOfNums.length > 0) {
            stringOfNums += ", ";
        }
        stringOfNums += i;
        i++;
    }
    return stringOfNums;
  }

// Remember the .length property for strings? Declare a function called spellBackwards that 
// takes a string as an input and prints each letter of the string starting from the back and 
// going to the front. You'll need to look up the .slice() method.

function spellBackwards(inputString) {
    let backString = ""; // output string
    let i = inputString.length;  // loop counter

    while (i >= 0) {
        backString += inputString.slice(i, i + 1)
        i--;
    }

    return backString;
}

console.log("\'Yo Mama!\' spelled backwards is: \'" + spellBackwards("Yo Mama!") + "\'");

// NIGHTMARE MODE ------------------------------------------
// You have guests coming to a party! Each guest is assigned a number. Introduce each new guest 
// to all the guests as they arrive. You should end up with output looking something like this 
// one for n === 5:

/*
Welcome 1!
Welcome 2, meet 1!
Welcome 3, meet 1 and 2!
Welcome 4, meet 1, 2, and 3!
Welcome 5, meet 1, 2, 3, and 4!
It doesn't have to be identical!
*/

// Hint: \n creates a new line.

function welcomeTheGuests(numGuests) {
    let i = 1;
    let intro = "";
    while (i <= numGuests) {
        intro = "Welcome " + i;
        if (i > 1) {
            intro += ", meet " + meet(numGuests); 
        }
        i++
    }
    console.log(intro);
}

function meet(numGuests) {
    if (numGuests === 1) {
        console.log(numGuests + "!");
    } else {
        meet(numGuests - 1);
        console.log(", " + numGuests);
    }
    return;
}

welcomeTheGuests(5);

// Declare a function that will print out a Christmas tree! The function takes two parameters:
// char: a single character string
// n: the height of the tree
// Output will be a string in the shape of a Christmas tree created using the char 
// character and spaces with a height of n rows.

// Example:

console.log(christmasTree("T", 5));

/* S hould return:

    T
   T T
  T T T
 T T T T
T T T T T
Take care with spaces and new lines.
*/

function christmasTree(char, n){
    let i = 1;
    let j = 1;
    let tree = "";
    while (i <= n) {
        if (i === 1){
            //write char at position n
            while (j < n){
                tree += " ";
                j++;
            }
            tree += char + "\n";
        } else if (i === 2){
            //char at position n
            j = 1;
            while (j < (n - 1)){
                tree += " ";
                j++;
            }
            tree += char + " " + char + "\n";

        } else if (i === n) {
            j = 1;
            while (j <= n * 2) {
                if (j % 2 === 1) {
                    tree += char;
                } else {
                    tree += " ";
                }
                j++;
            }
            tree += "\n";
        }
        i++;
    }
    return tree;
}


