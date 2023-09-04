---
layout: ../../layouts/BlogPostLayout.astro
title: 10 Git tips we can't live without
date: '2023-09-01T00:00:00+05:30'
image: /images/10-useful-git-tips.png
excerpt: >-
  Opensource.com community members share their favorite Git tips for saving time
  or preventing mistakes.
---
Git tips are a dime a dozen, and it's a good thing because you can never get enough of them. If you use Git every day, then every tip, trick, and shortcut you can find is potentially time and effort saved. I asked Opensource.com community members for their favorite Git hacks. Here they are!







## **add**

The `git add --patch (-p` for short) command kicks off an interactive review of chunks of changes that you can add, split into smaller chunks, or ignore (among other things). That way, you can be sure to limit your changes to a specific commit.



—Kevin Thull



I use `git add -p` to review changes a hunk at a time before they're committed. It lets you check whether you forgot to remove some sketchy ideas, stray comments, or other things you shouldn't commit.



—Ryan Price



## amend

The Git option` --amend` is a helpful alternative to creating several commits and then squashing them into one commit through an interactive rebase. I like that you can continually amend your first commit to add additional changes as necessary.



—Ashley Hardin



## bisect

I know I screwed something up, but I have no idea when. That's what` git-bisect `is for.



In a previous life, I was a backend developer of Drupal and WordPress at an agency outside of Chicago. I had multiple customer sites I was working on at any one time, bouncing back and forth between them like a pinball. Every now and then, someone would find an undocumented feature in my code and, with fuzzy memory because of all the different client sites, `git-bisect `would come in handy with helping me find the culprit.



—Eric Michalsen



## blame

Contrary to the name of the `git blame` command, I don't use it to blame others. It's great when you're taking over repositories that you didn't initialize. You can see when certain changes were completed and hopefully the commit messages behind them too. It's a wonderful troubleshooting tool.



—Miriam Goldman



checkout

I use git checkout - to change to the previous branch. It's handy for switching from a feature branch back to the main development branch and back again.



—Kevin Thull



## diff

I like the git `diff --staged` command to review all of the staged changes before committing.



—Kevin Thull



## status

I seem to touch many files when I work, and `git status` is a lifesaver. Understanding the state of the working directory and staging area with `git status` has helped me learn those core concepts in Git and make sure all my work is committed!



—Ravi Lachhman, Field CTO at Shipa



## squash (rebase -i)

I like to use this command to squash several commits into one. Start by using `git rebase -i HEAD~#` where # is the number of commits to squash. Change `pick` to` squash` on each commit that should become part of the one above it. Then edit your commit messages as you see fit. It keeps the commit history very tidy.



—Ryan Marks



## update-index

Use this with caution!



`$ git update-index --assume-unchanged path/to/file`

It's handy for marking a file unchanged that has local changes or just one of those pesky files that continually swears it's been changed even though you've done absolutely nothing to it.



—Kevin Thull



## worktree

One of my favorites is the `git-worktree` feature, which manages simultaneous checkouts of different branches in a repo without making a wholesale copy of the files.



Here's an example:

`$ git worktree add ../feature-branch feature-branch`
