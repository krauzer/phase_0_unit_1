// I worked [by myself] on this challenge

// Your mission description:
// The King is dead! The only problem...you helped in the conspiracy to kill him. Your mission 
// is to make sure nobody knows about the ogre assassin that you let in. Examine the King's chamber
// and remove all clues! 

// Pseudocode
// Thalin should be able to do the following things: move to a position, examine an object for fingerprints and hardness, hide, 
//  say something, destroy evidence, store object in his sack, and murder any intruders. 

// The room should consist of a bed, some objects to examine, and places to hide. The objects should 
// a set of properties, most importantly a fingerprints property, which takes a number, and a hardness property,
// which determines if it can be destroyed. 
// 
// Thalin's plan is to find the three most likely murder weapons and check each for finger prints. 
// If there are four finger prints (orgres only have four fingers), he must either destroy the object
// or put it in his sack. If its hardness is either stone or diamond, it is indestructable and must go in the sack, 
// otherwise it is best to destroy!. He must do all of this, making the fewest steps, so not as to alert the knight on duty. 
// If he does investigate, he must kill them and he loses his dignity property.   

//Thalin move to positon of club 
//Thalin check club 
//Thalin move to position of spike 
//Thalin check spike 
//Thalin move to position of knife
//Thalin check knife 
//Thalin put knife in sack 
//Knight questions 
//Knight investigates 
//Thalin say hi to knight 
//Thalin stabs knight 
//Thalin escapes!

// Initial Code

//Objects: 
var thalin = {
	strength: 100,
	dignity: true, 
	health: 20,
	id: "Thalin", 
	pos: {x:0, y:0},

}

var diamondKnife = {
	fingerPrints: 4, 
	hardness: 'diamond', 
	price: 1000, 
	sentimentality: true,
	pos: {x:100, y:7},
}

var club = {
	fingerPrints: 5,
	hardness: 'wood',
	price: 10,
	sentimentality: false, 
	pos: {x:50, y:50},
}

var spike = {
	fingerPrints: 0,
	hardness: 'stone', 
	price: 100, 
	sentimentality: false, 
	pos: {x:20, y:100},
}

// Develop Best Strategy for examining objects
Thalin.plan () {
	this.moveXY(50,50); 
	this.check(club); 
	this.moveXY(20,100);
	this.check(spike);  
	this.move(100,7);
	this.checkPrints(diamondKnife); 
	this.checkHardness(diamondKnife);
	this.store(diamondKnife); 
	this.escapes(); 
	this.speak("Hello, my friend!"); 
	this.attack(); 
	this.escapes(); 

}





// Refactored Code: 
// Changed Objects to Classes with methods; Built better strategy; Built knight 

function Backstabber(name, xpos, ypos, strength, health) {
	this.strength = strength; 
	this.name = name; 
	this.x = xpos; 
	this.y = ypos;
	this.honorable = true;
	this.health = health; 
	this.sack = []; 

	this.getPosition = function() {
		return {x:this.x, y:this.y};
		}

	this.getStrength = function() {
		return this.strength; 
		} 

	this.getHealth = function() {
		return this.health; 
		}

	this.moveXY = function(x,y) {
				//Move to x,y square by square to replicate walking
				if (x > this.x){
					while (x > this.x) {
						this.x += 1; 
					}
				}
				while (x < this.x){
					this.x -= 1;
				}
				if (y > this.y){
					while (y > this.y){
						this.y +=1;
					}
				}
				while (y<this.y){
					this.y -=1;
				}
		}

	this.checkPrints = function(item) {
			//Check for ogre prints
			if (item.fingerprints === 4){
				return true;
			}
			return false;
		}

	this.checkHardness = function(item) {
			//Check to see if too hard to break
			if (item.hardness === "stone" || item.hardness == "diamond"){
				return true;
			}
			return false; 

		}

	this.destroy = function(item) {
			//Destroy Item!
			if (this.checkHardness(item)){
			item.name = "DESTROYED"; 
			console.log("Evidence Destroyed!");
			}
			else {
				console.log(item.name+ " cannot be destroyed!");
			}
		}

	this.speak = function(phrase) {
				console.log(phrase);
			}

	this.store = function(item) {
		//Push item in your array sack
		this.sack.push(item);
	} 

	this.escapes = function() {
		//Move to origin 
		this.moveXY(0,0); 
	}
	this.attack = function(person) {
		//swing sword with strength 
		person.loseHealth(this.strength); 
	}

	this.loseHealth = function(loss){
			this.health -= loss;  
		}

	this.plan = function() {
		//Plan of attack
		this.moveXY(50,50); 
		this.check(club); 
		this.moveXY(20,100);
		this.check(spike);  
		this.move(100,7);
		this.checkPrints(knife); 
		this.destroy(knife);
		this.store(knife); 
	}
}

function weapon(name, fingerprints, hardness, price, sentimentality, xpos, ypos) {
	this.name = name; 
	this.fingerPrints = fingerprints; 
	this.hardness = hardness; 
	this.price = price; 
	this.sentimentality = sentimentality; 
	this.pos = {x:xpos, y:ypos}; 

}

function knight(name, posx, posy, strength, health) {
	this.strength = strength; 
	this.name = name; 
	this.x = xpos; 
	this.y = ypos;
	this.honorable = true;
	this.health = health; 


	this.moveXY = function(x,y) {
				//Move to x,y square by square to replicate walking
				if (x > this.x){
					while (x > this.x) {
						this.x += 1; 
					}
				}
				while (x < this.x){
					this.x -= 1;
				}
				if (y > this.y){
					while (y > this.y){
						this.y +=1;
					}
				}
				while (y<this.y){
					this.y -=1;
				}
		}

	this.attack = function(person) {
			person.loseHealth(this.strength); 
		}

	this.investigate = function(person){
			//Check the honor of perp
			if (person.honorable) {
				console.log(person.name+", pleasure to see you!");
			}
			else {
				console.log(person.name+", you backstabber!");
				this.attack(person); 
			}
			
		}

	this.loseHealth = function(loss){
			this.health -= loss;  
		}

	this.questions = function(person){
		this.moveXY(person.x, person.y);
		}
	
}

var thalin = Backstabber("Thalin", 0, 0, 100, 100); 
var carl = knight("Carl", 0, 0, 110, 100); 
var knife = weapon("diamondKnife", 4, "diamond", 1000, true, 100, 7); 
var spike = weapon("spike", 0, 'stone', 100, false, 20, 100); 
var club = weapon('club', 5, 'wood', 10, false, 50, 50); 

thalin.plan();
carl.questions(thalin);
car.investigate(thalin);
thalin.speak("Hello friend!"); 
thalin.attack(carl);
thalin.escapes; 




// Reflection
// 
// At first, I thought this exercise was a little tedious. It was different and yes there are 
//  javaScript concepts to be learned, but I thought the amount of time you put into to doesn't really 
//  match what you get out of it in terms of learning. My idea was that iff we're only going to have a week to work on 
// 	javaScript I think time would have been more productive with something else. All of the tasks seem heavy 
// on objects when there is a lot of other things in JS.  

// 	But when I started working on it, I saw that once you get past the initial planning out, you can really work almost entirely with
// Classes, methods, objects, and functions. You can put in as much as you want and make the functions as complex 
// as you want. This good for building conceptual ideas about objects and functions and putting them to work.
// It is also a break from more document-oriented stuff and can be fun if you have the right mindset.
// My idea wasn't as complex as it could have been, but I had written a lot of it by the time I realized this. 
// I might add to it at the end of the week if I have time. 
	
// My main problem was dealing with the general nature of task. I feel like DBC could have provided a little more guidance. 
// Maybe a better outline of what is possible.
// I don't know how complex the code combat games can get and I didn't know exactly how much to put into building specific elements and laying out a set plan. 
// Also I don't have the capabilities to design a specific layout in html. The optional task seems like a huge leap 
// in terms of what the rest of the challenge requires you to know. 
// I just constructed the necessary objects, then realized I have to do classes with methods, 
// and then created a linear strategy that a player would have to follow 

//In the end, once I figured it all, it was much more logical and I understood everything, but getting there was tough.
//I also had to keep adding new stuff to allow the concepts to work. I am probably missing some things.  

//Some things that can be done: 
// 1. Better illustrate movement by move(X,Y). Obviously he has to move step by step, but there is probably a better way 
// 	to illustrate this using some algorithm. Right not I have him moving strictly on the x-axis and then on the y. Not efficient. 
// 2. Impliment some way for characters to interact better
// 3. Impliment a way for design an optimal strategy in regard to deciding which items to look at first. 
// 4. Use subclasses instead of repeating code

// ANYONE READING THIS FEEL FREE TO OFFER SUGGESTIONS 

