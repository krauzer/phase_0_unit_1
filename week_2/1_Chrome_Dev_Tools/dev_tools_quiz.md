#### Include an inline screenshot of your codeschool's points from the profile page:

![Code School Image](http://i.imgur.com/xx7780G.png)

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS: 

    -->The Elements and Source tabs support editing of HTML and CSS. They do this by allowing you to alter dynamically and save the contents of the html and css shown in the browser while reflecting the the changes without needing to reload. 

  * Javascript Debugging

    --> The Console tab allows for debugging. It logs assertions, and makes them easy to locate, understand, and work around. You can also use it to for logging print statements the same way you would while debugging any other piece of code. Once the assertion is understood, you can make the necessary changes to the JS via the Sources tab. 

  * Performance Optimization 

    --> The Networks tab allows you to work on Performance Optimization. For content that gets loaded, it logs the size, type, status, method, and time it took to load. From this tab, you can better understand how a page loads, and perform the necessary optimizations via the Elements or Source tabs. 



* What's the quick key for your OS to spawn the Dev Tools inspector?

-->For Mac, it's (option/command/i)

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

-->Backgroung Color is: #0b0f11

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they disappear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

![Screencap of my Postmachina alterations](http://i.imgur.com/c8leqtQ.png)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

-->The text is actually part of a .gif that is embedded in the backround. You can't alter it because it is a static, premade image. 

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

  --> ![Largest Image](http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png)

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  --> You would find this through dev tools, using the network tab to find all of the loaded resources. You can either sort them by size or sort through the images. 

  Url: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

  Size: 316Kb

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

-->Optimizing the images will reduce their size by 159.5KB (11%)

