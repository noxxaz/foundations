console.log("Wilkommen aus Code Chrysalis Foundations!")
//alert("Whatever you do, don't press OK...")

5 + 6;
console.log(6 + 6);

function add(numOne, numTwo) {
    return numOne + numTwo;
}   
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}
function greeting(name) {
    return "Hello, " + name + "!!! You look swell!";
}
function average(numOne, numTwo) {
    return (numOne + numTwo) / 2;
}


// Tests
console.log("Pretty sure this should be 7: " + add(4, 3)); // should return 7
console.log("And this should be 142, right? " + add(100, 42)); // => 142

console.log("Now I'm subtracting: " + subtract(123345, 23345)); // should return 10000
console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

console.log(greeting("Big Mama"));

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Beau")); // => "Hello, Beau!"

console.log(average(100,1));
console.log(average(-10000,10001));