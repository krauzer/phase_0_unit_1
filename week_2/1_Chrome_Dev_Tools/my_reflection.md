# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?

	--> The Document Object Model is how html is stored and, and it is what allows any parsing language to render html in a browers. It also can be used with XML and allow for DataBase storage. It places text and other information like attributes within nodes, these nodes within element nodes, and element nodes along a tree so that they can be easily referenced in terms of the parent/child format.

	Mostly everthing about it makes sense to me. It is a very logical structure that allows for parsing. I think it is easier to comprehend when consider XML and its use as a Database. I believe the main problem is the bulk of its tags. If I recall correctly, this is one of the reasons XML isn't terribly popular as a database format. 


* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

	-->A Wordpress site, seemingly basic when rendered, has a lot of planning behind it as revealed with the dev tools. There are a lot of .js files, the CSS file is minimized but massize. Essentially, I believe it's built to handle the bulk of all wordpress sites, and when it comes to individual sites, it just allows for what is wanted. Also, you can tell a lot of it is automatically generated. There are element ids, for example, that are numeric. With my site, basically everything shows up in the rendering and a lot of it isn't built to withstand change. You can tell a wordpress site is made to handle mobile, different browsers, and unexpected changes. 

* Did you find Chrome Web Tools fun, helpful, or a pain to work with?

	--> They are extremely helpful. It reduces the time it takes to work with rendered html by a significant amount. Also, I don't know of any other way to find out some of this information (like load time), so it seems essential. 

* Did you have an "aha" moments or were any concepts solidified?

	--> Seeing the loading under the network tab actually helped me understand the parsing better and the idea of document load. Async was also something I hadn't thought about. 

* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

	-->[Quirksmode](http://www.quirksmode.org/dom/intro.html)