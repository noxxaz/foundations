console.log("Welcome to Code Chrysalis Foundations!");

// Basics
let name = "Zach";
const age = "21"; //forever 21
let isProgrammer = true;
let currentTask = 1;

console.log(name); // should print your name e.g. "Alex Ogilvie"
console.log(age); // => your age e.g. 28
console.log(isProgrammer); // => true
console.log(currentTask); // => 1

currentTask = 2;
console.log(currentTask); // => 2

// #3 ---------------------

function createGreeting(greetingPhrase, instructorName) {
    return `${greetingPhrase}, ${instructorName}!`;
  }

let morningGreeting = createGreeting("Good morning", "Mike");
let dayGreeting = createGreeting("Hello", "Beau");
let eveningGreeting = createGreeting("Good evening", "Alex");

//  Test cases
console.log(morningGreeting); // => "Good morning, Mike!"
console.log(dayGreeting); // => "Hello, Beau!"
console.log(eveningGreeting); // => "Good evening, Alex!"

// #4 ----------------------

let a = "B";
let b = "A";
//swap values
let temp = a;
a = b;
b = temp;
//print results
console.log(a); // => "A"
console.log(b); // => "B"

// Medium #1 ----------------
// Declare a function called counter that, when invoked, always returns a 
// number that is one more than the previous invocation.

let varCounter = 0;
function counter() {
    varCounter ++;
}

counter(); // => 1
counter(); // => 2
counter(); // => 3
counter(); // => 4
counter(); // => 5
counter(); // => 6
// etc.
console.log(varCounter);

// #2 ------------------
// randomNumber: This function should accept a number as its input and return a random number between 0 and n.

function randomNumber(max){
    // who even is that rando?
    let rando = Math.random() * Math.floor(max);
    return Math.floor(rando);
  }

console.log(randomNumber(1000));


// guessMyNumber: This function accepts a number argument and compares it to a random 
// integer (whole number) between 0 and 5. It should return "YES!" if the argument 
// matches the random number and "NO!" if the argument does not match.
function guessMyNumber(num){
    let rando = Math.random() * Math.floor(6);
    rando = Math.floor(rando);

// console.log("DEBUG: " + rando);

    if (num === rando) {
        return "YES!"
    } else {
        return "NO!"
    }

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