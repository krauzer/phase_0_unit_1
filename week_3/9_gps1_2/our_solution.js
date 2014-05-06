// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Dylan Krause
//  2.Arik Gadye


// 1. "YOU SIGNED... WHO?!"

//We originally did write out everything as oject literals, but we deleted them in favor of instances of a  
//a client class. I'll redo the object literals in comments for sake of logging everyhing though. 

// jose = {name:"Jose", age:2, quote:"Wazzup"}
// john = {name:"John", age:30, quote:"Hi I'm John"}

function Client(name, age, quote, genres){
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function(){
      alert(this.quote);
  }
  this.genres = genres;
}

var jose = new Client("Jose", 2, "Wazzup", ["Comedy", "Sci-Fi"]);
var john = new Client("John", 30, "Hi I'm John.", ["Horror", "Drama"]);


// 2. "Here they Come!"

//same for these actors. We rewrote the objects as instances of Client Class

var adam = new Client("Adam Sandler", 47, "That's your home. Are you too good for your home?", ["Comedy"]);
var kristen = new Client("Kristen Bell", 33, "Do you wanna build a snoman?",["Comedy","Animated"]);
var jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!", ["Comedy","Drama"]);



// 3. "TIME IS MONEY!"



//Client Class Creation repeated to fit the instructions.   

function Client(name, age, quote, genres){
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function(){
      alert(this.quote);
  }
  this.genres = genres;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"
// A function that prints 
var printClient = function(client){
  alert("Name: " + client.name + " Age: " + client.age + " Quote: " + client.quote);
}



// ** BONUS **

var clientList = [jose, john, adam, kristen, jim];

//Write a function that runs through a list of clients and prints out genres and the 
//actors associated with them 

function sortByGenre(clientList){
    // if this genre exists in the genrelist
    // if it exists, then take name of current client and add to genrelist
    // if not, add genre to list, then add name to that genrelist
    //create an empty object to hold genres as properties and a list of actors as an array
  var genreList = {}; 
  // Loop through the client list
  for (var i = 0; i < clientList.length; i++){
  	// if the client has a genres property continue 
    if (clientList[i].genres){
      for (genre in clientList[i].genres) {
        if (genre.indexOf(genreList) != -1) { // if there is a genre already
        	//push the client into the genreList object
          genreList[genre].push(clientList[i].name);
        }
        else {
        	//if not, add genre and clent 
          genreList[genre] = [clientList[i].name]
        }
      }
    }  
  }
  //We have leftover the genreList object. Prints out genre and actors in genre
  var output = '';
  for (var genre in genreList) {
  output += genre + ': ' + genreList[genre]+'; ';
	}
	alert(output);
	return 
}
  
 

//  Your Reflection:

// This gps was a lot more engaging then my last one. We finished the main material with half an hour
// to spare so we just worked on outr genre function the rest of the time. The directions were 
// a little lacking, so I don't know if I learned much about JS objects and creating classes that 
// I didn't already know. The Bonus was the best part, and our Instructor really motivated us to do it. 

// The strategy of talking things out helped the most on this challenge. I realized once we got to that more complex genre function 
// that we weren't going to figure it out as a pair unless we really outlined it. So Pseudocode was crucial 
// I think this is the biggest take away I had about the GPS session: In the absence of vocal communication or with 
// confusing conversation Pseudocode can clear things up. Write it out. 

// We faced the problem of getting the genre function to work. It's harder to think this out as a pair 
// because you can't sit there and look at the code and just think and take your time. 

//  On the flip side, my partner was really into the code and so was I. Even our GPS instructor was into it, staying an 
//  extra 15 minutes to work with us. That really motivated me. It made me enjoy the challenge. 

//  But The biggest problem we faced beyond outlining our thoughts, I think was wrapping our head around syntax. I had an idea of how things
//  should look, but, honestly, I was confusing it with Python, and I felt like I didn't have time to research 
//  everything that needed to be even though we did research a number of things via google. 


//  In terms of technical stuff, I think we just got through and were familiar with the basics, 
//  since Javascript is new and we paired on day one.
// Ultimately what was important was getting a good pairing rythm going. 




