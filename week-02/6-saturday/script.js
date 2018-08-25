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
console.log("Recursion Factorials...")
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
console.log("Exponents...")
console.log(power(3,3));
console.log(power(4,2));
console.log(power(9,3));
