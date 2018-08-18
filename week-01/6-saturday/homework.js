console.log("Welcome to Code Chrysalis Foundations!");

function productLoop(num1, num2) {
    let result = 0;

    for (let counter = 0; counter < num1; counter = counter + 1) {
        result = result + num2;
    }
    return result;
}

function productRecursive(num1, num2) {
    if (num1 === 1){
        return num2
    } else {
        return num2 + productRecursive(num1 - 1, num2);
    }
}
// Test cases
console.log(productLoop(10,10));
console.log(productRecursive(3,4));
console.log(productRecursive(120,10));

function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "Error. n must be 0 or greater."
    }

    return productRecursive(n,factorial(n - 1));
}
// Test cases
console.log(factorial(4)); // 4 * 3 * 2 * 1 ---> 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 ---> 120
