// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
//INIT variable, adam, as an empty object 


2. Give adam a name property with the value "Adam".
// ASSIGN adam a property called name with the value of "Adam"

3. Add a spouse property to terah and assign it the value of adam.
// ASSIGN terah a property called spouse with the value of adam. 

4. Change the value of the terah weight property to 125.
// REASSIGN terah's property, weight, the value of 125. 

5. Remove the eyeColor property from terah.
// DELETE the property, eyeColor, from terah 

6. Add a spouse property to adam and assign it the value of terah.
// ASSIGN adam a property called spouse with the value of terah. 

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
// ASSIGN terah a property, children, with the value of an empty object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
// ASSIGN the children property of terah, a property, carson
// FOR this property, carson, assign it an object with ONE property, name, with the value of "Carson"


9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
// ASSIGN the children property of terah, a property, carter
// FOR this property, carter, assign it an object with ONE property, name, with the value of "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
// ASSIGN the children property of terah, a property, colton 
// FOR this property, colton, assign it an object with ONE property, name, with the value of "Colton"

11. Add a children property to adam and assign it the value of terah children.
//ASSIGN adam a property, children, with the of terah.children. 

*/

// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;  
delete terah.eyeColor; 
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name:"Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children; 





// __________________________________________
// Reflection: Use the reflection guidelines

// At the beginning, this challenge seemed a little odd to me. I couldn't figure out why it had this 
// particular structure, where you write the pseudocode, write the code, and then test it when it seemed
// learning from the testing was the important part. 

// But once finished, I realized it had two main takeaways:
// 1. Pseudocode is important and this was a good way to practice writing it. 
// 2. Test-Driven Development works well when you're testing a finished product because you have everything in place.
// Same logic applies for print statements.  

// My strategy was simple. Move step-by-step. I think this solidified good form. I didn't really have any 
// questions. I had to look up the delete operator in my O'Reilly's Javascript book, and I did learn about 
// circular references when the code ran successfully. 

// I'm having trouble with good pseudocode form. The linked resource had pseudocode that seemed harder to 
// understand than a simple outline, but I guess there needs to be uniformity. I'm just going to create my own
// style and stick with it. 

//This also helped solidify the idea of test driven development. In many ways, it is similar to print statements, but 
// it's better to get those asserts in, which give more control. 

// I enjoyed this challenge because it utilized node from the terminal, and it wasn't tedious. It probably could have 
// been more involved in my opinion. 

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)