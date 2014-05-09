// I paired [by myself] on this challenge.




// Pseudocode
// Define a variable, secretNumber, as a number
// Change secretNumber to seven
// Define a variable, password, as a string
// Change password to "just open the door"
// Define a variable, allowedIn, as true
// Change allowedIn to false
// Create an array colled members 
// Push "John" into members 
//Add "Mary" as fourth element of members 


// __________________________________________
// Write your code below.
var secretNumber = 16; 
secretNumber = 7; 
var password = "here";
password = "just open the door"; 
var allowedIn = true; 
allowedIn = false; 
var members = []; 
members.push("John"); 
members[3] = "Mary"; 







// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7; 
var password = "just open the door"; 
var allowedIn = false; 
var members = ["John",,,"Mary"]; 




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// This was a pretty straight forward challenge. I guess the difficulty was dealing with the driver code, 
// but I had read through it a couple times before I started and looked up assertions. These seem more like pseudoassertions 

// I didn't have any questions about this material. To be honest, I skipped this challenge and am doing it last. 
// I enjoyed working through the terminal and look forward to keeping up with that. I also want to work with arrays more. 

// I should, and hope to, spend more time looking and working on Driver code. It is probably the msot tedious aspect 
// of all of this, but it isn't really that big of a time drain. 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number){
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

