console.log("Homework");

// Review ----------------------

// Declare a function fullName that takes two parameters: firstName and lastName. 
// This function should return the lastName and firstName concatenated together 
// with a space between them.

// Test case
console.log(fullName("Ken", "Watanabe")); // => "Ken Watanabe"

function fullName(givenName, familyName) {
    return givenName + " " + familyName;
}


// Using recursion, declare a function called count that takes two numbers: start and end.
// When invoked, it should print out every number between start and end, inclusive.

console.log(count(2, 5));
// => 2
// => 3
// => 4
// => 5

function count(start, end) {
    if(end > start) {
        console.log(count(start, end - 1))
    }
    return end;
}






// Basics -----------------------
