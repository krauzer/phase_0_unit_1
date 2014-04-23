## 1. [Git and Github](1_get_started/readme.md) Reflection

* What struggles did you have setting up git and GitHub? What did you learn in the process?
* Write an explanation of and compare git and GitHub to a non-technical audience. 
* Describe what version control is and how GitHub helps with it.
* Why do developers use version control (git)? Does that make sense to you? Why or why not?
* What doesn't make sense? What does?

Git and Github are among the more frustrating things I’ve encountered so far during my foray into programming. I remember when I first tried to learn about git, I began reading the manual only to give up a quarter of the way through after realizing I wouldn’t retain the information.  

I think the problems were:  

  1.	Git operates through the command line 
  2.	There’s not much in the way of using the graphical user interface to at least see what is happening.  
  3.	Practice requires a lot of building, saving, redoing, etc, but relative to actual coding, such practice comes about   infrequently.  

As for installation, I had installed git a while ago, and don’t remember having any trouble. But I tried to update my slightly older version and was unsuccessful. After some Googling, I think the problem might be the version I have is linked to Xcode, a tool for developing on Macs. I couldn’t figure out how to resolve this, but will look into once I’m more familiar with git. I learned googling is probably a good bet for problem solving, but it requires a base level amount of knowledge to be effective with specific problems. 

Git is a form of distributed version control. Version Control, very basically, allows one to control versions of a project. Think of it in a world before computers. Something, say a story, is written by hand, and thus when editing and writing new versions, each version is never deleted unless you physically throw it in the trash. If you save these paper versions of your story, file them, and make them easily accessible for later perusal, you have Version Control. 

With so basic an idea, you can many forms of version control. For instance, say you have a story, and you want to only rewrite one page. You can take out that one specific page from your last version (and insert the new page in the same old version), or you can take out the entire story itself from your folders. 

Distributed version control means that you not only take out the entire story, but you make a copy of it so that you have your own working version right in front of you that you can work with and a copy still in the file that maybe another person might copy while you’re still revising. And then when you do your rewrite, you make a copy of that newer version and put it back into the folder for you or others to use later on. The usefulness here is, say that you change your mind about the path your story is taking. You go back to a much older version and “branch” off into a different version. But say you change you mind again and want to continue with what you were doing originally. You just go back to the original “branch” with its versions and continue where you left off. You can even “merge” the two versions on different branches and create a whole new branch. The branch you are developing on is distinguished by being called the “master” branch. It is the trunk of your project. 

 This makes more sense when talking about a group project. With distributed version control, everyone takes out their own copies of an entire project, and then puts in copies of their own rewritten/reworked versions. The key points of distributed version control are:
  1.	Entire repositories are checked out. Not just snippets of pieces
  2.	There is no “Central” repository. There is usually an owner of a project, but in simple terms, all the copies that   each person has should be the same as the copies each other person has. It is similar to peer-to-peer sharing in this     regard. 

The difference between git and Github is that, remember, only you are working on something when it is on solely your computer. You can create all the versions you want, branch them, go back to old versions, etc, but unless you share this somehow, only you have access. You do all of this ‘locally,’ in other words, on your own computer with git commands through the terminal. 

Github is a remote repository. It’s a ‘hub’ in the social sense. It’s where all the peers congregate and share their git repositories. This is done by “pushing” them there or “pulling” them from there.  It is not a place to work. It is a place to save, give, and take. 

Developers use this technology to keep up with progress. Development is very fluid. Incremental changes can produce big results. In order to pick up and understand even the smallest changes, one must be aware that these changes occur. They must be able to see them without looking too hard. Thus, git is very useful in allowing for those finds to happen, and Github is very useful connecting people and their repositories. 

One thing that I still have trouble comprehending is why it continues to be so technical. To me, it seems like one aspect of development with a higher than normal learning curve. The components and execution of git seems very esoteric for something rooted in such a basic principle. 
