console.log("Welcome to Code Chrysalis Foundations!");

// #1-----------------------------------------
if (1 === 1) {
  console.log(true);
}

// #2-----------------------------------------
function simplePasswordLock(password) {
  if ((password === "password")) {
    return "Correct! Welcome.";
  } else {
    return "Incorrect password, please try again.";
  }
}
console.log(simplePasswordLock("qwerty")); // should return "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

// #3-----------------------------------------
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

// #4-----------------------------------------
function isItTooLong(myString) {
  if(myString.length > 10) {
    return true; 
  } else {
    return false;
  }
}

console.log(isItTooLong("monkey meat hamburgers"));
console.log(isItTooLong("fries"));

// #5-----------------------------------------
function biggerNumber(numOne, numTwo) {
  if(numOne > numTwo) {
    return "The first argument " + numOne + " is bigger.";
  } else if(numTwo > numOne) {
    return "The second argument " + numTwo + " is bigger.";
  } else {
    return "Neither is bigger. " + numOne + " = " + numTwo + "."
  }
}

console.log(biggerNumber(452, 3)); // should print 'The first argument is bigger.'
console.log(biggerNumber(-937, -12)); // => 'The second argument is bigger.'
console.log(biggerNumber(4, 4)); // => 'The second argument is bigger.'

// #6-----------------------------------------
function whatDataType(data) {
  if(typeof data == "undefined") {
    console.log("This is not a string, boolean, or number.");
  } else {
    console.log("This is a " + typeof data);
  }
}
console.log(whatDataType("Hello!")); // should print "This is a string."
console.log(whatDataType(true)); // => "This is a boolean."
console.log(whatDataType(42)); // => "This is a number."
console.log(whatDataType(undefined)); // should print "This is not a string, boolean, or number."

// #7-----------------------------------------
function greeting(name, lang) {
  if(lang === "English") {
    console.log("Hello, " + name + "!");
  } else if(lang === "Spanish") {
    console.log("Hola, " + name + "!");
  } else if(lang === "Japanese") {
    console.log("こんにちわ, " + name + "-san!");
  } else if(lang === "German") {
    console.log("Gutentag, " + name + "!");
  } else {
    console.log("Sorry, " + name + ", I don't know that language!");
  }
}
console.log(greeting("Harry Potter", "Japanese")); // should print "Konnichiwa, Harry Potter!"
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

// #8-----------------------------------------
function isEven(number){
  if(isNaN(number)) {
    return "That's not even a Number.";
  } else {
    if ((number % 2) === 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isEven(4)); // should print true
console.log(isEven(7)); // => false
console.log(isEven(44444)); // => false
console.log(isEven(-888)); // => false
console.log(isEven("chocolate")); // => false

// Medium ----------------------------------------------
function isOdd(number){
  if(isNaN(number)) {
    return "That's not even a Number.";
  } else {
    if ((number % 2) !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isOdd(4));
console.log(isOdd(7));

function isPositive(number){
  if(isNaN(number)) {
    return "That's not even a Number.";
  } else {
    if (number >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isPositive(-4));
console.log(isPositive(7));

function isNegative(number){
  if(isNaN(number)) {
    return "That's not even a Number.";
  } else {
    if (number < 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isNegative(-4));
console.log(isNegative(7));

// Advanced ----------------------------------------------

function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(randomNumber(1000));

function guessMyNumber(){

}