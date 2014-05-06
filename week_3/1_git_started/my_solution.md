## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add

`$ git add _file_name_` takes a new file that's in the working directory and adds it to the staging area. It also allows git to begin tracking that file. 

#### branch

A branch is a copy of your code in your repo. You can have many branches. The master branch is the main one. 

`$ git branch _new_branch_name_` allows to you create a branch that you can make separate commits to. 

`$ git branch` prints out the list of local branches and which one you're on. 

`$ git -d _branch_name_` deletes a branch if it has been merged. Use `git -D _branch_name_` to force a delete if it hasn't been merged. 

#### checkout

`$ git checkout _branch_` allows you to switch to the named branch if it is a branch in your local repo. `$ git checkout _commitHASH_ _file_` switches your working directory back to a file for a particular named commit. `$ git checkout _commitHASH_` switches you back to that named commit. 



#### clone

`$ git clone _remote_` creates a local repository by cloning a remote repository. It also creates a remote branch called "origin" for the cloned repo and creates remote-tracking branches for all the branches in the repo. You only need to clone a remote repo once. From then on you use `$ git pull _remote_`!

#### commit

`$ git commit -m "Message"` commits a file from the staging area to the local git repository. You can commit straight from the working directory, bypassing add by using the add `-a` option `$ git commit -am "Message"`. 

#### fetch

`$ git fetch` pulls changes from a remote repository to the local git repository. You can further add them to the working directory via a merge command or you can perform both with a pull command. To synch changes from a master remote repository to your fork follow these steps : Fetch, Merge, Add, Commit, Push. 

#### log

`$ git log` reports a log of your progress, including the HASHes for your commits. 

#### merge

`$ git merge _branchToMerge_` allows you to merge the named branch with the branch you are currently on. In other words, it combines them and the changes each has. Merge conflicts can arise though when changes are made to files at the same time. (merging two changes files!)

#### pull

`$ git pull _remote_` performs a fetch but then also merges it right into the working directory. It checks out the most recent branch from the remote repository and makes it your local master branch. 

#### push

`$ git push _remote_name_ _branch_name_` pushes from the local branch to the remote branch. Typically it looks like this `git push origin master`. You can save he parameters for future use using the `-u` option. In other words, `$ git push -u origin master` allows for `$ git push` to do the same thing in later uses. 

#### reset

`$ git reset _name_` removes the named file from the staging area. `$ git reset` resets the staging area to match the most recent commit. Only use this to undo local changes, not anything that hs been pushed to a public repository. `$ git reset _commitHASH_` is a way to undo a commit. It is dangerous because it is permanent. 

#### rm

`$ git rm _name_` removes the named file from the disk. It also stages that removal. To remove all subfiles and folders of a named folder you have you use the recursive option `-r` `$ git rm -r _folder_`. Once removed you still have to commit the removals! 

Files not deleted with rm are still on the working tree! git rm them or use the -a option `-a`
on git commit. `$ git commit -am "Deletions w/ auto removal feature"`

#### status

`$ git status` tells you the state of the working directory and staging area. This reveals which changes have been staged and which haven't. It also shows you what is being tracked. This does not reveal anything about stuff that has been committed. This is the distinction between git status and git log. 

## Release 4: Git Workflow

- Push files to a remote repository

	1. Create Link between local and remote repositories (Done only once):

	`$ git remote add origin _url of repository(//site/username/name_of_repo.git)_`

	2. Push your files 
	
	`$ git push origin master OR git push -u origin master`

- Fetch changes 

	1. First, add a remote that points to the upstream repository (Done only once): 

	`$ git remote add upstream _url of main remote repo(https://github.com/username_to_fetch_from/repo_name)_`

	2. Fetch the upstream: 

	`$ git fetch upstream`

	3. Merge the upstream with your master branch which you should be on:

	`$ git merge upstream`


- Commit locally
	1. Add files to the staging area: 
	
	`$ git add _file_name_`

	2. Commit with a message: 
	
	`$ git commit -m "Commit Message"`

## Release 5: Reflection

I had been putting off learning git more in depthly, so I'm glad this challenge was here. I had a vague idea about the basics, and going through the resources helped put the syntax to the concepts. I think git is one of those things that is hard to get working at first because it's not something you've been doing, but once you get into the groove of using it, it because much easier because you pretty much use the basics over and over. 

The strategy that worked for me was really thinking about git conceptually and getting used to what it does rather than devoting a ton of time to the syntax. Then I moved into the syntax when I knew I wouldn't forget the concepts. This made the syntax a lot easier to pick up, and now if I for get a command or two as was common at first, I know where to look and still have an idea of what needs to get done. 

I really didn't have a lot of questions about git because it seems straightfoward. Code School's Try Git and the Atlassian Git Tutorial were my main resources. I wrote down all the commands as I came to then so I have a paper cheat sheet that I've been going to as well. I still have some questions about the options though, which I'll just have to learn as I go along. 

In terms of concepts, I think I had trouble most with working around a remote repository and dealing with a version you forked. I guess the solution for me was realizing you have to go to remote to local to remote forked. Maybe it's not the best way, but it's a safe one. I also am having trouble with merge conflicts. I did something wrong early on and it keeps popping up, saying I have several copies of the same merge message. Don't know how to solve it, but it doesn't seem to be affecting anything important! 

I got thrown into VIM once too, so I figured out how to type myself out. I guess that's a trick. Also, in dealing with homebrew I learned a lot about the $PATH and where my version of git is located on the $PATH. This led me to deal with text editing in the terminal. 

I am fairly confident with the learning competencies, not entirely confident with git as a whole. So long as I stick with the basics, I'm hoping everything goes smoothly, but odd features and results have popped up occasionally in my terminal and a lot of other people seem to be having odd problems. 

I enjoyed it all and found nothing tedious. Terminal is tedious and you have to get used to it, I guess. Rote practice is a necessary evil. 






