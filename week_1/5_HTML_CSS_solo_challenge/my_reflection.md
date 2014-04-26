## 5. [HTML/CSS Solo Challenge](5_HTML_CSS_solo_challenge/readme.md) Reflection

* What questions did you ask during this challnge? What resources did you find to help you answer them?  
* What concepts are you having trouble with, or did you just figure something out? If so, what?  
* Did you learn any new skills or tricks?
* How confident are you with each of the Learning Competencies for this challenge? 
* Which parts of the challenge did you enjoy?
* Which parts of the challenge did you find tedious?


A question I've had is about automatic sizing. I'm guessing elements are sized based on their content unless specified otherwise. This illustrates the importance of defining heights and widths on elements that you want to be of a specific size. 

The other questions that arose during this challenge were about right to space. Which elements had the right away to a specific area? I found out this depends not just on one attribute, but several like display and position. This is where clear came in handy. It's an attribute I had never used before, and it was useful when it came to placing the footer. 

One thing I had trouble with was absolute positioning multiple captions for multiple images as spans within the sidebar using the same class. They kept mysteriously migrating to the same area and scrunching up over each other. I realized that when I changed the "top" value, it overwrote their different position values, and distanced them all the same exact value from the parent div, so they wound up in the same spot. I worked around this by increasing the top-margin so that it pushed all three spans down the same length. 

 I don't know if positioning this way (lumping multiple elements in the same class) is good form. I expect it isn't, but I'm worried with the bulk of all the declarations. It was an effort to keep it cleaner and mantain a DRY attitude. I've noticed a lot of websites can do a lot with keeping their css as clean and unrepetative as possible. I've learned that this keeps things from "breaking" easily as well. Refining and simplifying is a goal I have for later projects. 

I found defining all the basic css attributes a bit tedious, but I know the repetition of these tasks help solidify css knowledge. I enjoyed planning the layout. 

I was fairly confident with each the Learning Competencies. The details of positioning are a bit hard to get a grasp on, but their is a logic behind it all, and practice reveals this logic.  

I found a couple of resources. http://cssfontstack.com/ has a list of good web safe fonts. http://pxtoem.com/ helped with converting pixels to em. Quirksmode came through again, this time with info about the display attribute. (http://quirksmode.org/css/css2/display.html)
