console.log("Welcome to Code Chrysalis Foundations!");

function whatDataType(data) {
    if(typeof data == "undefined") {
        console.log("This is not a string, boolean, or number.");
    } else {
        console.log("This is a " + typeof data);
  }
}
  
  // Test cases:
  console.log(whatDataType("Hello!")); // should print 'This is a string'
  console.log(whatDataType(true)); // should print 'This is a boolean'
  console.log(whatDataType(42)); // should print 'This is a number'
  console.log(whatDataType(undefined)); // should print 'This is not a string, boolean, or number'
  console.log(whatDataType(null)); // should print 'This is not a string, boolean, or number'
  