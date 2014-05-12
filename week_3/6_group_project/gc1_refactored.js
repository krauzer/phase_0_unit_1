oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]

//USER STORY
//As a user, I want to find the total sum of a variety of numbers (i.e. test scores). I want sum to add all the individual //test scores and give me the total sum.

// Create variable "sum" that represents sum of numbers within a given range (a,b).
//Refactored sum
var sum = function(range) {
  var total = 0
  for  (var i=0; i<range.length; i++) {
    total += range[i]
  }
    return total;
  
}


//Refactored Tests
sum(oddLengthArray);

//Refactored Tests
sum(evenLengthArray);

//User Story
//As a user, I want to find the average of a set of numbers. So, if I had 3 test scores (100, 25, 61), mean would return the number 62, because 62 is the average score of the three tests.

// set variable mean = sum(range)/(b-a). 
//Refactored same as original 
var mean= function(range) {
  return sum(range)/range.length
}; 

//Refactored Test
mean(oddLengthArray);


//Refactored Test
mean(evenLengthArray);


//User Story
//As a user, I want median to find the middle number of a set of numbers. So if I had numbers 1, 2, 3, 4, and 5, median //would return the number 3. However, if the list comprised of 1, 2, 3, 4, 5, and 6, median would return 3.5 because //median would take the two middle numbers, add them together and divide the sum by 2. Also, median will need to make sure //that the set of numbers are sorted from least to greatest or vice versa.

// Set variable median(range). Sort range and determine median depending on whether range length is even or odd.
//Refactored code
var median= function(range){
  var sortedRange=range.sort();
  var halfLength=Math.floor(range.length/2);
   if (range.length % 2 === 0) {
      return ((sortedRange[halfLength-1]+sortedRange[halfLength])/2);
    }
  else {
    return sortedRange[halfLength];
  }
}

//Refactored Test
median(oddLengthArray);


//Refactored Test
median(evenLengthArray);




//Reflection

//  I paired up with David Sin on this one because we mixed up the directions and his part had already 
//  been completed for him. I think the pairing turned out well because there really are only three 
//  functions and we weren't actually sure what constituted good refactoring, so we were able to talk it out rather 
//  than just guess. The project as a whole was good, and I can see the usefulness is assigning each part to a different person.
//  
// I tested the code myself since we had to refactor it and it passed. What I learned most was about
// user stories (i think they should be called something else ) and the process of shifting different parts 
// of work to others. I'm also still a little iffy about refactoring, specifically refactoring code that looks good and
// code that techinically works but isn't conventional. 

//Again, the biggest problem I had that this challenge addressed was figuring out good javaScript conventions and whether 
// they should be part of refactoring. Readability can be subjective. We talked to code out itself and didn't run into any problems. 

//Overall, it was fun to work on especially as a pair. 