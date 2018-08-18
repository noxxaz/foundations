console.log("Welcome to Code Chrysalis Foundations!");

// #1 -----------------------------------------------------------------
function isHot(temperature) {
    if(temperature > 90) {
    return "It's hot!";
    } else {
    return "It ain't that hot!";
    }
  }

console.log(isHot(95));
console.log(isHot(68));
  
function getPrivileges(age) {
    var privileges;
    if(age >= 16) {
       privileges =  "Drive a car";
    } else {
        privileges = "You can't even drive yet."
    }
    if (age >= 17) {
        privileges = privileges + ", \nVote";
    }
    if (age >= 21) {
        privileges = privileges + 
            ", \nDrink\nContratulations, you can do all the things!";
    }
    return privileges;
}
  
console.log(getPrivileges(15));
console.log(getPrivileges(16));
console.log(getPrivileges(18));
console.log(getPrivileges(40));


// #3 -----------------------------------------------------------------
// Write a function called randomStopLight. randomStopLight should create 
// a random number from 0 to 10. If the number generated is less than 3, 
// the function should return "red". If the number generated is between 
// 3 to 6 (inclusive of both), it should return "yellow". If the number 
// generated is 7 or greater, it should return "green".

function randomStopLight() {
    var randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 3) {
        return "Red";
    } else if(randomNumber >= 3 && randomNumber <= 6) {
        return "Yellow";
    } else {
        return "Green";
    }
}
// tests
var i;
for(i = 0; i < 10; i++) {
    console.log(randomStopLight());
}


// More Practice
// Write a function called getGrade, which takes a number as the input and 
// returns a string representing the letter grade. Follow the guide below:
// between 90 and 100 (inclusive) is an "A"
// between 80 and 89 (inclusive) is a "B"
// between 70 to 79 (inclusive) is a "C"
// between 60 to 69 (inclusive) is a "D"
// anything 59 or less should return a "F"

function getGrade(points) {
    if(points > 100 || points < 0) {
        return "Invalid grade. Please use a 100-point scale."
    } else {
        if(points >= 90) {
            return "A";
        } else if(points >= 80) {
            return "B";
        } else if(points >= 70) {
            return "C";
        } else if (points >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}
// Tests
//var i;
for (i = -1; i < 102; i++) { 
    console.log(i + " = " + getGrade(i));
}

// Advanced practice
function or(exp1, exp2) {
    if(exp1) {
        return exp1;
    } else {
        return exp2;
    }
}
// Tests
console.log("17 || skittles = " + 17 || "skittles");
console.log("17 or skittles = " + or(17,"skittles"));
console.log("skittles || 17 = " + "skittles" || 17);
console.log("skittles or 17 = " + or("skittles", 17));
console.log("0 || false = " + 0 || false );
console.log("0 or false = " + or (0, false));
console.log("false || 17 = " + false || 17);
console.log("false or 17 = " + or (false, 17));
