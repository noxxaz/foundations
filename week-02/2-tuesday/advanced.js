console.log("This is some advanced shiznit!");

function guessMyNumber(n) {
    if (n > 5) {
        return "Please try a number between 0 and 5.";
    } else if (n === randomNumber(5)) {
        return "You guessed my number!";
    }
    return "Nope! Wrong number!";
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

function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
}