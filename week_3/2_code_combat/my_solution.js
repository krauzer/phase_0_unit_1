// I worked on this challenge [with: David Sin]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

//Mission: Rescue Mission

// move down 2x
// move right 2x
// move up 2x
// move right 2x 
// move down 
// attack enemy 

this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp(); 
this.moveRight(); 
this.moveRight(); 
this.moveDown();
this.attackNearbyEnemy(); 
 
 //Mission: Grab the Mushroom 

 // move up
 // move right 
 // move left 
 // move attack enemy

this.moveUp();
this.moveRight(); 
this.moveLeft(); 
this.moveUp();
this.attackNearbyEnemy();

 //Mission: Drink Me

// attack enemy one 
// move right 
// move down and get potion 
// move back up 
// move right 
// attack enemy two

this.attackNearbyEnemy();
this.moveRight(); 
this.moveDown(); 
this.moveUp(); 
this.moveRight(); 
this.attackNearbyEnemy(); 

 //Mission: Taunt the Guards

// move right
// free Phoebe
// move right 
// taunt the enemy 
// move left x2
// order a kill shot 

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// move right 
// get Phoebe to follow you 
// move right x2
// move up 
// move right 
// lure the enemy away from their position 
// move down 
// move right 
// move up 
// move right and escape 

this.moveRight();
this.say("Follow me.");
this.moveRight(); 
this.moveRight(); 
this.moveUp(); 
this.moveRight();  
this.say("Hey there!");
this.moveDown(); 
this.moveRight(); 
this.moveUp(); 
this.moveRight(); 

 //Mission: It's a Trap

// move down 2x
// taunt the bad guy
// move up 2x and allow for the trap


this.moveDown(); 
this.moveDown(); 
this.say("Get over here!");
this.moveUp(); 
this.moveUp(); 

 //Mission: Break The Prison 

//The code for this one was buggy!
//Check to see what prisoner's name is
//Return false if an ogre, true otherwise 

function isFriend(name) {
if (name === "William")
    return true;
if (name === "Krogg"|| name === "Brack" || name === "Gort") 
    return false;
if (name === "MARCUS")
    return false; 
return true;
}
 //Mission: Taunt 

//taunt ogre four times 

this.say("Hello friend"); 
this.say("Come over here for a chat!"); 
this.say("Fine day out isn't it?"); 
this.say("Do you have a union?");

 //Mission: Cowardly Taunt 

//move 3x to a safe spot 

 this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");

// move to a position where you can attract the enemy
this.moveXY(52,30);

// taunt them 

this.say("hello"); 

// move back to the safe spot

this.moveXY(70,10);



 //Mission Commanding Followers 

//move 3x to find your troops
//introduce yourself 

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// ask them to follow you
// move to a safe position near the battle field 

this.say("follow me!");
this.moveXY(80,38); 

// order an attack
// move to a observational position 
this.say("attack at will!"); 
this.moveXY(78,58);

 //Mission: Mobile Artillery 

 // move to shooting position 1
 // attack small ogres

 this.moveXY(30, 26);  
this.attackXY(46, 5);  

// move to shooting position 2
// attack small ogres and damage big ogre 
// move to defensive postion
// attack and kill big ogre 

this.moveXY(40,42);
this.attackXY(50,64);
this.moveXY(24,38);
this.attackXY(35,50);

// move to shooting position 3
// attack ogres
// attack ogres

this.moveXY(51,56);
this.attackXY(68,52);
this.attackXY(63,56);
 
 
 
 
 
 
// Reflection:
// Write your reflection here.

// What is this referring to? Think programming-wise rather than in the terms of the game.

// this is referring to the object that is being manipulated. In the game there is probably a 
// character class and each instances of that class, which are objects. 

// What does the () do in JavaScript?

// () calls a method or a function when it is appended to a function name. Without it, you are just naming the function. It can accept arguments 
// if it was defined with parameters. You can use it to make multiple calls on a function if there is 
// an uncalled function within a function. E.g. function()()

// What is the point of the semicolons?

// The point of semicolons is to end a statement. A parser will read a JS statement until it reaches a
// semicolon. It is a signifier what is in a statement. 



// What parts of your strategy worked? What problems did you face?

     // I didn't really have a strategy for code combat beyond playing the game. I thought the 
     // the Javascript was basic enough not to require any coding strategy. 

// What questions did you have while coding? What resources did you find to help you answer them?

     // No questions for this one. I have practiced with javascript before so this all seemed very basic. 

// What concepts are you having trouble with, or did you just figure something out? If so, what?

     // I only had trouble with one mission, and it was because I couldn't figure out how to work the different 
	// menus. Everything else seemed self-explanatory. 

 // Did you learn any new skills or tricks?

	// Maybe how to develop a game using basic Javascript conceptually. I think this will come in handy for development
	// later. 

// How confident are you with each of the Learning Competencies?

	// Very confident. 

// Which parts of the challenge did you enjoy?

	// I enjoyed playing the game and bombing ogres. 

// Which parts of the challenge did you find tedious?

	// None really. 



















