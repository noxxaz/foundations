"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// IMPORT nobels.js
const nobels = require("./nobel.js");

console.log(typeof nobels);
console.log(typeof nobels.prizes);

// WARMUP: Using the nobel data, write a function called laureatesByYear 
// that returns an array of all the laureates for the given year.

function laureatesByYear(year) {
    let result = [];
    nobels.prizes.forEach( prize => {
        if (prize.year == year) {
            result = result.concat(prize.laureates);
        }
    });
    return result;    
}   

console.log(laureatesByYear(2014));

// Objects with Methods ------------------------------------

function makePerson(myName) {
    const name = myName;
    return {
      sayName: function() {
       console.log("Hi. My name is " + name + ".");
      },
    };
  }
  
  const yan = makePerson("Yan");
  yan.sayName(); // --> "Hi. My name is Yan."
  
  const felix = makePerson("Felix");
  felix.sayName(); // --> "Hi. My name is Felix."


  // Bank account ----------------------------------------
  function makeAccount(startingBalance) {
    return {
      balance: startingBalance,
      deposit: function(depositAmt) {
        if (depositAmt < 0) {
            console.error("Deposit Amount cannot be a negative number.");
        } else {
            this.balance = this.balance + depositAmt;
            return this.balance;
        }
      },
      withdraw: function(withdrawAmt) {
        if (withdrawAmt < 0) {
            console.error("Withdrawal amount must be a positive number.");
        } else {
            this.balance = this.balance - withdrawAmt;
            return this.balance;
        }

      },
      checkBalance() {
        console.log("Your balance is: " + this.balance);
        return this.balance;
      },
    };
  }
  
  const myAccount = makeAccount(100);
  myAccount.withdraw(50);
  myAccount.checkBalance(); // --> 50
  myAccount.withdraw(25);
  myAccount.checkBalance(); // --> 25
  myAccount.deposit(100);
  myAccount.checkBalance(); // --> 125
  myAccount.withdraw(500); // --> Insufficient funds
  myAccount.checkBalance(); // --> 125


// Cookie Monster -----------------------------------------
function makeCookieMonster() {
    return {
        cookiesEaten: 0,
        eatCookies: function(numCookies) {
            let response = "";
            if (numCookies <= 0) {
                response = "I can't eat no cookies!"
            } else {
                this.cookiesEaten += numCookies;
                response = "Nom, nom, nom. Thank you for the " + 
                        numCookies + " cookies.";
            }
            console.log(response);
        },
        cookiesSoFar: function() {
            let response = "I have eaten " + this.cookiesEaten + 
                " cookies so far.";
            if (this.cookiesEaten < 15) {
                response += " Still Hungry.";
            } else {
                response += " I'm full.";
            }
            console.log(response);
         }

    }
}
  
const myCookieMonster = makeCookieMonster();
myCookieMonster.cookiesSoFar(); // I have eaten 0 cookies so far. Still hungry.
myCookieMonster.eatCookies(5); // Nom, nom, nom. Thank you for the 5 cookies.
myCookieMonster.cookiesSoFar(); // I have eaten 5 cookies so far. Still hungry.
myCookieMonster.eatCookies(0); // I can't eat no cookies.
myCookieMonster.cookiesSoFar(); // I have eaten 5 cookies so far. Still hungry.
myCookieMonster.eatCookies(10); // Nom, nom, nom. Thank you for the 10 cookies.
myCookieMonster.cookiesSoFar(); // I have eaten 15 cookies so far. I'm full.
 

// Make a factory function for a circle that satisfies the given test cases.
function makeCircle(centerX, centerY, radius) {
    return {
        location: "(" + centerX + ", " + centerY + ")",
        radius: radius,
        area: Math.PI * radius ** 2,
        toString: function() {
            return "I am a circle at " + this.location +
                " with a radius of " + this.radius + 
                " and an area of " + this.area + ".";
        }
    };
}

const circle1 = makeCircle(0, 0, 1);
console.log(circle1.toString()); // I am a circle at (0, 0) with a radius of 1 and area of 3.141592653589793.
const circle2 = makeCircle(0, 0, 1 / Math.sqrt(Math.PI));
console.log(circle2.toString()); // I am a circle at (0, 0) with a radius of 0.5641895835477563 and area of 0.9999999999999999.


// Make a factory function for a stack that satisfies the given test cases.
function makeStack() {
    return {
        stack: [],
        isEmpty: function() {
            return (this.size() === 0);
        },
        size: function() {
            return this.stack.length;
        },
        push: function(someString) {
            return this.stack.push(someString);
        },
        pop: function() {
            return this.stack.pop();
        }
    }
}

const myStack = makeStack();
console.log(myStack.isEmpty()); // true
console.log(myStack.size()); // 0
myStack.push("One");
console.log(myStack.isEmpty()); // false
console.log(myStack.size()); // 1
myStack.push("Two");
console.log(myStack.isEmpty()); // false
console.log(myStack.size()); // 2
console.log(myStack.pop()); // Two
console.log(myStack.pop()); // One
console.log(myStack.pop()); // undefined
console.log(myStack.isEmpty()); // true
console.log(myStack.size()); // 0



