"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// Create a function to return a factorial using loops
function factorialLoop (n) {
    let retVal = 1;
    for(let i = 1; i <= n; i++) {
        retVal = retVal * i;
    }
    return retVal;
}
// Tests
console.log("Factorial Loop... ")
console.log(factorialLoop(3));
console.log(factorialLoop(5));
console.log(factorialLoop(9));

// Create a function to return a factorial using recursion
function factorialRec(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRec(n - 1);
    }
}
// Tests
console.log("Recursion Factorials..................")
console.log(factorialRec(3));
console.log(factorialRec(5));
console.log(factorialRec(9));

// Create a function called power that takes to numbers base and exponent 
// Don't use any Math. functions
function power (base, exponent) {
    let retVal = base;
    for (let i = 1; i < exponent; i++) {
        retVal = retVal * base;
    }
    return retVal;
}
// Tests
console.log("Exponents........................")
console.log(power(3,3));
console.log(power(4,2));
console.log(power(9,3));

// Objects ----------------

// Convert the array below into an object called "morseCode". 
// Use the letters of the word as the keys.
const tar = ["-", ".-", ".-."];

const morseCode = {t: "-", a: ".-", r: ".-."};

// Test cases
console.log("Morse Code........................");
console.log(morseCode['a']); //=> ".-"

morseCode.s = "...";
morseCode.o = "---";
console.log(morseCode.s + " " + morseCode.o + " " + morseCode.s);

function morseCodeArt() {
    return morseCode.a + " " + morseCode.r + " " + morseCode.t;
}
console.log(morseCodeArt());

// Declare a function "select" that accepts two arguments: an object and an array.
// The array should contain names of keys that need to be selected from the object.
// The function select should return an object with the correct key/value pair.

function select(obj, keys) {
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = obj[keys[i]];
    }
    return newObj;
}
// Tests
console.log ("Select Object ...............")
console.log(select({ a: 1, b: 2, c: 3 }, ["a"])); // => {a: 1}
console.log(select({ a: 1, b: 2, c: 3 }, ["a", "c"])); // => {a: 1, c: 3}
console.log(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"])); // => {a: 1, b: 2, c: 3}

// Declare a function "removeOddValues" that takes an object as an argument and returns 
// an object with all key/value pairs removed for which the value holds an odd number.
// You'll need to use the typeof operator to first check that the values are numbers.

// Try these!
console.log(typeof "Hello");
console.log(typeof 3);

console.log ("Odd Removal .....................")
function removeOddValues(anyObj) {
    let myKey;
    let myVal;

    for (let i = 0; i < Object.keys(anyObj).length; i++) {
        myKey = Object.keys(anyObj)[i];
        myVal = anyObj[myKey];
        if (typeof myVal === "number") {
            if (myVal % 2 > 0) {
                delete anyObj[myKey];
            }
        }
    }
    return anyObj;
}
const myObj = {a: 1, b: 2, c: 3, d: "poodles"};
console.log("Before:");
console.log(myObj);
console.log("After:");
console.log(removeOddValues(myObj));

// Declare a function "countWords" that, when given a string as an argument, 
// returns an object where keys are the words in the string, and values are 
// the number of occurrences of that word within the string.
// HINT: You will want to make use of the string method split. Try the code 
// below to see how it works.

//console.log("Hello hello".split(" "));
console.log("Count Words ........................");

function countWords(gimmeaString) {
    const myObj = {};
    let myArr = gimmeaString.split (" ");
    let myKey = "";

    for (let i = 0; i < myArr.length; i++) {
        myKey = myArr[i];
        if(myObj[myKey]) {
            myObj[myKey] += 1;
        } else {
            myObj[myKey] = 1;            
        }
    }
    return myObj;
}
console.log(countWords("the quick sly fox jumped over the lazy old dog who then jumped over the tail of the quick sly fox"))
console.log(countWords("how much wood could a woodchuck chuck if a woodchuck could chuck wood as much wood as a woodchuck could if a woodchuck could chuck wood"))

// Declare a function countCharacters that, when given a string as an argument, 
// returns an object containing counts of the occurrences of each character in the string.

function countCharacters(string) {
    // TODO
  }
  
  countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}
  


// Food in Fridge
// Your function should return the foodInFridge object, but with 'chicken', 
// 'broccoli', and 'cake' set to false.
function updateFridgeContents(foodEaten) {
    let foodInFridge = {
      apple: true,
      chicken: true,
      juice: true,
      beef: true,
      broccoli: true,
      cake: true,
      milk: true,
    };
  
    for (let i = 0; i < foodEaten.length; i++) {
        //let foodEaten = i;
        foodInFridge[foodEaten[i]] = false;
    }
    return foodInFridge;
  }
  
const dinner = ["chicken", "broccoli", "cake"];
console.log(updateFridgeContents(dinner));

function rainbowColors() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
  }
  
// Test case
console.log("Rainbow Colors..................");
rainbowColors(); // => 'red' 'orange' 'yellow' 'green' 'blue' 'indigo' 'violet'
  
const classDays = ["tuesday", "thursday", "saturday"];

function getWeeklyCalendar(classDays) {
    let classMeetingDays = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    };

    for (let i = 0; i < classDays.length; i++) {
        let day = classDays[i];
        classMeetingDays[day] = true;
    }
    return classMeetingDays;
}

// Test case
console.log("Class Days......................")
console.log(getWeeklyCalendar(classDays)); // => {monday: false, tuesday: true...}

function getAvailableBooks() {
    const books = {
        "Harry Potter": true,
        "Romeo and Juliet": false,
        "Don Quixote": true,
        "Lord of the Rings": true,
        "Winnie the Pooh": false,
    };
  
    let booksAvailable = [];
  
    for (var key in books) {
        if (books[key] === true) {
            booksAvailable.push(key);
      }
    }
    return booksAvailable;
  }
  
  // Test case
console.log("Available Books...................")
console.log(getAvailableBooks()); // => ["Harry Potter", "Don Quixote", "Lord of the Rings"]
  

// Declare a function printVars1() that prints the following to the console:
/* 
i -> 0
 j -> 0
 j -> 1
i -> 1
 j -> 0
 j -> 1
i -> 2
 j -> 0
 j -> 1
*/

function printVars1() {
    const myObjArr = [
        {i:0, j:[0,1]},
        {k:1, l:[0,1]},
        {m:2, n:[0,1]}
    ];
    console.log(myObjArr);
    let myKey = "", myVal = 0;
    for (let x in myObjArr) {
        for (let y in myObjArr[x]) {
            myKey = Object.keys(myObjArr[x])[y];
            for (let z in myObjarr[x][myKey]) {
                if (myObjArr[x][myKey].length > 1) {
                    myVal = myObjArr[x][myKey][z];
                } else {
                    myVal = myObjArr[x][myKey];
                }
                console.log("  " + myKey + " -> " + myVal );
            }
//            console.log(myKey + " -> " + myVal );
// TODO: come back to this...
        }
    }

}
console.log("print vars ..........................")
//printVars1();



// Create a for-in-loop inside of the "sayHellos" function so that it prints 
// 'Hello!' in different languages.
const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
  };
  
  function sayHellos() {
      for (let greeting in hellos) {
          console.log(hellos[greeting]);
      }
  }
  
  // Test case
console.log("say Hellos............................")
sayHellos(); //=> 'Hello' / 'Konnichiwa' / 'Hallo' / 'Hola' / ...


function printAddress() {
    const address = { postcode: "153-0051", kentofudou: "Tokyo-to", ku: "Meguro-ku", street: "Kamimeguro", chou: 4, ban: 4, go: 24};
    let finalAddress = "";
    for (let element in address) {
        //TODO: clean up output
        finalAddress = finalAddress + ", " + address[element] 
    }
    return finalAddress;
}

console.log(printAddress());

