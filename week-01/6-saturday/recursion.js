console.log("Welcome to Code Chrysalis Foundations!");

// Write a recursive function that takes a number and returns the factorial 
// of that number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "Error. n must be 0 or greater."
    }

    return n * factorial(n - 1);
}

  // Test cases
  console.log(factorial(4)); // 4 * 3 * 2 * 1 ---> 24
  console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 ---> 120


// Using recursion, write a function called countUp that takes one 
// parameter, n, and prints all the numbers from 1 to n into the console.

function countUp(n) {
if (n === 1) {
    console.log(n);
} else {
    countUp(n - 1);
    console.log(n);
}
return;
}

countUp(10);

// Using recursion, write a function called countDown that takes one 
// parameter, n, and prints all the numbers from n to 1 into the console. 
// It should do the same as countUp, but instead of counting up, it counts down.

function countDown(n) {
if (n === 1) {
    console.log(n);
} else {
    console.log(n);
    countDown(n - 1);
}
return;
}

countDown(10);

// Using recursion, write a function called sum that takes one parameter, n, 
// and returns the sum of all integers up to n starting from 0.

function sum(n) {
if (n > 0) {
    n = n + (sum(n - 1));
}
return n;
}

console.log(sum(10)); //55

//  Using recursion, write a function called laugh that takes a number as a 
// parameter and returns a string of 'ha's.

var laughter = "";

function laugh(n) {
    if (n > 0) {
        laughter = "ha" + laughter + (laugh(n - 1));
    }
    return laughter;
}

console.log(laugh(25));

// Write a function called fib that takes one parameter, n. The function 
// should return the corresponding fibonacci number.

function fib(n){
    if (n < 0) {
        return("Invalid input.")
    } else if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }

}
// Tests
console.log(fib(0)); // 1
console.log(fib(1)); // 1
console.log(fib(2)); // 2
console.log(fib(6)); // 13

// Create a function called anotherSum that is similar to your sum function 
// from above. anotherSum accepts two parameters: start and end.
// Your function should now compute the sum of the numbers from start to end.

function anotherSum(start, end) {
    if (end > start) {
        end = end + (anotherSum(start, end - 1));
    }
    return end;

}
 // Tests
  console.log(anotherSum(2, 7)); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
  console.log(anotherSum(3, 5)); // => 3 + 4 + 5 => 12
  

// Let's pretend that JavaScript does not have the addition operator + and 
// subtraction operator -. Instead, it comes with two functions called inc 
// and dec that perform increment and decrement respectively.
// ignore the fact that inc makes use of +
function inc(x) {
    return x + 1;
}  
// ignore the fact that dec makes use of -
  function dec(x) {
    return x - 1;
}

// Your task is to write a function called add that takes two numbers as 
// parameters, x and y, and adds them together. HOWEVER, you can only use 
// inc and dec to accomplish this.

function add(x, y) {
    if(y === 0){
        console.log(x);
        return x;
    } else {
        add(inc(x), dec(y));
    }

}
console.log("---------------")
// console.log(add(10,5));
add(10,5);