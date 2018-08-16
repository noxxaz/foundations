console.log("Welcome to Code Chrysalis Foundations!");

// #2 -----------------------------------------

console.log(1100 > 99) // should return true

console.log(1 == 21) // => false
console.log(1 === 21) // => false
console.log(1 > 21) // => false
console.log(1 >= 21) // => false

console.log(62 !== "ya moms") // => true

console.log("5" === 5) // => false

console.log("6" < "six") // => true

// #3 -----------------------------------------
console.log(3 > 3);

// #4 -----------------------------------------
console.log(2 + 3 * 10 < 50);

// #5 -----------------------------------------
console.log("#5--------------")
function equalTo(itemOne, itemTwo) {
    return itemOne == itemTwo;
  }
  
  console.log(equalTo("50", 50));
// #6 -----------------------------------------
console.log("#6--------------")
function moreThan(itemOne, itemTwo) {
    return itemOne > itemTwo;
  }
  console.log(moreThan("zebrajockey", "ant"));
// #7 -----------------------------------------
console.log("#7--------------")
function ofAge(age) {
    console.log(age >= 21 ? "Congrats! This Bud\'s for you!" : "Take a hike, kiddo!");
    return age >= 21;
  }
ofAge(19);
ofAge(22);